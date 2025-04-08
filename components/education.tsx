"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Award, BookOpen } from "lucide-react"

interface Education {
  institution: string
  degree: string
  period: string
  grade: string
  icon: "graduation" | "award" | "book"
}

const educationData: Education[] = [
  {
    institution: "A D Patel Institute Of Technology (Charutar Vidyamandal University)",
    degree: "B.E. Computer Engineering",
    period: "2021 – 2025",
    grade: "CGPA – 9.57",
    icon: "graduation",
  },
  {
    institution: "A D Patel Institute Of Technology (Charutar Vidyamandal University)",
    degree: "Minor Degree in Internet of Thing",
    period: "2022 – 2024",
    grade: "CGPA – 8.87",
    icon: "award",
  },
  {
    institution: "The Western English Medium School (GSHSEB)",
    degree: "Higher Secondary Education",
    period: "2021",
    grade: "PR – 86.58 (A2)",
    icon: "book",
  },
  {
    institution: "The Western English Medium School (GSHSEB)",
    degree: "Secondary Education",
    period: "2019",
    grade: "PR – 96.80 (A2)",
    icon: "book",
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "graduation":
        return <GraduationCap className="h-6 w-6 text-purple-600" />
      case "award":
        return <Award className="h-6 w-6 text-purple-600" />
      case "book":
        return <BookOpen className="h-6 w-6 text-purple-600" />
      default:
        return <GraduationCap className="h-6 w-6 text-purple-600" />
    }
  }

  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-purple-600">Education</span> Background
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-purple-200 dark:bg-purple-900 rounded-full hidden md:block"></div>

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col items-center gap-8`}
              >
                <div className="md:w-1/2 w-full">
                  <Card className="border-l-4 border-l-purple-600 shadow-md hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-start gap-4 pb-2">
                      <div className="mt-1">{getIcon(edu.icon)}</div>
                      <div>
                        <CardTitle className="text-xl">{edu.degree}</CardTitle>
                        <CardDescription className="text-base">{edu.institution}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 dark:text-gray-400">{edu.period}</span>
                        <span className="text-purple-600 font-medium">{edu.grade}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                </div>

                <div className="md:w-1/2 w-full md:block hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

