---
title: APIs de QUKO
description: Cuatro APIs para datos deportivos, integraciones, importación de sesiones y resultados de piragüismo.
layout: apis
draft: false
translationKey: apis
eyebrow: Diseñadas para conectar
heading: Tu próxima conexión empieza aquí.
text: Desde tus entrenamientos hasta los datos de cada regata. Cuatro APIs, un ecosistema QUKO conectado.
explore: Explora las APIs
details: Acceso y posibilidades
docs: Leer documentación
contact_title: Desarrolla con QUKO
contact_text: Elige tu API, consulta la documentación para desarrolladores y contacta con nosotros para hablar del
  acceso.
contact: Contactar con QUKO
partners: Programa de partners
note: La documentación de Partner, Session y Almanac requiere iniciar sesión y la aprobación correspondiente o un
  plan activo.
apis:
- id: data
  name: Data API
  tagline: Tu rendimiento, tus herramientas.
  text: Consulta tus propios datos de Quko Cloud para crear paneles, analizar sesiones e integrar tus entrenamientos
    en tus herramientas.
  access: Cuenta propia · Solo lectura
  detail: El acceso se limita al propietario de la aplicación. Conecta mediante OAuth y consulta sesiones, entrenamientos,
    material, registros de rendimiento y repeticiones de QukoSim.
  icon: fa-chart-line
  url: https://dev.quko.es/v1/docs/data
- id: partner
  name: Partner API
  tagline: Conecta tu producto con deportistas.
  text: Crea integraciones aprobadas con los datos que cada deportista autoriza expresamente a tu aplicación a consultar.
  access: Empresas aprobadas · Solo lectura
  detail: Requiere aprobación de QUKO y consentimiento de cada deportista. El acceso está limitado por permisos
    y privacidad, con webhooks y QukoSim autorizados. Se excluyen los datos de origen Garmin y sus derivados.
  icon: fa-link
  url: https://dev.quko.es/v1/docs/partner
- id: session
  name: Session API
  tagline: Lleva sesiones a Quko Cloud.
  text: Importa grabaciones nativas .qk y gestiona las sesiones y entrenamientos que tu aplicación crea en tu propia
    cuenta.
  access: Empresas aprobadas · Importación y edición
  detail: QUKO debe habilitar tu cuenta. Previsualiza y procesa grabaciones nativas; edita o elimina únicamente
    las sesiones y entrenamientos subidos por tu aplicación.
  icon: fa-upload
  url: https://dev.quko.es/v1/docs/session
- id: almanac
  name: Almanac API
  tagline: Pon cada regata en contexto.
  text: Convierte los resultados de piragüismo en historiales de medallas, comparativas y resúmenes de regata en
    directo para tu producto o tus comentarios.
  access: Empresas aprobadas · Resultados y datos
  detail: Disponible con un plan activo de Almanac. Los datos estructurados incluyen comentarios listos para usar
    en inglés y español. Los resultados proceden del archivo de QUKO; se indican los resultados provisionales y
    sus salvedades.
  icon: fa-trophy
  url: https://dev.quko.es/v1/docs/almanac
---
