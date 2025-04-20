"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/navbar";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id='home'
      className='relative min-h-screen flex items-center justify-center'>
      <Navbar />
      <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-950' />
      <div className='container mx-auto px-4 z-10 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='mb-6'>
          <h2 className='text-xl md:text-2xl font-medium text-primary'>
            {`Hello, I'm`}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8, delay: 0.4 }}>
          <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent'>
            Financial Professional
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className='mb-10'>
          <p className='text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto'>
            Experienced Bank Teller & Accountant with a passion for financial
            accuracy, customer service excellence, and meticulous attention to
            detail.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button size='lg' asChild>
            <a href='#contact'>Contact Me</a>
          </Button>
          <Button size='lg' variant='outline' asChild>
            <a href='#experience'>View Experience</a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 1.2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'>
        <Button variant='ghost' size='icon' asChild>
          <a href='#about'>
            <ArrowDown className='h-6 w-6 text-primary' />
          </a>
        </Button>
      </motion.div>
    </section>
  );
}
