import { motion } from 'framer-motion';
import { Utensils, Sparkles, Coffee, Sun, GlassWater, Bell } from 'lucide-react';
import {
  eatDrinkData,
  eatDrinkRoutes,
  eatDrinkWhatsapp,
  eatDrinkWhatsappHref,
} from '../data/eatDrinkData';

const sectionIcons = {
  breakfast: Coffee,
  dining: Sun,
  sunset: GlassWater,
};

const actionClass = {
  primary:
    'inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#23211E] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68] transition-all cursor-pointer shadow-md text-center',
  secondary:
    'inline-flex items-center justify-center px-6 py-3 rounded-full border border-[#A38B68] text-[#8B6E3F] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68]/10 transition-all cursor-pointer text-center',
  closingPrimary:
    'px-8 py-3.5 rounded-full bg-[#23211E] text-white font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68] transition-all cursor-pointer shadow-md text-center',
  closingSecondary:
    'px-7 py-3.5 rounded-full border border-[#A38B68] text-[#8B6E3F] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#A38B68]/10 transition-all cursor-pointer text-center',
};

function DiningAction({ action, onNavigate, variant = 'section' }) {
  const emphasis = action.emphasis === 'primary' ? 'primary' : 'secondary';
  const className = variant === 'closing'
    ? actionClass[emphasis === 'primary' ? 'closingPrimary' : 'closingSecondary']
    : actionClass[emphasis];

  if (action.kind === 'whatsapp') {
    return (
      <a
        href={eatDrinkWhatsappHref(action.message)}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {action.label}
      </a>
    );
  }

  return (
    <button type="button" onClick={() => onNavigate(action.page)} className={className}>
      {action.label}
    </button>
  );
}

function ActionRow({ actions, onNavigate, variant = 'section' }) {
  if (!actions?.length) return null;

  return (
    <div className={`flex flex-wrap items-center gap-3 ${variant === 'closing' ? 'justify-center' : ''}`}>
      {actions.map((action) => (
        <DiningAction
          key={`${action.kind}-${action.label}`}
          action={action}
          onNavigate={onNavigate}
          variant={variant}
        />
      ))}
    </div>
  );
}

export default function EatDrinkPage({ onNavigate }) {
  const { hero, sections, roomService, minibar, closing } = eatDrinkData;

  return (
    <div className="pt-28 pb-24 bg-[#F7F4EF] text-[#23211E] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-[#6E6A63] font-sans">
          <ol className="flex items-center gap-2">
            <li>
              <button
                type="button"
                onClick={() => onNavigate(eatDrinkRoutes.home)}
                className="hover:text-[#A38B68] transition-colors cursor-pointer"
              >
                Home
              </button>
            </li>
            <li>/</li>
            <li className="text-[#23211E] font-medium" aria-current="page">
              Food and Drinks
            </li>
          </ol>
        </nav>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A38B68]/15 border border-[#A38B68]/30 mb-4 text-[#8B6E3F]">
            <Utensils size={13} />
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] font-sans font-semibold">
              {hero.eyebrow}
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-light tracking-wide text-[#23211E] mb-4">
            {hero.titleLead} <span className="italic text-gold-gradient font-serif">{hero.titleAccent}</span>
          </h1>
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#A38B68] to-transparent mx-auto mb-6" />

          <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-4">
            {hero.heading}
          </h2>

          <p className="text-[#555047] font-light text-sm sm:text-base font-sans leading-relaxed max-w-2xl mx-auto">
            {hero.paragraphs[0]}
          </p>
          <p className="text-[#6E6A63] font-light text-xs sm:text-sm font-sans leading-relaxed max-w-xl mx-auto mt-2">
            {hero.paragraphs[1]}
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {sections.map((section) => {
            const Icon = sectionIcons[section.id] ?? Utensils;
            const imageFirst = section.imageSide === 'start';

            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="p-8 sm:p-12 rounded-3xl bg-white border border-[#A38B68]/25 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className={`lg:col-span-6 space-y-4 ${imageFirst ? 'order-1 lg:order-2' : ''}`}>
                  <div className="flex items-center gap-2 text-[#8B6E3F]">
                    <Icon size={18} />
                    <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
                      {section.eyebrow}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-4xl font-light text-[#23211E]">
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                  {section.note && (
                    <p className="text-xs sm:text-sm text-[#8B6E3F] font-serif italic">
                      {section.note}
                    </p>
                  )}
                  <ActionRow actions={section.actions} onNavigate={onNavigate} />
                </div>
                <div className={`lg:col-span-6 relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md ${imageFirst ? 'order-2 lg:order-1' : ''}`}>
                  <img
                    src={section.image}
                    alt={section.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            );
          })}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-8 rounded-3xl bg-white border border-[#A38B68]/25 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#8B6E3F]">
                  <Bell size={18} />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
                    {roomService.eyebrow}
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-light text-[#23211E]">
                  {roomService.title}
                </h2>
                {roomService.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="pt-6 mt-6 border-t border-[#A38B68]/15 space-y-3">
                <ActionRow actions={roomService.actions} onNavigate={onNavigate} />
                <p className="text-xs text-[#6E6A63] font-light">
                  WhatsApp concierge {eatDrinkWhatsapp.display}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="p-8 rounded-3xl bg-white border border-[#A38B68]/25 shadow-lg flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#8B6E3F]">
                  <Sparkles size={18} />
                  <span className="text-[10px] uppercase tracking-[0.3em] font-semibold">
                    {minibar.eyebrow}
                  </span>
                </div>
                <h2 className="font-serif text-2xl font-light text-[#23211E]">
                  {minibar.title}
                </h2>
                {minibar.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                <div className="rounded-2xl border border-dashed border-[#A38B68]/45 bg-[#F7F4EF] px-4 py-4">
                  <p className="text-[10px] uppercase tracking-[0.28em] font-semibold text-[#8B6E3F] mb-2">
                    {minibar.placeholderTitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#555047] font-light leading-relaxed">
                    {minibar.placeholder}
                  </p>
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-[#A38B68]/15 space-y-3">
                <ActionRow actions={minibar.actions} onNavigate={onNavigate} />
                <p className="text-xs text-[#6E6A63] font-light">
                  {eatDrinkWhatsapp.display}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF7F2] border border-[#A38B68]/30 text-center">
          <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#23211E] mb-3">
            {closing.title}
          </h3>
          <p className="text-xs sm:text-sm text-[#6E6A63] font-light max-w-xl mx-auto leading-relaxed mb-6">
            {closing.body}
          </p>
          <ActionRow actions={closing.actions} onNavigate={onNavigate} variant="closing" />
        </div>
      </div>
    </div>
  );
}
