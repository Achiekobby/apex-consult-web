const draftNotice =
  "Draft for management approval. This is not a signed-off legal policy."

export const legalPages = {
  privacy: {
    path: "/privacy-policy",
    documentTitle: "Privacy Policy | Apex Point Consult Ltd",
    metaDescription:
      "Draft privacy notice for enquiries sent to Apex Point Consult Ltd.",
    title: "Privacy Policy",
    summary: draftNotice,
    sections: [
      {
        heading: "Who this notice is for",
        body: "This draft describes how the public website handles information that visitors submit through an enquiry form. It will be replaced when management approves the company’s privacy notice.",
      },
      {
        heading: "Information the form asks for",
        body: "Full name, organisation, business email, telephone or WhatsApp, service of interest, enquiry type, project description, and an optional budget or timeline. The privacy consent checkbox is required before a message can be submitted.",
      },
      {
        heading: "Where an enquiry goes",
        body: "A completed enquiry is emailed to info@apexpoint.com so Apex Point can read it and reply. FormSubmit, the form delivery service used by this site, forwards the message. Sending an enquiry does not by itself create a client contract.",
      },
    ],
  },
  terms: {
    path: "/terms-of-use",
    documentTitle: "Terms of Use | Apex Point Consult Ltd",
    metaDescription:
      "Draft terms of use for the Apex Point Consult Ltd website.",
    title: "Terms of Use",
    summary: draftNotice,
    sections: [
      {
        heading: "About this website",
        body: "This website presents APEX POINT CONSULT LTD, an emerging Ghana-based technology consulting and digital solutions business. Service and solution pages describe proposed offerings unless a page says otherwise.",
      },
      {
        heading: "No client engagement is created here",
        body: "Browsing the site, or sending an enquiry, does not create a contract. Scope, fees, and responsibilities are agreed separately.",
      },
      {
        heading: "Accuracy",
        body: "Content is prepared from the company profile and will be updated as services, contact details, and evidence are confirmed. Case studies, certifications, and client names are published only when they are authorised.",
      },
    ],
  },
  cookies: {
    path: "/cookie-policy",
    documentTitle: "Cookie Policy | Apex Point Consult Ltd",
    metaDescription:
      "Draft cookie notice for the Apex Point Consult Ltd website.",
    title: "Cookie Policy",
    summary: draftNotice,
    sections: [
      {
        heading: "Current use",
        body: "This public site does not set analytics or advertising cookies. A browser may still store its own settings, such as a preference you choose later.",
      },
      {
        heading: "If analytics are added",
        body: "Any later analytics tool will be named here, and non-essential cookies will wait for a consent choice. This draft will be updated before that tool is switched on.",
      },
    ],
  },
}

export function getLegalPage(key) {
  return legalPages[key]
}
