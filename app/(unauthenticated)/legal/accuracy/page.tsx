"use client";

import { Callout, BulletList, ContactBlock, Section } from "@/components/legal/LegalComponents";
import LegalLayout from "@/components/legal/LegalLayout";



export default function AccuracyPage() {
  return (
    <LegalLayout
      title="Data Accuracy & Responsibility Disclaimer"
      subtitle="Understanding the limitations of community-submitted data."
    >
      <Callout type="danger">
        MSPKenya publishes community-submitted information. We cannot guarantee the
        accuracy of any case. Do not make decisions based solely on information from
        this platform — always verify through official channels.
      </Callout>

      <Section title="1. Nature of Published Data">
        <p>
          All missing person cases on MSPKenya are submitted by members of the public.
          While we moderate submissions for obvious errors and abuse, we are not able to
          independently verify every detail of every case. Published information reflects
          what was reported to us, not necessarily verified fact.
        </p>
      </Section>

      <Section title="2. No Warranty of Accuracy">
        <p>MSPKenya makes no warranty, express or implied, regarding:</p>
        <BulletList items={[
          "The accuracy, completeness, or currency of any case information",
          "Whether a person is actually missing or has since been found",
          "The accuracy of physical descriptions, ages, or photographs",
          "The validity of contact information provided by reporters",
          "The authenticity of tips submitted by community members",
        ]} />
      </Section>

      <Section title="3. Responsibility of Reporters">
        <p>
          Reporters bear primary responsibility for the accuracy of information they submit.
          By submitting a case, reporters confirm that:
        </p>
        <BulletList items={[
          "The person is genuinely missing to the best of their knowledge",
          "All information provided is accurate and current",
          "They have the right to share any photographs uploaded",
          "They will notify MSPKenya promptly if the person is found",
          "They understand that false reports may constitute a criminal offence",
        ]} />
      </Section>

      <Section title="4. Responsibility of Users Acting on Information">
        <Callout type="warning">
          If you believe you have located a missing person, do not approach or confront
          them directly. Contact Kenya Police (999) immediately.
        </Callout>
        <p>
          Users who act on information published on this platform do so at their own risk.
          MSPKenya is not liable for any harm arising from actions taken based on published
          case information. This includes but is not limited to:
        </p>
        <BulletList items={[
          "Physical confrontation or altercation arising from misidentification",
          "Emotional distress caused by incorrect case information",
          "Financial loss arising from following up on fraudulent cases",
          "Reputational damage to individuals incorrectly identified",
        ]} />
      </Section>

      <Section title="5. Outdated Information">
        <p>
          Cases may remain visible on the platform after a person has been found if
          the reporter has not notified us. MSPKenya cannot monitor the real-world
          status of every case in real time. If you know a case is outdated, please
          use the correction request process.
        </p>
      </Section>

      <Section title="6. Platform's Limitation of Liability">
        <p>
          To the maximum extent permitted by Kenyan law, MSPKenya and its volunteer
          operators shall not be liable for any direct, indirect, incidental, or
          consequential damages arising from:
        </p>
        <BulletList items={[
          "Reliance on inaccurate or outdated case information",
          "Failure of the platform to locate a missing individual",
          "Technical errors, outages, or data loss",
          "Third-party misuse of published case information",
        ]} />
      </Section>

      <Section title="7. Commitment to Improvement">
        <p>
          While we cannot guarantee accuracy, we are committed to continuous improvement.
          We accept corrections, maintain an active moderation team, and review flagged
          cases promptly. If you notice inaccurate information, please report it.
        </p>
      </Section>

      <ContactBlock email="corrections@mspkenya.org" label="Report inaccurate information" />
    </LegalLayout>
  );
}