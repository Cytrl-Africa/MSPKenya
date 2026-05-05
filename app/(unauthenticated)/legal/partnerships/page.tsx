"use client";

import { BulletList, Callout, ContactBlock, DefinitionCard, Section, SubSection } from "@/components/legal/LegalComponents";
import LegalLayout from "@/components/legal/LegalLayout";


export default function PartnershipsPage() {
  return (
    <LegalLayout
      title="Partnership & Law Enforcement Disclaimer"
      subtitle="How MSPKenya works with police, NGOs, and partner organisations."
    >
      <Callout type="danger">
        MSPKenya is NOT an official government service and is NOT affiliated with the
        Kenya Police Service. We are an independent, volunteer-operated, open-source
        platform. In an emergency, always call 999.
      </Callout>

      <Section title="1. Our Independence">
        <p>
          MSPKenya operates independently of any government body, political party, or
          law enforcement agency. We are a civil society initiative maintained by
          volunteers. Our mission is to assist families in locating missing loved ones
          by creating a publicly accessible, searchable database.
        </p>
        <p>
          We do not receive funding from, nor are we directed by, the Kenya Police Service,
          the Directorate of Criminal Investigations (DCI), or any government ministry.
        </p>
      </Section>

      <Section title="2. Our Relationship with Kenya Police Service">
        <SubSection title="2.1 What We Do">
          <BulletList items={[
            "We may share case information with police officers who contact us with verified credentials regarding an active investigation",
            "We encourage all reporters to file an official police report (OB number) before or alongside submitting to MSPKenya",
            "We may refer urgent cases involving suspected criminal activity to the DCI",
            "We cooperate with lawful court orders and police requests for information",
          ]} />
        </SubSection>
        <SubSection title="2.2 What We Do NOT Do">
          <BulletList items={[
            "We are not an official missing persons reporting channel — police reports must be made separately",
            "We do not have direct database access to police systems",
            "We do not verify whether a police report has been filed for every case",
            "We do not have authority to direct or coordinate police searches",
            "We are not funded by or accountable to any police body",
          ]} />
        </SubSection>
        <Callout type="warning">
          Submitting a case to MSPKenya does NOT constitute an official police report.
          You must separately file a report at your local police station.
        </Callout>
      </Section>

      <Section title="3. NGO and Civil Society Partnerships">
        <p>
          MSPKenya may enter into data-sharing or referral agreements with vetted NGOs
          operating in child protection, gender-based violence prevention, and
          humanitarian search and rescue. Current or prospective partners must:
        </p>
        <BulletList items={[
          "Be registered organisations in Kenya or internationally recognised bodies",
          "Sign a formal data sharing agreement outlining purpose and safeguards",
          "Commit to using case data solely for the purpose of locating missing persons",
          "Agree not to republish or commercialise case data",
          "Comply with Kenya's Data Protection Act 2019",
        ]} />
      </Section>

      <Section title="4. Media Partnerships">
        <DefinitionCard
          term="What we support"
          definition="Media organisations that wish to publish missing person notices from MSPKenya for public awareness purposes."
        />
        <DefinitionCard
          term="What we do not support"
          definition="Exclusive commercial agreements, data licensing to media for profit, or sensationalist coverage that could harm families."
        />
        <p className="mt-3">
          Media organisations wishing to use MSPKenya data must credit the platform
          and link to the original case. They may not republish bulk data without
          a formal agreement.
        </p>
      </Section>

      <Section title="5. International Bodies">
        <p>
          For cases involving cross-border disappearances, MSPKenya may cooperate with:
        </p>
        <BulletList items={[
          "INTERPOL's Yellow Notice system for missing persons",
          "UNICEF Kenya for cases involving children",
          "IOM (International Organisation for Migration) for cross-border cases",
          "Regional police cooperation bodies in East Africa",
        ]} />
        <p>
          Such cooperation is done on a case-by-case basis and only where it serves
          the genuine interest of locating the missing person.
        </p>
      </Section>

      <Section title="6. Volunteer Moderators">
        <p>
          Platform moderation is conducted by trained volunteers. Volunteers are not
          law enforcement officers and have no legal authority. They may:
        </p>
        <BulletList items={[
          "Review and approve or reject case submissions",
          "Contact reporters for verification or additional information",
          "Flag cases to law enforcement where criminal activity is suspected",
          "Remove content that violates platform policies",
        ]} />
      </Section>

      <Section title="7. Partnership Enquiries">
        <p>
          Organisations wishing to partner with MSPKenya — including NGOs, media houses,
          academic researchers, and technology companies — should contact us to discuss
          terms. We evaluate all partnership requests on their merits and public interest value.
        </p>
      </Section>

      <ContactBlock email="partnerships@mspkenya.org" label="Partnership and law enforcement enquiries" />
    </LegalLayout>
  );
}