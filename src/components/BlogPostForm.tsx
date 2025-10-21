import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import * as LucideIcons from "lucide-react";

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

  const iconNames = [
    "Package",
    "TrendingUp",
    "Route",
    "Truck",
    "Clock",
    "ShieldCheck",
    "Zap",
    "Target",
  ];

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
        <Label htmlFor="image">URL da Imagem (opcional)</Label>
        <Input
          id="image"
          type="url"
          value={formData.featured_image_url}
          onChange={(e) =>
            setFormData({ ...formData, featured_image_url: e.target.value })
          }
          placeholder="https://exemplo.com/imagem.jpg"
        />
      </div>

      <div>
        <Label htmlFor="icon">Ícone</Label>
        <Select
          value={formData.icon_name}
          onValueChange={(value) => setFormData({ ...formData, icon_name: value })}
        >
          <SelectTrigger id="icon">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {iconNames.map((iconName) => (
              <SelectItem key={iconName} value={iconName}>
                {iconName}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
