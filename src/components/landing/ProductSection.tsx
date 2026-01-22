import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Droplets, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import aphthoclynImg from "@/assets/product-aphthoclyn.jpg";
import gizcowImg from "@/assets/product-gizcow.jpg";

const ProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const products = [
    {
      id: "aphthoclyn",
      name: "APHTHOCLYN",
      tagline: "Perawatan Luar",
      subtitle: "Salep oles anti Aphthovirus PMK",
      image: aphthoclynImg,
      icon: Droplets,
      color: "green",
      benefits: [
        "Membantu mengurangi virus PMK di area mulut & kuku",
        "Membunuh bakteri di permukaan luka",
        "Menjaga area luka tetap bersih",
      ],
      usage: [
        "Oleskan pada luka mulut & kaki sapi",
        "Aplikasikan 2–3 kali sehari",
        "Pastikan area bersih & kering sebelum pengolesan",
      ],
    },
    {
      id: "gizcow",
      name: "GIZCOW",
      tagline: "Dukungan Nutrisi",
      subtitle: "Bubur gizi untuk membantu pemulihan sapi",
      image: gizcowImg,
      icon: Leaf,
      color: "brown",
      benefits: [
        "Membantu meningkatkan nafsu makan",
        "Mendukung daya tahan tubuh sapi",
        "Membantu mempercepat pemulihan kondisi",
      ],
      usage: [
        "1 sachet dicampur dengan 2,5 L air",
        "Campurkan ke pakan hijauan/konsentrat",
        "Berikan 2–3 kali sehari",
      ],
    },
  ];

  return (
    <section id="produk" className="py-20 lg:py-28 bg-section-green" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-sadita-green uppercase tracking-wider mb-4">
            Solusi Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pendekatan dari{" "}
            <span className="text-gradient-green">Luar & Dalam</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Kombinasi perawatan eksternal dan dukungan nutrisi internal untuk 
            hasil pemulihan yang optimal.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-card rounded-3xl shadow-card hover:shadow-elevated overflow-hidden transition-all duration-300"
            >
              {/* Product Header */}
              <div className={`relative p-8 pb-0 ${product.color === "green" ? "bg-gradient-to-br from-sadita-green/10 to-transparent" : "bg-gradient-to-br from-sadita-brown/10 to-transparent"}`}>
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${product.color === "green" ? "bg-sadita-green/20 text-sadita-green" : "bg-sadita-brown/20 text-sadita-brown"}`}>
                      {product.tagline}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      {product.subtitle}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${product.color === "green" ? "bg-sadita-green/20" : "bg-sadita-brown/20"}`}>
                    <product.icon className={`w-6 h-6 ${product.color === "green" ? "text-sadita-green" : "text-sadita-brown"}`} />
                  </div>
                </div>
                
                {/* Product Image */}
                <div className="relative mx-auto w-48 h-48 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Product Content */}
              <div className="p-8">
                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                    Manfaat Utama
                  </h4>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 mt-0.5 flex-shrink-0 ${product.color === "green" ? "text-sadita-green" : "text-sadita-brown"}`} />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Usage */}
                <div className="bg-muted/50 rounded-xl p-5">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-3">
                    Cara Pakai
                  </h4>
                  <ol className="space-y-2">
                    {product.usage.map((step, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${product.color === "green" ? "bg-sadita-green text-[hsl(0_0%_100%)]" : "bg-sadita-brown text-[hsl(0_0%_100%)]"}`}>
                          {i + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
