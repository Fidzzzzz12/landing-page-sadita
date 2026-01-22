import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Award, Users, Beaker } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Award,
      title: "Terdaftar Resmi",
      description: "Produk terdaftar dan memenuhi standar regulasi",
    },
    {
      icon: Beaker,
      title: "Formula Teruji",
      description: "Dikembangkan dengan riset dan pengujian lapangan",
    },
    {
      icon: Users,
      title: "Mudah Diaplikasikan",
      description: "Praktis digunakan oleh peternak di lapangan",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-background" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold text-sadita-green uppercase tracking-wider mb-4">
            Tentang Kami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sadita Indonesia
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Perusahaan obat dan nutrisi hewan ternak yang berkomitmen membantu peternak 
            menjaga <strong className="text-foreground">kesehatan, daya tahan, dan performa sapi</strong> melalui 
            produk berkualitas yang mudah diaplikasikan di lapangan.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div className="absolute top-0 left-8 w-16 h-1 bg-gradient-to-r from-sadita-green to-sadita-green-light rounded-b-full" />
              
              <div className="w-14 h-14 rounded-xl bg-sadita-green/10 flex items-center justify-center mb-6 group-hover:bg-sadita-green/20 transition-colors">
                <feature.icon className="w-7 h-7 text-sadita-green" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-sadita-green" />
            <span>Produk Berkualitas</span>
          </div>
          <span className="hidden sm:block text-border">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-sadita-green" />
            <span>Dukungan Konsultasi</span>
          </div>
          <span className="hidden sm:block text-border">•</span>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-sadita-green" />
            <span>Pengiriman Seluruh Indonesia</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
