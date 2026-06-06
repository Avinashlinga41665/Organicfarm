import type { Metadata } from "next";
import ProductCategory from "@/components/ProductCategory";
import { productCategories } from "@/data/products";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { category } = await params;

  const selectedCategory = productCategories.find(
    (item) => item.href.split("/").pop() === category
  );

  if (!selectedCategory) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: selectedCategory.title,
    description: selectedCategory.description,

    openGraph: {
      title: selectedCategory.title,
      description: selectedCategory.description,
      images: [
        {
          url: selectedCategory.image,
          width: 1200,
          height: 630,
          alt: selectedCategory.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: selectedCategory.title,
      description: selectedCategory.description,
      images: [selectedCategory.image],
    },
  };
}

export default async function CategoryPage({
  params,
}: PageProps) {
  const { category } = await params;

  const selectedCategory = productCategories.find(
    (item) => item.href.split("/").pop() === category
  );

  if (!selectedCategory) {
    notFound();
  }

  return (
    <ProductCategory
      title={selectedCategory.title}
      subtitle={selectedCategory.description}
      products={selectedCategory.products}
    />
  );
}