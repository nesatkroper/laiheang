"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BarChart3,
  PieChart,
  TrendingUp,
  Users,
} from "lucide-react";

const projects = [
  {
    title: "Branch Efficiency Improvement",
    description:
      "Led a team that improved transaction processing time by 25% through workflow optimization and staff training.",
    icon: <TrendingUp className='h-10 w-10 text-primary' />,
    achievements: [
      "25% faster processing",
      "Improved customer satisfaction",
      "Reduced wait times",
    ],
  },
  {
    title: "Customer Service Excellence Program",
    description:
      "Developed and implemented a customer service training program that increased satisfaction scores by 18%.",
    icon: <Users className='h-10 w-10 text-primary' />,
    achievements: [
      "18% higher satisfaction",
      "Reduced complaints",
      "Team recognition award",
    ],
  },
  {
    title: "Financial Reporting Automation",
    description:
      "Implemented automated reporting tools that reduced monthly closing time by 40% while improving accuracy.",
    icon: <BarChart3 className='h-10 w-10 text-primary' />,
    achievements: [
      "40% time savings",
      "Improved accuracy",
      "Better decision making",
    ],
  },
  {
    title: "Budget Analysis Project",
    description:
      "Conducted comprehensive budget analysis for small business clients, identifying average savings of 15%.",
    icon: <PieChart className='h-10 w-10 text-primary' />,
    achievements: [
      "15% cost reduction",
      "Optimized resource allocation",
      "Increased profitability",
    ],
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id='projects' className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'>
          <Badge variant='outline' className='mb-4 px-4 py-1 text-sm'>
            My Work
          </Badge>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Key Projects & Achievements
          </h2>
          <div className='w-20 h-1 bg-primary mx-auto rounded-full'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}>
              <Card className='h-full flex flex-col overflow-hidden'>
                <CardContent className='p-6 flex-grow'>
                  <div className='mb-6 flex justify-center'>
                    <div className='p-4 bg-primary/10 rounded-full'>
                      {project.icon}
                    </div>
                  </div>
                  <h3 className='text-xl font-bold mb-3 text-center'>
                    {project.title}
                  </h3>
                  <p className='text-gray-700 dark:text-gray-300 mb-6 text-center'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2 justify-center'>
                    {project.achievements.map((achievement, i) => (
                      <Badge key={i} variant='secondary'>
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className='p-6 pt-0'>
                  <Button variant='ghost' className='w-full' size='sm'>
                    Learn More <ArrowRight className='ml-2 h-4 w-4' />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
