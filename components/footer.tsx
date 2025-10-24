import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                <span className="text-foreground font-serif font-bold">UT</span>
              </div>
              <h3 className="text-lg font-serif font-bold">Umroh Travel</h3>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Mitra terpercaya untuk bisnis travel umroh Anda di Arab Saudi dengan layanan premium dan profesional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold mb-6 text-lg">Menu</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="text-background/80 hover:text-background transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Layanan
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/80 hover:text-background transition-colors">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold mb-6 text-lg">Layanan</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Hotel & Catering
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Transportasi
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Muthowwif
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Videography
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold mb-6 text-lg">Kontak</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-background/80">+966 12 345 6789</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-background/80">info@umrohtravel.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="text-background/80">Jeddah, Saudi Arabia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/80">© 2025 Umroh Travel. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
