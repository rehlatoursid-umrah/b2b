"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const galleryItems = [
  { id: 1, category: "hotel", title: "Hotel Premium", image: "/luxury-hotel-saudi-arabia.jpg" },
  { id: 2, category: "transport", title: "Armada Bus", image: "/luxury-bus-transportation.jpg" },
  { id: 3, category: "guide", title: "Muthowwif", image: "/islamic-guide-kaaba.jpg" },
  { id: 4, category: "video", title: "Dokumentasi", image: "/professional-videography.jpg" },
  { id: 5, category: "hotel", title: "Kamar Nyaman", image: "/hotel-room-saudi.jpg" },
  { id: 6, category: "transport", title: "Perjalanan Nyaman", image: "/comfortable-travel-bus.jpg" },
]

const categories = ["semua", "hotel", "transport", "guide", "video"]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("semua")

  const filteredItems =
    activeCategory === "semua" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="gallery" className="py-24 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Galeri</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Pengalaman dan Fasilitas Kami
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              variant={activeCategory === category ? "default" : "outline"}
              className={`capitalize ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border-border/50 text-foreground hover:border-primary/50"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-lg h-72 cursor-pointer">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/80 transition-colors flex items-end p-6">
                <h3 className="text-white font-serif font-semibold text-lg">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
