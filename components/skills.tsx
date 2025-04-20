"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const technicalSkills = [
  { name: "Financial Transactions", level: 95 },
  { name: "Cash Handling", level: 98 },
  { name: "Account Reconciliation", level: 90 },
  { name: "Financial Reporting", level: 85 },
  { name: "Tax Preparation", level: 80 },
  { name: "Banking Software", level: 92 },
];

const softSkills = [
  { name: "Customer Service", level: 95 },
  { name: "Attention to Detail", level: 98 },
  { name: "Problem Solving", level: 90 },
  { name: "Communication", level: 92 },
  { name: "Time Management", level: 88 },
  { name: "Teamwork", level: 94 },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id='skills' className='py-20 bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'>
          <Badge variant='outline' className='mb-4 px-4 py-1 text-sm'>
            My Expertise
          </Badge>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Professional Skills
          </h2>
          <div className='w-20 h-1 bg-primary mx-auto rounded-full'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-bold mb-6'>Technical Skills</h3>
                <div className='space-y-6'>
                  {technicalSkills.map((skill, index) => (
                    <div key={index}>
                      <div className='flex justify-between mb-2'>
                        <span className='font-medium'>{skill.name}</span>
                        <span className='text-gray-500 dark:text-gray-400'>
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className='h-2' />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-xl font-bold mb-6'>Soft Skills</h3>
                <div className='space-y-6'>
                  {softSkills.map((skill, index) => (
                    <div key={index}>
                      <div className='flex justify-between mb-2'>
                        <span className='font-medium'>{skill.name}</span>
                        <span className='text-gray-500 dark:text-gray-400'>
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className='h-2' />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='mt-16'>
          <Card>
            <CardContent className='p-6'>
              <h3 className='text-xl font-bold mb-6 text-center'>
                Certifications & Training
              </h3>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {[
                  "Certified Bank Teller",
                  "Financial Accounting Specialist",
                  "Anti-Money Laundering Certification",
                  "Customer Service Excellence",
                  "Tax Preparation Professional",
                  "Banking Compliance Training",
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.9 }
                    }
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}>
                    <div className='bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center'>
                      <Badge className='mb-2'>{cert}</Badge>
                    </div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
