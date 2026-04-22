import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { productPricing } from "@/lib/product-pricing";

const products = [
  {
    id: 1,
    name: "Nairobi Luxury Bag",
    category: "Leather Goods",
    price: productPricing.nairobiLuxuryBag,
    image: "/images/leather-bag.jpg",
    isNew: true,
    rating: 4.8,
    reviews: 24,
  },
  {
    id: 2,
    name: "Serengeti Necklace",
    category: "Fine Jewelry",
    price: productPricing.serengetiNecklace,
    image: "/images/jewelry.jpg",
    isNew: false,
    rating: 5,
    reviews: 18,
  },
  {
    id: 3,
    name: "Savanna Gown",
    category: "Haute Couture",
    price: productPricing.savannaGown,
    image: "/images/couture-gown.jpg",
    isNew: true,
    rating: 4.9,
    reviews: 12,
  },
  {
    id: 4,
    name: "Essence of Kilimanjaro",
    category: "Fragrances",
    price: productPricing.essenceOfKilimanjaro,
    image: "/images/fragrance.jpg",
    isNew: false,
    rating: 4.7,
    reviews: 35,
  },
  {
    id: 5,
    name: "Lagos Leather Clutch",
    category: "Leather Goods",
    price: productPricing.lagosLeatherClutch,
    image: "/images/leather-bag.jpg",
    isNew: false,
    rating: 4.8,
    reviews: 19,
  },
  {
    id: 6,
    name: "Kente Silk Scarf",
    category: "Accessories",
    price: productPricing.kenteSilkScarf,
    image: "/images/couture-gown.jpg",
    isNew: true,
    rating: 4.9,
    reviews: 28,
  },
  {
    id: 7,
    name: "Accra Evening Bracelet",
    category: "Fine Jewelry",
    price: productPricing.accraEveningBracelet,
    image: "/images/jewelry.jpg",
    isNew: false,
    rating: 5,
    reviews: 15,
  },
  {
    id: 8,
    name: "Tribal Pattern Dress",
    category: "Haute Couture",
    price: productPricing.tribalPatternDress,
    image: "/images/couture-gown.jpg",
    isNew: true,
    rating: 4.8,
    reviews: 22,
  },
];

export const metadata = {
  title: "Featured Selection | Afara Couture",
  description: "Browse our curated selection of premium African luxury pieces.",
};

export default function SelectionPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-end mb-16">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
                Selection
              </p>
              <h1 className="font-serif text-5xl md:text-6xl tracking-tight">
                Featured
                <span className="italic text-accent"> Pieces</span>
              </h1>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md md:text-right">
              Each creation is the fruit of African artisanal mastery,
              curated by our master craftspeople across Africa.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group"
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 text-xs tracking-[0.2em] uppercase">
                      New
                    </div>
                  )}
                  <button
                    type="button"
                    className="absolute bottom-4 right-4 bg-white text-foreground p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-accent hover:text-accent-foreground"
                    aria-label="Add to cart"
                  >
                    <ShoppingBag className="w-5 h-5" />
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-xs text-muted-foreground">{product.category}</p>
                  <h3 className="font-serif text-lg group-hover:text-accent transition-colors duration-300">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-accent text-xs">★</span>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">({product.reviews})</p>
                  </div>
                  <p className="font-serif text-lg">
                    KES {product.price.toLocaleString("en-US")}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
