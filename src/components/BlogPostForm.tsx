import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Camera } from "lucide-react";

interface BlogPostFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

const BlogPostForm = ({ onSuccess, onCancel }: BlogPostFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    featured_image_url: "",
    icon_name: "Package",
  });
  const [loading, setLoading] = useState(false);

  const handleImageCapture = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, featured_image_url: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Usuário não autenticado");

      const slug = generateSlug(formData.title);

      const { error } = await supabase.from("blog_posts").insert({
        title: formData.title,
        slug,
        excerpt: formData.excerpt,
        content: formData.content,
        featured_image_url: formData.featured_image_url || null,
        icon_name: formData.icon_name,
        author_id: user.id,
        published_at: new Date().toISOString(),
      });

      if (error) throw error;

      toast.success("Artigo publicado com sucesso!");
      onSuccess();
    } catch (error: any) {
      console.error("Erro ao publicar artigo:", error);
      toast.error(error.message || "Erro ao publicar artigo");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Título</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          placeholder="Título do artigo"
        />
      </div>

      <div>
        <Label htmlFor="excerpt">Resumo</Label>
        <Textarea
          id="excerpt"
          value={formData.excerpt}
          onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
          required
          placeholder="Breve descrição do artigo"
          rows={3}
        />
      </div>

      <div>
        <Label htmlFor="content">Conteúdo</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          required
          placeholder="Conteúdo completo do artigo"
          rows={10}
        />
      </div>

      <div>
        <Label htmlFor="image">Imagem (opcional)</Label>
        <div className="flex gap-2">
          <Input
            id="image"
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleImageCapture}
            className="flex-1"
          />
          <Button type="button" variant="outline" size="icon" onClick={() => document.getElementById('image')?.click()}>
            <Camera className="h-4 w-4" />
          </Button>
        </div>
        {formData.featured_image_url && (
          <img src={formData.featured_image_url} alt="Preview" className="mt-2 max-h-40 rounded-md" />
        )}
      </div>

      <div className="flex gap-2 justify-end">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancelar
        </Button>
        <Button type="submit" disabled={loading}>
          {loading ? "Publicando..." : "Publicar Artigo"}
        </Button>
      </div>
    </form>
  );
};

export default BlogPostForm;
