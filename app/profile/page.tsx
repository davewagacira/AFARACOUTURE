"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { LogOut, Settings, Heart, Package, MapPin } from "lucide-react";
import { productPricing } from "@/lib/product-pricing";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("overview");

  const user = {
    name: "Amara Okonkwo",
    email: "amara@example.com",
    phone: "+254 712 345 678",
    joined: "2022",
    tier: "Prestige Club Member",
  };

  const orders = [
    {
      id: "AFR-001234",
      date: "March 15, 2026",
      items: "Serengeti Necklace",
      total: productPricing.serengetiNecklace,
      status: "Delivered",
    },
    {
      id: "AFR-001233",
      date: "February 28, 2026",
      items: "Savanna Gown",
      total: productPricing.savannaGown,
      status: "Delivered",
    },
    {
      id: "AFR-001232",
      date: "February 10, 2026",
      items: "Nairobi Luxury Bag",
      total: productPricing.nairobiLuxuryBag,
      status: "Delivered",
    },
  ];

  const addresses = [
    {
      id: 1,
      name: "Home",
      address: "123 Westlands Road",
      city: "Nairobi, Kenya",
      default: true,
    },
    {
      id: 2,
      name: "Office",
      address: "456 Business Park",
      city: "Nairobi, Kenya",
      default: false,
    },
  ];

  const wishlist = [
    {
      id: 1,
      name: "Golden Spiral Earrings",
      price: productPricing.goldenSpiralEarrings,
      image: "/images/jewelry.jpg",
    },
    {
      id: 2,
      name: "Urban Elegance Handbag",
      price: productPricing.urbanEleganceHandbag,
      image: "/images/leather-bag.jpg",
    },
    {
      id: 3,
      name: "Essence of Kenya",
      price: productPricing.essenceOfKenya,
      image: "/images/fragrance.jpg",
    },
  ];

  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-[1800px] mx-auto">
          {/* Header */}
          <div className="flex items-start justify-between mb-12">
            <div>
              <h1 className="font-serif text-4xl md:text-5xl">{user.name}</h1>
              <p className="text-muted-foreground mt-2">{user.tier}</p>
            </div>
            <button className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <LogOut className="w-5 h-5" />
              <span className="text-sm tracking-[0.1em]">Sign Out</span>
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-24">
            {/* Sidebar */}
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab("overview")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 ${
                  activeTab === "overview"
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-muted"
                }`}
              >
                Account Overview
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 ${
                  activeTab === "orders"
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <Package className="w-4 h-4" />
                Orders
              </button>
              <button
                onClick={() => setActiveTab("addresses")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 ${
                  activeTab === "addresses"
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <MapPin className="w-4 h-4" />
                Addresses
              </button>
              <button
                onClick={() => setActiveTab("wishlist")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 ${
                  activeTab === "wishlist"
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <Heart className="w-4 h-4" />
                Wishlist
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-300 flex items-center gap-2 ${
                  activeTab === "settings"
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-muted"
                }`}
              >
                <Settings className="w-4 h-4" />
                Settings
              </button>
            </div>

            {/* Content */}
            <div className="md:col-span-2">
              {activeTab === "overview" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="font-serif text-2xl mb-6">Account Information</h2>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">{user.email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">{user.phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Member Since</p>
                        <p className="font-medium">{user.joined}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-8">
                    <h2 className="font-serif text-2xl mb-6">Membership Benefits</h2>
                    <ul className="space-y-3">
                      {[
                        "Early access to new collections",
                        "Exclusive member-only events",
                        "Personal styling sessions",
                        "Priority concierge service",
                        "10% discount on all purchases",
                        "Complimentary alterations",
                      ].map((benefit) => (
                        <li key={benefit} className="flex items-center gap-3">
                          <span className="w-2 h-2 bg-accent rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === "orders" && (
                <div>
                  <h2 className="font-serif text-2xl mb-6">Order History</h2>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="border border-border rounded-lg p-6 hover:border-accent transition-colors duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <p className="text-sm text-muted-foreground">Order {order.id}</p>
                            <p className="font-medium">{order.items}</p>
                          </div>
                          <span className="px-3 py-1 bg-green-900/20 text-green-600 text-xs rounded-full">
                            {order.status}
                          </span>
                        </div>
                        <div className="flex items-end justify-between">
                          <p className="text-sm text-muted-foreground">{order.date}</p>
                          <p className="font-serif text-lg">KES {order.total.toLocaleString("en-US")}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "addresses" && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-2xl">Saved Addresses</h2>
                    <button className="text-sm text-accent hover:underline">+ Add New</button>
                  </div>
                  <div className="space-y-4">
                    {addresses.map((addr) => (
                      <div
                        key={addr.id}
                        className="border border-border rounded-lg p-6 hover:border-accent transition-colors duration-300"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <h3 className="font-medium">{addr.name}</h3>
                          {addr.default && (
                            <span className="text-xs text-accent">DEFAULT</span>
                          )}
                        </div>
                        <p className="text-muted-foreground text-sm">{addr.address}</p>
                        <p className="text-muted-foreground text-sm">{addr.city}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "wishlist" && (
                <div>
                  <h2 className="font-serif text-2xl mb-6">My Wishlist</h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    {wishlist.map((item) => (
                      <div key={item.id} className="group">
                        <div className="relative overflow-hidden aspect-[3/4] mb-4 rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <h3 className="font-serif text-lg group-hover:text-accent transition-colors duration-300">
                          {item.name}
                        </h3>
                        <p className="font-serif text-lg mt-2">
                          KES {item.price.toLocaleString("en-US")}
                        </p>
                        <button className="mt-4 w-full border border-border px-6 py-2 text-sm tracking-[0.1em] uppercase hover:border-accent hover:text-accent transition-colors duration-300">
                          Add to Cart
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === "settings" && (
                <div className="space-y-8">
                  <div>
                    <h2 className="font-serif text-2xl mb-6">Notification Preferences</h2>
                    <div className="space-y-4">
                      {[
                        { label: "New Collection Announcements", checked: true },
                        { label: "Exclusive Offers", checked: true },
                        { label: "Order Updates", checked: true },
                        { label: "Newsletter", checked: false },
                      ].map((pref) => (
                        <label key={pref.label} className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" defaultChecked={pref.checked} className="w-4 h-4" />
                          <span>{pref.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-8">
                    <h2 className="font-serif text-2xl mb-6">Account Security</h2>
                    <button className="border border-border px-6 py-3 text-sm tracking-[0.2em] uppercase hover:border-accent hover:text-accent transition-colors duration-300">
                      Change Password
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
