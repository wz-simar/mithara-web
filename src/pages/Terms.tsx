import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PageHero from "@/components/PageHero";
import servicesHero from "@/assets/services-hero.jpg";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <PageHero
        image={servicesHero}
        title="Terms & Conditions"
        subtitle="Master Website, Mobile Application & EULA Agreement"
      />

      <main className="flex-grow bg-section-alt py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-background rounded-[2rem] shadow-xl p-8 md:p-14 lg:p-16 border border-primary/10">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">MASTER WEBSITE, MOBILE APPLICATION & EULA AGREEMENT</h1>

            <div className="border-l-4 border-primary pl-4 mb-8">
              <p className="text-muted-foreground font-body font-semibold">Mithara Nutrition & Wellness | www.mithahara.com | Kochi, Kerala</p>
              <p className="text-muted-foreground font-body font-medium">Last Updated: 01-04-2026</p>
            </div>

            <div className="space-y-6 text-muted-foreground font-body leading-relaxed text-[15px] md:text-base">
              <p>
                This Master Website, Mobile Application and End User License Agreement (“Agreement”) is
                made and issued by Nutritionist Smitha Menon (“Nutritionist”, “we”, “us”, “our”) and
                governs the use of the website, mobile application, digital tools, online services, offline support
                made available through digital channels, and all associated content, communications,
                consultations, plans, materials, and interactions, whether accessed through Android, iOS, website,
                email, WhatsApp, video meeting platforms, telephone, or any other electronic medium.
              </p>
              <p className="pb-4 border-b border-border/50">
                By downloading, installing, accessing, browsing, registering, signing in, clicking “I Agree”,
                submitting forms, making payment, opening messages, joining a consultation, or otherwise using
                the website, the application, or any communication channel of ours, the user (“User”, “you”,
                “your”) expressly acknowledges and agrees to be bound by this Agreement.
              </p>

              {/* 1. DEFINITIONS */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-4 mb-2">1. DEFINITIONS</h2>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">1.1. App</h3>
                <p>means the Android and iOS mobile application, including updates, patches, upgrades, plug-ins, and any related software, interface, or functionality provided by us.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">1.2. Services</h3>
                <p>means nutrition counselling, diet planning, wellness support, follow-up assistance, educational material, care coordination, and other non-medical services offered through the website, app, or communication channels.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">1.3. Communication Channels</h3>
                <p>means WhatsApp, email, SMS, telephone, video conferencing tools, website forms, push notifications, in-app messaging, and any similar electronic or digital channel.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">1.4. User Content</h3>
                <p>means any information, data, reports, photographs, messages, files, measurements, or other material submitted by the User.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">1.5. Sensitive Information</h3>
                <p>means health-related information, medical history, medication details, allergies, laboratory reports, biometric or lifestyle details, and any other personal information furnished for service delivery.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">1.6. Store Platform</h3>
                <p>means any third-party app marketplace or distributor, including Apple App Store and Google Play Store, through which the App may be downloaded or updated.</p>
              </div>

              {/* 2. SCOPE AND NATURE OF SERVICES */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">2. SCOPE AND NATURE OF SERVICES</h2>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">2.1. Nutrition-Based Services Only</h3>
                <p>The Services are strictly nutrition-based and wellness-oriented. They are not medical services, and nothing in this Agreement shall be construed as medical diagnosis, treatment, prescription, prognosis, therapy, emergency care, or a substitute for a registered medical practitioner.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">2.2. No Replacement for Doctor Consultation</h3>
                <p>The User must consult a qualified doctor, specialist, or hospital for any disease, symptom, emergency, complication, abnormal report, medication query, pregnancy complication, mental health concern, or any condition requiring medical evaluation.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">2.3. No Emergency Use</h3>
                <p>The App, website, and communication channels are not intended for emergencies. The User shall immediately seek emergency medical assistance in case of chest pain, breathlessness, fainting, severe weakness, allergic reaction, uncontrolled bleeding, seizures, suicidal thoughts, or any other urgent condition.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">2.4. Professional Judgement</h3>
                <p>We may refuse, postpone, modify, or discontinue any plan or communication if we reasonably believe that the User requires medical evaluation, there is incomplete disclosure, or continued nutritional intervention would be unsafe or inappropriate.</p>
              </div>

              {/* 3. ACCEPTANCE, E-CONTRACTS, AND ELECTRONIC CONSENT */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">3. ACCEPTANCE, E-CONTRACTS, AND ELECTRONIC CONSENT</h2>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">3.1. Electronic Acceptance</h3>
                <p>The User agrees that acceptance through clicking, tapping, signing digitally, checking a box, submitting an online form, paying online, sending a WhatsApp message, sending an email, or continuing to use the App or website constitutes valid acceptance of this Agreement and related notices to the fullest extent permitted by law.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">3.2. Electronic Records</h3>
                <p>The User consents to the use of electronic records, electronic acknowledgements, electronically stored forms, and digital communications as valid evidence of instructions, consent, and receipt, to the extent permitted by applicable Indian law.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">3.3. English Language Prevails</h3>
                <p>This Agreement and all related notices shall be in the English language. If any translation is provided, the English version shall prevail in case of inconsistency, ambiguity, or dispute.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">3.4. Entire Agreement by Use</h3>
                <p>By using the website or App, the User confirms that the User has read, understood, and agreed to this Agreement in full and is legally bound by it.</p>
              </div>

              {/* 4. END USER LICENSE (EULA) FOR MOBILE APPLICATION */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">4. END USER LICENSE (EULA) FOR MOBILE APPLICATION</h2>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">4.1. Limited License</h3>
                <p>Subject to continuous compliance with this Agreement, we grant the User a personal, limited, revocable, non-exclusive, non-transferable, non-sublicensable license to install and use the App on one or more personally controlled Android or iOS devices solely for lawful, private, and non-commercial access to the Services.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">4.2. No Ownership Transfer</h3>
                <p>The App is licensed, not sold. All rights, title, and interest in and to the App, underlying code, interface, design, logic, database structures, algorithms, workflows, content, and trademarks remain with us or our licensors.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">4.3. Updates and Modifications</h3>
                <p>We may deploy updates, corrections, security patches, feature changes, or discontinuation of features without prior notice where reasonably necessary. Continued use after such update shall constitute acceptance of the updated version.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">4.4. App Store Terms</h3>
                <p>If the App is downloaded through Apple App Store, Google Play Store, or any other Store Platform, the User shall also comply with the relevant store terms. This Agreement supplements, and does not override, any mandatory store terms applicable to the distribution of the App.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">4.5. Device Permissions</h3>
                <p>To the extent features are enabled, the App may request access to device permissions such as notifications, camera, photos, microphone, storage, calendar, health inputs, or location. The User may manage permissions through device settings, but disabling permissions may restrict functionality and we shall not be liable for such restriction.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">4.6. Push Notifications</h3>
                <p>The User consents to receive push notifications, in-app alerts, reminders, and service updates, which may include appointment reminders, follow-up prompts, plan updates, payment notices, and policy communications.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">4.7. User Account Security</h3>
                <p>The User is solely responsible for maintaining the confidentiality of login credentials, OTPs, passwords, and device access. Any activity conducted through the User’s account shall be presumed authorized unless promptly disputed and verified otherwise.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">4.8. Prohibited App Use</h3>
                <p>The User shall not copy, modify, reverse engineer, decompile, disassemble, scrape, attempt unauthorized access, interfere with security features, upload malware, automate misuse, or use the App for unlawful, abusive, defamatory, or harmful purposes.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">4.9. Reliance on Mobile Functionality</h3>
                <p>The App is provided on an as-is and as-available basis. We do not warrant uninterrupted connectivity, compatibility with all devices, battery behavior, network stability, operating system changes, store availability, or error-free performance.</p>
              </div>

              {/* 5. WEBSITE, WEBSITE-TO-APP, AND DIGITAL COMMUNICATION TERMS */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">5. WEBSITE, WEBSITE-TO-APP, AND DIGITAL COMMUNICATION TERMS</h2>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">5.1. Unified Service Ecosystem</h3>
                <p>This Agreement applies equally to the website, app, booking pages, intake forms, dashboards, emails, WhatsApp, telephone calls, video consultations, and any other electronic or digital interaction used for service delivery.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">5.2. Informal Communication Disclaimer</h3>
                <p>Any suggestion, reminder, message, voice note, or clarification sent over WhatsApp, email, SMS, social platforms, or other messaging tools is provided for convenience only. Such communication may be incomplete, delayed, forwarded, misread, or viewed out of context. We shall not be liable for any loss arising from reliance on an incomplete, misunderstood, or out-of-sequence communication.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">5.3. No Override by Informal Channels</h3>
                <p>No informal message shall override a formal plan, written update, or latest instructions issued by us. In the event of inconsistency, the latest written instruction from us shall prevail.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">5.4. Communication Monitoring and Response</h3>
                <p>The User acknowledges that response times may vary and that immediate replies are not guaranteed on any channel. The User shall not rely on any assumed response time for medical decisions.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">5.5. Third-Party Platforms</h3>
                <p>The User understands that WhatsApp, email providers, video platforms, and similar tools are third-party services controlled by their respective providers. We do not control their uptime, encryption standards, outages, storage behavior, or policy changes.</p>
              </div>

              {/* 6. VIDEO CONSULTATIONS, TELE-CONSULTS, AND OFFLINE CONSULTATION SUPPORT */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">6. VIDEO CONSULTATIONS, TELE-CONSULTS, AND OFFLINE CONSULTATION SUPPORT</h2>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">6.1. Video Consultation Limitations</h3>
                <p>Video consultations conducted through Zoom, Google Meet, WhatsApp video, Microsoft Teams, or any other platform are subject to internet quality, device performance, background noise, camera quality, network interruptions, and platform errors. We shall not be responsible for any missed detail, interruption, or inability to complete a consultation due to such issues.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">6.2. User Environment</h3>
                <p>The User is responsible for joining consultations in a private, quiet, and safe environment and for ensuring that the device, headset, camera, microphone, and internet connection are functioning properly.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">6.3. Offline Consultation Support</h3>
                <p>Where an offline appointment or physical consultation is offered, the User shall comply with appointment time, location rules, entry requirements, and any safety or operational instructions. We shall not be liable for delays, inconvenience, or disruptions caused by venue conditions, traffic, third-party premises issues, or force majeure.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">6.4. No Guarantee of Immediate Review</h3>
                <p>The User acknowledges that reports, photographs, or messages sent before, during, or after a consultation may not be reviewed instantly and should not be treated as urgent medical triage.</p>
              </div>

              {/* 7. USER REPRESENTATIONS, WARRANTIES, AND DISCLOSURES */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">7. USER REPRESENTATIONS, WARRANTIES, AND DISCLOSURES</h2>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">7.1. Truthful Information</h3>
                <p>The User represents and warrants that all information supplied is true, accurate, current, and complete.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">7.2. Mandatory Disclosure</h3>
                <p>The User must disclose pregnancy, lactation, age, major illnesses, medications, allergies, surgeries, digestive issues, blood sugar issues, thyroid disorders, eating disorder history, fertility treatment, and any other condition that may impact the suitability of a nutrition plan.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">7.3. Ongoing Duty to Update</h3>
                <p>The User shall promptly inform us of any material change in health condition, medication, symptoms, lab findings, hospitalization, or doctor advice that may affect the Services.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">7.4. Minors and Dependents</h3>
                <p>Where services are used for a minor or dependent, the parent, guardian, or lawful representative confirms authority to provide information and consent on behalf of such person, subject to law.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">7.5. Medical Escalation</h3>
                <p>If symptoms worsen or a medical condition is suspected, the User shall immediately seek medical care and not rely solely on nutrition support.</p>
              </div>

              {/* 8. PRIVACY, DATA PROTECTION, AND CONFIDENTIALITY */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">8. PRIVACY, DATA PROTECTION, AND CONFIDENTIALITY</h2>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">8.1. Data Processing Framework</h3>
                <p>We process digital personal data in accordance with applicable Indian law, including the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023, as applicable from time to time.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">8.2. Data Collected</h3>
                <p>We may collect identity data, contact data, appointment data, health history, medication details, laboratory reports, body measurements, dietary preferences, lifestyle details, communication records, payment details, and other information voluntarily shared for service delivery.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">8.3. Purpose of Processing</h3>
                <p>Such data is used for onboarding, consultation, nutrition assessment, plan creation, follow-up support, record keeping, service improvement, quality assurance, communication, payment processing, grievance handling, compliance, and lawful business purposes.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">8.4. Consent and Authorization</h3>
                <p>By using the website, App, or Communication Channels, the User consents to the collection, storage, use, transmission, and processing of information for the purposes described herein.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">8.5. Sharing and Disclosure</h3>
                <p>We do not sell personal data. Disclosure may occur only on a need-to-know basis to service providers, professional advisors, payment processors, hosting vendors, communication vendors, or authorities where required by law, court order, regulatory direction, or lawful request.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">8.6. Security Safeguards</h3>
                <p>We adopt reasonable technical and organizational safeguards to protect data; however, no internet-based system, device, app, message platform, or cloud storage is completely immune from risk. The User acknowledges inherent risks of digital communication.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">8.7. Messaging Platform Risk</h3>
                <p>If the User sends Sensitive Information through WhatsApp, email, SMS, or other third-party platforms, the User acknowledges that such platforms are not controlled by us and may carry their own privacy, delivery, retention, and security risks.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">8.8. Record Retention</h3>
                <p>We may retain records for as long as necessary for service, safety, legal, tax, audit, or dispute purposes, and may retain electronic records in accordance with law.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">8.9. Grievance</h3>
                <p>Any privacy concern may be raised through the official contact details published on the website. We will address such concerns in a reasonable manner and within a reasonable time.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">8.10. Confidentiality of Clinical Discussion</h3>
                <p>We shall maintain reasonable confidentiality over information shared by the User, subject always to lawful disclosure obligations, safety concerns, internal operational need, and the limitations of digital communication channels described in this Agreement.</p>
              </div>

              {/* 9. INTELLECTUAL PROPERTY */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">9. INTELLECTUAL PROPERTY</h2>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">9.1. Ownership</h3>
                <p>All Content, including but not limited to plans, formats, methods, templates, worksheets, reports, text, graphics, video, audio, design, logos, and trademarks, is owned by us or our licensors and is protected to the fullest extent available under applicable law.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">9.2. Restricted Use</h3>
                <p>No Content may be copied, duplicated, distributed, published, resold, translated, modified, reverse engineered, adapted, or used to create derivative works without our prior written consent.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">9.3. Personal Use Only</h3>
                <p>Any materials provided to the User are for the User’s personal use only and may not be shared publicly, commercially, or with third parties except for legitimate medical review by a doctor with appropriate disclosure and consent, where required.</p>
              </div>

              {/* 10. FEES, PAYMENT, RENEWAL, AND REFUNDS */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">10. FEES, PAYMENT, RENEWAL, AND REFUNDS</h2>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">10.1. Payment Terms</h3>
                <p>Fees shall be payable in advance or as otherwise displayed or communicated. Payment through the website, app, payment gateway, UPI, card, bank transfer, or other permitted modes shall be deemed valid confirmation.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">10.2. No Automatic Refund Right</h3>
                <p>Except where expressly stated in writing by us, all fees once paid are non-refundable and non-transferable.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">10.3. Services Deemed Rendered</h3>
                <p>A consultation, plan, report, onboarding, or digital deliverable shall be deemed rendered once prepared, sent, booked, started, or made available, whether or not the User fully utilises it.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">10.4. Missed Appointments and No-Shows</h3>
                <p>If the User misses, delays, or fails to attend a scheduled consultation or follow-up, the fee may be forfeited at our discretion, subject to the applicable booking terms communicated at the time of booking.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">10.5. Chargebacks</h3>
                <p>The User agrees not to initiate any wrongful chargeback, reversal, or payment dispute without first giving us a reasonable opportunity to resolve the issue. Wrongful chargebacks may result in suspension of Services and recovery of associated costs.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">10.6. Taxes and Charges</h3>
                <p>Applicable taxes, bank charges, gateway fees, and platform charges may be non-refundable to the extent permitted by law.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">10.7. No Guarantee of Commercial Success</h3>
                <p>The User acknowledges that the Services do not guarantee any particular health, cosmetic, aesthetic, fertility, or commercial outcome.</p>
              </div>

              {/* 11. USER CONDUCT AND PROHIBITED ACTIVITIES */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">11. USER CONDUCT AND PROHIBITED ACTIVITIES</h2>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">11.1. Lawful Use Only</h3>
                <p>The User shall use the website, App, and Services only for lawful purposes and in compliance with this Agreement.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">11.2. Prohibited Conduct</h3>
                <p>The User shall not harass, threaten, abuse, defame, impersonate, misrepresent, spam, attempt to hack, scrape, overload, disrupt, or otherwise misuse the website, App, staff, or Services.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">11.3. No Misleading Medical Reliance</h3>
                <p>The User shall not represent nutrition guidance as medical prescription, nor use it to delay necessary medical evaluation.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">11.4. Security Breach Notification</h3>
                <p>If the User suspects account misuse, unauthorized access, or compromise of credentials, the User shall notify us immediately.</p>
              </div>

              {/* 12. LIMITATION OF LIABILITY */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">12. LIMITATION OF LIABILITY</h2>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">12.1. No Consequential Liability</h3>
                <p>To the fullest extent permitted by law, we shall not be liable for indirect, incidental, special, consequential, exemplary, punitive, or remote losses, including loss of profit, data, business, goodwill, opportunity, or health outcome.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">12.2. Cap on Liability</h3>
                <p>Our total aggregate liability for any claim arising out of or relating to the website, App, Services, or communications shall not exceed the amount actually paid by the User for the specific Service giving rise to the claim.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">12.3. Reliance on User Input</h3>
                <p>We shall not be liable for any outcome arising from incomplete, inaccurate, delayed, or misleading information supplied by the User.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">12.4. Third-Party Platform Failures</h3>
                <p>We shall not be liable for any failure caused by Apple, Google, WhatsApp, email providers, video platforms, payment gateways, internet service providers, hosting providers, or any third-party service beyond our reasonable control.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">12.5. Health-Related Risks</h3>
                <p>The User acknowledges that following a nutrition plan may not be suitable in all cases and that adverse events may occur if the User has undisclosed conditions, uses incompatible medication, or fails to seek timely medical care.</p>
              </div>

              {/* 13. INDEMNITY */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">13. INDEMNITY</h2>
              <p>The User shall indemnify, defend, and hold harmless the Nutritionist, our personnel, consultants, contractors, agents, affiliates, and representatives from and against any and all claims, demands, actions, proceedings, liabilities, damages, losses, fines, penalties, costs, and expenses (including reasonable legal fees) arising out of or relating to:</p>
              <ul className="list-[lower-alpha] pl-5 space-y-1 mt-2">
                <li>breach of this Agreement</li>
                <li>false, incomplete, misleading, or suppressed health information</li>
                <li>misuse of the website, App, or Services</li>
                <li>unauthorized sharing of Content</li>
                <li>violation of law, rights of third parties, or platform terms</li>
                <li>use of nutrition advice in place of medical care</li>
                <li>wrongful chargeback, fraud, or abuse of payment systems</li>
              </ul>

              {/* 14. SUSPENSION, TERMINATION, AND ACCESS CONTROL */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">14. SUSPENSION, TERMINATION, AND ACCESS CONTROL</h2>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">14.1. Right to Suspend or Terminate</h3>
                <p>We may suspend, restrict, limit, or terminate the User’s access to the website, App, accounts, consultation slots, or Services at any time if the User breaches this Agreement, behaves abusively, supplies false information, uses the Services unsafely, or fails to pay amounts due.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">14.2. Effect of Termination</h3>
                <p>Upon termination, the User’s right to use the App and Services ceases immediately, but accrued obligations, payment liabilities, indemnity, confidentiality, intellectual property, limitation of liability, and jurisdiction clauses shall survive.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">14.3. Data After Termination</h3>
                <p>We may retain records and data as required by law or for legitimate business purposes, including safety, audit, dispute resolution, and legal defense.</p>
              </div>

              {/* 15. FORCE MAJEURE */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">15. FORCE MAJEURE</h2>
              <p>We shall not be liable for delay, suspension, or failure in performance caused by events beyond our reasonable control, including but not limited to natural calamities, power failure, internet outage, cyber incident, strike, epidemic, government restriction, platform outage, or acts of third parties.</p>

              {/* 16. GOVERNING LAW AND EXCLUSIVE JURISDICTION */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">16. GOVERNING LAW AND EXCLUSIVE JURISDICTION</h2>
              <p>This Agreement shall be governed by and construed in accordance with the laws of India.</p>
              <p>All disputes, claims, causes of action, proceedings, and controversies arising out of or in connection with this Agreement, the website, the App, the Services, communications, or any transaction related thereto shall be subject to the exclusive jurisdiction of the competent courts at Kochi, Kerala, India, and no other court shall have jurisdiction.</p>
              <p>The parties irrevocably agree that Kochi courts alone shall have exclusive jurisdiction to the fullest extent permitted by law.</p>

              {/* 17. AMENDMENT, SEVERABILITY, AND ENTIRE AGREEMENT */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">17. AMENDMENT, SEVERABILITY, AND ENTIRE AGREEMENT</h2>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">17.1. Amendment</h3>
                <p>We may modify this Agreement from time to time by updating the website, App, or other communication channels. Continued use after such update shall constitute acceptance of the revised terms.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">17.2. Severability</h3>
                <p>If any provision is held invalid, unlawful, or unenforceable, the remaining provisions shall continue in full force and effect.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">17.3. Entire Agreement</h3>
                <p>This Agreement constitutes the entire understanding between the parties concerning use of the website, App, and Services and supersedes prior oral or written understandings to the extent inconsistent herewith.</p>
              </div>

              <div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-1">17.4. No Waiver</h3>
                <p>No failure or delay by us in exercising any right shall operate as a waiver of that right.</p>
              </div>

              {/* 18. ACKNOWLEDGEMENT AND ACCEPTANCE */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">18. ACKNOWLEDGEMENT AND ACCEPTANCE</h2>
              <p>By using the website, downloading or opening the App, creating an account, clicking “I Agree”, making payment, sending a WhatsApp message, sending an email, joining a video consultation, or otherwise interacting with us through any digital or electronic means, the User confirms that the User has read, understood, and irrevocably accepted this Agreement.</p>
              <p>The User further confirms that all diet and nutrition-related assistance is separate from medical diagnosis and treatment and that any medical issue must be referred to an appropriately qualified doctor.</p>
              <p>The User confirms that the User has had the opportunity to review this Agreement and to seek independent legal advice if desired before acceptance.</p>

              {/* 19. CONTACT AND NOTICES */}
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground pt-6 md:pt-8 border-t border-border/50 mb-2">19. CONTACT AND NOTICES</h2>
              <p>All notices, complaints, support requests, legal communications, privacy concerns, refund requests, and service-related grievances shall be sent through the official contact details disclosed on the website or app.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Terms;
