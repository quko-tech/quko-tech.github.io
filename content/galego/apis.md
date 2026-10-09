---
title: APIs de QUKO
description: Catro APIs para datos deportivos, integracións, importación de sesións e resultados de piragüismo.
layout: apis
draft: false
translationKey: apis
eyebrow: Deseñadas para conectar
heading: A túa próxima conexión comeza aquí.
text: Desde os teus adestramentos ata os datos de cada regata. Catro APIs, un ecosistema QUKO conectado.
explore: Explora as APIs
details: Acceso e posibilidades
docs: Ler documentación
contact_title: Desenvolve con QUKO
contact_text: Escolle a túa API, consulta a documentación para desenvolvedores e contacta connosco para falar do
  acceso.
contact: Contactar con QUKO
partners: Programa de partners
note: A documentación de Partner, Session e Almanac require iniciar sesión e a aprobación correspondente ou un plan
  activo.
apis:
- id: data
  name: Data API
  tagline: O teu rendemento, as túas ferramentas.
  text: Consulta os teus propios datos de Quko Cloud para crear paneis, analizar sesións e integrar os teus adestramentos
    nas túas ferramentas.
  access: Conta propia · Só lectura
  detail: O acceso limítase ao propietario da aplicación. Conecta mediante OAuth e consulta sesións, adestramentos,
    material, rexistros de rendemento e repeticións de QukoSim.
  icon: fa-chart-line
  url: https://dev.quko.es/v1/docs/data
- id: partner
  name: Partner API
  tagline: Conecta o teu produto con deportistas.
  text: Crea integracións aprobadas cos datos que cada deportista autoriza expresamente á túa aplicación a consultar.
  access: Empresas aprobadas · Só lectura
  detail: Require aprobación de QUKO e consentimento de cada deportista. O acceso está limitado por permisos e privacidade,
    con webhooks e QukoSim autorizados. Exclúense os datos de orixe Garmin e os seus derivados.
  icon: fa-link
  url: https://dev.quko.es/v1/docs/partner
- id: session
  name: Session API
  tagline: Leva sesións a Quko Cloud.
  text: Importa gravacións nativas .qk e xestiona as sesións e adestramentos que a túa aplicación crea na túa propia
    conta.
  access: Contas habilitadas · Importación e edición
  detail: QUKO debe habilitar a túa conta. Previsualiza e procesa gravacións nativas; edita ou elimina unicamente
    as sesións e adestramentos subidos pola túa aplicación.
  icon: fa-upload
  url: https://dev.quko.es/v1/docs/session
- id: almanac
  name: Almanac API
  tagline: Pon cada regata en contexto.
  text: Converte os resultados de piragüismo en historiais de medallas, comparativas e resumos de regata en directo
    para o teu produto ou os teus comentarios.
  access: Plan activo · Resultados e datos
  detail: Dispoñible cun plan activo de Almanac. Os datos estruturados inclúen comentarios listos para usar en inglés
    e español. Os resultados proceden do arquivo de QUKO; indícanse os resultados provisionais e as súas salvedades.
  icon: fa-trophy
  url: https://dev.quko.es/v1/docs/almanac
---
