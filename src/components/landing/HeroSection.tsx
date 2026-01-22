import { motion } from "framer-motion";
import { MessageCircle, Shield, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCow from "@/assets/hero-cow.jpg";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/6281234567890?text=Halo%20Sadita%20Indonesia%2C%20saya%20ingin%20konsultasi%20produk";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCow}
          alt="Sapi sehat di peternakan"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero-gradient opacity-85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(25_30%_10%/0.5)] to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-[hsl(0_0%_100%/0.15)] backdrop-blur-sm px-4 py-2 mb-6"
          >
            <Shield className="w-4 h-4 text-sadita-gold" />
            <span className="text-sm font-medium text-[hsl(0_0%_100%)]">
              Produk Terdaftar Resmi
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(0_0%_100%)] leading-tight mb-6"
          >
            Menjelang Idul Adha,{" "}
            <span className="text-gradient-gold">
              Pastikan Sapi Tetap Sehat
            </span>{" "}
            & Nafsu Makan Terjaga
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[hsl(0_0%_100%/0.85)] mb-8 max-w-2xl leading-relaxed"
          >
            Pendamping perawatan sapi dari <strong>Sadita Indonesia</strong> untuk 
            membantu menghadapi risiko PMK dan menjaga kondisi ternak tetap prima.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="whatsapp"
              size="xl"
              className="group"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                Konsultasi Produk via WhatsApp
              </a>
            </Button>
            <Button
              variant="hero-outline"
              size="xl"
              asChild
            >
              <a href="#produk">
                <Leaf className="w-5 h-5" />
                Lihat Produk Kami
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-[hsl(0_0%_100%/0.2)]"
          >
            {[
              { value: "1000+", label: "Peternak Terbantu" },
              { value: "5 Tahun", label: "Pengalaman" },
              { value: "100%", label: "Bahan Berkualitas" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="text-2xl font-bold text-sadita-gold">{stat.value}</div>
                <div className="text-sm text-[hsl(0_0%_100%/0.7)]">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-[hsl(0_0%_100%/0.4)] flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 rounded-full bg-[hsl(0_0%_100%)]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
