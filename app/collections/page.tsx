import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Savanna Style",
    description: "African haute couture excellence",
    image: "/images/collection-couture.jpg",
    itemCount: 24,
    featured: true,
  },
  {
    id: 2,
    name: "Golden Heritage",
    description: "Fine jewelry with African soul",
    image: "/images/collection-jewelry.jpg",
    itemCount: 18,
    featured: true,
  },
  {
    id: 3,
    name: "Craft Legacy",
    description: "Leather elevated by East African artisans",
    image: "/images/collection-leather.jpg",
    itemCount: 32,
    featured: true,
  },
  {
    id: 4,
    name: "Aromatic Journey",
    description: "Fragrances that tell African stories",
    image: "/images/fragrance.jpg",
    itemCount: 12,
    featured: false,
  },
  {
    id: 5,
    name: "Urban Elegance",
    description: "Modern accessories with traditional touch",
    image: "/images/jewelry.jpg",
    itemCount: 28,
    featured: false,
  },
  {
    id: 6,
    name: "Textile Tales",
    description: "Woven heritage and contemporary patterns",
    image: "/images/couture-gown.jpg",
    itemCount: 20,
    featured: false,
  },
];

export const metadata = {
  title: "Collections | Afara Couture",
  description: "Explore our premium African fashion collections and artisanal pieces.",
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pb-24 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="space-y-6 mb-16">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
              Explore
            </p>
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight">
              Our
              <span className="italic text-accent"> Collections</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Each collection represents a chapter in our story, celebrating African artisanal mastery 
              and contemporary luxury design.
            </p>
          </div>

          {/* Featured Collections Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {collections.filter(c => c.featured).slice(0, 2).map((collection) => (
              <Link
                key={collection.id}
                href={`/collections/${collection.id}`}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl group-hover:text-accent transition-colors duration-300">
                  {collection.name}
                </h2>
                <p className="text-muted-foreground mt-2">{collection.description}</p>
                <p className="text-sm text-muted-foreground mt-4">{collection.itemCount} pieces</p>
              </Link>
            ))}
          </div>

          {/* All Collections */}
          <div className="space-y-8">
            <h2 className="font-serif text-4xl">All Collections</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <Link
                  key={collection.id}
                  href={`/collections/${collection.id}`}
                  className="group"
                >
                  <div className="relative overflow-hidden aspect-[3/4] mb-4">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                  </div>
                  <h3 className="font-serif text-xl group-hover:text-accent transition-colors duration-300">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">{collection.description}</p>
                  <p className="text-xs text-muted-foreground/70 mt-3">{collection.itemCount} items</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
