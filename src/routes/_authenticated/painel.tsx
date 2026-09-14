import { useCallback, useEffect, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { categorias, type CategoriaId } from "@/data/produtos";
import { enviarFoto, resolverImagem, type ProdutoDB } from "@/lib/produtos-db";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export const Route = createFileRoute("/_authenticated/painel")({
  head: () => ({
    meta: [
      { title: "Painel de produtos — Pratas do Sol" },
      { name: "description", content: "Gerencie nomes, preços, fotos e descrições das joias." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Painel de produtos — Pratas do Sol" },
      { property: "og:description", content: "Gerencie o catálogo da Pratas do Sol." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Painel,
});

type Rascunho = Omit<ProdutoDB, "id"> & { id?: string };

const vazio = (categoria: CategoriaId): Rascunho => ({
  nome: "",
  categoria,
  imagem: "",
  preco: "",
  material: "",
  descricao: "",
  disponibilidade: true,
  destaque: false,
  ordem: 99,
});

function Painel() {
  const navigate = useNavigate();
  const [itens, setItens] = useState<ProdutoDB[]>([]);
  const [previas, setPrevias] = useState<Record<string, string>>({});
  const [editando, setEditando] = useState<Rascunho | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  const carregar = useCallback(async () => {
    setCarregando(true);
    const { data, error } = await supabase
      .from("produtos")
      .select("*")
      .order("categoria")
      .order("ordem");
    if (error) toast.error("Não foi possível carregar os produtos.");
    const lista = (data ?? []) as ProdutoDB[];
    setItens(lista);
    const urls: Record<string, string> = {};
    await Promise.all(
      lista.map(async (p) => {
        urls[p.id] = await resolverImagem(p.imagem);
      }),
    );
    setPrevias(urls);
    setCarregando(false);
  }, []);

  useEffect(() => {
    void carregar();
  }, [carregar]);

  async function salvar() {
    if (!editando) return;
    if (!editando.nome.trim()) {
      toast.error("Informe o nome da joia.");
      return;
    }
    setSalvando(true);
    const payload = {
      nome: editando.nome.trim(),
      categoria: editando.categoria,
      imagem: editando.imagem,
      preco: editando.preco?.trim() || null,
      material: editando.material?.trim() || null,
      descricao: editando.descricao?.trim() || null,
      disponibilidade: editando.disponibilidade,
      destaque: editando.destaque,
      ordem: Number(editando.ordem) || 0,
    };
    const { error } = editando.id
      ? await supabase.from("produtos").update(payload).eq("id", editando.id)
      : await supabase.from("produtos").insert(payload);
    setSalvando(false);
    if (error) {
      toast.error("Não foi possível salvar.");
      return;
    }
    toast.success("Produto salvo.");
    setEditando(null);
    void carregar();
  }

  async function excluir(id: string) {
    if (!window.confirm("Excluir este produto do site?")) return;
    const { error } = await supabase.from("produtos").delete().eq("id", id);
    if (error) {
      toast.error("Não foi possível excluir.");
      return;
    }
    toast.success("Produto excluído.");
    void carregar();
  }

  async function trocarFoto(arquivo: File) {
    if (!editando) return;
    setSalvando(true);
    try {
      const caminho = await enviarFoto(arquivo);
      const url = await resolverImagem(caminho);
      setEditando({ ...editando, imagem: caminho });
      setPrevias((p) => ({ ...p, __nova: url }));
      toast.success("Foto enviada.");
    } catch {
      toast.error("Não foi possível enviar a foto.");
    } finally {
      setSalvando(false);
    }
  }

  async function sair() {
    await supabase.auth.signOut();
    navigate({ to: "/auth", replace: true });
  }

  const previaEdicao =
    editando?.imagem && !editando.imagem.startsWith("/") && !editando.imagem.startsWith("http")
      ? previas["__nova"]
      : editando?.imagem;

  return (
    <main className="min-h-screen bg-offwhite px-5 py-10 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <header className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
          <div>
            <h1 className="font-display text-3xl">Painel de produtos</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Edite nomes, preços, fotos e descrições. As mudanças aparecem no site na hora.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/" className="text-xs tracking-[0.14em] uppercase underline">
              Ver site
            </Link>
            <button
              onClick={sair}
              className="text-xs tracking-[0.14em] text-muted-foreground uppercase hover:text-foreground"
            >
              Sair
            </button>
          </div>
        </header>

        <div className="mt-6 flex justify-end">
          <Button onClick={() => setEditando(vazio("aneis"))}>Novo produto</Button>
        </div>

        {editando && (
          <div className="mt-6 border border-border bg-card p-6">
            <h2 className="font-display text-2xl">
              {editando.id ? "Editar produto" : "Novo produto"}
            </h2>

            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Nome</Label>
                <Input
                  value={editando.nome}
                  onChange={(e) => setEditando({ ...editando, nome: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Preço (ex.: R$ 189,00)</Label>
                <Input
                  value={editando.preco ?? ""}
                  placeholder="Deixe vazio para 'Valor sob consulta'"
                  onChange={(e) => setEditando({ ...editando, preco: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>Categoria</Label>
                <select
                  value={editando.categoria}
                  onChange={(e) => setEditando({ ...editando, categoria: e.target.value })}
                  className="h-10 w-full border border-input bg-background px-3 text-sm"
                >
                  {categorias.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.rotulo}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <Label>Material (opcional)</Label>
                <Input
                  value={editando.material ?? ""}
                  placeholder="Ex.: Prata 925"
                  onChange={(e) => setEditando({ ...editando, material: e.target.value })}
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label>Descrição</Label>
                <Textarea
                  rows={3}
                  value={editando.descricao ?? ""}
                  onChange={(e) => setEditando({ ...editando, descricao: e.target.value })}
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label>Foto</Label>
                <div className="flex flex-wrap items-center gap-4">
                  {previaEdicao && (
                    <img
                      src={previaEdicao}
                      alt="Prévia da foto"
                      className="h-24 w-24 object-cover"
                    />
                  )}
                  <Input
                    type="file"
                    accept="image/*"
                    className="max-w-xs"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) void trocarFoto(f);
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Switch
                  checked={editando.disponibilidade}
                  onCheckedChange={(v) => setEditando({ ...editando, disponibilidade: v })}
                />
                <Label>Disponível</Label>
              </div>
              <div className="flex items-center gap-3">
                <Switch
                  checked={editando.destaque}
                  onCheckedChange={(v) => setEditando({ ...editando, destaque: v })}
                />
                <Label>Destaque na categoria</Label>
              </div>
              <div className="space-y-2">
                <Label>Ordem de exibição</Label>
                <Input
                  type="number"
                  value={editando.ordem}
                  onChange={(e) => setEditando({ ...editando, ordem: Number(e.target.value) })}
                />
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Button onClick={salvar} disabled={salvando}>
                {salvando ? "Salvando..." : "Salvar"}
              </Button>
              <Button variant="outline" onClick={() => setEditando(null)}>
                Cancelar
              </Button>
            </div>
          </div>
        )}

        <div className="mt-8 space-y-3">
          {carregando && <p className="text-sm text-muted-foreground">Carregando...</p>}
          {!carregando &&
            itens.map((p) => (
              <div
                key={p.id}
                className="flex flex-wrap items-center gap-4 border border-border bg-card p-4"
              >
                {previas[p.id] && (
                  <img src={previas[p.id]} alt={p.nome} className="h-16 w-16 object-cover" />
                )}
                <div className="min-w-[12rem] flex-1">
                  <p className="font-display text-lg">{p.nome}</p>
                  <p className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                    {categorias.find((c) => c.id === p.categoria)?.rotulo ?? p.categoria} ·{" "}
                    {p.preco || "Valor sob consulta"}
                    {!p.disponibilidade && " · indisponível"}
                  </p>
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" onClick={() => setEditando(p)}>
                    Editar
                  </Button>
                  <Button variant="ghost" size="sm" onClick={() => excluir(p.id)}>
                    Excluir
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
