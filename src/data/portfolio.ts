import { Shield, Code, Lock, Terminal, Mail, Github, Linkedin, Twitter } from "lucide-react";

export const skills = [
  {
    icon: Shield,
    title: "Penetration Testing",
    items: ["Web Application Testing", "Network Penetration Testing", "Mobile App Security", "API Security Testing"]
  },
  {
    icon: Terminal,
    title: "Security Tools",
    items: ["Burp Suite, OWASP ZAP", "Metasploit, Nmap", "Wireshark, tcpdump", "Ghidra, IDA Pro"]
  },
  {
    icon: Code,
    title: "Programming & Scripting",
    items: ["Python, Bash", "JavaScript, PHP", "PowerShell", "SQL"]
  },
  {
    icon: Lock,
    title: "Security Domains",
    items: ["OWASP Top 10", "Cloud Security (AWS, Azure)", "Incident Response", "Threat Intelligence"]
  }
];

export const projects = [
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

export const certifications = [
  { name: "OSCP", full: "Offensive Security Certified Professional" },
  { name: "CEH", full: "Certified Ethical Hacker" },
  { name: "CompTIA Security+", full: "Security+ Certification" },
  { name: "CISSP", full: "Certified Information Systems Security Professional" }
];

export const contactLinks = [
  { icon: Mail, label: "Email", href: "mailto:your.email@example.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile" },
  { icon: Github, label: "GitHub", href: "https://github.com/yourusername" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/yourhandle" }
];

export const navLinks = ["About", "Skills", "Projects", "Certifications", "Contact"];
