import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { AlertTriangle, TrendingDown, Bug, Clock } from "lucide-react";

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const problems = [
    {
      icon: TrendingDown,
      title: "Nafsu Makan Menurun",
      description: "Sapi tidak mau makan, berat badan turun menjelang kurban",
    },
    {
      icon: AlertTriangle,
      title: "Luka di Mulut & Kuku",
      description: "Mengganggu aktivitas makan dan mobilitas sapi",
    },
    {
      icon: Bug,
      title: "Risiko Infeksi",
      description: "Bakteri dan virus dapat memperburuk kondisi ternak",
    },
    {
      icon: Clock,
      title: "Pemulihan Lambat",
      description: "Kondisi sapi tidak kunjung membaik meski sudah dirawat",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-card relative overflow-hidden border-y border-border" ref={ref}>
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-sadita-warning/5 to-transparent" />
      
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-sadita-warning uppercase tracking-wider mb-4">
            <AlertTriangle className="w-4 h-4" />
            Masalah Umum
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tantangan Menjelang{" "}
            <span className="text-sadita-warning">Idul Adha</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Banyak peternak menghadapi masalah ini dan seringkali hanya menunggu 
            tanpa penanganan yang tepat.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 border-2 border-transparent hover:border-sadita-warning/30 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-sadita-warning/10 flex items-center justify-center mb-5 group-hover:bg-sadita-warning/20 transition-colors">
                <problem.icon className="w-6 h-6 text-sadita-warning" />
              </div>
              
              <h3 className="text-lg font-bold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-sadita-green/10 rounded-full px-6 py-3">
            <span className="text-2xl">👉</span>
            <span className="text-foreground font-medium">
              Perlu <strong className="text-sadita-green">pendamping perawatan yang tepat</strong>, 
              bukan sekadar menunggu.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
