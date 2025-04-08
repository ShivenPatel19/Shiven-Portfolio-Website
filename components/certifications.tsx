"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

interface Certification {
  title: string
  issuer: string
  link?: string
  category: "ai" | "database" | "programming" | "other"
}

const certifications: Certification[] = [
  // AI & Machine Learning
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/SAC4SUPX3PW9",
    category: "ai",
  },
  {
    title: "Practical Machine Learning Using Python",
    issuer: "Tutorialspoint",
    link: "https://www.tutorialspoint.com/market/certificate.jsp/TP-JEH0I5E8?v=1711519601",
    category: "ai",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/MG3XVT2U4K27",
    category: "ai",
  },
  {
    title: "Introduction to Computer Vision and Image Processing",
    issuer: "IBM",
    link: "https://www.coursera.org/account/accomplishments/verify/8WSO0E54QV2L",
    category: "ai",
  },
  {
    title: "Introduction to Big Data",
    issuer: "UC San Diego",
    link: "https://www.coursera.org/account/accomplishments/verify/W272391KQ9TY",
    category: "ai",
  },

  // Database
  {
    title: "Introduction to Structured Query Language (SQL)",
    issuer: "University of Michigan",
    link: "https://www.coursera.org/account/accomplishments/verify/UH9WJ7LEHJLV",
    category: "database",
  },
  {
    title: "Oracle Database: Basic SQL",
    issuer: "LinkedIn",
    link: "https://www.linkedin.com/learning/certificates/b7271759a61baac4370d7f7711205f92e08243a470a7e4f3b8a647c833deeb6c?trk=share_certificate",
    category: "database",
  },
  {
    title: "Oracle Database: PL/SQL",
    issuer: "LinkedIn",
    link: "https://www.linkedin.com/learning/certificates/0dc665669a45bf29fc2e5d17d8829fbc5fd6562fecfd78ae7072fb1035c6c219?trk=share_certificate",
    category: "database",
  },
  {
    title: "Database Management Essentials",
    issuer: "University of Colorado",
    link: "https://www.coursera.org/account/accomplishments/verify/NUH5475TZAG8",
    category: "database",
  },

  // Programming
  {
    title: "Code in Place",
    issuer: "Stanford University, USA",
    link: "https://codeinplace.stanford.edu/cip4/certificate/exz2a5",
    category: "programming",
  },
  {
    title: "Introduction to Java",
    issuer: "LearnQuest",
    link: "https://www.coursera.org/account/accomplishments/verify/G46YN67TE22J",
    category: "programming",
  },
  {
    title: "Java Class Library",
    issuer: "LearnQuest",
    link: "https://www.coursera.org/account/accomplishments/verify/T7JR58ER3VQA",
    category: "programming",
  },
  {
    title: "Java Servlet Pages",
    issuer: "LearnQuest",
    link: "https://www.coursera.org/account/accomplishments/verify/56NHQW6FT23P",
    category: "programming",
  },

  // Other
  {
    title: "Introduction to the Internet of Things and Embedded Systems",
    issuer: "University of California, Irvine",
    link: "https://www.coursera.org/account/accomplishments/verify/LUREWDAMZH76",
    category: "other",
  },
]

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "ai":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "database":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "programming":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    }
  }

  const getCategoryName = (category: string) => {
    switch (category) {
      case "ai":
        return "AI & Machine Learning"
      case "database":
        return "Database"
      case "programming":
        return "Programming"
      default:
        return "Other"
    }
  }

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="text-purple-600">Certifications</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {certifications.map((cert, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-md transition-shadow">
        <CardHeader className="pb-2 flex flex-row items-start gap-4">
          <Award className="h-6 w-6 text-purple-600 mt-1" />
          <div>
            <CardTitle className="text-lg">{cert.title}</CardTitle>
            <CardDescription>{cert.issuer}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <Badge className={getCategoryColor(cert.category)}>{getCategoryName(cert.category)}</Badge>
            {cert.link && (
              <Link
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-600 hover:text-purple-800 dark:hover:text-purple-400 flex items-center gap-1"
              >
                <ExternalLink className="h-3 w-3" />
                View Certificate
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  ))}
</div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="https://www.linkedin.com/in/shivenpatel1963/details/certifications"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:text-purple-800 dark:hover:text-purple-400 flex items-center gap-1 justify-center"
          >
            <ExternalLink className="h-4 w-4" />
            View all certifications on LinkedIn
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
