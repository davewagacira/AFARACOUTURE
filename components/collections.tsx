"use client";

import { ArrowUpRight } from "lucide-react";

const collections = [
  {
    id: 1,
    name: "Savanna Style",
    description: "African haute couture excellence",
    image: "/images/collection-couture.jpg",
    itemCount: 24,
  },
  {
    id: 2,
    name: "Golden Heritage",
    description: "Fine jewelry with African soul",
    image: "/images/collection-jewelry.jpg",
    itemCount: 18,
  },
  {
    id: 3,
    name: "Craft Legacy",
    description: "Leather elevated by East African artisans",
    image: "/images/collection-leather.jpg",
    itemCount: 32,
  },
  {
    id: 4,
    name: "Aromatic Journey",
    description: "Fragrances that tell African stories",
    image: "/images/fragrance.jpg",
    itemCount: 12,
  },
  {
    id: 5,
    name: "Urban Elegance",
    description: "Modern accessories with traditional touch",
    image: "/images/jewelry.jpg",
    itemCount: 28,
  },
];

export function Collections() {
  return (
    <section id="collections" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
              Our Collections
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
              African
              <span className="italic text-accent"> Brilliance</span>
            </h2>
          </div>
          <button
            type="button"
            className="group inline-flex items-center gap-2 text-sm tracking-[0.2em] uppercase hover:text-accent transition-colors duration-300 self-start md:self-auto"
          >
            View All Collections
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </button>
        </div>

        {/* Grid - Asymmetric */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((collection, index) => (
            <div
              key={collection.id}
              className={`group relative overflow-hidden cursor-pointer ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  index === 0
                    ? "aspect-square md:aspect-auto md:h-full"
                    : "aspect-[3/4]"
                }`}
              >
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-background/70 mb-2">
                    {collection.itemCount} pieces
                  </p>
                  <h3
                    className={`font-serif text-background mb-2 ${
                      index === 0
                        ? "text-3xl md:text-4xl lg:text-5xl"
                        : "text-2xl md:text-3xl"
                    }`}
                  >
                    {collection.name}
                  </h3>
                  <p className="text-background/70 text-sm max-w-xs">
                    {collection.description}
                  </p>

                  {/* Hover arrow */}
                  <div className="absolute top-6 right-6 w-10 h-10 border border-background/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="w-5 h-5 text-background" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
