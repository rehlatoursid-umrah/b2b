import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Ahmad Wijaya",
    company: "PT Travel Berkah",
    text: "Kerjasama dengan Umroh Travel sangat profesional dan memuaskan. Semua kebutuhan jamaah kami terpenuhi dengan baik.",
    rating: 5,
  },
  {
    name: "Siti Nurhaliza",
    company: "Umroh Sejahtera",
    text: "Layanan transportasi dan hotel mereka sangat reliable. Tim support mereka responsif dan membantu menyelesaikan masalah dengan cepat.",
    rating: 5,
  },
  {
    name: "Budi Santoso",
    company: "Travel Mandiri",
    text: "Harga kompetitif dengan kualitas terbaik. Kami sudah bermitra selama 3 tahun dan sangat puas dengan konsistensi layanan mereka.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 md:py-40 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Testimoni</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Kepercayaan dari Mitra B2B Kami
          </h2>
          <p className="text-lg text-muted-foreground">Kepuasan mitra adalah prioritas utama kami</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-border/50 bg-card hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 leading-relaxed italic text-sm">"{testimonial.text}"</p>
              <div className="border-t border-border/30 pt-6">
                <p className="font-serif font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
