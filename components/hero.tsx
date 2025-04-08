"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Sun,
  Moon,
  FileText,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const fullText = "AIML | Computer Vision | Generative AI | IoT | Java Development | Oracle SQL ";
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<any[]>([]); // Initialize empty, populate on client

  useEffect(() => {
    setMounted(true);

    // Generate particles only on client side
    const generatedParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 5,
    }));
    setParticles(generatedParticles);

    // Typing effect
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []); // Empty dependency array ensures this runs once on mount

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Neural Network Background */}
      <div className="absolute inset-0 z-0">
        <div className="hero-neural-network"></div>

        {/* Floating particles - Render only after mount */}
        {mounted &&
          particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="floating-particle"
              style={{
                top: particle.top,
                left: particle.left,
                width: particle.size,
                height: particle.size,
              }}
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: particle.duration,
                delay: particle.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      {/* Theme Toggle Button - Positioned at top right */}
      {mounted && (
        <div className="absolute top-6 right-6 z-50">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600">
          Shiven Patel
        </h1>

        <h2 className="text-lg md:text-xl text-gray-700 dark:text-gray-300 h-8">
          {typedText}
          {mounted && <span className="animate-blink">|</span>}
        </h2>

        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
          Building intelligent solutions at the intersection of AI, Web
          Development, and IoT
        </p>

        <div className="flex gap-4 mt-8 justify-center">
          <Link
            href="https://github.com/shivenpatel19"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link
            href="https://linkedin.com/in/shivenpatel1963"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Link href="mailto:shivenpatel1963@gmail.com">
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </Link>
          <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full">
              <FileText className="h-5 w-5" />
              <span className="sr-only">Resume</span>
            </Button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10"
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce rounded-full"
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </motion.div>
    </section>
  );
}
