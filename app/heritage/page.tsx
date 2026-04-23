import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Our Heritage | Afara Couture",
  description: "Discover the story and values behind Afara Couture.",
};

export default function HeritagePage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-28 md:pt-32 pb-20 md:pb-24 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          {/* Hero */}
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
                Our Story
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1]">
                African craftsmanship
                <span className="block italic text-accent">celebrated</span>
                across generations
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-lg">
                Founded in 2022 in Nairobi, Afara Couture celebrates the artisanal excellence of East Africa.
                Each piece is shaped through a dialogue between traditional African craft techniques
                and contemporary luxury design, honoring heritage with a refined modern point of view.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 py-8 border-y border-border">
                <div>
                  <p className="font-serif text-4xl md:text-5xl text-accent">4</p>
                  <p className="text-sm text-muted-foreground mt-1">Years of Craft</p>
                </div>
                <div>
                  <p className="font-serif text-4xl md:text-5xl text-accent">52</p>
                  <p className="text-sm text-muted-foreground mt-1">Master Artisans</p>
                </div>
                <div>
                  <p className="font-serif text-4xl md:text-5xl text-accent">8k+</p>
                  <p className="text-sm text-muted-foreground mt-1">Creations Made</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src="/images/heritage-portrait.jpg"
                alt="Luxury African fashion"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="space-y-12">
            <h2 className="font-serif text-3xl md:text-4xl">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center text-2xl font-serif">
                  A
                </div>
                <h3 className="font-serif text-2xl">Authenticity</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We honor the authentic traditions of African craftsmanship, 
                  ensuring every piece tells a genuine story rooted in heritage.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center text-2xl font-serif">
                  E
                </div>
                <h3 className="font-serif text-2xl">Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every stitch, every detail, and every finish meets 
                  the highest standards of luxury craftsmanship.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent text-accent-foreground flex items-center justify-center text-2xl font-serif">
                  S
                </div>
                <h3 className="font-serif text-2xl">Sustainability</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to ethical production and environmental 
                  responsibility in all our operations.
                </p>
              </div>
            </div>
          </div>

          {/* Heritage Quote */}
          <div className="mt-20 md:mt-24 border-l-4 border-accent pl-5 sm:pl-8 py-8">
            <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl italic leading-relaxed">
              "African craftsmanship deserves a global stage. We are not only creating fashion;
              we are refining and preserving a living legacy."
            </blockquote>
            <p className="text-muted-foreground mt-4">- Afara Couture Atelier</p>
          </div>

          {/* Team */}
          <div className="mt-24">
            <h2 className="font-serif text-3xl md:text-4xl mb-12">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { name: "Amara Okonkwo", role: "Founder & Creative Director", image: "/images/client-amara.jpg" },
                { name: "Kofi Mensah", role: "Head of Craftsmanship", image: "/images/client-kofi.jpg" },
                { name: "Zara Hassan", role: "Brand Ambassador", image: "/images/client-zara.jpg" },
              ].map((member) => (
                <div key={member.name} className="text-center">
                  <div className="aspect-square rounded-lg overflow-hidden mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-serif text-xl">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
