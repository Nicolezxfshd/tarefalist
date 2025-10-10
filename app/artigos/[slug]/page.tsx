import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSlugs, getArticleBySlug } from "@/lib/articles";

export const dynamic = process.env.CRUDCRUD_BASE_URL ? "force-dynamic" : "force-static"; // SSR se API, SSG se JSON

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const artigo = await getArticleBySlug(params.slug);
  if (!artigo) return { title: "Artigo não encontrado" };

  return {
    title: `${artigo.title} | Blog SEO`,
    description: artigo.description,
    alternates: {
      canonical: `/artigos/${artigo.slug}`,
    },
    openGraph: {
      title: artigo.title,
      description: artigo.description,
      type: "article",
    },
  };
}

export default async function ArtigoPage({ params }: { params: { slug: string } }) {
  const artigo = await getArticleBySlug(params.slug);
  if (!artigo) return notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-10">
      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{artigo.title}</h1>
        <p className="text-sm text-black/60 dark:text-white/60">
          Por {artigo.author} • {new Date(artigo.date).toLocaleDateString("pt-BR")}
        </p>
      </header>
      <section className="space-y-3 whitespace-pre-line">
        {artigo.content}
      </section>
    </article>
  );
}
