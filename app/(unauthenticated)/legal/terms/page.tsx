"use client";

import { Callout, DefinitionCard, BulletList, SubSection, ContactBlock, Section } from "@/components/legal/LegalComponents";
import LegalLayout from "@/components/legal/LegalLayout";


export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="Your agreement with MSPKenya when using this platform."
    >
      <Callout type="warning">
        MSPKenya is a community platform, not a law enforcement agency. In an emergency,
        always call Kenya Police on <strong>999</strong> or the Child Helpline on <strong>116</strong>.
      </Callout>

      <Section title="1. Acceptance of Terms">
        <p>
          By accessing or using MSPKenya (&quot;the Platform&quot;), you agree to be bound by these Terms
          of Service and all applicable Kenyan laws and regulations. If you do not agree, please
          discontinue use immediately.
        </p>
        <p>
          These terms apply to all visitors, reporters, tip providers, and any other users of
          the platform regardless of how they access it (web, mobile, or API).
        </p>
      </Section>

      <Section title="2. Definitions">
        <DefinitionCard term="Platform" definition="The MSPKenya website, mobile application, and any associated services." />
        <DefinitionCard term="Reporter" definition="Any person who submits a missing person case to the platform." />
        <DefinitionCard term="Tip Provider" definition="Any person who submits information or leads relating to a case." />
        <DefinitionCard term="Case" definition="A missing person record submitted and published on the platform." />
        <DefinitionCard term="We / Us / MSPKenya" definition="The open-source volunteer team operating this platform." />
      </Section>

      <Section title="3. Permitted Use">
        <p>You may use MSPKenya to:</p>
        <BulletList items={[
          "Report a genuinely missing person in Kenya",
          "Search for and view missing person cases",
          "Submit tips or information relevant to an open case",
          "Share cases on social media to assist in locating individuals",
          "Access the platform's open-source code for non-commercial purposes",
        ]} />
      </Section>

      <Section title="4. Prohibited Conduct">
        <Callout type="danger">
          Violation of these prohibitions may result in account suspension, case removal,
          and referral to relevant authorities.
        </Callout>
        <BulletList items={[
          "Submitting false, fabricated, or knowingly inaccurate missing person reports",
          "Using the platform to harass, stalk, or locate individuals without consent",
          "Submitting cases as a tool for domestic abuse or coercive control",
          "Scraping or bulk-downloading personal data from case listings",
          "Impersonating police officers, family members, or platform administrators",
          "Uploading images without the right to share them",
          "Circumventing moderation or content controls",
          "Using the platform for commercial advertising or unsolicited promotion",
        ]} />
      </Section>

      <Section title="5. Reporter Responsibilities">
        <p>
          As a reporter, you confirm that the information you provide is accurate to the best
          of your knowledge and that you have a legitimate reason to believe the person is missing.
          Deliberately false reports are a criminal offence under Kenyan law.
        </p>
        <SubSection title="5.1 Police Reporting">
          <p>
            We strongly recommend filing a report with your nearest police station and obtaining
            an OB (Occurrence Book) number. An official police report significantly increases
            the effectiveness of community search efforts.
          </p>
        </SubSection>
      </Section>

      <Section title="6. Content Moderation">
        <p>
          All submissions are subject to manual review before publication. We reserve the right
          to reject, edit, or remove any case or tip that violates these terms, our Submission
          Policy, or Kenyan law.
        </p>
      </Section>

      <Section title="7. Limitation of Liability">
        <p>
          MSPKenya is provided free of charge by volunteers. We make no guarantee that the
          platform will locate any missing person. We are not liable for any loss or harm
          arising from use of the platform, reliance on published information, or failure
          to locate a missing individual.
        </p>
      </Section>

      <Section title="8. Changes to These Terms">
        <p>
          We may update these terms at any time. Continued use of the platform after changes
          constitutes acceptance. We will post a notice on the homepage when significant
          changes are made.
        </p>
      </Section>

      <Section title="9. Governing Law">
        <p>
          These terms are governed by the laws of the Republic of Kenya. Any disputes shall
          be subject to the exclusive jurisdiction of Kenyan courts.
        </p>
      </Section>

      <ContactBlock email="legal@mspkenya.org" label="Questions about these terms?" />
    </LegalLayout>
  );
}