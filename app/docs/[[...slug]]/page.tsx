import DocsBreadcrumb from "@/components/docs-breadcrumb";
import Pagination from "@/components/pagination";
import Toc from "@/components/toc";
import { page_routes } from "@/lib/routes-config";
import { notFound } from "next/navigation";
import { getDocsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";

const canonical = (slug: string) => {
  if (slug === '') {
    return '/docs';
  }
  return `/docs/${slug}`;
};

type PageProps = {
  params: { slug?: string[] };
};

export default async function DocsPage({ params: { slug = [] } }: PageProps) {
  // Handle root docs path
  const pathName = slug.length === 0 ? '' : slug.join("/");
  
  try {
    const res = await getDocsForSlug(pathName);
    
    if (!res) {
      console.error('No content found for path:', pathName);
      return notFound();
    }

    return (
      <div className="flex items-start gap-10">
        <div className="flex-[4.5] pt-10">
          <DocsBreadcrumb paths={slug} />
          <Typography>
            <h1 className="text-3xl -mt-2">{res.frontmatter.title}</h1>
            <p className="-mt-4 text-muted-foreground text-[16.5px]">
              {res.frontmatter.description}
            </p>
            <div>{res.content}</div>
            <Pagination pathname={pathName} />
          </Typography>
        </div>
        <Toc path={pathName} />
      </div>
    );
  } catch (error) {
    console.error('Error in DocsPage:', error);
    return notFound();
  }
}

export async function generateMetadata({ params: { slug = [] } }: PageProps) {
  const pathName = slug.length === 0 ? '' : slug.join("/");
  
  try {
    const res = await getDocsForSlug(pathName);
    if (!res) return null;
    
    const { frontmatter } = res;
    return {
      title: frontmatter.title + " | Best of Git",
      description: frontmatter.description,
      alternates: {
        canonical: canonical(pathName),
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return null;
  }
}

export function generateStaticParams() {
  return page_routes.map((item) => ({
    // Handle root docs path in static params
    slug: item.href === '/docs' ? [] : item.href.split("/").slice(1),
  }));
}