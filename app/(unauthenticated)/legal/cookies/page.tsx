"use client";

import { BulletList, Callout, ContactBlock, DefinitionCard, Section } from "@/components/legal/LegalComponents";
import LegalLayout from "@/components/legal/LegalLayout";

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="What cookies MSPKenya uses and how to control them."
    >
      <Callout type="info">
        MSPKenya uses minimal cookies. We do not use advertising cookies or
        third-party tracking networks. You can use the platform with essential
        cookies only.
      </Callout>

      <Section title="1. What Are Cookies">
        <p>
          Cookies are small text files stored by your browser when you visit a website.
          They help websites remember preferences and understand how visitors use the site.
          MSPKenya uses cookies sparingly, only for functionality and basic analytics.
        </p>
      </Section>

      <Section title="2. Cookies We Use">
        <DefinitionCard
          term="session_id — Essential"
          definition="Keeps you on the same moderation session when reviewing cases. Deleted when you close your browser. Cannot be disabled without breaking core functionality."
        />
        <DefinitionCard
          term="locale_pref — Functional"
          definition="Remembers your language preference (English, Kiswahili, Gĩkũyũ, Dholuo, Kĩkamba). Stored for 365 days. No personal data."
        />
        <DefinitionCard
          term="_msp_analytics — Analytics"
          definition="Anonymised page view counter used to understand which features are most useful. No IP address or personal identifier is stored. Powered by a self-hosted analytics tool."
        />
        <DefinitionCard
          term="consent_banner — Functional"
          definition="Records that you have dismissed the cookie consent banner so it does not appear on every page. Stored for 180 days."
        />
      </Section>

      <Section title="3. Cookies We Do NOT Use">
        <BulletList items={[
          "Advertising or retargeting cookies (Google Ads, Meta Pixel, etc.)",
          "Third-party analytics that identify individuals (Google Analytics with full tracking)",
          "Social media tracking pixels",
          "Cross-site tracking cookies",
          "Persistent login cookies (we have no user accounts)",
        ]} />
      </Section>

      <Section title="4. Third-Party Services">
        <p>
          MSPKenya does not embed third-party advertising, social media widgets, or
          payment services that would introduce external cookies. Where we use
          third-party services (e.g., a CDN for performance), these do not set
          tracking cookies.
        </p>
      </Section>

      <Section title="5. Managing Your Cookie Preferences">
        <p>You can control cookies in the following ways:</p>
        <BulletList items={[
          "Browser settings: all modern browsers allow you to view, block, or delete cookies",
          "Our cookie banner: when you first visit, you can accept or decline non-essential cookies",
          "Incognito/private mode: session cookies are not retained after the window closes",
        ]} />
        <Callout type="warning">
          Disabling essential cookies will affect core platform functionality such as
          language preferences and session management during case review.
        </Callout>
      </Section>

      <Section title="6. How to Delete Cookies">
        <p>To delete MSPKenya cookies from your browser:</p>
        <BulletList items={[
          "Chrome: Settings → Privacy and Security → Clear Browsing Data",
          "Firefox: Settings → Privacy & Security → Cookies and Site Data → Clear Data",
          "Safari: Preferences → Privacy → Manage Website Data",
          "Edge: Settings → Cookies and Site Permissions → Manage and Delete Cookies",
        ]} />
      </Section>

      <Section title="7. Changes to This Policy">
        <p>
          If we introduce new cookies, we will update this policy and show a new
          consent banner. We will not introduce advertising or tracking cookies
          without explicit community consultation, given the sensitive nature of
          the platform.
        </p>
      </Section>

      <ContactBlock email="privacy@mspkenya.org" label="Cookie or privacy questions" />
    </LegalLayout>
  );
}