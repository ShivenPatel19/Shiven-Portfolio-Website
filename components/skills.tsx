"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface Skill {
  name: string;
}

const allSkills: Skill[] = [
  // Programming Languages
  { name: "Python" },
  { name: "Java" },
  { name: "JavaScript" },
  { name: "HTML/CSS" },

  // Web Development
  { name: "Flask" },
  { name: "Django" },
  { name: "Hibernate" },
  { name: "Servlets/JSP" },

  // Frameworks & Libraries
  { name: "TensorFlow/Keras" },
  { name: "Scikit-learn" },
  { name: "OpenCV" },
  { name: "LangChain" },
  { name: "LangGraph" },

  // AI/ML & Generative AI
  { name: "Generaive AI" },
  { name: "Large Language Models" },

  // Agentic & RAG Workflows
  { name: "Agentic Workflows" },
  { name: "Retrival Augmentation Generation" },
  { name: "n8n" },
  { name: "automation" },

  // Data Analysis & Visualization
  { name: "Pandas" },
  { name: "NumPy" },
  { name: "Matplotlib" },

  // Databases
  { name: "SQL" },
  { name: "PL/SQL" },
  { name: "Database Design" },

  // APIs & Automation
  { name: "RESTful APIs" },

  // IoT & Embedded Systems
  { name: "IoT Development" },
  { name: "Jetson Nano" },
  { name: "Arduino" },
  { name: "NodeMCU" },
  { name: "Raspberry Pi" },

  // Domain-Specific
  { name: "Computer Vision" },
  { name: "OpenCV" },
  { name: "YOLO" },
  { name: "SAM" },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-purple-600">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </motion.div>

        {/* Render all skills as floating buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {allSkills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <button className="px-4 py-2 bg-purple-600 text-white rounded-full shadow-md hover:bg-purple-700 transition">
                {skill.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
