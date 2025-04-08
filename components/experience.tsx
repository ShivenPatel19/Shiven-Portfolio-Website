"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BriefcaseIcon } from "lucide-react";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Associate Technical Consultant Intern",
    company: "Mastek",
    period: "Jan 2025 – Mar 2025",
    description:
      "Developed backend for a Leave Management System using Servlets, JSP, POJO (Service, DAO, Models), & Hibernate, implementing an MVC architecture, alongside email alerts for manager's leave approvals or rejections and emplpoyee's new leave requests. Integrated a chatbot using REST API, built with LangChain SQL Agent, and the Llama 3.3 70b Specdec model, to assist managers in making faster decisions on workforce planning and report making.",
    technologies: ["HTML","Tailwind","JavaScript","Java","Servlets","JSP","Hibernate","Oracle DB", "SQL", "PL/SQL", "Python","Flask","LangChain","LLaMA 3",],
  },
  {
    title: "Artificial Intelligence Intern",
    company: "Infosys Springboard",
    period: "Oct 2024 – Dec 2024",
    description:
      "Worked on object tracking in a surveillance system, utilizing computer vision and image processing techniques with OpenCV and YOLO to enable accurate real-time identification and monitoring of vehicles in high-traffic areas for vehicle detection and tracking.",
    technologies: ["HTML", "JavaScript", "CSS", "Python", "Flask", "OpenCV", "YOLO"],
  },
  {
    title: "Web Development Project Intern",
    company: "Tatvasoft",
    period: "May 2024 – Jun 2024",
    description:
      "Developed backend for a Virtual Community Support platform using .NET & PostgreSQL, implementing secure user authentication role-based authorization, and RESTful APIs that enabled integration between frontend Angular components and backend services.",
    technologies: ["HTML", "JavaScript", "CSS", "C#", ".NET", "SQL", "Postgre DB", "Angular"],
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-purple-600">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="border-l-4 border-l-purple-600 shadow-md hover:shadow-lg transition-shadow text-justify">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <BriefcaseIcon className="h-5 w-5 text-purple-600" />
                        {exp.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-1">
                        <strong>
                          <span className="text-purple-600">{exp.company}</span>
                        </strong>{" "}
                        | {exp.period}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
