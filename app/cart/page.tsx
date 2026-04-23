"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartPage() {
  const [items, setItems] = useState<
    { id: number; name: string; price: number; quantity: number; image: string }[]
  >([]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setItems(items.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 100000 ? 0 : 2500;
  const tax = Math.round(subtotal * 0.16);
  const total = subtotal + shipping + tax;

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          <h1 className="font-serif text-5xl md:text-6xl mb-16">Shopping Cart</h1>

          {items.length === 0 ? (
            <div className="text-center py-24">
              <p className="text-muted-foreground text-lg mb-6">Your cart is empty</p>
              <button className="bg-foreground text-background px-8 py-3 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300">
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-8">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="border border-border rounded-lg p-6 hover:border-accent transition-colors duration-300"
                  >
                    <div className="grid md:grid-cols-4 gap-6">
                      {/* Image */}
                      <div className="md:col-span-1">
                        <div className="aspect-[3/4] rounded-lg overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Details */}
                      <div className="md:col-span-3 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-xl mb-2">{item.name}</h3>
                          <p className="font-serif text-lg text-accent">
                            KES {item.price.toLocaleString("en-US")}
                          </p>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity */}
                          <div className="flex items-center gap-2 border border-border rounded-lg">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-muted transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-4 font-medium">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-muted transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          {/* Remove */}
                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="p-2 text-muted-foreground hover:text-red-600 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>

                        {/* Subtotal for item */}
                        <p className="text-sm text-muted-foreground mt-4">
                          Subtotal: KES {(item.price * item.quantity).toLocaleString("en-US")}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="border border-border rounded-lg p-8 sticky top-32">
                  <h2 className="font-serif text-2xl mb-8">Order Summary</h2>

                  <div className="space-y-4 mb-8 pb-8 border-b border-border">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span>KES {subtotal.toLocaleString("en-US")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>KES {shipping.toLocaleString("en-US")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (16%)</span>
                      <span>KES {tax.toLocaleString("en-US")}</span>
                    </div>
                  </div>

                  <div className="flex justify-between mb-8">
                    <span className="font-serif text-lg">Total</span>
                    <span className="font-serif text-lg">KES {total.toLocaleString("en-US")}</span>
                  </div>

                  <button className="w-full bg-foreground text-background py-3 text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity duration-300 mb-3">
                    Proceed to Checkout
                  </button>
                  <button className="w-full border border-border py-3 text-sm tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors duration-300">
                    Continue Shopping
                  </button>

                  <p className="text-xs text-muted-foreground text-center mt-6">
                    We offer free shipping on orders over KES 100,000
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
