import LegalPage, { LegalSection, PlaceholderNote } from '../components/LegalPage';

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy">
      <p>Last updated: 6 October 2026</p>

      <p>
        This Privacy Policy explains how Elia Boutique Hotel (“Elia”, “we”, “us”) handles
        personal information when you use the Elia website at eliaphuket.com, and when you
        use an Elia application that directs you to this policy, including an application
        listed on the Google Play Store.
      </p>

      <p>
        Elia is a boutique hotel in Phuket, opening November 2026. The website is a
        coming-soon page. You can watch a short film of the hotel, play background music,
        open our social channels, send an enquiry, or message us on WhatsApp. We do not
        offer guest accounts, and the site does not take payment or complete a booking.
      </p>

      <LegalSection title="Who we are">
        <p>
          The operator named on this site is Elia Boutique Hotel. A registered legal entity
          name and postal address are not published in the product yet. Until they are,
          please use the contact details below. The highlighted lines are placeholders for
          the hotel to replace.
        </p>
        <p>
          Email: <a className="text-gold hover:text-white" href="mailto:info@eliaphuket.com">info@eliaphuket.com</a>
          <br />
          WhatsApp: +66 93 271 9103
          <br />
          Website: eliaphuket.com
        </p>
        <PlaceholderNote>
          <p>Legal entity name: [Legal entity name]</p>
          <p>Postal address: [Postal address]</p>
        </PlaceholderNote>
      </LegalSection>

      <LegalSection title="Information you give us">
        <p>When you use Enquire Now, we collect:</p>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-gold">
          <li>Your name</li>
          <li>Your email address</li>
        </ul>
        <p>
          We send that message by email to info@eliaphuket.com so the hotel can reply.
          The form is delivered through EmailJS, an email service. We do not ask you to
          create a password or an account.
        </p>
        <p>
          If you choose WhatsApp Enquiry, you leave this site and open WhatsApp to message
          +66 93 271 9103. From that point, WhatsApp processes the conversation under its
          own terms. We receive only what you choose to send in that chat.
        </p>
      </LegalSection>

      <LegalSection title="Information collected automatically">
        <p>
          We use Google Analytics 4 to understand how the site is used. Google Analytics
          may process:
        </p>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-gold">
          <li>The pages you view, and the time of the visit</li>
          <li>A truncated IP address and a general location derived from it</li>
          <li>Browser, device type, operating system, and language</li>
          <li>The website that referred you, if there is one</li>
        </ul>
        <p>
          We use this to measure visits. We do not use it to identify you by name. Google
          Analytics may store a cookie or similar identifier in your browser. You can limit
          that through your browser settings and through Google’s own analytics opt-out.
        </p>
      </LegalSection>

      <LegalSection title="Information we do not collect">
        <p>As the site and enquiry flow work today, we do not collect:</p>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-gold">
          <li>Account passwords, because there are no user accounts</li>
          <li>Precise GPS location from your device</li>
          <li>Your photos, contacts, microphone, or files</li>
          <li>Payment card or bank details</li>
          <li>Government identity numbers</li>
        </ul>
        <p>
          Please do not send passport numbers, card numbers, or other sensitive documents
          through the enquiry form.
        </p>
      </LegalSection>

      <LegalSection title="How we use information">
        <p>We use the information above to:</p>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-gold">
          <li>Read and reply to your enquiry</li>
          <li>Understand visits to the coming-soon site and improve it</li>
          <li>Keep the site working and diagnose errors</li>
          <li>Meet a legal duty if one applies</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </LegalSection>

      <LegalSection title="Who we share it with">
        <p>We share personal information only as follows:</p>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-gold">
          <li>
            EmailJS, so the name and email you submit can be delivered to
            info@eliaphuket.com
          </li>
          <li>Google, for Google Analytics as described above</li>
          <li>WhatsApp, only if you choose to message us there</li>
          <li>
            Facebook, Instagram, or TikTok, only if you follow those links and use those
            services yourself. A link on our page does not send them your enquiry
          </li>
          <li>A public authority, if the law requires it</li>
        </ul>
        <p>We do not share enquiry details with advertisers.</p>
      </LegalSection>

      <LegalSection title="How long we keep it">
        <p>
          We keep your name and email for as long as we need them to answer your enquiry
          and to keep a reasonable record of that correspondence in the hotel inbox. You
          may ask us to delete an enquiry by emailing info@eliaphuket.com. We will delete
          it from the inbox we control, unless we must keep it for a legal reason.
        </p>
        <p>
          EmailJS may keep a delivery record under its own policy. Google Analytics keeps
          usage data for the retention period set on our analytics property. You can also
          limit analytics in your browser.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          The site is served over HTTPS, and the enquiry is sent through EmailJS to the
          hotel email address. No method of sending information is perfectly secure. Use
          the enquiry form for your name, email, and a general question about the hotel.
        </p>
      </LegalSection>

      <LegalSection title="Your rights">
        <p>
          Depending on where you live, you may have the right to access the personal
          information we hold about you, to correct it, to delete it, to object to or
          restrict certain uses, and to complain to a data protection authority. To use
          these rights, email info@eliaphuket.com. We may need to confirm that the request
          comes from you.
        </p>
        <p>
          If the law of your country requires a legal basis, we answer your enquiry
          because you asked us to, and we measure site visits because it is in our
          legitimate interest to understand and look after a coming-soon page. You can
          object to analytics through your browser.
        </p>
      </LegalSection>

      <LegalSection title="Children">
        <p>
          This site is meant for adults enquiring about a hotel stay. We do not knowingly
          collect personal information from children under 13, or under a higher age if
          your country requires it. If you believe a child has sent us an enquiry, email
          info@eliaphuket.com and we will delete it.
        </p>
      </LegalSection>

      <LegalSection title="International transfers">
        <p>
          EmailJS and Google may process information on servers outside Thailand, including
          in the United States. Where the law requires a safeguard for that transfer, we
          rely on the protections those providers make available, such as standard
          contractual clauses.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update this policy as the hotel, the website, or an Elia application
          changes. When we do, we will change the date at the top of this page. The
          version at this address is the current one.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about this policy, or a request about your information, can be sent to
          info@eliaphuket.com or by WhatsApp to +66 93 271 9103.
        </p>
        <PlaceholderNote>
          <p>
            Replace [Legal entity name] and [Postal address] with the registered operator
            before you submit this page to Google Play.
          </p>
        </PlaceholderNote>
      </LegalSection>
    </LegalPage>
  );
}
