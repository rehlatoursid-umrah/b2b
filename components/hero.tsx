import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="relative py-24 md:py-40 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-sm font-medium text-primary tracking-widest uppercase">Solusi Bisnis Umroh</p>
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground leading-tight">
                Mitra Terpercaya untuk Bisnis Travel Umroh Anda
              </h1>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              Solusi lengkap dari akomodasi premium, transportasi modern, hingga layanan spiritual untuk kesuksesan
              operasional bisnis travel umroh Anda di Arab Saudi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center gap-2 px-8 py-6 text-base">
                Lihat Layanan
                <ArrowRight size={20} />
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-base bg-transparent"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96 rounded-xl overflow-hidden">
            <img src="/luxury-umroh-kaaba-saudi-arabia.jpg" alt="Umroh Travel Services" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
