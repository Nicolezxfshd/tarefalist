import 'server-only';
import slugify from 'slugify';

export type Article = {
  id: string;
  title: string;
  slug: string;
  author: string;
  date: string; // ISO string
  description: string;
  content: string;
};

type ApiArticle = {
  id?: string | number;
  _id?: string;
  title: string;
  slug?: string;
  author?: string;
  date?: string;
  description?: string;
  content?: string;
};

// Import estático do JSON local (SSG por padrão)
import localData from '@/data/artigos.json';

const CRUDCRUD_BASE_URL = process.env.CRUDCRUD_BASE_URL; // ex: https://crudcrud.com/api/<key>/artigos

function normalizeSlug(title: string, slug?: string) {
  if (slug && slug.trim()) return slug;
  return slugify(title, { lower: true, strict: true });
}

function getCrudCrudUrl(): string | null {
  if (!CRUDCRUD_BASE_URL) return null;
  let base = CRUDCRUD_BASE_URL.trim().replace(/\/$/, '');
  // garante sufixo da coleção
  if (!/\/artigos$/.test(base)) {
    base = `${base}/artigos`;
  }
  return base;
}

// Fonte de dados: se CRUDCRUD_BASE_URL estiver definida, usa API; caso contrário, usa JSON local
export async function getAllArticles(): Promise<Article[]> {
  const apiUrl = getCrudCrudUrl();
  if (apiUrl) {
    const res = await fetch(apiUrl, { next: { revalidate: 0 }, cache: 'no-store' });
    if (!res.ok) throw new Error(`Falha ao buscar artigos da API (${res.status})`);
    const data = (await res.json()) as ApiArticle[];
    return data.map((a: ApiArticle) => ({
      id: a.id !== undefined ? String(a.id) : a._id ?? '',
      title: a.title,
      slug: normalizeSlug(a.title, a.slug),
      author: a.author ?? 'Desconhecido',
      date: a.date ?? new Date().toISOString(),
      description: a.description ?? '',
      content: a.content ?? '',
    }));
  }

  // Local JSON (estático)
  const items = (localData as Article[]).map((a) => ({
    ...a,
    slug: normalizeSlug(a.title, a.slug),
  }));
  return items;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const items = await getAllArticles();
  return items.find((a) => a.slug === slug) ?? null;
}

export async function getAllSlugs(): Promise<string[]> {
  const items = await getAllArticles();
  return items.map((a) => a.slug);
}

export async function getSiteMetadata() {
  return {
    title: 'Blog SEO com Next.js 15',
    description: 'Exemplo de blog com App Router, rotas dinâmicas, data fetching e SEO dinâmico.',
  };
}
