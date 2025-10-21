'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/useInView';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const testimonialsData = [
  {
    name: 'Dr. Marie Kouam',
    role: 'Directrice Médicale, EKOSERX',
    image: 'https://ui-avatars.com/api/?name=Marie+Kouam&background=06b6d4&color=fff&size=128',
    content:
      'Gaetan a développé une plateforme de téléconsultation exceptionnelle. Son expertise technique et sa compréhension des besoins médicaux ont été déterminantes pour notre succès.',
    rating: 5,
  },
  {
    name: 'Jean-Paul Mbida',
    role: 'CEO, Mega-Ique Digital',
    image: 'https://ui-avatars.com/api/?name=Jean+Mbida&background=3b82f6&color=fff&size=128',
    content:
      'L’API de synchronisation WooCommerce-Odoo développée par Gaetan a transformé notre workflow. Performance, fiabilité et support excellent.',
    rating: 5,
  },
  {
    name: 'Sarah Nkolo',
    role: 'Product Manager, InterPay',
    image: 'https://ui-avatars.com/api/?name=Sarah+Nkolo&background=8b5cf6&color=fff&size=128',
    content:
      'Un développeur passionné et rigoureux. Le système de paiement qu’il a créé est robuste, sécurisé et facile à maintenir. Je recommande vivement !',
    rating: 5,
  },
];

const Testimonials = React.memo(function Testimonials() {
  const { ref } = useSectionInView('#testimonials');

  return (
    <section ref={ref} id="testimonials" className="scroll-mt-28 mb-28 px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Ce que disent mes clients
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Témoignages de professionnels avec qui j&apos;ai eu le plaisir de collaborer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/20 dark:hover:shadow-cyan-900/40 transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-cyan-400/50 dark:hover:border-cyan-600/50 h-full flex flex-col">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 bg-cyan-500 dark:bg-cyan-600 rounded-full p-3 shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="rounded-full ring-2 ring-cyan-400/50"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Vous souhaitez travailler ensemble ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
          >
            Contactez-moi
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
});

Testimonials.displayName = 'Testimonials';

export default Testimonials;
