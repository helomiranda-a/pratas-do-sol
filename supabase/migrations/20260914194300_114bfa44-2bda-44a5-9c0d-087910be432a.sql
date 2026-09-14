CREATE TABLE public.produtos (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nome text NOT NULL,
  categoria text NOT NULL,
  imagem text NOT NULL DEFAULT '',
  preco text,
  material text,
  descricao text,
  disponibilidade boolean NOT NULL DEFAULT true,
  destaque boolean NOT NULL DEFAULT false,
  ordem integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT ON public.produtos TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.produtos TO authenticated;
GRANT ALL ON public.produtos TO service_role;

ALTER TABLE public.produtos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Produtos visiveis para todos" ON public.produtos FOR SELECT USING (true);
CREATE POLICY "Usuarios autenticados gerenciam produtos" ON public.produtos FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$
LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_produtos_updated_at BEFORE UPDATE ON public.produtos
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

INSERT INTO public.produtos (nome, categoria, imagem, descricao, disponibilidade, destaque, ordem) VALUES
('Anel solitário','aneis','/__l5e/assets-v1/33d4d3c6-1d4e-4bac-a16e-e694540fdd34/pds-15-58-23.jpeg','Aro fino com pedra central em garra.',true,true,1),
('Anel de bolinhas','aneis','/__l5e/assets-v1/33d4d3c6-1d4e-4bac-a16e-e694540fdd34/pds-15-58-23.jpeg','Aro liso com detalhe de esferas polidas.',true,false,2),
('Anel oval cravejado','aneis','/__l5e/assets-v1/e9594902-884d-4357-9320-6ad8b3ed0f71/pds-15-58-22_3.jpeg','Pedra oval com halo cravejado.',true,false,3),
('Anel aparador com pingente','aneis','/__l5e/assets-v1/e9594902-884d-4357-9320-6ad8b3ed0f71/pds-15-58-22_3.jpeg','Aro cravejado com pequeno coração pendente.',true,false,4),
('Bracelete liso','braceletes','/__l5e/assets-v1/e9594902-884d-4357-9320-6ad8b3ed0f71/pds-15-58-22_3.jpeg','Bracelete rígido de acabamento polido.',true,true,1),
('Bracelete de berloques','braceletes','/__l5e/assets-v1/31437fd7-a97a-43e7-82b9-2fee06550d2e/pds-15-58-22_1.jpeg','Malha rabo de rato com fecho em coração, montado com berloques.',true,false,2),
('Bracelete com corrente de segurança','braceletes','/__l5e/assets-v1/b3f59524-3389-4872-a325-35022fbdb01a/pds-15-58-23_3.jpeg','Bracelete de berloques com corrente de segurança.',true,false,3),
('Pingente gota verde','pingentes','/__l5e/assets-v1/e5ae2fad-b836-485e-817e-6eb30eb6360a/pds-15-58-23_2.jpeg','Pingente em gota com pedra verde e halo cravejado, em corrente fina.',true,true,1),
('Pingente gota amarela','pingentes','/__l5e/assets-v1/8a024d4f-8d12-4b3a-903e-9ce086dbd5f3/pds-15-58-23_4.jpeg','Pingente em gota com pedra amarela e halo cravejado, em corrente fina.',true,false,2),
('Pingente cruz','pingentes','/__l5e/assets-v1/fed08dc7-0edc-4c4d-b1bf-cc6e0b3ad24c/pds-15-58-22_4.jpeg','Cruz lisa em corrente de elos retangulares.',true,false,3),
('Brinco ear jacket duplo','brincos','/__l5e/assets-v1/be6a6119-def9-493c-966f-ba3f47c81888/pds-15-58-22_2.jpeg','Ponto de luz com segunda pedra suspensa.',true,true,1),
('Brinco três pedras verdes','brincos','/__l5e/assets-v1/f923daa6-7a2a-49b8-b48f-e89c2a587f70/pds-15-58-23_1.jpeg','Trilha de três pedras verdes com halo cravejado.',true,false,2),
('Brinco três pedras rosa','brincos','/__l5e/assets-v1/f923daa6-7a2a-49b8-b48f-e89c2a587f70/pds-15-58-23_1.jpeg','Trilha de três pedras rosa com halo cravejado.',true,false,3),
('Berloques da montagem','berloques','/__l5e/assets-v1/b3f59524-3389-4872-a325-35022fbdb01a/pds-15-58-23_3.jpeg','Berloques avulsos para montar seu bracelete.',true,true,1),
('Berloque coração','berloques','/__l5e/assets-v1/31437fd7-a97a-43e7-82b9-2fee06550d2e/pds-15-58-22_1.jpeg','Berloque em formato de coração.',true,false,2);