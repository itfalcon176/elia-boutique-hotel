import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { galleryData, galleryCategories } from '../data/galleryData';

export default function GalleryPage({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryData
    : galleryData.filter((item) => item.category === selectedCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev + 1) % filteredImages.length);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    }
  };

  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs for SEO */}
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-[#6E6A63] font-sans">
          <ol className="flex items-center gap-2">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-[#A38B68] transition-colors cursor-pointer">
                Home
              </button>
            </li>
            <li>/</li>
            <li className="text-[#23211E] font-medium" aria-current="page">
              Gallery
            </li>
          </ol>
        </nav>

        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <ImageIcon size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Visual Journey
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            A Look Around <span className="italic text-gold-gradient font-serif">Elia</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <p className="text-[#555047] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            Thirteen rooms. Tropical gardens. Good food. Warm water. Cold water. And the Andaman Sea almost outside the door.
          </p>
          <p className="text-[#8B6E3F] font-serif italic text-base mt-1">
            Take a look around.
          </p>
        </div>

        {/* Category Filters Pill Tabs matching Section 15 of SEO Pack */}
        <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-2 mb-12 px-1 sm:px-0">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`whitespace-nowrap px-4 sm:px-5 py-2 rounded-full text-xs uppercase tracking-[0.18em] font-semibold transition-all duration-300 cursor-pointer shrink-0 ${
                selectedCategory === category
                  ? 'bg-[#23211E] text-[#F7F4EF] shadow-lg border border-[#A38B68] scale-105'
                  : 'bg-white text-[#555047] border border-[#A38B68]/20 hover:bg-[#EFECE6] hover:text-[#23211E]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => openLightbox(index)}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#A38B68]/25 cursor-pointer bg-[#23211E]"
              >
                <img
                  src={item.image}
                  alt={item.alt || item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[9px] uppercase tracking-widest font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </div>

                {/* Enlarge Icon on hover */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={14} />
                </div>

                {/* Bottom Caption */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-serif text-lg font-light leading-snug mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#FAF7F2]/75 font-light line-clamp-1">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {lightboxIndex !== null && filteredImages[lightboxIndex] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 select-none"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer z-50"
                aria-label="Close"
              >
                <X size={20} />
              </button>

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer z-50"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition-all cursor-pointer z-50"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Center Image Container */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
              >
                <motion.img
                  key={lightboxIndex}
                  src={filteredImages[lightboxIndex].image}
                  alt={filteredImages[lightboxIndex].alt || filteredImages[lightboxIndex].title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl border border-white/10"
                />

                <div className="mt-4 text-center text-white max-w-xl">
                  <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-semibold block mb-1">
                    {filteredImages[lightboxIndex].category} • Image {lightboxIndex + 1} of {filteredImages.length}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-light mb-1">
                    {filteredImages[lightboxIndex].title}
                  </h3>
                  <p className="text-xs text-white/70 font-light">
                    {filteredImages[lightboxIndex].caption}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
