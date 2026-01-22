import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Store, Building2, CheckCircle2 } from "lucide-react";

const TargetSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const targets = [
    {
      icon: User,
      title: "Peternak Sapi",
      description: "Yang ingin menjaga kesehatan ternak dengan produk berkualitas",
    },
    {
      icon: Store,
      title: "Penjual Sapi Kurban",
      description: "Yang perlu memastikan sapi dalam kondisi prima saat dijual",
    },
    {
      icon: Building2,
      title: "Pengelola Kandang",
      description: "Yang bertanggung jawab atas kesehatan banyak ternak",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-muted" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-sadita-green uppercase tracking-wider mb-4">
            Untuk Siapa
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Siapa yang Cocok?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Produk Sadita Indonesia dirancang untuk semua yang peduli dengan 
            kesehatan dan performa ternak.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {targets.map((target, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group text-center"
            >
              <div className="relative inline-flex">
                <div className="w-24 h-24 rounded-2xl bg-card shadow-card flex items-center justify-center mb-6 group-hover:shadow-elevated transition-shadow">
                  <target.icon className="w-10 h-10 text-sadita-green" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-sadita-green flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-[hsl(0_0%_100%)]" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {target.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {target.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
