---
title: "Solutions for every programme"
description: "QUKO configurations are tailored to your athletes, team and analysis needs."
eyebrow: "Plans and deployment"
layout: "pricing"
draft: false
options:
  - title: "Individual"
    text: "For athletes and specialists building an independent performance workflow."
    icon: "fas fa-user"
    items: ["Kosoku capture", "Quko Cloud analysis", "Guided onboarding"]
  - title: "Team"
    text: "For coaches and clubs working across several athletes and boats."
    icon: "fas fa-users"
    items: ["Multiple Kosoku devices", "Quko Live telemetry", "Shared Cloud workflows"]
  - title: "Institution"
    text: "For federations, performance centres and research programmes."
    icon: "fas fa-university"
    items: ["Role-based access", "APIs and data exports", "Deployment support"]
pricing:
  enable: true
  eyebrow: "Quko Cloud plans"
  title: "Pricing that fits where you train"
  text: "Prices adapt to your country. Pick a plan, or talk to us about High Level access for your programme."
  monthly_label: "Monthly"
  yearly_label: "Yearly"
  country_label: "Country"
  country_placeholder: "Select your country…"
  vat_note: "Excluding VAT. Final price confirmed at checkout."
  onetime_label: "Or buy a fixed period, no subscription:"
  cloud_base: "https://cloud.quko.es"
  # Our own page: the Ecwid storefront is embedded into the site.
  store_base: "shop/"
  plans:
    - id: "basic"
      name: "Basic"
      featured: true
      badge: "Most popular"
      text: "Full platform access for one athlete."
      sku_monthly: "basic_sub_monthly"
      sku_yearly: "basic_sub_yearly"
      button_label: "Get started"
      features:
        - "Unlimited session uploads"
        - "3D visualisation and comparison"
        - "AI data analyst"
        - "Cancel any time"
      onetime:
        - sku: "basic_code_1m"
          label: "1 month"
        - sku: "basic_code_4m"
          label: "4 months"
        - sku: "basic_code_6m"
          label: "6 months"
        - sku: "basic_code_12m"
          label: "12 months"
    - id: "alto_nivel"
      name: "High Level"
      contact: true
      price_label: "Talk to us"
      text: "For federations, performance centres and elite programmes."
      button_label: "Request a quote"
      button_link: "contact/"
      features:
        - "Everything in Basic"
        - "Real digital twin and QukoSim engines"
        - "REST API access"
        - "Deployment and onboarding support"
  disclaimer: "Indicative prices, excluding VAT. The final price and any applicable tax are confirmed at checkout against the billing country of your payment method. Quko Cloud subscriptions are personal and non-transferable, one per athlete. Coach and technical-staff accounts are free of charge in limited numbers."
marketing_cta:
  eyebrow: "A configuration that fits"
  title: "Request a tailored proposal"
  text: "Tell us your athletes, disciplines and analysis goals. We will recommend the right setup."
  primary_label: "Request a quote"
  primary_link: "contact/"
  secondary_label: "Access Quko Cloud"
  secondary_link: "https://cloud.quko.es/"
---
