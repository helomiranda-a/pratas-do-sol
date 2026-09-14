import { supabase } from "@/integrations/supabase/client";
import type { CategoriaId, Produto } from "@/data/produtos";

export interface ProdutoDB {
  id: string;
  nome: string;
  categoria: string;
  imagem: string;
  preco: string | null;
  material: string | null;
  descricao: string | null;
  disponibilidade: boolean;
  destaque: boolean;
  ordem: number;
}

/**
 * A foto pode ser:
 *  - um caminho do site (começa com "/") ou um endereço completo (http...)
 *  - um arquivo enviado pelo painel (caminho dentro do armazenamento)
 */
export async function resolverImagem(valor: string): Promise<string> {
  if (!valor) return "";
  if (valor.startsWith("http") || valor.startsWith("/")) return valor;
  const { data } = await supabase.storage
    .from("produtos")
    .createSignedUrl(valor, 60 * 60 * 24 * 7);
  return data?.signedUrl ?? "";
}

export async function listarProdutos(): Promise<(Produto & { imagemBruta: string })[]> {
  const { data, error } = await supabase
    .from("produtos")
    .select("*")
    .order("categoria", { ascending: true })
    .order("ordem", { ascending: true });

  if (error) throw error;

  const linhas = (data ?? []) as ProdutoDB[];
  return Promise.all(
    linhas.map(async (p) => {
      const item: Produto & { imagemBruta: string } = {
        id: p.id,
        nome: p.nome,
        categoria: p.categoria as CategoriaId,
        imagem: await resolverImagem(p.imagem),
        imagemBruta: p.imagem,
        disponibilidade: p.disponibilidade,
        destaque: p.destaque,
      };
      if (p.preco) item.preco = p.preco;
      if (p.material) item.material = p.material;
      if (p.descricao) item.descricao = p.descricao;
      return item;
    }),
  );
}

export async function enviarFoto(arquivo: File): Promise<string> {
  const ext = arquivo.name.split(".").pop() ?? "jpg";
  const caminho = `${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from("produtos").upload(caminho, arquivo, {
    cacheControl: "3600",
    upsert: false,
  });
  if (error) throw error;
  return caminho;
}
