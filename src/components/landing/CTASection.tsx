import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Clock, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const whatsappLink = "https://wa.me/6281234567890?text=Halo%20Sadita%20Indonesia%2C%20saya%20ingin%20konsultasi%20produk";

  return (
    <section className="py-20 lg:py-28 bg-hero-gradient relative overflow-hidden" ref={ref}>
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full border-2 border-[hsl(0_0%_100%)]" />
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full border-2 border-[hsl(0_0%_100%)]" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full border-2 border-[hsl(0_0%_100%)]" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Clock Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[hsl(0_0%_100%/0.15)] backdrop-blur-sm mb-6">
            <Clock className="w-8 h-8 text-sadita-gold" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[hsl(0_0%_100%)] mb-6">
            Jaga Kondisi Sapi{" "}
            <span className="text-gradient-gold">Lebih Awal</span>
          </h2>
          
          <p className="text-lg md:text-xl text-[hsl(0_0%_100%/0.85)] mb-10 leading-relaxed">
            Terutama menjelang Idul Adha, pencegahan dan perawatan dini adalah kunci. 
            Konsultasikan kebutuhan ternak Anda dengan tim kami.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant="whatsapp"
              size="xl"
              className="group text-lg px-10 py-6 h-auto"
              asChild
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
                Tanya Produk & Cara Pakai Sekarang
              </a>
            </Button>
            <p className="text-sm text-[hsl(0_0%_100%/0.6)] mt-4">
              Konsultasi ringan, sesuai kondisi kandang Anda
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-12 pt-8 border-t border-[hsl(0_0%_100%/0.2)]"
          >
            <div className="flex items-center gap-2 text-[hsl(0_0%_100%/0.8)]">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+62 812-3456-7890</span>
            </div>
            <div className="flex items-center gap-2 text-[hsl(0_0%_100%/0.8)]">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Indonesia</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
