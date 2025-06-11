"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";
import SubmitBtn from "@/components/submit-btn";
import { useSectionInView } from "@/lib/useInView";

export default function Contact() {
  const { ref } = useSectionInView("#contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="flex flex-col items-center py-16 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 mt-4 dark:text-white/80">
        Feel free to contact me directly through this form
      </p>
      <form className="mt-10 w-full max-w-lg flex flex-col space-y-6 dark:text-black">
        <div className="flex flex-col">
          <label htmlFor="senderEmail" className="mb-2 text-sm font-medium text-gray-700 dark:text-white/80">
            Your Email
          </label>
          <input
            id="senderEmail"
            className="h-14 px-4 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
            name="senderEmail"
            type="email"
            required
            maxLength={500}
            placeholder="Your email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-2 text-sm font-medium text-gray-700 dark:text-white/80">
            Your Message
          </label>
          <textarea
            id="message"
            className="h-52 px-4 py-3 rounded-lg resize-none border border-gray-300 dark:border-gray-700 dark:bg-white dark:bg-opacity-20 dark:focus:bg-opacity-10 transition-all dark:outline-none"
            name="message"
            placeholder="Your message"
            required
            maxLength={5000}
          />
        </div>
        <SubmitBtn text="Submit" />
      </form>
    </motion.section>
  );
}