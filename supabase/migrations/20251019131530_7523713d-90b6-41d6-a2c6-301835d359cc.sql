-- Criar tipo de role para admin
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Criar tabela de roles de usuários
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Habilitar RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Função para verificar se usuário tem role específico
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Política: apenas admins podem ver roles
CREATE POLICY "Admins can view all roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Criar tabela de cadastros de clientes (leads)
CREATE TABLE public.client_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  business_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.client_leads ENABLE ROW LEVEL SECURITY;

-- Política: apenas admins podem ver e gerenciar leads
CREATE POLICY "Admins can view all client leads"
ON public.client_leads
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Política: qualquer um pode inserir (formulário público)
CREATE POLICY "Anyone can insert client leads"
ON public.client_leads
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Criar tabela de cadastros de entregadores
CREATE TABLE public.delivery_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  cnh_category TEXT NOT NULL,
  has_motorcycle BOOLEAN NOT NULL,
  previous_experience TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.delivery_applications ENABLE ROW LEVEL SECURITY;

-- Política: apenas admins podem ver aplicações
CREATE POLICY "Admins can view all delivery applications"
ON public.delivery_applications
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Política: qualquer um pode inserir (formulário público)
CREATE POLICY "Anyone can insert delivery applications"
ON public.delivery_applications
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Inserir admin padrão (será criado após signup)
-- Email: admin@ganhetempo.com.br
-- Senha: GanheTempo2025!