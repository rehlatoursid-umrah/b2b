import { Card } from "@/components/ui/card"
import { CheckCircle2, Globe, Zap, Award } from "lucide-react"

const reasons = [
  {
    icon: Award,
    title: "Pengalaman",
    description: "Lebih dari 10 tahun melayani industri travel umroh dengan track record terpercaya",
  },
  {
    icon: Globe,
    title: "Jaringan Luas",
    description: "Kemitraan strategis dengan hotel, transportasi, dan guide terbaik di Arab Saudi",
  },
  {
    icon: Zap,
    title: "Layanan Lengkap",
    description: "One-stop solution untuk semua kebutuhan operasional bisnis travel umroh Anda",
  },
  {
    icon: CheckCircle2,
    title: "Professional",
    description: "Tim profesional berpengalaman siap memberikan support 24/7 untuk kesuksesan Anda",
  },
]

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 md:py-40 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Mengapa Kami</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Pilihan Terbaik untuk Partnership Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Komitmen kami adalah kesuksesan jangka panjang bisnis partnership Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-all duration-300 border-border/50 bg-card hover:border-primary/30"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-lg">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-foreground mb-3">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
