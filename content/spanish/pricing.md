---
title: "Soluciones para cada programa"
description: "Las configuraciones QUKO se adaptan a tus deportistas, tu equipo y tus necesidades de análisis."
eyebrow: "Planes e implantación"
layout: "pricing"
draft: false
options:
  - title: "Individual"
    text: "Para deportistas y especialistas con un proceso de rendimiento independiente."
    icon: "fas fa-user"
    items: ["Captura con Kosoku", "Análisis en Quko Cloud", "Puesta en marcha guiada"]
  - title: "Equipo"
    text: "Para entrenadores y clubes con varios deportistas y embarcaciones."
    icon: "fas fa-users"
    items: ["Varios dispositivos Kosoku", "Telemetría Quko Live", "Trabajo compartido en Cloud"]
  - title: "Institución"
    text: "Para federaciones, centros de rendimiento y programas de investigación."
    icon: "fas fa-university"
    items: ["Acceso por perfiles", "APIs y exportaciones", "Apoyo en la implantación"]
pricing:
  enable: true
  eyebrow: "Planes de Quko Cloud"
  title: "Precios adaptados a tu país"
  text: "El precio se ajusta a tu país. Elige un plan o habla con nosotros sobre el nivel Alto Nivel para tu programa."
  monthly_label: "Mensual"
  yearly_label: "Anual"
  country_label: "País"
  country_placeholder: "Selecciona tu país…"
  vat_note: "Sin IVA. El precio final se confirma en el pago."
  onetime_label: "O compra un periodo fijo, sin suscripción:"
  cloud_base: "https://cloud.quko.es"
  # Our own page: the Ecwid storefront is embedded into the site.
  store_base: "shop/"
  plans:
    - id: "basic"
      name: "Basic"
      featured: true
      badge: "El más elegido"
      text: "Acceso completo a la plataforma para un deportista."
      sku_monthly: "basic_sub_monthly"
      sku_yearly: "basic_sub_yearly"
      button_label: "Empezar"
      features:
        - "Subidas de sesiones ilimitadas"
        - "Visualización 3D y comparación"
        - "Analista de datos con IA"
        - "Cancela cuando quieras"
      onetime:
        - sku: "basic_code_1m"
          label: "1 mes"
        - sku: "basic_code_4m"
          label: "4 meses"
        - sku: "basic_code_6m"
          label: "6 meses"
        - sku: "basic_code_12m"
          label: "12 meses"
    - id: "alto_nivel"
      name: "Alto Nivel"
      contact: true
      price_label: "Consúltanos"
      text: "Para federaciones, centros de alto rendimiento y programas de élite."
      button_label: "Solicitar propuesta"
      button_link: "contact/"
      features:
        - "Todo lo de Basic"
        - "Motores reales de gemelo digital y QukoSim"
        - "Acceso a la API REST"
        - "Soporte de despliegue e implantación"
  disclaimer: "Precios orientativos, sin IVA. El precio final y los impuestos aplicables se confirman en el proceso de pago según el país de facturación de tu medio de pago. Las suscripciones de Quko Cloud son personales e intransferibles, una por deportista. Las cuentas de entrenador y cuerpo técnico son gratuitas en cantidades limitadas."
marketing_cta:
  eyebrow: "Una configuración a medida"
  title: "Solicita una propuesta personalizada"
  text: "Cuéntanos tus deportistas, disciplinas y objetivos de análisis. Te recomendaremos el sistema adecuado."
  primary_label: "Solicitar presupuesto"
  primary_link: "contact/"
  secondary_label: "Acceder a Quko Cloud"
  secondary_link: "https://cloud.quko.es/"
---
