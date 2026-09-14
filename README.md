# Pratas do Sol Launch

Crie e implemente diretamente no Lovable uma landing page completa, premium, responsiva e comercial para a Pratas do Sol, uma marca de joias de Jequié - BA.

NÃO ENTREGUE APENAS UM PLANO OU WIREFRAME. DESENVOLVA A INTERFACE COMPLETA.

Além do visual, a estrutura técnica do projeto deve ser organizada para facilitar futuras alterações de produtos, preços e imagens sem precisar reconstruir a página inteira.

1. IDENTIDADE DA MARCA

Marca: Pratas do Sol

Instagram: @_pratasdosol

Instagram oficial para referência visual:

https://www.instagram.com/_pratasdosol/

Acesse e analise o perfil quando tecnicamente possível.

Observe:

identidade visual;

fotografia;

composição;

tipografia;

embalagens;

roupas;

unhas;

tratamento das imagens;

utilização dos vermelhos;

linguagem visual;

apresentação das joias.

Não copie o Instagram literalmente. Transforme a identidade existente em uma experiência web premium.

Se o Instagram não puder ser acessado, utilize as informações deste briefing e não invente informações sobre a marca.

2. PALETA DE CORES

A identidade da Pratas do Sol deve ser construída principalmente em torno de:

Vermelho Carmim / Vermelho Vivo

Tom vibrante e saturado presente na foto de perfil, no gradiente da identidade, nas caixinhas das joias e nas roupas dos posts de destaque.

Vermelho Fechado / Bordô

Tom mais denso presente no esmalte das unhas e em detalhes das mídias impressas da marca.

Vermelho Alaranjado

Nuances quentes presentes nos reflexos e iluminações de destaque.

Cores de apoio

Utilizar:

branco;

off-white muito claro;

prata;

cinza-prata muito claro.

NÃO utilizar cores escuras como base.

Não utilizar:

preto;

grafite;

azul;

verde;

roxo;

marrom.

A interface precisa ser clara, luminosa, sofisticada e viva.

O vermelho precisa ter presença real.

3. DIREÇÃO DE ARTE

Quero uma estética:

sofisticada;

contemporânea;

editorial;

elegante;

feminina sem ser infantil;

premium;

comercial;

marcante;

refinada.

A sensação deve ser de:

joalheria premium + editorial de moda + experiência digital sofisticada.

Não criar um template genérico de e-commerce.

Não criar uma landing page minimalista sem personalidade.

Quero direção de arte, ritmo visual e composição.

Utilizar:

diferentes escalas de imagens;

composições assimétricas;

áreas de respiro;

blocos vermelhos;

branco;

prata;

detalhes editoriais;

fotografias valorizadas;

microinterações.

4. TIPOGRAFIA

Não utilizar fontes óbvias ou extremamente comuns.

Evitar aparência de:

Canva;

template Shopify;

landing page de IA;

site genérico de joias.

Escolher uma combinação sofisticada e contemporânea:

serif editorial com personalidade para títulos;

sans-serif refinada para textos e interface.

Não utilizar fontes cursivas decorativas.

Não utilizar fontes excessivamente ornamentais.

A tipografia deve ter personalidade.

5. FOTOS ANEXADAS

REGRA ABSOLUTA: TODAS AS FOTOS QUE EU ANEXAR AO PROJETO DEVEM SER UTILIZADAS DIRETAMENTE NO SITE.

As imagens anexadas são assets reais fornecidos para este projeto.

Não trate minhas imagens apenas como referência.

Não substitua minhas imagens por:

imagens geradas por IA;

stock photos;

imagens genéricas;

fotos aleatórias.

Se eu anexar uma foto de uma joia, utilize aquela foto para representar aquela joia.

Faça apenas os ajustes necessários de:

crop;

object-fit;

enquadramento;

escala;

posicionamento;

responsividade.

Não aplique filtros pesados.

Não altere significativamente as cores das peças.

Não ignore os assets anexados.

6. INFORMAÇÕES DE CONTATO

WhatsApp: +55 (73) 98889-5195

Link: contate.me/5573988895195

Localização: Jequié - BA

Atendimento: exclusivamente presencial com agendamento prévio.

Instagram: @_pratasdosol

Todos os CTAs de atendimento/agendamento devem utilizar o WhatsApp informado.

7. HEADER

Criar header elegante e responsivo.

PRATAS DO SOL

Navegação:

Início

Joias

Coleções

Prata 925

Moissanite

Garantia

Cuidados

Contato

CTA:

Agendar atendimento

Header claro, branco, com vermelho e prata.

No mobile, utilizar menu hamburger elegante.

8. HERO

Criar um hero de alto impacto utilizando uma das fotos anexadas.

Nome:

PRATAS DO SOL

Criar uma frase curta e sofisticada.

CTAs:

Conhecer as joias

Agendar atendimento

Utilizar o vermelho da identidade com presença forte.

O hero deve parecer uma campanha editorial, não um template.

9. CATÁLOGO — ABAS FUNCIONAIS

Criar uma seção de catálogo com cinco abas funcionais:

ANÉIS

BRACELETES

PINGENTES

BRINCOS

BERLOQUES

Cada aba deve mostrar exclusivamente sua categoria.

ANÉIS

Somente anéis.

BRACELETES

Somente braceletes.

PINGENTES

Somente pingentes.

BRINCOS

Somente brincos.

BERLOQUES

Somente berloques.

As abas precisam funcionar de verdade.

A troca deve ser suave e responsiva.

No mobile, criar uma navegação horizontal confortável ou outro padrão de interação adequado para toque.

10. ESTRUTURA TÉCNICA DO CATÁLOGO

MUITO IMPORTANTE: NÃO ESPALHE AS INFORMAÇÕES DOS PRODUTOS PELO CÓDIGO DE FORMA DESORGANIZADA.

Crie uma estrutura centralizada para os produtos.

Cada produto deve possuir, quando aplicável:

id

nome

categoria

preco

imagem

material

descricao

disponibilidade

Exemplo de estrutura:

{
  id: "anel-01",
  nome: "Nome da peça",
  categoria: "aneis",
  preco: "R$ 000,00",
  imagem: "/images/anel-01.jpg",
  material: "Prata 925",
  descricao: "Descrição oficial da peça",
  disponibilidade: true
}


A estrutura é apenas um exemplo.

Não invente esses dados para os produtos reais.

O importante é que todos os produtos estejam centralizados em uma única estrutura de dados facilmente editável.

As abas devem filtrar essa estrutura pela categoria.

11. FUTURA MANUTENÇÃO DOS PRODUTOS

A arquitetura deve ser pensada para que, depois que o site estiver pronto, seja fácil alterar:

preço;

nome;

foto;

descrição;

material;

categoria;

disponibilidade.

Por exemplo:

Se o preço de um produto mudar, deve ser possível alterar o valor em um único lugar, sem procurar o preço manualmente em várias partes da página.

Se uma foto mudar, deve ser possível substituir a imagem do produto sem reconstruir toda a seção.

Se o nome mudar, alterar o nome na estrutura central deve atualizar automaticamente todas as áreas em que aquele produto aparece.

Se um produto mudar de categoria, alterar sua categoria deve fazer com que ele apareça automaticamente na aba correta.

12. NÃO CRIAR PAINEL ADMINISTRATIVO AGORA

Neste momento, não é necessário criar um painel administrativo, login ou sistema de gerenciamento para a cliente.

A prioridade é criar uma arquitetura de catálogo limpa e centralizada que seja fácil de manter posteriormente através do código.

Entretanto, deixe a estrutura preparada para que futuramente, se necessário, seja possível evoluir para:

CMS;

banco de dados;

painel administrativo;

gerenciamento de produtos.

Não implemente essa complexidade agora sem necessidade.

13. CATÁLOGO DE PRODUTOS

Utilizar prioritariamente as fotos anexadas.

Cada produto pode apresentar:

foto;

nome;

material;

detalhes;

preço;

disponibilidade;

CTA.

Não inventar:

nome;

preço;

material;

certificado;

quilates;

origem;

promoção;

avaliação.

Se alguma informação não estiver disponível, não inventar.

O layout dos produtos deve ser editorial.

Não criar somente quatro cards idênticos por linha.

Variar:

escala;

tamanho;

proporção;

espaçamento;

composição.

14. PRATA 925

Criar seção própria:

PRATA 925

Apresentar informações sobre o material e seus cuidados.

Utilizar fotos reais anexadas quando disponíveis.

Visual:

branco;

prata;

vermelho como destaque.

Não inventar especificações técnicas.

15. MOISSANITE

Criar seção própria:

MOISSANITE

Apresentar a linha de forma premium.

Utilizar fotos anexadas quando disponíveis.

Não inventar:

quilates;

certificados;

origem;

procedência;

grau;

garantia específica.

16. GARANTIA

Criar seção:

GARANTIA

Apresentar:

prazo;

cobertura;

condições;

limitações;

procedimento de atendimento;

somente se as informações forem fornecidas ou confirmadas.

Não inventar política de garantia.

Se os detalhes não estiverem disponíveis, criar estrutura visual editável para inserção posterior.

17. CUIDADOS

Criar seção:

CUIDADOS COM SUAS JOIAS

Apresentar orientações confiáveis.

Separar por material quando necessário.

18. DIFERENCIAIS

Criar uma seção para os diferenciais reais da marca.

Utilizar somente informações confirmadas.

Não inventar:

número de clientes;

anos de mercado;

prêmios;

avaliações;

certificados;

depoimentos.

19. ATENDIMENTO PRESENCIAL

Criar seção de destaque:

ATENDIMENTO PRESENCIAL

Jequié - BA

Atendimento exclusivamente presencial com agendamento prévio.

CTA:

Agendar atendimento

Link:

contate.me/5573988895195

20. INSTAGRAM

Criar seção:

@_pratasdosol

Utilizar as imagens reais fornecidas.

Linkar para o Instagram oficial.

Não inventar métricas ou publicações.

21. GALERIA EDITORIAL

Criar uma galeria sofisticada utilizando diretamente as imagens anexadas.

Não colocar todas as imagens em quadrados iguais.

Criar:

imagens grandes;

close-ups;

diferentes proporções;

composições assimétricas;

blocos vermelhos;

espaços brancos;

detalhes prateados.

22. CTA FINAL

Criar:

Encontre sua próxima joia.

Subtexto:

Atendimento presencial em Jequié - BA, com agendamento prévio.

Botão:

Agendar atendimento

Link:

contate.me/5573988895195

23. FOOTER

Footer claro.

Não utilizar fundo preto.

Incluir:

PRATAS DO SOL

Joias

Prata 925

Moissanite

Garantia

Cuidados

Contato

WhatsApp: +55 (73) 98889-5195

Instagram: @_pratasdosol

Jequié - BA

Atendimento presencial com agendamento prévio.

24. ANIMAÇÕES

Utilizar:

fade;

reveal;

hover;

transições;

troca animada das abas;

zoom sutil nas fotos;

header durante scroll;

microinterações nos botões.

Não utilizar:

glow;

neon;

partículas;

estrelas;

efeitos futuristas;

animações exageradas.

25. RESPONSIVIDADE

Prioridade absoluta para mobile.

Verificar:

menu;

imagens;

abas;

botões;

tipografia;

espaçamento;

navegação;

WhatsApp;

ausência de overflow horizontal.

26. PROIBIDO

Não criar:

fundo preto;

fundo grafite;

estética dark;

cores escuras dominantes;

azul;

verde;

roxo;

marrom;

visual tecnológico;

dropshipping aesthetic;

template genérico;

excesso de cards;

glassmorphism;

gradientes exagerados;

elementos típicos de IA;

linhas decorativas antes dos títulos;

estrelas;

partículas;

fake reviews;

fake testimonials;

fake statistics;

fake products;

fake prices;

informações inventadas.

Também não quero um design tão minimalista que fique vazio ou sem graça.

27. OBJETIVO VISUAL

Quando alguém abrir o site, deve sentir:

Pratas do Sol.

Uma marca de joias profissional, sofisticada, desejável e contemporânea.

A identidade deve ser imediatamente reconhecível através de:

vermelho carmim/vivo + vermelho fechado/bordô + nuances vermelho-alaranjadas + branco + prata + fotografia real + tipografia sofisticada.

O resultado deve parecer trabalho de uma agência profissional de branding e UI/UX.

28. CHECKLIST FINAL

Antes de finalizar, verifique:

Todas as fotos anexadas foram utilizadas diretamente.

Nenhuma foto foi substituída desnecessariamente.

Existem cinco abas funcionais.

Cada aba mostra somente sua categoria.

Os produtos estão centralizados em uma estrutura de dados organizada.

Nome, preço, foto, material, descrição, categoria e disponibilidade são facilmente editáveis.

Alterar um produto em um único lugar atualiza suas ocorrências na interface.

Alterar a categoria move o produto para a aba correta.

Trocar a imagem não exige reconstruir a página.

Prata 925 possui seção própria.

Moissanite possui seção própria.

Garantia possui seção própria.

Cuidados possuem seção própria.

WhatsApp está correto.

O link do WhatsApp está correto.

Jequié - BA está correto.

Atendimento presencial com agendamento está claro.

Instagram @_pratasdosol está presente.

Vermelho é protagonista.

Branco e prata equilibram a composição.

Não existem cores escuras dominantes.

A tipografia não é óbvia ou genérica.

O design tem personalidade.

As imagens são protagonistas.

Não existem vícios visuais de IA.

O mobile está impecável.

Nenhuma informação foi inventada.

Agora implemente a landing page completa diretamente no Lovable, seguindo todas as especificações acima. adicione a terceira foto anexada como capa

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/336768db-dffb-4b10-968d-3176c05c65d0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
