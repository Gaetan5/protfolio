'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/useInView';
import { blogData } from '@/lib/data';
import { useLocaleContext } from '@/containers/LocaleCtx';
import { t } from '@/lib/i18n';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import OptimizedImage from './optimized-image';

const Blog = React.memo(function Blog() {
  const { ref } = useSectionInView('#blog');
  const { locale } = useLocaleContext();

  return (
    <section ref={ref} id="blog" className="scroll-mt-28 mb-28 max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold capitalize mb-4 text-gray-900 dark:text-white">
          {t('blog_title', locale)}
        </h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
          {t('blog_description', locale)}
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogData.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <OptimizedImage
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {new Date(article.date).toLocaleDateString(
                        locale === 'fr' ? 'fr-FR' : 'en-US',
                      )}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200 rounded-full"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More */}
                <button className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 font-medium hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
                  {t('read_more', locale)}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Articles Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors">
            {t('view_all_articles', locale)}
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
});

Blog.displayName = 'Blog';

export default Blog;
