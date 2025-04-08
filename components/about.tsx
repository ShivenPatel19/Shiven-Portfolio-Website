"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, MapPin, Phone, Mail } from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Radar,
} from "recharts";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillData = [
    { subject: "Machine Learning", A: 75 },
    { subject: "Deep Learning", A: 60 },
    { subject: "Computer Vision", A: 75 },
    { subject: "Generative AI", A: 70 },
    { subject: "Agentic Workflow", A: 65 },
    { subject: "Java Development", A: 70 },
    { subject: "SQL & PL/SQL", A: 75 },
    { subject: "Internet of Things", A: 65 },
  ];

  return (
    <section
      id="about"
      className="py-20 px-4 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Neural network background for About section */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="neural-network-bg"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-purple-600">Me</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 text-justify"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm a Computer Engineering student passionate about Artificial
              Intelligence, Web Development, and IoT. My technological journey
              is fueled by a desire to create innovative solutions with
              meaningful impact.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              My expertise spans computer vision, generative AI, and agentic
              workflows, where I've built autonomous systems that solve complex
              problems through machine learning and intelligent design
              principles. In IoT, I've worked with Node MCU, Raspberry Pi,
              Arduino, and NVIDIA Jetson to create connected solutions that
              bridge physical and digital worlds.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              On the development side, I bring strong Java proficiency including
              servlets, JSP, and Hibernate, complemented by database skills in
              Oracle SQL and PL/SQL. This full-stack knowledge enables me to
              create comprehensive end-to-end solutions.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I'm pursuing a career that leverages these diverse skills,
              particularly in Generative AI and Computer Vision. I'm driven by the
              potential of these technologies to transform industries and
              enhance human capabilities through intelligent automation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-semibold mb-6 text-purple-600">
              Personal Details
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Born on June 19, 2003
                </span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  Gujarat, India - 388450
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  +91 7802044424
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700 dark:text-gray-300">
                  shivenpatel1963@gmail.com
                </span>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-600">
                Technical Expertise
              </h3>
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    data={skillData}
                  >
                    <PolarGrid />
                    <PolarAngleAxis
                      dataKey="subject"
                      tick={{
                        fill: "var(--text-color, #4B5563)",
                        fontSize: 14,
                      }}
                    />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 100]}
                      tick={false}
                      axisLine={false}
                    />
                    <Radar
                      name="Skills"
                      dataKey="A"
                      stroke="#8884d8"
                      fill="#8884d8"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
