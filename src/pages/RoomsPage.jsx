import { motion } from 'framer-motion';
import { BedDouble, Users, Maximize, Check, ArrowRight, Sparkles, Waves } from 'lucide-react';
import { roomsData } from '../data/roomsData';

export default function RoomsPage({ onNavigate, onOpenReservation }) {
  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Sparkles size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              Intimate 13-Room Collection
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            Rooms & <span className="italic text-gold-gradient font-serif">Suites</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />
          
          <p className="text-[#6E6A63] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            Each of our 13 suites is an earthy, bohemian-minimalist sanctuary crafted with natural teak wood, organic textiles, and thoughtful open-air living spaces steps from Bang Tao Beach.
          </p>
        </div>

        {/* All 4 Room Cards Grid */}
        <div className="space-y-16">
          {roomsData.map((room, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={room.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden border border-[#A38B68]/25 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Room Image & Badge (lg:col-span-7) */}
                  <div className={`lg:col-span-7 relative overflow-hidden group aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-full min-h-[340px] ${isEven ? '' : 'lg:order-2'}`}>
                    <img
                      src={room.mainImage}
                      alt={room.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    
                    {/* Tag */}
                    <div className="absolute top-5 left-5 bg-[#23211E]/80 backdrop-blur-md border border-[#A38B68]/40 text-[#F7F4EF] text-[10px] uppercase tracking-[0.2em] font-semibold px-3.5 py-1.5 rounded-full shadow-lg">
                      {room.tag}
                    </div>

                    <div className="absolute bottom-5 left-5 right-5 text-white">
                      <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block mb-1">
                        0{index + 1} • {room.subtitle}
                      </span>
                      <h2 className="font-serif text-2xl sm:text-3xl font-light">
                        {room.title}
                      </h2>
                    </div>
                  </div>

                  {/* Room Details & Specifications (lg:col-span-5) */}
                  <div className={`lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isEven ? '' : 'lg:order-1'}`}>
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#A38B68] font-bold">
                          Key Specifications
                        </span>
                        <span className="text-xs font-serif font-medium text-[#23211E]">
                          {room.pricePerNight}
                        </span>
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl text-[#23211E] font-light mb-3">
                        {room.title}
                      </h3>

                      <p className="text-[#6E6A63] text-xs sm:text-sm font-light leading-relaxed mb-6 font-sans">
                        {room.shortDesc}
                      </p>

                      {/* Specs Badges */}
                      <div className="grid grid-cols-2 gap-3 py-4 my-2 border-y border-[#A38B68]/20 bg-[#FAF7F2] rounded-2xl p-4">
                        <div className="flex items-center gap-2.5">
                          <Maximize size={16} className="text-[#A38B68] shrink-0" />
                          <div>
                            <span className="text-[9px] uppercase tracking-wider text-[#6E6A63] block">Size</span>
                            <span className="text-xs font-semibold text-[#23211E]">{room.size}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5">
                          <Users size={16} className="text-[#A38B68] shrink-0" />
                          <div>
                            <span className="text-[9px] uppercase tracking-wider text-[#6E6A63] block">Occupancy</span>
                            <span className="text-xs font-semibold text-[#23211E]">{room.occupancy}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2.5 col-span-2">
                          <BedDouble size={16} className="text-[#A38B68] shrink-0" />
                          <div>
                            <span className="text-[9px] uppercase tracking-wider text-[#6E6A63] block">Bed Configuration</span>
                            <span className="text-xs font-semibold text-[#23211E]">{room.bedConfig}</span>
                          </div>
                        </div>
                      </div>

                      {/* Outdoor Area Highlight */}
                      <div className="mt-4 mb-6">
                        <div className="flex items-start gap-2 text-xs text-[#555047] font-light">
                          <Waves size={15} className="text-[#A38B68] shrink-0 mt-0.5" />
                          <span><strong className="font-medium text-[#23211E]">Outdoor Area:</strong> {room.outdoorArea}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action CTAs */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-[#A38B68]/15">
                      <button
                        onClick={() => onNavigate(`rooms/${room.slug}`)}
                        className="w-full sm:flex-1 py-3 px-5 rounded-full bg-[#23211E] text-[#F7F4EF] hover:bg-[#A38B68] hover:text-white transition-all text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                      >
                        <span>View Room Page</span>
                        <ArrowRight size={14} />
                      </button>

                      <button
                        onClick={onOpenReservation}
                        className="w-full sm:w-auto py-3 px-6 rounded-full border border-[#A38B68] text-[#8B6E3F] hover:bg-[#A38B68]/15 text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer"
                      >
                        Check Availability
                      </button>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Direct Booking Guarantee Banner */}
        <div className="mt-20 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#23211E] to-[#181715] text-[#FAF7F2] border border-[#A38B68]/40 shadow-2xl text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A880] font-semibold mb-2 block">
            Direct Reservation Advantage
          </span>
          <h3 className="font-serif text-2xl sm:text-4xl font-light mb-4">
            Book Direct for the Guaranteed Best Rate & Perks
          </h3>
          <p className="text-[#FAF7F2]/75 text-xs sm:text-sm font-light max-w-2xl mx-auto leading-relaxed mb-6">
            Complimentary airport limousine pickups, daily sunset cocktails at GOAT Beach Club, and flexible check-in are included when you reserve directly with Elia Phuket.
          </p>
          <button
            onClick={onOpenReservation}
            className="px-8 py-3.5 rounded-full bg-[#C5A880] text-[#141312] font-bold text-xs uppercase tracking-[0.2em] hover:brightness-110 shadow-lg cursor-pointer transition-all"
          >
            RESERVE YOUR STAY NOW
          </button>
        </div>

      </div>
    </div>
  );
}
