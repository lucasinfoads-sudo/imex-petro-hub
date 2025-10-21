-- Criar função para atualizar updated_at
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Criar tabela de posts do blog
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image_url TEXT,
  icon_name TEXT NOT NULL DEFAULT 'Package',
  author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Habilitar RLS
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Políticas de RLS
-- Qualquer pessoa pode ler posts publicados
CREATE POLICY "Anyone can view published posts" 
ON public.blog_posts 
FOR SELECT 
USING (published_at IS NOT NULL);

-- Admins podem ver todos os posts
CREATE POLICY "Admins can view all posts" 
ON public.blog_posts 
FOR SELECT 
USING (public.has_role(auth.uid(), 'admin'));

-- Admins podem criar posts
CREATE POLICY "Admins can create posts" 
ON public.blog_posts 
FOR INSERT 
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Admins podem atualizar posts
CREATE POLICY "Admins can update posts" 
ON public.blog_posts 
FOR UPDATE 
USING (public.has_role(auth.uid(), 'admin'));

-- Admins podem deletar posts
CREATE POLICY "Admins can delete posts" 
ON public.blog_posts 
FOR DELETE 
USING (public.has_role(auth.uid(), 'admin'));

-- Criar índice no slug para busca rápida
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);

-- Criar índice na data de publicação para ordenação
CREATE INDEX idx_blog_posts_published_at ON public.blog_posts(published_at DESC);

-- Trigger para atualizar updated_at
CREATE TRIGGER update_blog_posts_updated_at
BEFORE UPDATE ON public.blog_posts
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();