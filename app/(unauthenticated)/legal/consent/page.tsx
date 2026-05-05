"use client";

import { Callout, BulletList, SubSection, ContactBlock, Section } from "@/components/legal/LegalComponents";
import LegalLayout from "@/components/legal/LegalLayout";



export default function ConsentPage() {
  return (
    <LegalLayout
      title="Consent & Image Use Policy"
      subtitle="How photos and personal images of missing persons are handled."
    >
      <Callout type="info">
        Images of missing persons are published for the sole purpose of assisting in
        their safe recovery. We do not use images for any commercial or promotional purpose.
      </Callout>

      <Section title="1. Basis for Publishing Images Without Direct Consent">
        <p>
          In the context of a missing person search, it is not always possible to obtain
          consent directly from the subject — this is the nature of the situation. MSPKenya
          publishes images under the following legal and ethical basis:
        </p>
        <BulletList items={[
          "Legitimate interest: locating a missing person is a compelling public interest",
          "Reporter consent: the person submitting the case confirms they have the right to share the image",
          "Kenya Data Protection Act 2019 — Schedule 3, legitimate processing of sensitive data for safety purposes",
          "The image is used strictly for identification and search assistance",
        ]} />
      </Section>

      <Section title="2. Reporter's Obligation Regarding Images">
        <p>By uploading a photograph, the reporter confirms that:</p>
        <BulletList items={[
          "They own the image or have express permission from the photographer or subject",
          "The image was not obtained through deceptive or unlawful means",
          "The image accurately represents the missing person's current appearance",
          "They understand the image will be publicly visible on the platform",
          "They will request image removal if the person is found or if consent is withdrawn",
        ]} />
        <Callout type="danger">
          Do not upload screenshots from someone&apos;s private social media without their
          knowledge and consent. This may violate Kenyan data protection law.
        </Callout>
      </Section>

      <Section title="3. How Images Are Used on the Platform">
        <BulletList items={[
          "Displayed on the case detail page for identification purposes",
          "Shown on the case listing card for quick recognition",
          "May be included in social sharing previews when a case is shared",
          "May be shared with verified law enforcement partners investigating the case",
          "Not used in advertising, marketing, or any commercial context",
          "Not processed through facial recognition or AI identification systems",
        ]} />
      </Section>

      <Section title="4. Images of Minors">
        <Callout type="warning">
          Cases involving children receive heightened image handling protections.
        </Callout>
        <BulletList items={[
          "Images of children under 18 are published only when necessary for search purposes",
          "Images must be appropriate and dignified — no images that could be considered exploitative",
          "Images of found children are removed within 24 hours of resolution",
          "We do not display images of minors in any social sharing outside of active search",
          "Guardian consent is implicit in case submission — we may seek explicit confirmation for media use",
        ]} />
      </Section>

      <Section title="5. Image Withdrawal and Removal">
        <SubSection title="5.1 By the Reporter">
          <p>
            The original reporter may request image removal at any time by contacting
            takedown@mspkenya.org with the case number. The image will be removed within
            24 hours while the case may remain active with a placeholder.
          </p>
        </SubSection>
        <SubSection title="5.2 By the Subject">
          <p>
            An adult subject who has been found and does not wish their image to remain
            online may request removal. Upon identity verification, images are removed
            within 24 hours.
          </p>
        </SubSection>
        <SubSection title="5.3 After a Case Closes">
          <p>
            Images associated with resolved cases are permanently deleted within 30 days
            of case closure. We do not retain image archives beyond operational necessity.
          </p>
        </SubSection>
      </Section>

      <Section title="6. Third-Party Sharing of Images">
        <p>
          When community members share a case on social media or other platforms, they
          take on responsibility for complying with those platforms&apos; terms of service.
          MSPKenya cannot control how third parties use shared images once they leave
          our platform.
        </p>
      </Section>

      <ContactBlock email="privacy@mspkenya.org" label="Image removal or consent questions" />
    </LegalLayout>
  );
}