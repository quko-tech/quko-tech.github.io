---
title: "Partners Programme"
description: "Eligibility, approval and data protection requirements for companies requesting access to the QUKO Partner API."
layout: "partners"
draft: false
translationKey: "partners"
hero:
  eyebrow: "Partners Programme"
  title: "Partner with QUKO"
  text: "Access to the Partner API is reserved for approved companies with an existing product on the market. Every application, purpose and permission is reviewed by QUKO before access is granted."
  image: "images/brand/quko-symbol.svg"
  image_alt: "QUKO symbol"
intro:
  eyebrow: "Before you apply"
  title: "Access carries responsibilities"
  paragraphs:
    - "The programme connects approved products to data that athletes explicitly authorise them to access. Membership does not grant unrestricted access to Quko Cloud or to an athlete’s information."
    - "Meeting these requirements allows QUKO to consider an application. Approval is discretionary and is always given manually by QUKO. Submitting a request, creating a developer account or obtaining user consent does not constitute programme approval."
sections:
  - id: "eligibility"
    eyebrow: "01 · Eligibility"
    title: "Established products, identified companies"
    muted: true
    points:
      - "Applicants must be legally registered companies. Individuals, independent developers and sole traders acting in their own name are not eligible. QUKO may consider exceptions for institutions, subject to express approval by email."
      - "The product requesting integration must already exist and be available on the market. Ideas, prototypes and products awaiting launch do not qualify."
      - "Companies competing with QUKO’s products or services are not eligible."
      - "Applicants must identify the exact product, integration purpose, intended users and requested permissions. Access is limited to the approved application and use."
  - id: "application"
    eyebrow: "02 · Application"
    title: "Tell us who is responsible"
    paragraphs:
      - "Send your application by email with the following information. QUKO may request supporting evidence before making a decision."
    points:
      - "Legal company name, country of registration, registration or tax identification number, and registered address."
      - "Corporate website and corporate email address, together with a link to the product already on the market."
      - "An authorised company representative and evidence of their authority to request access and confirm the conditions on the company’s behalf."
      - "Named technical and security contacts, with their email addresses."
      - "A description of the integration, the data and permissions requested, the user consent flow, and how data will be protected and deleted."
      - "HTTPS links to the application’s privacy policy and user support page, and the domains and redirect addresses used by the integration."
    optional: "You may also provide the company’s age, customer base and operating history. These are optional supporting details."
  - id: "approval"
    eyebrow: "03 · Review process"
    title: "Every approval comes from QUKO"
    muted: true
    steps:
      - title: "Company verification."
        text: "QUKO reviews the applicant’s identity, representative and eligibility."
      - title: "Integration review."
        text: "QUKO assesses the existing product, proposed use, data handling and requested permissions."
      - title: "Confirmation by email."
        text: "The authorised representative confirms these requirements and the conditions agreed with QUKO by email. Any legally required data protection terms must also be agreed before data is accessed."
      - title: "Integration demonstration."
        text: "The applicant demonstrates the integration, including consent, security and deletion handling. Any access required for this review must first be authorised by QUKO."
      - title: "Manual production approval."
        text: "QUKO gives final approval by email and manually enables the approved access. There is no automatic admission or entitlement to credentials."
  - id: "permissions"
    eyebrow: "04 · Permissions"
    title: "Approval for each capability"
    paragraphs:
      - "Each requested API permission requires independent, express authorisation from QUKO. Approval of the company or one permission does not approve other applications or capabilities."
    points:
      - "Read access and write or deletion access are assessed separately for each resource."
      - "Health read access, health write access, native recording imports, exports, sharing and QukoSim embeds each require their corresponding approval."
      - "QukoSim embed origins and the domains and endpoints used by the integration must match those approved by QUKO."
      - "Each athlete must separately authorise the application’s access. Health data requires additional, independent user consent. Company approval cannot replace user consent."
      - "Notify QUKO by email before any change to the application, purpose, permissions, data handling, domains, endpoints, company ownership or responsible contacts. New or changed permissions and uses require approval before implementation."
  - id: "prohibited-uses"
    eyebrow: "05 · Restrictions"
    title: "Uses we do not permit"
    dark: true
    paragraphs:
      - "These restrictions apply to retrieved data and to copies, exports, transformed data, aggregates and results derived from it. An athlete’s consent does not waive the programme’s restrictions."
      - "An expressly approved paid product or coaching service may use data to deliver the approved service to the consenting athlete. This does not permit selling or monetising the data itself or datasets and assets derived from it."
    points:
      - "Selling, reselling, licensing or otherwise monetising retrieved data itself, data access, or datasets and assets derived from it."
      - "Advertising profiles, targeted advertising, surveillance, reidentification or unauthorised redistribution."
      - "Insurance, credit or employment decisions, medical use, or applications where human safety or life may depend on the data."
      - "Any use of retrieved data by artificial intelligence or machine learning models, including training, fine-tuning, evaluation and inference. Data must not be supplied to AI agents, large language models, machine learning systems or other AI models, whether operated locally or by another service."
      - "Research or publications that fail to cite QUKO and the QUKO systems used as the data source. Citation does not authorise another prohibited use."
      - "Accessing another person’s private data, sharing credentials, scraping, bypassing permissions or security controls, or using data outside the approved purpose."
  - id: "data-boundaries"
    eyebrow: "06 · Data boundaries"
    title: "Only the authorised athlete’s permitted data"
    points:
      - "Use only the data available to the approved application for the consenting athlete and within the approved permissions."
      - "Garmin-origin and Garmin-derived data are excluded from Partner access, including analyses, exports, shares, webhooks, health data and QukoSim. Health data from other external providers is also excluded."
      - "Raw sensor streams, private crew data, device credentials and internal system information are outside Partner access. Do not attempt to recover or reconstruct excluded information."
      - "Use the QUKO authorisation flow. Never request an athlete’s QUKO password or bypass their consent or revocation choices."
  - id: "security"
    eyebrow: "07 · Security and privacy"
    title: "Protect every connection"
    muted: true
    points:
      - "HTTPS is mandatory for the integration’s public connections, privacy and support pages, callbacks, webhook endpoints and embed origins."
      - "Comply with applicable European data protection and security requirements, including the GDPR, and other laws applicable to the integration."
      - "Maintain appropriate technical and organisational safeguards for the data handled. Protect credentials and restrict access to authorised personnel."
      - "Provide clear privacy information, obtain required consent, and respect users’ access, deletion and withdrawal rights."
      - "Notify QUKO immediately by email of compromised credentials, unauthorised access, security incidents or an inability to comply with these requirements."
  - id: "service-providers"
    eyebrow: "08 · Service providers"
    title: "Prior approval for outside access"
    points:
      - "Disclose hosting companies and any other providers that can access Partner API data, their purpose, data locations and any international transfers. Obtain QUKO’s express approval by email before allowing access or changing a provider."
      - "Approved providers must be bound to confidentiality, security, purpose limitations and the same deletion duties as the partner. The partner remains responsible for their handling of the data."
      - "Providers and international transfers must comply with applicable European data protection requirements. Approval does not permit any prohibited use, including sending data to an AI service or model."
  - id: "deletion"
    eyebrow: "09 · Revocation and deletion"
    title: "No data remains after access ends"
    paragraphs:
      - "When an athlete withdraws authorisation or deletes their account, stop accessing and using their data and delete all data obtained through the integration and all results derived from it. When QUKO revokes the application’s access or participation ends, this obligation applies to all programme data held by the partner."
    points:
      - "Delete copies from databases, files, caches, logs, exports, reports and backups, including copies held by anyone acting for the partner."
      - "Do not retain anonymised datasets, aggregates, derived metrics or other results as a substitute for deleting the retrieved data."
      - "The integration must be capable of fulfilling this deletion obligation. Revoking API credentials alone does not delete copies already retrieved."
      - "Disclose any mandatory legal retention obligation to QUKO before access is granted."
  - id: "brand-confidentiality"
    eyebrow: "10 · Brand and confidentiality"
    title: "Respect the source and each other"
    muted: true
    paragraphs:
      - "Follow the QUKO brand guidelines when referring to QUKO or using its name, logo and assets. Identify QUKO and the relevant QUKO systems in research using the data. Access does not authorise claims of endorsement or approval beyond the integration expressly accepted by QUKO."
      - "QUKO and the partner must mutually protect non-public information shared for the integration. Use confidential information only for the approved collaboration and disclose it only to authorised people who need it and are bound to confidentiality. Keep credentials and non-public API documentation confidential."
    links:
      - label: "Read the QUKO brand guidelines"
        url: "brand/"
  - id: "access-terms"
    eyebrow: "11 · Access terms"
    title: "Free access, agreed limits"
    points:
      - "Partner API access is free. Usage limits are agreed with QUKO by email before access is enabled."
      - "Respect the approved limits and request approval before increasing usage. Do not bypass limits through additional accounts, applications or credentials."
      - "The partner is responsible for operating its integration and supporting its own customers. Any support arrangements with QUKO are agreed by email."
  - id: "revocation"
    eyebrow: "12 · Compliance"
    title: "Access can be revoked"
    paragraphs:
      - "QUKO may immediately revoke Partner API access if these requirements or the conditions approved by email are breached. There is no guaranteed warning or correction period before revocation. The partner must stop using the API and fulfil the deletion duties above."
contact:
  eyebrow: "Apply by email"
  title: "Submit your company for review"
  text: "Send the required company and integration details to QUKO. Applications, questions, notifications and approvals are handled by email."
  subject: "QUKO Partners Programme application"
  label: "Contact QUKO"
---
