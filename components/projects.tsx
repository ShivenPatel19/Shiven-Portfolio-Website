"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

interface Project {
  title: string;
  description: string;
  period: string;
  technologies: string[];
  link?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Invoice Extractor API",
    description:
      "Extracts information from JPEG and PDF invoices using a Flask-based REST API powered by the Gemini-1.5-Flash Vision model, returning results in JSON format. Users can retrieve the full invoice or specific details based on a custom JSON output format. The system efficiently handles different invoice formats and layouts while accurately identifying key data information.",
    period: "Dec 2024",
    technologies: [
      "Flask",
      "REST API",
      "Gemini-1.5",
      "Computer Vision",
      "JSON",
    ],
    link: "https://github.com/ShivenPatel19/Invoice-Extractor",
    demo: "https://www.linkedin.com/posts/shivenpatel1963_artificialintelligence-machinelearning-ocrtechnology-activity-7273592761168142337-CpEG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESFVnsB5ZOZ18uFlHrLj7yedNznnIQlQ9s",
  },
  {
    title: "HistoriAI - AI Chatbot Guide for India's Heritage",
    description:
      "Developed a RAG-based application,  with an Agentic Workflow powered by Llama 3 models, and a dynamically expanding knowledge base, connected to the backend via a REST API. Integrated Text-to-Speech & Speech-to-Text for multi-language accessibility in English, Hindi, and Gujarati.",
    period: "Sep 2024 – Jan 2025",
    technologies: [
      "ChromaDB",
      "Llama3",
      "Groq Cloud",
      "Huggingface",
      "Flask",
      "Tavily",
      "LangGraph",
      "Angular",
      "TypeScript",
    ],
    link: "#",
    demo: "https://www.linkedin.com/posts/shivenpatel1963_ai-chatbot-indianheritage-activity-7307330631623970817-aX33?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESFVnsB5ZOZ18uFlHrLj7yedNznnIQlQ9s",
  },
  {
    title: "Vahan - AI driven Vehicle's Lane Prediction System",
    description:
      "Developing an AI-driven algorithm and system for safe navigation, which performs lane prediction on different lane conditions (marked or unmarked), using image processing. The multi-stage process first applies image processing techniques to identify key points, which are then fed into Meta SAM2 for precise lane segmentation, enabling reliable navigation in diverse lane conditions.",
    period: "Jul 2024 – Present",
    technologies: [
      "Python",
      "OpenCV",
      "Sklearn",
      "YOLO",
      "Meta SAM2",
      "NVIDIA Jetson",
    ],
  },
  {
    title: "NexGuard - RFID Lock System with Intrusion Alert",
    description:
      "The solenoid lock system with RFID access, email notification, and alarms for intrusion and unauthorized access, controlled using ESP8266 microcontroller. Designed to safeguard door access and protect valuable assets such as jewelry, cash money, documents.",
    period: "Jan 2024 – Apr 2024",
    technologies: [
      "IoT",
      "ESP8266",
      "RFID",
      "Email Notification",
      "Alarm System",
    ],
    link: "https://github.com/ShivenPatel19/NEXGUARD-RFID-Lock-System-with-Intrusion-Alert-",
    demo: "https://www.linkedin.com/posts/shivenpatel1963_rfid-securitytech-iot-activity-7252203631750336512-eV6H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESFVnsB5ZOZ18uFlHrLj7yedNznnIQlQ9s",
  },
  {
    title: "Miniz Kingdom - Learning Platform for Children",
    description:
      "Helps children with medical conditions learn alphabets, numbers, and engage in gesture-based activities and games. Utilizes a ML model built with PoseNet and ML5 Neural Network, trained on a self-created dataset, providing visual and auditory feedback.",
    period: "Feb 2024 – Apr 2024",
    technologies: [
      "PoseNet",
      "ML5",
      "Neural Network",
      "Gesture Recognition",
      "Educational Platform",
    ],
    link: "https://github.com/ShivenPatel19/MINIZ-KINGDOM-Learning-and-Entertainment-Platform-for-Children",
    demo: "https://www.linkedin.com/posts/shivenpatel1963_edtechinnovation-interactivelearning-machinelearningineducation-activity-7279939231639093248-cyvT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESFVnsB5ZOZ18uFlHrLj7yedNznnIQlQ9s",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Find the longest description to standardize card heights
  const maxDescLength = Math.max(...projects.map(p => p.description.length));
  const maxTechLength = Math.max(...projects.map(p => p.technologies.length));

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-purple-600">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full text-justify"
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl text-purple-600">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.period}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0 mt-auto">
                  <div className="flex gap-2 flex-wrap">
                    {project.link && (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Project
                        </Button>
                      </Link>
                    )}
                    {project.demo && (
                      <Link
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="gap-1">
                          🚀 Demo
                        </Button>
                      </Link>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}