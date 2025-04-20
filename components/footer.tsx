"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white py-12'>
      <div className='container mx-auto px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-6 md:mb-0'>
            <h2 className='text-2xl font-bold text-primary'>Financial Pro</h2>
            <p className='text-gray-400 mt-2'>
              Professional Banking & Accounting Services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex space-x-4'>
            <Button size='icon' variant='ghost' className='rounded-full'>
              <Linkedin className='h-5 w-5' />
            </Button>
            <Button size='icon' variant='ghost' className='rounded-full'>
              <Twitter className='h-5 w-5' />
            </Button>
            <Button size='icon' variant='ghost' className='rounded-full'>
              <Github className='h-5 w-5' />
            </Button>
            <Button size='icon' variant='ghost' className='rounded-full'>
              <Mail className='h-5 w-5' />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <p className='text-gray-400 text-sm mb-4 md:mb-0'>
            © {new Date().getFullYear()} Financial Professional. All rights
            reserved.
          </p>
          <div className='flex space-x-6'>
            <a href='#' className='text-gray-400 hover:text-primary text-sm'>
              Privacy Policy
            </a>
            <a href='#' className='text-gray-400 hover:text-primary text-sm'>
              Terms of Service
            </a>
            <a href='#' className='text-gray-400 hover:text-primary text-sm'>
              Cookies Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
