"use client";

export function Heritage() {
  return (
    <section id="heritage" className="py-24 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="max-w-[1800px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left - Content */}
          <div className="space-y-8 lg:pr-12">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/60">
                Our Heritage
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1]">
                African craftsmanship
                <span className="block italic text-accent">celebrated</span>
                across generations
              </h2>
            </div>

            <p className="text-primary-foreground/70 text-lg leading-relaxed max-w-lg">
              Founded in 2022 in Nairobi, Afara Couture celebrates the artisanal excellence of East Africa.
              Each piece is shaped through a dialogue between traditional African craft techniques and
              contemporary luxury design, honoring heritage with a refined modern point of view.
            </p>

            <div className="grid grid-cols-3 gap-8 py-8 border-y border-primary-foreground/20">
              <div>
                <p className="font-serif text-4xl md:text-5xl text-accent">4</p>
                <p className="text-sm text-primary-foreground/60 mt-1">
                  Years of Craft
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-accent">52</p>
                <p className="text-sm text-primary-foreground/60 mt-1">
                  Master Artisans
                </p>
              </div>
              <div>
                <p className="font-serif text-4xl md:text-5xl text-accent">8k+</p>
                <p className="text-sm text-primary-foreground/60 mt-1">
                  Creations Made
                </p>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-3 border border-primary-foreground text-primary-foreground px-8 py-4 text-sm tracking-[0.2em] uppercase min-h-12 hover:bg-primary-foreground hover:text-primary transition-all duration-300"
            >
              Discover Our Story
            </button>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] lg:aspect-[3/4]">
              {/* Main image */}
              <img
                src="/images/heritage-portrait.jpg"
                alt="Luxury African fashion elegance"
                className="w-full h-full object-cover"
              />
              {/* Decorative quote */}
              <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-accent p-6 md:p-8 max-w-[280px]">
                <p className="font-serif text-accent-foreground text-lg md:text-xl italic leading-snug">
                  "African craftsmanship deserves a global stage."
                </p>
                <p className="text-accent-foreground/70 text-sm mt-3">
                  - Afara Couture Atelier
                </p>
              </div>
            </div>

            {/* Side decoration */}
            <div className="absolute -top-8 -right-4 md:-right-8 w-24 h-24 md:w-32 md:h-32 border border-accent/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
