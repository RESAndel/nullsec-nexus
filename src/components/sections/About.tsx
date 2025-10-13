import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-primary"
          style={{ textShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
        >
          Who's This Guy? 🤔
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 text-lg text-muted-foreground"
          >
            <p>Hey there! I'm that person who looks at a website and wonders "I wonder what happens if I click this 47 times..." Spoiler alert: interesting things happen.</p>
            <p>I spend my time hunting bugs (the digital kind), solving CTF challenges at 3 AM, and occasionally remembering to touch grass. My idea of fun? Finding that one vulnerability everyone else missed.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-4 text-lg text-muted-foreground"
          >
            <p>When I'm not staring at Burp Suite or writing Python scripts that may or may not work, you'll find me competing in CTFs, exploring new attack vectors, or helping secure the internet one bug at a time.</p>
            <p>My philosophy: If it's connected to the internet, it's probably hackable. My mission: Prove it (ethically, of course).</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
