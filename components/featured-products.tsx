"use client";

import { useState } from "react";
import Link from "next/link";
import { Heart, ShoppingBag } from "lucide-react";
import { productPricing } from "@/lib/product-pricing";

const products = [
  {
    id: 1,
    name: "Nairobi Luxury Bag",
    category: "Leather Goods",
    price: productPricing.nairobiLuxuryBag,
    image: "/images/leather-bag.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "Serengeti Necklace",
    category: "Fine Jewelry",
    price: productPricing.serengetiNecklace,
    image: "/images/jewelry.jpg",
    isNew: false,
  },
  {
    id: 3,
    name: "Savanna Gown",
    category: "Haute Couture",
    price: productPricing.savannaGown,
    image: "/images/couture-gown.jpg",
    isNew: true,
  },
  {
    id: 4,
    name: "Essence of Kilimanjaro",
    category: "Fragrances",
    price: productPricing.essenceOfKilimanjaro,
    image: "/images/fragrance.jpg",
    isNew: false,
  },
];

export function FeaturedProducts() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="selection" className="py-24 md:py-32">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Header with offset */}
        <div className="mb-16 md:mb-24">
          <div className="grid md:grid-cols-2 gap-8 items-end">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
                Selection
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight">
                African
                <span className="italic text-accent"> Treasures</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-md md:text-right md:ml-auto">
              Each creation is the fruit of African artisanal mastery,
              curated by our master craftspeople across East Africa.
            </p>
          </div>
        </div>

        {/* Products grid with offset */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group ${index % 2 === 1 ? "md:mt-12" : ""}`}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden mb-4">
                {/* Image */}
                <div className="aspect-[5/6] bg-secondary overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Badges */}
                {product.isNew && (
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 text-[10px] tracking-[0.2em] uppercase">
                    New
                  </span>
                )}

                {/* Quick actions */}
                <div
                  className={`absolute inset-x-4 bottom-4 flex gap-2 transition-all duration-300 ${
                    hoveredId === product.id
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <button
                    type="button"
                    className="flex-1 bg-background/90 backdrop-blur-sm py-3 flex items-center justify-center gap-2 text-sm tracking-[0.1em] uppercase hover:bg-background transition-colors duration-200 min-h-11"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add
                  </button>
                  <button
                    type="button"
                    className="w-11 h-11 bg-background/90 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors duration-200"
                    aria-label="Add to favorites"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-1">
                <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="font-serif text-xl group-hover:text-accent transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-lg">
                  KES {product.price.toLocaleString("en-US")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/collections"
            className="inline-flex items-center justify-center border border-primary text-primary px-10 py-4 text-sm tracking-[0.2em] uppercase min-h-12 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            View Full Collection
          </Link>
        </div>
      </div>
    </section>
  );
}
