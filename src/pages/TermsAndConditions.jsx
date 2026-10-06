import LegalPage, { LegalSection, PlaceholderNote } from '../components/LegalPage';

export default function TermsAndConditions() {
  return (
    <LegalPage title="Terms and Conditions">
      <p>Last updated: 6 October 2026</p>

      <p>
        These terms govern your use of the Elia Boutique Hotel website at eliaphuket.com,
        and any Elia application that presents them, including an application published on
        the Google Play Store. By using the website or that application, you agree to
        these terms. If you do not agree, please do not use them.
      </p>

      <LegalSection title="About Elia">
        <p>
          Elia Boutique Hotel is a boutique hotel in Phuket, opening November 2026. The
          website is a coming-soon page. It introduces the hotel, plays a short film and
          optional background music, and lets you send an enquiry or contact us on
          WhatsApp. It does not confirm a reservation, take payment, or create a guest
          account.
        </p>
      </LegalSection>

      <LegalSection title="Acceptance">
        <p>
          Each time you open the website or application, you accept the terms published
          then. If we change them, the new version applies from the time it is published
          at this address.
        </p>
      </LegalSection>

      <LegalSection title="Using the site">
        <p>
          You may use the website and application for personal, lawful enquiries about
          the hotel. You agree not to:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-gold">
          <li>Interfere with the site, its film, or its music</li>
          <li>Attempt to reach systems, inboxes, or data you are not offered</li>
          <li>Send unlawful, misleading, or abusive enquiries</li>
          <li>Copy or scrape the site in a way that burdens it</li>
          <li>Use the site to send spam or malware</li>
        </ul>
      </LegalSection>

      <LegalSection title="Accounts">
        <p>
          We do not offer user accounts, passwords, or member profiles. An enquiry is a
          message, not an account. You are responsible for the name and email you submit,
          and for being allowed to use that email address.
        </p>
      </LegalSection>

      <LegalSection title="Enquiries and stays">
        <p>
          Submitting Enquire Now, or messaging us on WhatsApp at +66 93 271 9103, does
          not reserve a room, hold a rate, or form a contract for accommodation. A stay,
          if one is offered later, will be confirmed separately by the hotel. “Opening
          November 2026” is the opening we are working toward. It can change.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          The Elia name, logo, film, text, and design of this site belong to Elia
          Boutique Hotel or its licensors. The background music credited on the page,
          Spring 1 by Max Richter, belongs to its rights holders. It is there to be heard
          on the page, not downloaded or reused. You may not copy the logo, film, or
          design for your own commercial use without written permission from us.
        </p>
      </LegalSection>

      <LegalSection title="Other services">
        <p>
          The site links to Facebook, Instagram, TikTok, and WhatsApp, and it sends
          enquiries through EmailJS. Those services are outside our control, and their own
          terms apply once you use them. Google Analytics measures visits. How we handle
          personal information is described in our Privacy Policy, published separately
          for this hotel.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimers">
        <p>
          The website and application are provided as they are. The film, the music, and
          the opening note are an introduction, not a promise of a particular room, view,
          or date. We do not warrant that the site will be uninterrupted or free of
          errors.
        </p>
        <p>
          To the fullest extent the law allows, we are not liable for lost profits, a
          missed trip, or other indirect loss arising from your use of the coming-soon
          site, an unanswered enquiry, or a third-party service such as WhatsApp, EmailJS,
          Google Analytics, or a social network. Nothing in these terms limits liability
          that the law does not allow us to limit, including liability for fraud or for
          death or personal injury caused by negligence.
        </p>
      </LegalSection>

      <LegalSection title="Limit of liability">
        <p>
          Where the law allows us to cap liability, our total liability arising out of the
          website or application is limited to the amount you paid us through it. The site
          does not take payment, so that amount is zero unless and until a separate
          agreement says otherwise.
        </p>
      </LegalSection>

      <LegalSection title="Changes and availability">
        <p>
          We may change, pause, or remove the website, an Elia application, the film, or
          the music at any time. We may update these terms by publishing a new version at
          this page. The date at the top is the date of the latest version.
        </p>
      </LegalSection>

      <LegalSection title="Google Play">
        <p>
          If you installed an Elia application from Google Play, these terms apply
          together with Google Play’s terms. Google is not a party to this agreement and
          is not responsible for the hotel or the application.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These terms are governed by the laws of Thailand. The courts of Thailand may
          hear disputes, except where a law that applies to you gives you a non-waivable
          right to bring a claim somewhere else.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these terms can be sent to{' '}
          <a className="text-gold hover:text-white" href="mailto:info@eliaphuket.com">
            info@eliaphuket.com
          </a>{' '}
          or by WhatsApp to +66 93 271 9103.
        </p>
        <PlaceholderNote>
          <p>Legal entity name: Elia Boutique Hotel</p>
          <p>Postal address: 82/9 Moo 3, Bang Tao Beach
Choeng Thale, Thalang, Phuket 83110
Thailand</p>
          
        </PlaceholderNote>
      </LegalSection>
    </LegalPage>
  );
}
