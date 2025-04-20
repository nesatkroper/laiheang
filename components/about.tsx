"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id='about' className='py-20 bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'>
          <Badge variant='outline' className='mb-4 px-4 py-1 text-sm'>
            About Me
          </Badge>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Professional Profile
          </h2>
          <div className='w-20 h-1 bg-primary mx-auto rounded-full'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
            <h3 className='text-2xl font-semibold mb-6'>Who I Am</h3>
            <p className='text-gray-700 dark:text-gray-300 mb-6 leading-relaxed'>
              I am a dedicated financial professional with extensive experience
              in banking and accounting. My career has been built on a
              foundation of accuracy, integrity, and exceptional customer
              service.
            </p>
            <p className='text-gray-700 dark:text-gray-300 mb-6 leading-relaxed'>
              With a keen eye for detail and a passion for financial management,
              I excel in handling complex transactions, reconciling accounts,
              and providing personalized financial guidance to clients.
            </p>
            <p className='text-gray-700 dark:text-gray-300 leading-relaxed'>
              I am committed to continuous learning and staying updated with the
              latest financial regulations and technologies to deliver the
              highest standard of service.
            </p>
          </motion.div>

          <div className='grid grid-cols-1 gap-6'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.3 }}>
              <Card>
                <CardContent className='p-6'>
                  <div className='flex items-center mb-4'>
                    <div className='bg-primary/10 p-3 rounded-full mr-4'>
                      <Briefcase className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h4 className='font-semibold'>Experience</h4>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>
                        5+ Years in Banking
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 }}>
              <Card>
                <CardContent className='p-6'>
                  <div className='flex items-center mb-4'>
                    <div className='bg-primary/10 p-3 rounded-full mr-4'>
                      <GraduationCap className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h4 className='font-semibold'>Education</h4>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>
                        {`Bachelor's in Finance`}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.5 }}>
              <Card>
                <CardContent className='p-6'>
                  <div className='flex items-center mb-4'>
                    <div className='bg-primary/10 p-3 rounded-full mr-4'>
                      <MapPin className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h4 className='font-semibold'>Location</h4>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>
                        New York, NY
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: 0.6 }}>
              <Card>
                <CardContent className='p-6'>
                  <div className='flex items-center mb-4'>
                    <div className='bg-primary/10 p-3 rounded-full mr-4'>
                      <Calendar className='h-6 w-6 text-primary' />
                    </div>
                    <div>
                      <h4 className='font-semibold'>Availability</h4>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>
                        Open to Opportunities
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
