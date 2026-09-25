import * as React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      /**
       * Official Cloudbeds Immersive Experience 2.0 Standard Web Component
       * Mode defaults to 'standard' (full page inline embed).
       */
      'cb-immersive-experience': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'mode'?: 'standard' | string;
          'property-code'?: string;
        },
        HTMLElement
      >;

      /**
       * Official Book now button and calendar for one accommodation.
       * Continue opens the hosted booking engine for that room type.
       */
      'cb-accommodation-date-picker': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'property-code'?: string;
          rid?: string;
          'button-label'?: string;
          lang?: string;
          currency?: string;
          'class-name'?: string;
          'custom-url'?: string;
        },
        HTMLElement
      >;

      /**
       * Official single-property date search bar for the homepage hero.
       * Search continues on the Elia site through custom-url.
       */
      'cb-property-date-picker': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'property-code'?: string;
          'button-label'?: string;
          layout?: 'horizontal' | 'vertical' | string;
          'open-in-new-tab'?: 'true' | 'false' | string;
          lang?: string;
          currency?: string;
          'class-name'?: string;
          'custom-url'?: string;
        },
        HTMLElement
      >;

      /**
       * Official Cloudbeds Book Now Button (Popup Mode)
       */
      'cb-book-now-button': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          'property-code'?: string;
          'close-label'?: string;
          label?: string;
          height?: string;
          width?: string;
          'class-name'?: string;
        },
        HTMLElement
      >;
    }
  }
}

export {};
