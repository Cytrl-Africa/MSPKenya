"use client";

import { Callout, BulletList, ContactBlock, Section } from "@/components/legal/LegalComponents";
import LegalLayout from "@/components/legal/LegalLayout";


export default function CommunityPage() {
  return (
    <LegalLayout
      title="Community Guidelines & Ethical Use"
      subtitle="How we expect all users to engage with the MSPKenya platform."
    >
      <Callout type="info">
        MSPKenya exists because communities come together to find the missing.
        These guidelines protect the platform, the people on it, and the families
        who depend on it.
      </Callout>

      <Section title="1. Core Principles">
        <p>
          Every interaction on MSPKenya should be guided by these four principles:
        </p>
        <BulletList items={[
          "Dignity — treat missing persons, their families, and other users with respect",
          "Accuracy — only share information you believe to be true and verifiable",
          "Safety — never take actions that could put yourself or others at risk",
          "Privacy — respect that missing persons are people, not content",
        ]} />
      </Section>

      <Section title="2. When Submitting Cases">
        <BulletList items={[
          "Only report people who are genuinely and involuntarily missing",
          "Do not report adults who have chosen to leave a situation — this is not a domestic dispute tool",
          "Provide accurate and up-to-date information at the time of submission",
          "Update or close cases promptly when the person is found",
          "Do not submit duplicate cases — if a case exists, submit a tip instead",
          "Do not embellish descriptions to generate more attention",
        ]} />
      </Section>

      <Section title="3. When Submitting Tips">
        <BulletList items={[
          "Only submit tips based on genuine information or observations",
          "Do not submit speculative or gossip-based tips that could mislead investigators",
          "Do not share location details that could put a missing person in danger",
          "If you believe you have seen the person, call 999 first — then submit a tip",
          "Anonymous tips are accepted; do not use anonymity to submit false information",
          "Do not post identifying information about suspects without evidence",
        ]} />
        <Callout type="danger">
          Never confront or approach someone you suspect is a missing person. Always
          contact Kenya Police (999) first.
        </Callout>
      </Section>

      <Section title="4. Prohibited Behaviour">
        <BulletList items={[
          "Using the platform to locate someone fleeing domestic violence or abuse",
          "Submitting cases as a tool of harassment, stalking, or coercive control",
          "Posting inflammatory, racist, or discriminatory content in tips or case notes",
          "Impersonating a family member, law enforcement officer, or platform volunteer",
          "Sharing unverified rumours that could cause harm or panic",
          "Posting commercial content, links, or unsolicited promotions",
          "Attempting to scrape or mass-download personal data from the platform",
          "Using the platform to conduct vigilante investigations",
        ]} />
      </Section>

      <Section title="5. Ethical Search Conduct">
        <p>
          Community-led searching is powerful but must be conducted responsibly.
          MSPKenya does not coordinate physical search operations, but we encourage
          those who wish to assist to:
        </p>
        <BulletList items={[
          "Coordinate with Kenya Police before organising any physical search",
          "Never trespass on private property during a search",
          "Do not share real-time location updates publicly if doing so could alert a perpetrator",
          "Treat all information about missing persons with confidentiality",
          "Refer media enquiries to the family or official police spokesperson",
        ]} />
      </Section>

      <Section title="6. Media and Public Attention">
        <p>
          High-profile cases attract significant media attention. When sharing cases
          on social media:
        </p>
        <BulletList items={[
          "Share the case link rather than downloading and reposting images",
          "Do not add speculation or commentary that could defame individuals",
          "Do not share cases of adults who have been found without confirming they consent to publicity",
          "Be sensitive to the distress of families — avoid sensationalist language",
        ]} />
      </Section>

      <Section title="7. Enforcement">
        <p>
          Violations of these guidelines may result in:
        </p>
        <BulletList items={[
          "Removal of submitted cases or tips without notice",
          "Blocking of access from your IP address",
          "Reporting of abuse to Kenya Police Service",
          "Legal action where violations constitute criminal offences",
        ]} />
      </Section>

      <ContactBlock email="conduct@mspkenya.org" label="Report a guideline violation" />
    </LegalLayout>
  );
}