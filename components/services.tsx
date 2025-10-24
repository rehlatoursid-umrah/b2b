import { Card } from "@/components/ui/card"
import { Hotel, Bus, Users, Camera } from "lucide-react"

const services = [
  {
    icon: Hotel,
    title: "Hotel & Catering",
    description: "Akomodasi premium dan catering berkualitas tinggi dengan standar internasional",
  },
  {
    icon: Bus,
    title: "Transportasi",
    description: "Armada modern dengan driver profesional dan berpengalaman untuk kenyamanan maksimal",
  },
  {
    icon: Users,
    title: "Muthowwif",
    description: "Jaringan muthowwif kompeten dan bersertifikat untuk membimbing dengan dedikasi",
  },
  {
    icon: Camera,
    title: "Videography",
    description: "Dokumentasi profesional dari basic hingga premium untuk mengabadikan momen berharga",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-40 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">Layanan Kami</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Solusi Komprehensif untuk Bisnis Anda
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Semua yang Anda butuhkan untuk operasional bisnis travel umroh yang sukses
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-border/50 group cursor-pointer bg-card hover:border-primary/30"
              >
                <div className="mb-6 inline-block p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
