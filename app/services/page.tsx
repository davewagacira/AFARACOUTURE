import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  ArrowRight,
  ConciergeBell,
  Gem,
  PencilRuler,
  Scissors,
  Shirt,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Services | Afara Couture",
  description: "Explore our premium services designed for luxury clients.",
};

const services = [
  {
    title: "Personal Shopping",
    description:
      "Work with our expert stylists to curate a collection that reflects your unique aesthetic and lifestyle.",
    icon: Shirt,
  },
  {
    title: "Bespoke Tailoring",
    description:
      "Custom designs created exclusively for you, from fabric selection to final fitting.",
    icon: Scissors,
  },
  {
    title: "Styling Consultation",
    description:
      "Professional styling advice to help you maximize your wardrobe and express your personal style.",
    icon: PencilRuler,
  },
  {
    title: "Alterations & Repairs",
    description:
      "Expert care for your Afara pieces, ensuring they remain pristine for years to come.",
    icon: Gem,
  },
  {
    title: "Concierge Service",
    description:
      "Dedicated concierge support for all your luxury needs and special requests.",
    icon: ConciergeBell,
  },
  {
    title: "VIP Events",
    description:
      "Exclusive previews and private shopping events for our most valued clients.",
    icon: Sparkles,
  },
] as const;

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-28 md:pt-32 pb-20 md:pb-24 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="space-y-6 mb-24">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
              Premium Services
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl tracking-tight">
              Personalized
              <span className="italic text-accent"> Experiences</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl leading-relaxed">
              At Afara Couture, we believe luxury is personal. Our concierge
              services are designed to enhance your experience and celebrate
              your individuality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-24">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div key={service.title} className="space-y-4 group cursor-pointer">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-accent/8 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <button className="text-accent flex items-center gap-2 hover:gap-3 transition-all duration-300">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="bg-muted/30 border border-border rounded-lg p-12 md:p-16 mb-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-serif text-3xl md:text-4xl">Afara Prestige Club</h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  Join our exclusive membership program and enjoy:
                </p>
                <ul className="space-y-3">
                  {[
                    "Early access to new collections",
                    "Exclusive member-only events",
                    "Personal styling sessions",
                    "Priority concierge service",
                    "Special discounts and offers",
                    "Complimentary alterations",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-accent rounded-full" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full sm:w-auto bg-accent text-accent-foreground px-8 py-3 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300">
                  Join Now
                </button>
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src="/images/heritage-portrait.jpg"
                  alt="VIP Experience"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl">Ready to Experience Luxury?</h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Contact our team to schedule a consultation or learn more about our
              services.
            </p>
            <button className="w-full sm:w-auto bg-foreground text-background px-8 py-3 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
