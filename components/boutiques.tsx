"use client";

import { MapPin, Phone, Clock } from "lucide-react";

const boutiques = [
  {
    id: 1,
    city: "Nairobi",
    address: "Westlands, Nairobi, Kenya",
    phone: "+254 20 3874 000",
    hours: "10:00 - 19:00",
    image: "/images/boutique-nairobi.jpg",
    flagship: true,
  },
  {
    id: 2,
    city: "Kampala",
    address: "Kololo, Kampala, Uganda",
    phone: "+256 41 4 507 000",
    hours: "10:00 - 18:00",
    image: "/images/boutique-kampala.jpg",
    flagship: false,
  },
  {
    id: 3,
    city: "Accra",
    address: "Osu, Accra, Ghana",
    phone: "+233 30 221 8000",
    hours: "10:00 - 19:00",
    image: "/images/boutique-accra.jpg",
    flagship: false,
  },
];

export function Boutiques() {
  return (
    <section id="boutiques" className="py-24 md:py-32">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Our Boutiques
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6">
            Experience
            <span className="italic text-accent"> Afara Couture</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Visit our curated boutiques across East Africa to discover our collections
            and receive personalized guidance from our luxury consultants.
          </p>
        </div>

        {/* Boutiques grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {boutiques.map((boutique) => (
            <div
              key={boutique.id}
              className={`group relative ${
                boutique.flagship ? "md:col-span-1" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden mb-6">
                <div className="aspect-[3/2]">
                  <img
                    src={boutique.image || "/placeholder.svg"}
                    alt={`Boutique ${boutique.city}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {boutique.flagship && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2">
                    <p className="text-[10px] tracking-[0.2em] uppercase">
                      Flagship
                    </p>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl md:text-3xl">
                  {boutique.city}
                </h3>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{boutique.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>{boutique.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 flex-shrink-0" />
                    <span>{boutique.hours}</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center text-sm tracking-[0.15em] uppercase hover:text-accent transition-colors duration-300 pt-2"
                >
                  Book Appointment
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
