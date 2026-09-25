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
