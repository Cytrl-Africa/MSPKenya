"use client";

import { Callout, DefinitionCard, BulletList, NumberedList, SubSection, ContactBlock, Section } from "@/components/legal/LegalComponents";
import LegalLayout from "@/components/legal/LegalLayout";


export default function TakedownPage() {
  return (
    <LegalLayout
      title="Takedown & Correction Policy"
      subtitle="How to request removal or correction of case information."
    >
      <Callout type="info">
        We aim to process all takedown requests within 48 hours. Urgent requests
        involving risk to safety are escalated for same-day review.
      </Callout>

      <Section title="1. Who May Request a Takedown">
        <DefinitionCard
          term="The Missing Person Themselves"
          definition="An adult who has been reported missing but has chosen to leave may request removal of their case. We will verify identity before processing."
        />
        <DefinitionCard
          term="Legal Guardian"
          definition="A parent or legal guardian may request removal of a minor's case."
        />
        <DefinitionCard
          term="Original Reporter"
          definition="The person who submitted the case may request its removal at any time."
        />
        <DefinitionCard
          term="Law Enforcement"
          definition="Police may request removal if publication is hindering an active investigation."
        />
        <DefinitionCard
          term="Next of Kin"
          definition="For deceased individuals, immediate family may request removal out of respect."
        />
      </Section>

      <Section title="2. Grounds for Takedown">
        <BulletList items={[
          "The missing person has been found and is safe",
          "The missing person is deceased (and family requests removal)",
          "The case was submitted without the reporter's authorisation",
          "The subject is an adult who left voluntarily and does not wish to be found",
          "Information in the case is substantially false or defamatory",
          "Continued publication poses a safety risk to the subject or family",
          "Law enforcement has requested removal for operational reasons",
        ]} />
      </Section>

      <Section title="3. Takedown Request Process">
        <NumberedList items={[
          "Submit a request to takedown@mspkenya.org with the case number",
          "State your relationship to the subject and reason for takedown",
          "Provide proof of identity (copy of ID or for minors, guardian ID)",
          "For 'found' cases, a brief note on the outcome helps us close the record",
          "Our moderation team will acknowledge your request within 24 hours",
          "The case will be reviewed and actioned within 48 hours of verified request",
          "You will receive email confirmation once the case is removed",
        ]} />
        <Callout type="warning">
          We cannot process anonymous takedown requests for cases involving third parties.
          Identity verification is required to prevent misuse of the takedown process.
        </Callout>
      </Section>

      <Section title="4. Correction Requests">
        <p>
          If information in a case is inaccurate but the case should remain active, you
          may submit a correction request. Corrections are appropriate for:
        </p>
        <BulletList items={[
          "Incorrect age, physical description, or location details",
          "Outdated contact information",
          "Wrong photograph attached to a case",
          "Spelling errors in names or locations",
          "Updates to circumstances (e.g., new last-seen location)",
        ]} />
        <SubSection title="4.1 Correction Process">
          <NumberedList items={[
            "Email corrections@mspkenya.org with the case number",
            "State the specific information that needs correcting and what it should say",
            "Corrections to sensitive details (age, identity) require identity verification",
            "Approved corrections are applied within 24 hours",
          ]} />
        </SubSection>
      </Section>

      <Section title="5. Right to Appeal">
        <p>
          If your takedown request is denied, you may appeal by emailing
          legal@mspkenya.org with additional supporting evidence. Appeals are
          reviewed by a senior moderator within 7 days.
        </p>
      </Section>

      <Section title="6. Data After Takedown">
        <p>
          Upon case removal, the public case listing is immediately unpublished.
          Associated data is deleted from our systems within 30 days. Anonymised
          statistical records (case count only, no personal data) may be retained
          for operational reporting.
        </p>
      </Section>

      <ContactBlock email="takedown@mspkenya.org" label="Submit a takedown or correction request" />
    </LegalLayout>
  );
}