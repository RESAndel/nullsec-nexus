import { motion } from "framer-motion";
import { MatrixRain } from "@/components/MatrixRain";
import { FloatingParticles } from "@/components/FloatingParticles";
import { Card3D } from "@/components/3DCard";
import { Shield, Code, Bug, Cpu, Lock, Terminal, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const skills = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Penetration Testing",
      items: ["Web Application Testing", "Network Penetration Testing", "Mobile App Security", "API Security Testing"]
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Security Tools",
      items: ["Burp Suite, OWASP ZAP", "Metasploit, Nmap", "Wireshark, tcpdump", "Ghidra, IDA Pro"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming & Scripting",
      items: ["Python, Bash", "JavaScript, PHP", "PowerShell", "SQL"]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Security Domains",
      items: ["OWASP Top 10", "Cloud Security (AWS, Azure)", "Incident Response", "Threat Intelligence"]
    }
  ];

  const projects = [
    {
      title: "Vulnerability Assessment Framework",
      description: "Developed an automated vulnerability scanning framework that integrates multiple security tools to identify and prioritize security risks across network infrastructure.",
      tags: ["Python", "Nmap", "Automation"]
    },
    {
      title: "Web App Security Testing",
      description: "Conducted comprehensive security assessments for e-commerce platforms, identifying critical vulnerabilities including SQL injection and XSS flaws.",
      tags: ["OWASP", "Burp Suite", "Pentesting"]
    },
    {
      title: "CTF Competitions",
      description: "Active participant in Capture The Flag competitions, specializing in web exploitation, cryptography, and reverse engineering challenges.",
      tags: ["CTF", "Binary Exploitation", "Forensics"]
    },
    {
      title: "Security Awareness Training",
      description: "Created and delivered security awareness training programs for corporate employees, focusing on phishing prevention and secure coding practices.",
      tags: ["Training", "Social Engineering", "Education"]
    }
  ];

  const certifications = [
    { name: "OSCP", full: "Offensive Security Certified Professional" },
    { name: "CEH", full: "Certified Ethical Hacker" },
    { name: "CompTIA Security+", full: "Security+ Certification" },
    { name: "CISSP", full: "Certified Information Systems Security Professional" }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <MatrixRain />
      <FloatingParticles />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 border-b border-primary/20"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            className="text-2xl font-bold text-primary"
            style={{ textShadow: "0 0 20px hsl(var(--primary) / 0.6)" }}
            animate={{ textShadow: ["0 0 20px hsl(var(--primary) / 0.4)", "0 0 30px hsl(var(--primary) / 0.8)", "0 0 20px hsl(var(--primary) / 0.4)"] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            SecPort
          </motion.div>
          <div className="hidden md:flex gap-8">
            {["About", "Skills", "Projects", "Certifications", "Contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground/80 hover:text-primary transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="animate-tilt"
          >
            <motion.h1
              className="text-7xl md:text-9xl font-bold mb-6 text-primary"
              style={{ textShadow: "0 0 40px hsl(var(--primary) / 0.6)" }}
              animate={{ textShadow: ["0 0 30px hsl(var(--primary) / 0.5)", "0 0 50px hsl(var(--primary) / 0.9)", "0 0 30px hsl(var(--primary) / 0.5)"] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Zane Goat
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl mb-8 text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Breaking Things & Fixing Them 🔐 | CTF Enthusiast | Bug Hunter
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="text-lg px-8 py-6 shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.8)] transition-all duration-300 hover:scale-110"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's Connect
              </Button>
            </motion.div>
          </motion.div>

          {/* Floating icons */}
          <div className="absolute inset-0 pointer-events-none">
            {[Shield, Code, Bug, Cpu, Lock, Terminal].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute text-primary/20"
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${30 + (i % 2) * 30}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 360],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: 5 + i,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
              >
                <Icon className="w-12 h-12 md:w-20 md:h-20" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
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

      {/* Skills Section */}
      <section id="skills" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-primary"
            style={{ textShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
          >
            What I Actually Do 🛠️
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {skills.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card3D>
                  <div className="bg-card border border-primary/20 rounded-lg p-6 h-full backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.3)]">
                    <div className="text-primary mb-4 animate-glow-pulse">{skill.icon}</div>
                    <h3 className="text-xl font-bold mb-4 text-primary">{skill.title}</h3>
                    <ul className="space-y-2">
                      {skill.items.map((item, j) => (
                        <li key={j} className="text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 font-bold">▹</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-primary"
            style={{ textShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
          >
            Cool Stuff I've Done 🚀
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card3D>
                  <div className="bg-card border border-primary/20 rounded-lg overflow-hidden h-full backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-primary">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-primary"
            style={{ textShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
          >
            Certifications 📜
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

      {/* Contact Section */}
      <section id="contact" className="py-32 relative z-10">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-primary"
            style={{ textShadow: "0 0 30px hsl(var(--primary) / 0.4)" }}
          >
            Get In Touch 📬
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {[
              { icon: <Mail className="w-6 h-6" />, label: "Email", href: "mailto:your.email@example.com" },
              { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
              { icon: <Github className="w-6 h-6" />, label: "GitHub", href: "https://github.com/yourusername" },
              { icon: <Twitter className="w-6 h-6" />, label: "Twitter", href: "https://twitter.com/yourhandle" }
            ].map((contact, i) => (
              <motion.a
                key={i}
                href={contact.href}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex items-center gap-3 px-6 py-4 bg-primary/10 border border-primary/30 rounded-lg text-primary hover:bg-primary/20 transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
              >
                {contact.icon}
                <span className="font-semibold">{contact.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/20 relative z-10 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>&copy; 2025 Zane Goat. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
