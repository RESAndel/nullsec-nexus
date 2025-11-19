import { motion } from "framer-motion";
import { certifications } from "@/data/portfolio";

export const Certifications = () => {
  return (
    <section id="certifications" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-primary"
          style={{ textShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
        >
          Certifications 
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border-l-4 border-primary rounded-lg p-6 backdrop-blur-sm hover:translate-x-2 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]"
            >
              <h3 className="text-2xl font-bold text-primary mb-2">{cert.name}</h3>
              <p className="text-muted-foreground">{cert.full}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
