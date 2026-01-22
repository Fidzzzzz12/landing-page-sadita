import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Droplets, Leaf, Heart, Sparkles } from "lucide-react";

const WhyBothSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-28 bg-card relative overflow-hidden" ref={ref}>
      {/* Decorative Elements */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-sadita-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-sadita-brown/5 rounded-full blur-3xl" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-sadita-gold uppercase tracking-wider mb-4">
            Kombinasi Terbaik
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kenapa Digunakan{" "}
            <span className="text-gradient-gold">Bersama?</span>
          </h2>
        </motion.div>

        {/* Combination Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-3xl shadow-elevated p-8 lg:p-12">
            <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
              {/* APHTHOCLYN */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sadita-green/15 mb-4">
                  <Droplets className="w-8 h-8 text-sadita-green" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">APHTHOCLYN</h3>
                <p className="text-muted-foreground">
                  Perawatan <strong className="text-sadita-green">luar</strong> pada luka mulut & kuku
                </p>
              </div>

              {/* Plus Sign */}
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-sadita-gold/20 flex items-center justify-center">
                  <span className="text-2xl font-bold text-sadita-gold">+</span>
                </div>
              </div>

              {/* GIZCOW */}
              <div className="text-center md:text-right">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sadita-brown/15 mb-4">
                  <Leaf className="w-8 h-8 text-sadita-brown" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">GIZCOW</h3>
                <p className="text-muted-foreground">
                  Dukungan nutrisi dari <strong className="text-sadita-brown">dalam</strong>
                </p>
              </div>
            </div>

            {/* Result Arrow */}
            <div className="flex justify-center my-8">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <ArrowRight className="w-8 h-8 text-sadita-gold rotate-90" />
              </motion.div>
            </div>

            {/* Result */}
            <div className="bg-gradient-to-r from-sadita-green/10 via-sadita-gold/10 to-sadita-brown/10 rounded-2xl p-6 lg:p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-sadita-gold" />
                <h4 className="text-lg font-bold text-foreground">Hasil Optimal</h4>
                <Sparkles className="w-6 h-6 text-sadita-gold" />
              </div>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Pendekatan ini membantu sapi{" "}
                <strong className="text-foreground">lebih nyaman</strong>,{" "}
                <strong className="text-foreground">lebih pulih</strong>, dan{" "}
                <strong className="text-foreground">lebih siap dijual atau dikurbankan</strong>.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyBothSection;
