"use client";
import React from "react";
import Image from 'next/image';
import Section from "./Section";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { Mail } from "lucide-react";

// Animations...
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useSectionInview } from "@/lib/userView";

export default function Intro() {
    const { ref } = useSectionInview("#home", 0.5);
    return (
        <Section
            ref={ref}
            id="home"
            className="mb-20 max-w-[75rem] text-center sm:mb-0"
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            damping: 10,
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src="/profile1.png"
                            width="320"
                            height="320"
                            alt="portrait"
                            quality="100"
                            priority={true}
                            className="rounded-full shadow-xl object-cover"
                        />
                    </motion.div>
                    <motion.span
                        className="text-6xl absolute bottom-8 right-12"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 125,
                            damping: 10,
                            duration: 0.2,
                        }}
                    >
                        👋🏽
                    </motion.span>
                </div>
            </div>

            <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce={true}>
                <h1 className="mb-10 mt-4 text-2xl sm:text-4xl">
                    <span className="font-medium !leading-[1.5]">
                        Grow your business with a new website.
                    </span>{" "}
                    <p className="text-[14px] mb-6">
                        Fontend is a full-service creative studio creating
                        beautiful digital experiences and products.
                    </p>
                </h1>
            </Fade>

            <motion.div
                className="flex sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 125,
                    damping: 10,
                    duration: 0.2,
                }}
            >
                <Link
                    href="mailto:contact@studio.com"  // Corrige le lien vers un e-mail valide
                    className="group bg-gray-900 text-white px-7 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-white/10 active:scale-105 transition"
                >
                    Connect <Mail color={"#9ca3af"} />
                </Link>

                <a
                    href="https://linkedin.com/in/gaetan-ekoro-00991a12a/"  // Remplacez par l'URL LinkedIn réelle
                    className="group bg-gray-900 p-4 text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Linkedin Profile"
                >
                    <BsLinkedin />
                </a>

                <a
                    href="https://github.com/Gaetan5"  // Remplacez par l'URL GitHub réelle
                    className="bg-gray-900 text-white flex items-center gap-2 text-[1.15rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border-black dark:bg-white/10 dark:text-white/60"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                >
                    <Image
                        src="/logos/github-icon.svg"
                        width={30}
                        height={30}
                        alt="Picture of the author"
                    />
                </a>
            </motion.div>
        </Section>
    );
}
