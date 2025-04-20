"use client";

import type React from "react";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  // const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // toast({
      //   title: "Message sent!",
      //   description: "Thank you for your message. I'll get back to you soon.",
      // });

      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1500);
  };

  return (
    <section id='contact' className='py-20 bg-white dark:bg-gray-950'>
      <div className='container mx-auto px-4'>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className='text-center mb-16'>
          <Badge variant='outline' className='mb-4 px-4 py-1 text-sm'>
            Get In Touch
          </Badge>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>Contact Me</h2>
          <div className='w-20 h-1 bg-primary mx-auto rounded-full'></div>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='lg:col-span-1'>
            <div className='space-y-6'>
              <h3 className='text-2xl font-semibold mb-6'>
                Contact Information
              </h3>
              <p className='text-gray-700 dark:text-gray-300 mb-8'>
                Feel free to reach out to me for any inquiries about my services
                or to discuss potential opportunities.
              </p>

              <div className='space-y-4'>
                <Card>
                  <CardContent className='p-4 flex items-center'>
                    <div className='bg-primary/10 p-3 rounded-full mr-4'>
                      <Mail className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <h4 className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                        Email
                      </h4>
                      <p className='font-medium'>laiheangho2@gamil.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className='p-4 flex items-center'>
                    <div className='bg-primary/10 p-3 rounded-full mr-4'>
                      <Phone className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <h4 className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                        Phone
                      </h4>
                      <p className='font-medium'>(+855) 96 266 0026</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className='p-4 flex items-center'>
                    <div className='bg-primary/10 p-3 rounded-full mr-4'>
                      <MapPin className='h-5 w-5 text-primary' />
                    </div>
                    <div>
                      <h4 className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                        Location
                      </h4>
                      <p className='font-medium'>Siem Reap. Cambodia</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className='lg:col-span-2'>
            <Card>
              <CardContent className='p-6'>
                <h3 className='text-2xl font-semibold mb-6'>
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className='space-y-6'>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='space-y-2'>
                      <label htmlFor='name' className='text-sm font-medium'>
                        Full Name
                      </label>
                      <Input id='name' placeholder='John Doe' required />
                    </div>
                    <div className='space-y-2'>
                      <label htmlFor='email' className='text-sm font-medium'>
                        Email Address
                      </label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='john@example.com'
                        required
                      />
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='subject' className='text-sm font-medium'>
                      Subject
                    </label>
                    <Input
                      id='subject'
                      placeholder='How can I help you?'
                      required
                    />
                  </div>
                  <div className='space-y-2'>
                    <label htmlFor='message' className='text-sm font-medium'>
                      Message
                    </label>
                    <Textarea
                      id='message'
                      placeholder='Your message here...'
                      rows={5}
                      required
                    />
                  </div>
                  <Button
                    type='submit'
                    className='w-full'
                    disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message <Send className='ml-2 h-4 w-4' />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
