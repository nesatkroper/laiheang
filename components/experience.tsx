"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Bank Teller",
    company: "First National Bank",
    period: "2020 - Present",
    description: [
      "Process an average of 150 customer transactions daily with 100% accuracy",
      "Train and mentor new tellers on bank procedures and customer service",
      "Identify and resolve discrepancies in daily balancing within strict timeframes",
      "Recommend appropriate financial products based on customer needs",
    ],
  },
  {
    title: "Accountant",
    company: "Financial Solutions Inc.",
    period: "2018 - 2020",
    description: [
      "Prepared and analyzed monthly financial statements for 15+ clients",
      "Reconciled accounts and identified discrepancies for resolution",
      "Assisted with tax preparation and filing for individual and business clients",
      "Implemented new accounting software that improved efficiency by 30%",
    ],
  },
  {
    title: "Junior Bank Teller",
    company: "Community Credit Union",
    period: "2016 - 2018",
    description: [
      "Processed deposits, withdrawals, and loan payments for customers",
      "Balanced cash drawer daily with 99.9% accuracy",
      "Assisted customers with account inquiries and problem resolution",
      "Contributed to a 15% increase in customer satisfaction ratings",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id='experience' className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'>
          <Badge variant='outline' className='mb-4 px-4 py-1 text-sm'>
            My Journey
          </Badge>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Professional Experience
          </h2>
          <div className='w-20 h-1 bg-primary mx-auto rounded-full'></div>
        </motion.div>

        <div className='relative'>
          {/* Timeline line */}
          <div className='absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 hidden md:block'></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}>
              <div className='md:w-1/2 flex justify-center md:justify-end md:pr-12 mb-6 md:mb-0'>
                <Card
                  className={`w-full max-w-md ${
                    index % 2 === 0 ? "md:ml-12" : "md:mr-12"
                  }`}>
                  <CardContent className='p-6'>
                    <h3 className='text-xl font-bold mb-1'>{exp.title}</h3>
                    <div className='flex items-center mb-4'>
                      <span className='text-primary font-medium'>
                        {exp.company}
                      </span>
                      <span className='mx-2'>•</span>
                      <span className='text-gray-500 dark:text-gray-400 text-sm'>
                        {exp.period}
                      </span>
                    </div>
                    <ul className='space-y-2'>
                      {exp.description.map((item, i) => (
                        <li key={i} className='flex items-start'>
                          <span className='inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 mr-2'></span>
                          <span className='text-gray-700 dark:text-gray-300'>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline dot */}
              <div className='hidden md:flex items-center justify-center z-10'>
                <div className='w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900'></div>
              </div>

              {/* Empty space for alternating layout */}
              <div className='md:w-1/2'></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
