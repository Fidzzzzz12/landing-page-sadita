import { MessageCircle, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-[hsl(0_0%_100%)] py-12 lg:py-16">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-sadita-green flex items-center justify-center font-bold text-lg text-[hsl(0_0%_100%)]">
                S
              </div>
              <span className="font-bold text-xl">Sadita Indonesia</span>
            </div>
            <p className="text-[hsl(0_0%_100%/0.7)] text-sm leading-relaxed">
              Perusahaan obat dan nutrisi hewan ternak yang berkomitmen menjaga kesehatan ternak Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm text-[hsl(0_0%_100%/0.7)]">
              <li><a href="#tentang" className="hover:text-[hsl(0_0%_100%)] transition-colors">Tentang Kami</a></li>
              <li><a href="#produk" className="hover:text-[hsl(0_0%_100%)] transition-colors">Produk</a></li>
              <li><a href="#kontak" className="hover:text-[hsl(0_0%_100%)] transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="kontak">
            <h4 className="font-semibold mb-4">Hubungi Kami</h4>
            <ul className="space-y-3 text-sm text-[hsl(0_0%_100%/0.7)]">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@saditaindonesia.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[hsl(0_0%_100%/0.1)] flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[hsl(0_0%_100%/0.5)]">
          <p>&copy; {currentYear} PT. Sadita Indonesia. Hak Cipta Dilindungi.</p>
          <p>Produk Terdaftar Resmi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
