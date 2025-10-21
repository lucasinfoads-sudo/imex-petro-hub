import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Calendar } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image_url: string | null;
  icon_name: string;
  published_at: string;
}

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPost();
  }, [slug]);

  const loadPost = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .not("published_at", "is", null)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error("Erro ao carregar post:", error);
      navigate("/blog");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen gradient-light flex items-center justify-center">
        <p className="text-xl">Carregando...</p>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  const IconComponent = (LucideIcons as any)[post.icon_name] || LucideIcons.Package;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 gradient-light py-16">
        <article className="container mx-auto px-4 max-w-4xl">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => navigate("/blog")}
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Voltar para o blog
          </Button>

          <div className="bg-card rounded-lg shadow-card p-8">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <IconComponent className="w-8 h-8 text-primary" />
            </div>

            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center gap-2 text-muted-foreground mb-6">
              <Calendar className="w-4 h-4" />
              <time>{formatDate(post.published_at)}</time>
            </div>

            {post.featured_image_url && (
              <img
                src={post.featured_image_url}
                alt={post.title}
                className="w-full rounded-lg mb-8"
              />
            )}

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
              <div className="whitespace-pre-wrap">{post.content}</div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
