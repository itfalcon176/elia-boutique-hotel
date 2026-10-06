import { useEffect } from 'react';
import { initGA, trackPageView } from '../utils/analytics';

export default function LegalPage({ title, children }) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = `${title} | Elia Boutique Hotel`;
    initGA();
    trackPageView();

    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return (
    <div className="h-full overflow-y-auto bg-[#08080a] text-white">
      <article className="mx-auto w-full max-w-3xl px-6 py-10 sm:px-8 sm:py-16">
        <a href="/" aria-label="Elia Boutique Hotel" className="mb-8 inline-flex sm:mb-10">
          <img
            src="/Logos/logo-4.png"
            alt="Elia Boutique Hotel"
            className="h-14 w-auto object-contain sm:h-16"
          />
        </a>

        <p className="text-[10px] font-medium uppercase tracking-[0.35em] text-gold sm:text-[11px]">
          Elia Boutique Hotel
        </p>
        <h1 className="mt-3 font-serif text-4xl font-light tracking-wide text-white sm:text-5xl">
          {title}
        </h1>
        <div className="my-6 h-px w-12 bg-gradient-to-r from-gold to-transparent" />

        <div className="space-y-8 text-[15px] font-light leading-relaxed text-white/80 sm:text-base">
          {children}
        </div>

        <p className="mt-16 text-[10px] uppercase tracking-[0.28em] text-white/40">
          Elia Boutique Hotel · Phuket · Opening November 2026
        </p>
      </article>
    </div>
  );
}

export function LegalSection({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="font-serif text-2xl font-light tracking-wide text-gold sm:text-[1.75rem]">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

export function PlaceholderNote({ children }) {
  return (
    <aside className="rounded-2xl border border-gold/40 bg-gold/10 px-5 py-4 text-sm text-white/90">
      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-gold">
        Replace before publishing
      </p>
      <div className="space-y-2">{children}</div>
    </aside>
  );
}
