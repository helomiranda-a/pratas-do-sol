/**
 * ESTRUTURA CENTRAL DO CATÁLOGO — PRATAS DO SOL
 *
 * Este é o único lugar onde os produtos são definidos.
 * Para manutenção futura basta editar este arquivo:
 *  - alterar `nome`, `preco`, `material`, `descricao` ou `disponibilidade`
 *  - trocar `imagem` (importe um novo asset abaixo e aponte aqui)
 *  - mudar `categoria` move o produto automaticamente para a aba correta
 *
 * Campos opcionais (preco, material, descricao) só aparecem na interface
 * quando preenchidos — nada é inventado.
 *
 * Preparado para evoluir: o tipo `Produto` e a função `produtosPorCategoria`
 * podem ser alimentados por um CMS/banco de dados no futuro, sem alterar a UI.
 */

import imgBraceletesCaixas from "@/assets/pds-15-58-22_1.jpeg.asset.json";
import imgBrincosCartela from "@/assets/pds-15-58-22_2.jpeg.asset.json";
import imgMaoBraceleteAneis from "@/assets/pds-15-58-22_3.jpeg.asset.json";
import imgColarCruz from "@/assets/pds-15-58-22_4.jpeg.asset.json";
import imgAneisMao from "@/assets/pds-15-58-23.jpeg.asset.json";
import imgBrincosCartelas from "@/assets/pds-15-58-23_1.jpeg.asset.json";
import imgPingenteVerde from "@/assets/pds-15-58-23_2.jpeg.asset.json";
import imgBerloques from "@/assets/pds-15-58-23_3.jpeg.asset.json";
import imgPingenteAmarelo from "@/assets/pds-15-58-23_4.jpeg.asset.json";

export const imagens = {
  braceletesCaixas: imgBraceletesCaixas.url,
  brincosCartela: imgBrincosCartela.url,
  maoBraceleteAneis: imgMaoBraceleteAneis.url,
  colarCruz: imgColarCruz.url,
  aneisMao: imgAneisMao.url,
  brincosCartelas: imgBrincosCartelas.url,
  pingenteVerde: imgPingenteVerde.url,
  berloques: imgBerloques.url,
  pingenteAmarelo: imgPingenteAmarelo.url,
};

export type CategoriaId =
  | "aneis"
  | "braceletes"
  | "pingentes"
  | "brincos"
  | "berloques";

export interface Produto {
  id: string;
  nome: string;
  categoria: CategoriaId;
  imagem: string;
  /** Preencher quando o valor for definido. Ex.: "R$ 000,00" */
  preco?: string;
  /** Ex.: "Prata 925" ou "Prata 925 com moissanite" */
  material?: string;
  descricao?: string;
  disponibilidade: boolean;
  /** Destaque editorial: ocupa mais espaço na grade */
  destaque?: boolean;
}

export const categorias: { id: CategoriaId; rotulo: string }[] = [
  { id: "aneis", rotulo: "Anéis" },
  { id: "braceletes", rotulo: "Braceletes" },
  { id: "pingentes", rotulo: "Pingentes" },
  { id: "brincos", rotulo: "Brincos" },
  { id: "berloques", rotulo: "Berloques" },
];

export const produtos: Produto[] = [
  {
    id: "anel-01",
    nome: "Anel solitário",
    categoria: "aneis",
    imagem: imagens.aneisMao,
    descricao: "Aro fino com pedra central em garra.",
    disponibilidade: true,
    destaque: true,
  },
  {
    id: "anel-02",
    nome: "Anel de bolinhas",
    categoria: "aneis",
    imagem: imagens.aneisMao,
    descricao: "Aro liso com detalhe de esferas polidas.",
    disponibilidade: true,
  },
  {
    id: "anel-03",
    nome: "Anel oval cravejado",
    categoria: "aneis",
    imagem: imagens.maoBraceleteAneis,
    descricao: "Pedra oval com halo cravejado.",
    disponibilidade: true,
  },
  {
    id: "anel-04",
    nome: "Anel aparador com pingente",
    categoria: "aneis",
    imagem: imagens.maoBraceleteAneis,
    descricao: "Aro cravejado com pequeno coração pendente.",
    disponibilidade: true,
  },

  {
    id: "bracelete-01",
    nome: "Bracelete liso",
    categoria: "braceletes",
    imagem: imagens.maoBraceleteAneis,
    descricao: "Bracelete rígido de acabamento polido.",
    disponibilidade: true,
    destaque: true,
  },
  {
    id: "bracelete-02",
    nome: "Bracelete de berloques",
    categoria: "braceletes",
    imagem: imagens.braceletesCaixas,
    descricao: "Malha rabo de rato com fecho em coração, montado com berloques.",
    disponibilidade: true,
  },
  {
    id: "bracelete-03",
    nome: "Bracelete com corrente de segurança",
    categoria: "braceletes",
    imagem: imagens.berloques,
    descricao: "Bracelete de berloques com corrente de segurança.",
    disponibilidade: true,
  },

  {
    id: "pingente-01",
    nome: "Pingente gota verde",
    categoria: "pingentes",
    imagem: imagens.pingenteVerde,
    descricao: "Pingente em gota com pedra verde e halo cravejado, em corrente fina.",
    disponibilidade: true,
    destaque: true,
  },
  {
    id: "pingente-02",
    nome: "Pingente gota amarela",
    categoria: "pingentes",
    imagem: imagens.pingenteAmarelo,
    descricao: "Pingente em gota com pedra amarela e halo cravejado, em corrente fina.",
    disponibilidade: true,
  },
  {
    id: "pingente-03",
    nome: "Pingente cruz",
    categoria: "pingentes",
    imagem: imagens.colarCruz,
    descricao: "Cruz lisa em corrente de elos retangulares.",
    disponibilidade: true,
  },

  {
    id: "brinco-01",
    nome: "Brinco ear jacket duplo",
    categoria: "brincos",
    imagem: imagens.brincosCartela,
    descricao: "Ponto de luz com segunda pedra suspensa.",
    disponibilidade: true,
    destaque: true,
  },
  {
    id: "brinco-02",
    nome: "Brinco três pedras verdes",
    categoria: "brincos",
    imagem: imagens.brincosCartelas,
    descricao: "Trilha de três pedras verdes com halo cravejado.",
    disponibilidade: true,
  },
  {
    id: "brinco-03",
    nome: "Brinco três pedras rosa",
    categoria: "brincos",
    imagem: imagens.brincosCartelas,
    descricao: "Trilha de três pedras rosa com halo cravejado.",
    disponibilidade: true,
  },

  {
    id: "berloque-01",
    nome: "Berloques da montagem",
    categoria: "berloques",
    imagem: imagens.berloques,
    descricao: "Berloques avulsos para montar seu bracelete.",
    disponibilidade: true,
    destaque: true,
  },
  {
    id: "berloque-02",
    nome: "Berloque coração",
    categoria: "berloques",
    imagem: imagens.braceletesCaixas,
    descricao: "Berloque em formato de coração.",
    disponibilidade: true,
  },
];

export const produtosPorCategoria = (categoria: CategoriaId): Produto[] =>
  produtos.filter((p) => p.categoria === categoria);

export const CONTATO = {
  whatsappTexto: "+55 (73) 98889-5195",
  whatsappLink: "https://contate.me/5573988895195",
  instagram: "@_pratasdosol",
  instagramLink: "https://www.instagram.com/_pratasdosol/",
  cidade: "Jequié - BA",
  atendimento: "Atendimento exclusivamente presencial com agendamento prévio.",
};
