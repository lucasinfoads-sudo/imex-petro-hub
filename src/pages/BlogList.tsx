import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar } from "lucide-react";
import * as LucideIcons from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  icon_name: string;
  published_at: string;
}

const BlogList = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .not("published_at", "is", null)
        .order("published_at", { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error("Erro ao carregar posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 gradient-light py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Todos os <span className="text-primary">Artigos</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Conhecimento que move seu negócio para frente
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-xl">Carregando artigos...</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                Nenhum artigo publicado ainda.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {posts.map((post) => {
                const IconComponent = (LucideIcons as any)[post.icon_name] || LucideIcons.Package;
                return (
                  <article
                    key={post.id}
                    className="bg-card rounded-lg p-6 shadow-card hover:shadow-elegant transition-smooth hover-scale cursor-pointer"
                    onClick={() => navigate(`/blog/${post.slug}`)}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <time>{formatDate(post.published_at)}</time>
                    </div>
                    <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <Button
                      variant="ghost"
                      className="p-0 h-auto font-semibold text-primary"
                    >
                      Ler mais <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogList;
