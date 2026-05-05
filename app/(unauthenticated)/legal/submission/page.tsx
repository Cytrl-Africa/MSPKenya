"use client";

import { Callout, BulletList, NumberedList, SubSection, ContactBlock, Section } from "@/components/legal/LegalComponents";
import LegalLayout from "@/components/legal/LegalLayout";


export default function SubmissionPage() {
  return (
    <LegalLayout
      title="Missing Person Submission Policy"
      subtitle="Standards and requirements for submitting cases to MSPKenya."
    >
      <Callout type="warning">
        Always file an official police report first. An OB (Occurrence Book) number
        from your local police station is required before a case can be marked as verified.
      </Callout>

      <Section title="1. Who May Submit a Case">
        <p>Cases may be submitted by:</p>
        <BulletList items={[
          "Immediate family members (parents, siblings, spouses, children)",
          "Legal guardians of a missing minor",
          "Extended family members with the knowledge of immediate family",
          "Friends or community members who have been asked to report by family",
          "Social workers or NGO representatives acting on family's behalf",
          "Law enforcement officers filing on behalf of a family",
        ]} />
        <Callout type="danger">
          Submitting a case about an adult who has chosen to leave and does not wish to
          be found is a violation of this policy and Kenyan data protection law.
        </Callout>
      </Section>

      <Section title="2. Required Information">
        <p>Every submission must include:</p>
        <NumberedList items={[
          "Full name of the missing person",
          "Approximate age at time of disappearance",
          "Gender",
          "County where last seen",
          "Specific last seen location (as precise as possible)",
          "Date last seen",
          "Physical description (height, build, complexion, hair, distinguishing features)",
          "Reporter's name and phone number (or anonymous declaration)",
        ]} />
      </Section>

      <Section title="3. Recommended Information">
        <p>Including the following significantly increases the chance of a case leading to a successful outcome:</p>
        <BulletList items={[
          "Recent clear photograph (face clearly visible)",
          "Clothing description at time of disappearance",
          "OB number from police report",
          "Additional context (mental health, medical conditions where relevant to search)",
          "Additional contact persons",
        ]} />
      </Section>

      <Section title="4. Photo Requirements">
        <SubSection title="4.1 Accepted Photos">
          <BulletList items={[
            "Clear, recent photograph where the face is visible",
            "JPEG, PNG or WebP format, minimum 200×200 pixels",
            "Photo taken within the last 3 years for adults; last 12 months for children",
          ]} />
        </SubSection>
        <SubSection title="4.2 Rejected Photos">
          <BulletList items={[
            "Group photographs without clear identification of the subject",
            "Heavily filtered or edited photos that may misrepresent appearance",
            "Photos where the subject is a minor shown in a potentially exploitative manner",
            "Photos you do not have the right to share",
          ]} />
        </SubSection>
      </Section>

      <Section title="5. Verification Process">
        <p>All submissions go through a moderation review before publishing:</p>
        <NumberedList items={[
          "Automated checks for duplicate submissions and spam content",
          "Manual review by a trained volunteer moderator (within 24 hours)",
          "Cross-referencing with active police records where available",
          "Reporter contact verification for high-urgency cases",
          "Publication once verification is complete",
        ]} />
        <Callout type="info">
          Urgent cases (children under 18, cases involving suspected violence) are
          escalated for priority review within 2 hours.
        </Callout>
      </Section>

      <Section title="6. False Submissions">
        <p>
          Knowingly submitting false information about a missing person is a criminal offence
          under Section 129 of the Penal Code (Cap 63) of Kenya. MSPKenya will cooperate
          fully with law enforcement investigations into abuse of the platform.
        </p>
      </Section>

      <Section title="7. Case Updates and Closure">
        <BulletList items={[
          "Reporters should notify us immediately when a person is found",
          "Cases are automatically flagged for review if no update is received within 90 days",
          "Closed cases are anonymised within 90 days of resolution",
          "Reporters may request case updates or closure at any time",
        ]} />
      </Section>

      <ContactBlock email="reports@mspkenya.org" label="Questions about submitting a case?" />
    </LegalLayout>
  );
}