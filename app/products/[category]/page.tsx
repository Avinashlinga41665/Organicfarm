import ProductCategory from "@/components/ProductCategory";
import { productCategories } from "@/data/products";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
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