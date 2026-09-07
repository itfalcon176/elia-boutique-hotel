import { motion } from 'framer-motion';
import { Sparkles, BedDouble, Utensils, Waves, Heart, ArrowRight } from 'lucide-react';

export default function AboutPage({ onNavigate, onOpenReservation }) {
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
              About Elia
            </li>
          </ol>
        </nav>

        {/* Header Hero Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Sparkles size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              The Elia Story
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            A Little Hotel <span className="italic text-gold-gradient font-serif">By The Sea</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <p className="text-[#555047] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            Meet Elia, an intimate design-led boutique hotel of just 13 rooms beside Bang Tao Beach and GOAT Beach Club in Phuket.
          </p>
        </div>

        {/* Core Story Narrative Grid matching Section 14 of SEO Pack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-5 text-[#555047] text-sm sm:text-base font-light leading-relaxed font-sans">
            <p className="text-[#23211E] text-base sm:text-lg font-serif">
              Elia was created to offer something Phuket doesn't always make easy to find.
            </p>
            <div className="space-y-1 font-serif italic text-lg sm:text-xl text-[#8B6E3F]">
              <p>Something small.</p>
              <p>Something personal.</p>
            </div>
            <p>
              Somewhere beautifully designed, close to the beach and connected to everything you want from a holiday without feeling like a sprawling resort.
            </p>
            <p className="font-medium text-[#23211E]">
              There are only 13 rooms at Elia. That's intentional.
            </p>
            <p>
              It means the hotel can feel relaxed and individual. It means the beach never feels far away. And it means we can focus on the small details that make a stay feel good rather than simply making it big.
            </p>
            <p>
              GOAT Beach Club sits next door, giving Elia guests beachfront food, drinks and atmosphere whenever they want it.
            </p>
            <p>
              Back at the hotel, the gardens, wellness spaces, plunge pool and rooms provide somewhere quieter to retreat to.
            </p>
            <div className="pt-2 border-t border-[#A38B68]/20 space-y-1 font-serif text-lg text-[#23211E]">
              <p>Two places.</p>
              <p className="italic text-[#8B6E3F]">One very easy holiday.</p>
            </div>
            <div className="pt-2">
              <strong className="text-xl font-serif text-[#23211E] block">Elia.</strong>
              <span className="text-xs uppercase tracking-[0.25em] text-[#A38B68] font-bold">
                The beach. At your door.
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[#A38B68]/30">
            <img
              src="/images/suite.png"
              alt="Elia Boutique Hotel beside Bang Tao Beach in Phuket"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white text-xs">
              <span className="font-serif text-xl block mb-1">“The beach. At your door.”</span>
              <span className="text-[#C5A880] text-[10px] uppercase tracking-widest">Bang Tao Beach, Phuket</span>
            </div>
          </div>
        </div>

        {/* 2 Places, 1 Holiday Feature Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#23211E] to-[#181715] text-[#FAF7F2] border border-[#A38B68]/40 shadow-2xl mb-20"
        >
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-[10px] uppercase tracking-widest text-[#C5A880] font-bold block">
              The Intimate Connection
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-light text-white leading-tight">
              Elia + GOAT Beach Club
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pt-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block mb-2">
                  Elia Boutique Hotel
                </span>
                <h4 className="font-serif text-xl text-white font-light mb-2">
                  13 Rooms By The Sea
                </h4>
                <p className="text-xs text-[#FAF7F2]/70 font-light leading-relaxed">
                  Quiet gardens, private terraces, outdoor sauna, cold plunge, jacuzzi, plunge pool, and kids club — an intimate place to return to.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block mb-2">
                  GOAT Beach Club
                </span>
                <h4 className="font-serif text-xl text-white font-light mb-2">
                  Beachfront Dining & Drinks
                </h4>
                <p className="text-xs text-[#FAF7F2]/70 font-light leading-relaxed">
                  Complimentary access next door for breakfast, barista coffee, barefoot lunches, sunset cocktails, and evening dinners on Bang Tao Beach.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#A38B68]/30 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-3">
            Stay a little closer. To the sea. To the good life.
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6A63] font-light max-w-xl mx-auto leading-relaxed mb-6">
            13 bespoke rooms on Bang Tao Beach, Phuket. Book direct for the best available rates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenReservation}
              className="px-8 py-3.5 rounded-full bg-[#23211E] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68] transition-all cursor-pointer shadow-md"
            >
              BOOK YOUR STAY
            </button>
            <button
              onClick={() => onNavigate('rooms')}
              className="px-7 py-3.5 rounded-full border border-[#A38B68] text-[#8B6E3F] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68]/10 transition-all cursor-pointer"
            >
              EXPLORE ROOMS & SUITES
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
