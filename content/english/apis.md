---
title: QUKO APIs
description: Four APIs for athlete data, product integrations, session imports and canoe and kayak results.
layout: apis
draft: false
translationKey: apis
eyebrow: Built to connect
heading: Your next connection starts here.
text: From your own training data to live race facts. Four focused APIs, one connected QUKO ecosystem.
explore: Explore the APIs
details: Access & capabilities
docs: Read documentation
contact_title: Build with QUKO
contact_text: Choose your API, explore the developer documentation and contact us to discuss access.
contact: Contact QUKO
partners: Partners Programme
note: Partner, Session and Almanac documentation requires sign-in and the corresponding approval or active plan.
apis:
- id: data
  name: Data API
  tagline: Your performance, your tools.
  text: Read your own Quko Cloud data to create dashboards, analyse sessions and bring your training into your own
    workflows.
  access: Own account · Read-only
  detail: Access is limited to the application owner. Connect with OAuth and explore sessions, training, equipment,
    performance records and QukoSim replays.
  icon: fa-chart-line
  url: https://dev.quko.es/v1/docs/data
- id: partner
  name: Partner API
  tagline: Connect your product to athletes.
  text: Build approved integrations using the data athletes explicitly authorise your application to read.
  access: Approved companies · Read-only
  detail: QUKO approval and each athlete’s consent are required. Access is scoped and privacy limited, with approved
    webhooks and QukoSim embeds. Garmin-origin and Garmin-derived data are excluded.
  icon: fa-link
  url: https://dev.quko.es/v1/docs/partner
- id: session
  name: Session API
  tagline: Bring sessions into Quko Cloud.
  text: Import native .qk recordings and manage the sessions and training your application creates in your own account.
  access: Enabled accounts · Import & edit
  detail: QUKO must enable your account. Preview and process native recordings, then edit or delete only the sessions
    and training uploaded by your application.
  icon: fa-upload
  url: https://dev.quko.es/v1/docs/session
- id: almanac
  name: Almanac API
  tagline: Put every race in context.
  text: Turn canoe and kayak results into medal histories, athlete comparisons and live race briefings for your
    product or commentary.
  access: Active plan · Results & facts
  detail: Available with an active Almanac plan. Structured facts include ready-to-read English and Spanish commentary.
    Results come from the QUKO archive; provisional results and caveats are flagged.
  icon: fa-trophy
  url: https://dev.quko.es/v1/docs/almanac
---
