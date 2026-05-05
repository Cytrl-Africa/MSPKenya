"use client";

import { Callout, SubSection, BulletList, DefinitionCard, ContactBlock, Section } from "@/components/legal/LegalComponents";
import LegalLayout from "@/components/legal/LegalLayout";


export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
    >
      <Callout type="info">
        MSPKenya is committed to protecting your privacy. We collect only what is necessary
        to operate the missing persons database and never sell personal data.
      </Callout>

      <Section title="1. Who We Are">
        <p>
          MSPKenya is an open-source, volunteer-operated missing persons database serving Kenya.
          For privacy matters, contact us at <a href="mailto:privacy@mspkenya.org" className="text-primary hover:underline">privacy@mspkenya.org</a>.
        </p>
      </Section>

      <Section title="2. Information We Collect">
        <SubSection title="2.1 Case Submissions (Missing Persons)">
          <p>When a case is submitted, we collect:</p>
          <BulletList items={[
            "Name, age, gender, and physical description of the missing person",
            "Last seen location, date, and county",
            "Optional: photo of the missing person",
            "Optional: OB number from police report",
            "Reporter's name and contact phone number (if not anonymous)",
            "Relationship of reporter to the missing person",
          ]} />
        </SubSection>
        <SubSection title="2.2 Tips and Community Information">
          <BulletList items={[
            "Tip content and timestamp",
            "Tip author name (optional — may be submitted anonymously)",
            "IP address (for abuse prevention only, not displayed publicly)",
          ]} />
        </SubSection>
        <SubSection title="2.3 Technical Data">
          <BulletList items={[
            "Browser type and device type (aggregated analytics only)",
            "Pages visited and search terms entered (anonymised)",
            "Essential cookies for session management",
          ]} />
        </SubSection>
      </Section>

      <Section title="3. How We Use Your Information">
        <BulletList items={[
          "Publishing missing person cases to assist in locating individuals",
          "Enabling community members to submit tips on cases",
          "Contacting reporters if a case is resolved or requires clarification",
          "Sharing case information with Kenya Police Service where relevant",
          "Preventing abuse, spam, and false reports",
          "Improving platform performance and usability",
        ]} />
        <Callout type="warning">
          We do not use your data for advertising, profiling, or any commercial purpose.
        </Callout>
      </Section>

      <Section title="4. Who We Share Data With">
        <DefinitionCard term="Kenya Police Service" definition="Case details may be shared with verified law enforcement to assist official investigations." />
        <DefinitionCard term="Child Helpline Kenya (116)" definition="Cases involving minors may be reported to child protection agencies." />
        <DefinitionCard term="Partner NGOs" definition="Vetted partner organisations may access case data under data sharing agreements." />
        <DefinitionCard term="Open Source Community" definition="Anonymised, aggregated statistics may be shared publicly. No personal data is included." />
        <p className="mt-3">
          We do not sell, rent, or trade personal data to any third party. We will comply
          with lawful court orders requiring disclosure of information.
        </p>
      </Section>

      <Section title="5. Data Retention">
        <BulletList items={[
          "Active missing person cases: retained until resolved or takedown is requested",
          "Resolved/found cases: anonymised within 90 days of resolution",
          "Tips: retained for 2 years for audit purposes, then deleted",
          "Technical logs: deleted after 30 days",
          "Reporter contact details: deleted upon case closure or on request",
        ]} />
      </Section>

      <Section title="6. Your Rights">
        <p>Under Kenya&apos;s Data Protection Act 2019, you have the right to:</p>
        <BulletList items={[
          "Access the personal data we hold about you",
          "Request correction of inaccurate information",
          "Request deletion of your personal data",
          "Object to processing of your data",
          "Withdraw consent at any time",
          "Lodge a complaint with the Office of the Data Protection Commissioner",
        ]} />
      </Section>

      <Section title="7. Data Security">
        <p>
          We use industry-standard security measures including encrypted data transmission (HTTPS),
          access controls on case management systems, and regular security reviews of our
          open-source codebase. However, no internet service can guarantee absolute security.
        </p>
      </Section>

      <Section title="8. Children's Privacy">
        <p>
          Cases involving minors are handled with heightened care. Photos of children under 18
          are only published where necessary for search purposes. Contact details for minors&apos;
          cases are handled through their legal guardian only.
        </p>
      </Section>

      <ContactBlock email="privacy@mspkenya.org" label="Data protection enquiries" />
    </LegalLayout>
  );
}