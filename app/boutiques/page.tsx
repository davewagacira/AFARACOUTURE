import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MapPin, Phone, Clock } from "lucide-react";

const boutiques = [
  {
    id: 1,
    city: "Nairobi",
    address: "Westlands, Nairobi, Kenya",
    phone: "+254 20 3874 000",
    hours: "Mon-Sun: 10:00 - 19:00",
    image: "/images/boutique-nairobi.jpg",
    flagship: true,
    description: "Our flagship boutique in the heart of Nairobi's luxury district.",
  },
  {
    id: 2,
    city: "Kampala",
    address: "Kololo, Kampala, Uganda",
    phone: "+256 41 4 507 000",
    hours: "Mon-Sun: 10:00 - 18:00",
    image: "/images/boutique-kampala.jpg",
    flagship: false,
    description: "Experience luxury in the vibrant capital of Uganda.",
  },
  {
    id: 3,
    city: "Accra",
    address: "Osu, Accra, Ghana",
    phone: "+233 30 221 8000",
    hours: "Mon-Sun: 10:00 - 19:00",
    image: "/images/boutique-accra.jpg",
    flagship: false,
    description: "Discover African elegance on Ghana's prestigious shopping avenue.",
  },
];

export const metadata = {
  title: "Boutiques | Afara Couture",
  description: "Visit our luxury boutiques across Africa.",
};

export default function BoutiquesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          {/* Hero */}
          <div className="text-center mb-24">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Our Boutiques
            </p>
            <h1 className="font-serif text-5xl md:text-7xl tracking-tight mb-6">
              Experience
              <span className="italic text-accent"> Afara Couture</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Visit our curated boutiques across Africa to discover our collections
              and receive personalized guidance from our luxury consultants.
            </p>
          </div>

          {/* Boutiques Grid */}
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
            {boutiques.map((boutique) => (
              <div key={boutique.id} className="group">
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <img
                    src={boutique.image}
                    alt={boutique.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {boutique.flagship && (
                    <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 text-xs tracking-[0.2em] uppercase">
                      Flagship
                    </div>
                  )}
                </div>
                <h2 className="font-serif text-3xl mb-2">{boutique.city}</h2>
                <p className="text-muted-foreground text-sm mb-6">{boutique.description}</p>
                
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium">{boutique.address}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium">{boutique.phone}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-sm font-medium">{boutique.hours}</p>
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full border border-border px-6 py-3 text-sm tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors duration-300">
                  Visit Boutique
                </button>
              </div>
            ))}
          </div>

          {/* Map Section */}
          <div className="bg-muted/30 border border-border rounded-lg p-12 mb-24">
            <h2 className="font-serif text-4xl mb-6">Visit Us</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl">
              Afara Couture boutiques are located in the heart of Africa's premier shopping destinations. 
              Visit us to experience our collections in person and receive personalized styling advice.
            </p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <p className="text-muted-foreground">Africa Map Coming Soon</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="text-center space-y-6">
            <h2 className="font-serif text-4xl">Schedule a Visit</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Contact us to book a private appointment or learn about upcoming events at our boutiques.
            </p>
            <button className="bg-foreground text-background px-8 py-3 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300">
              Book Appointment
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
