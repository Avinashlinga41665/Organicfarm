import Products from "@/components/Products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  return (
    <>
    <Navbar/>
    <main className="pt-20">
      <Products />
    </main>
    <Footer/>
    </>
  );
}