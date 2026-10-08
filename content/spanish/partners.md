---
title: "Programa de partners"
description: "Requisitos de admisión, aprobación y protección de datos para empresas que solicitan acceso a la Partner API de QUKO."
layout: "partners"
draft: false
translationKey: "partners"
hero:
  eyebrow: "Programa de partners"
  title: "Colabora con QUKO"
  text: "El acceso a la Partner API está reservado a empresas aprobadas con un producto ya disponible en el mercado. QUKO revisa cada aplicación, finalidad y permiso antes de conceder acceso."
  image: "images/brand/quko-symbol.svg"
  image_alt: "Símbolo de QUKO"
intro:
  eyebrow: "Antes de solicitar acceso"
  title: "El acceso conlleva responsabilidades"
  paragraphs:
    - "El programa conecta productos aprobados con los datos cuyo acceso autorizan expresamente los deportistas. La participación no concede acceso ilimitado a Quko Cloud ni a la información de un deportista."
    - "Cumplir estos requisitos permite a QUKO valorar una solicitud. La aprobación es discrecional y QUKO la concede siempre de forma manual. Enviar una solicitud, crear una cuenta de desarrollo u obtener el consentimiento de un usuario no supone la admisión en el programa."
sections:
  - id: "eligibility"
    eyebrow: "01 · Admisión"
    title: "Productos existentes, empresas identificadas"
    muted: true
    points:
      - "Las solicitantes deben ser empresas legalmente constituidas. No se admiten personas físicas, desarrolladores independientes ni autónomos que actúen en nombre propio. QUKO puede valorar excepciones para instituciones, sujetas a aprobación expresa por correo electrónico."
      - "El producto que solicita la integración debe existir y estar disponible en el mercado. No se admiten ideas, prototipos ni productos pendientes de lanzamiento."
      - "No se admiten empresas que compitan con los productos o servicios de QUKO."
      - "La solicitud debe identificar el producto concreto, la finalidad de la integración, los usuarios previstos y los permisos solicitados. El acceso se limita a la aplicación y al uso aprobados."
  - id: "application"
    eyebrow: "02 · Solicitud"
    title: "Identifica a los responsables"
    paragraphs:
      - "Envía tu solicitud por correo electrónico con la siguiente información. QUKO puede solicitar documentación que la acredite antes de tomar una decisión."
    points:
      - "Razón social, país de constitución, número de registro o identificación fiscal y domicilio social."
      - "Web y correo electrónico corporativos, junto con un enlace al producto ya disponible en el mercado."
      - "Un representante autorizado de la empresa y acreditación de su facultad para solicitar acceso y confirmar las condiciones en nombre de esta."
      - "Responsables técnicos y de seguridad identificados, con sus direcciones de correo electrónico."
      - "Descripción de la integración, los datos y permisos solicitados, el proceso de consentimiento de los usuarios y las medidas para proteger y eliminar los datos."
      - "Enlaces HTTPS a la política de privacidad y a la página de soporte de la aplicación, y los dominios y direcciones de redirección usados por la integración."
    optional: "También puedes aportar la antigüedad de la empresa, su base de clientes y su trayectoria operativa. Estos datos complementarios son opcionales."
  - id: "approval"
    eyebrow: "03 · Proceso de revisión"
    title: "QUKO concede cada aprobación"
    muted: true
    steps:
      - title: "Verificación de la empresa."
        text: "QUKO revisa la identidad, el representante y la admisibilidad de la solicitante."
      - title: "Revisión de la integración."
        text: "QUKO evalúa el producto existente, el uso propuesto, el tratamiento de los datos y los permisos solicitados."
      - title: "Confirmación por correo electrónico."
        text: "El representante autorizado confirma por correo electrónico estos requisitos y las condiciones acordadas con QUKO. Las condiciones de protección de datos exigidas legalmente también deben acordarse antes de acceder a los datos."
      - title: "Demostración de la integración."
        text: "La solicitante demuestra la integración, incluidos el consentimiento, la seguridad y la eliminación de datos. QUKO debe autorizar previamente cualquier acceso necesario para esta revisión."
      - title: "Aprobación manual para producción."
        text: "QUKO comunica la aprobación final por correo electrónico y habilita manualmente el acceso aprobado. No existe admisión automática ni derecho a recibir credenciales."
  - id: "permissions"
    eyebrow: "04 · Permisos"
    title: "Una autorización para cada capacidad"
    paragraphs:
      - "Cada permiso de la API solicitado requiere una autorización independiente y expresa de QUKO. Aprobar la empresa o un permiso no autoriza otras aplicaciones o capacidades."
    points:
      - "Los accesos de lectura y los de escritura o eliminación se evalúan por separado para cada recurso."
      - "La lectura y escritura de datos de salud, la importación de grabaciones nativas, las exportaciones, el uso compartido y la integración de QukoSim requieren cada uno su aprobación correspondiente."
      - "Los orígenes de integración de QukoSim y los dominios y puntos de conexión usados por la integración deben coincidir con los aprobados por QUKO."
      - "Cada deportista debe autorizar por separado el acceso de la aplicación. Los datos de salud requieren un consentimiento adicional e independiente del usuario. La aprobación de la empresa no sustituye al consentimiento del usuario."
      - "Notifica a QUKO por correo electrónico antes de cualquier cambio en la aplicación, finalidad, permisos, tratamiento de datos, dominios, puntos de conexión, propiedad de la empresa o responsables. Los permisos y usos nuevos o modificados requieren aprobación antes de implementarse."
  - id: "prohibited-uses"
    eyebrow: "05 · Restricciones"
    title: "Usos que no permitimos"
    dark: true
    paragraphs:
      - "Estas restricciones se aplican a los datos obtenidos y a sus copias, exportaciones, transformaciones, agregaciones y resultados derivados. El consentimiento de un deportista no anula las restricciones del programa."
      - "Un producto o servicio de entrenamiento de pago expresamente aprobado puede utilizar los datos para prestar el servicio aprobado al deportista que haya dado su consentimiento. Esto no permite vender ni monetizar los propios datos ni conjuntos de datos y recursos derivados de ellos."
    points:
      - "Vender, revender, licenciar o monetizar de cualquier otra forma los propios datos obtenidos, el acceso a ellos o conjuntos de datos y recursos derivados."
      - "Perfiles publicitarios, publicidad dirigida, vigilancia, reidentificación o redistribución no autorizada."
      - "Decisiones sobre seguros, crédito o empleo, usos médicos o aplicaciones en las que la seguridad o la vida de las personas pueda depender de los datos."
      - "Cualquier uso de los datos obtenidos por inteligencia artificial o modelos de aprendizaje automático, incluidos entrenamiento, ajuste, evaluación e inferencia. Los datos no pueden facilitarse a agentes de IA, grandes modelos de lenguaje, sistemas de aprendizaje automático u otros modelos de IA, sean locales o de otro servicio."
      - "Investigaciones o publicaciones que no citen a QUKO y los sistemas de QUKO utilizados como fuente de los datos. La cita no autoriza ningún otro uso prohibido."
      - "Acceder a datos privados de otra persona, compartir credenciales, extraer datos mediante scraping, eludir permisos o controles de seguridad, o usar datos fuera de la finalidad aprobada."
  - id: "data-boundaries"
    eyebrow: "06 · Límites de los datos"
    title: "Solo los datos permitidos del deportista autorizado"
    points:
      - "Utiliza únicamente los datos disponibles para la aplicación aprobada del deportista que haya dado su consentimiento y dentro de los permisos aprobados."
      - "Los datos de origen Garmin y los derivados de ellos están excluidos del acceso de partners, incluidos análisis, exportaciones, contenidos compartidos, webhooks, datos de salud y QukoSim. También se excluyen los datos de salud de otros proveedores externos."
      - "Las señales brutas de sensores, los datos privados de otros tripulantes, las credenciales de dispositivos y la información interna del sistema quedan fuera del acceso de partners. No intentes recuperar ni reconstruir información excluida."
      - "Utiliza el proceso de autorización de QUKO. Nunca solicites la contraseña de QUKO de un deportista ni eludas sus decisiones de consentimiento o revocación."
  - id: "security"
    eyebrow: "07 · Seguridad y privacidad"
    title: "Protege cada conexión"
    muted: true
    points:
      - "HTTPS es obligatorio en las conexiones públicas de la integración, páginas de privacidad y soporte, direcciones de retorno, puntos de conexión de webhooks y orígenes de integración."
      - "Cumple los requisitos europeos de protección de datos y seguridad aplicables, incluido el RGPD, y las demás leyes aplicables a la integración."
      - "Mantén medidas técnicas y organizativas adecuadas para los datos tratados. Protege las credenciales y limita el acceso al personal autorizado."
      - "Proporciona información clara sobre privacidad, obtén los consentimientos necesarios y respeta los derechos de acceso, eliminación y retirada del consentimiento de los usuarios."
      - "Notifica inmediatamente a QUKO por correo electrónico cualquier compromiso de credenciales, acceso no autorizado, incidente de seguridad o imposibilidad de cumplir estos requisitos."
  - id: "service-providers"
    eyebrow: "08 · Proveedores de servicios"
    title: "Aprobación previa para el acceso externo"
    points:
      - "Identifica las empresas de alojamiento y cualquier otro proveedor que pueda acceder a los datos de la Partner API, su finalidad, la ubicación de los datos y las transferencias internacionales. Obtén la aprobación expresa de QUKO por correo electrónico antes de permitir el acceso o cambiar de proveedor."
      - "Los proveedores aprobados deben estar sujetos a obligaciones de confidencialidad, seguridad, limitación de finalidad y eliminación iguales a las del partner. El partner sigue siendo responsable de su tratamiento de los datos."
      - "Los proveedores y las transferencias internacionales deben cumplir los requisitos europeos de protección de datos aplicables. La aprobación no permite ningún uso prohibido, incluido enviar datos a un servicio o modelo de IA."
  - id: "deletion"
    eyebrow: "09 · Revocación y eliminación"
    title: "Ningún dato permanece al terminar el acceso"
    paragraphs:
      - "Cuando un deportista retire su autorización o elimine su cuenta, deja de acceder a sus datos y de utilizarlos, y elimina todos los datos obtenidos mediante la integración y los resultados derivados de ellos. Cuando QUKO revoque el acceso de la aplicación o termine la participación, esta obligación se aplica a todos los datos del programa que conserve el partner."
    points:
      - "Elimina las copias de bases de datos, archivos, cachés, registros, exportaciones, informes y copias de seguridad, incluidas las que conserve cualquier entidad que actúe por cuenta del partner."
      - "No conserves conjuntos de datos anonimizados, agregaciones, métricas derivadas ni otros resultados como alternativa a la eliminación de los datos obtenidos."
      - "La integración debe ser capaz de cumplir esta obligación de eliminación. Revocar las credenciales de la API no elimina por sí solo las copias ya obtenidas."
      - "Comunica a QUKO cualquier obligación legal de conservación antes de que se conceda el acceso."
  - id: "brand-confidentiality"
    eyebrow: "10 · Marca y confidencialidad"
    title: "Respeta la fuente y a la otra parte"
    muted: true
    paragraphs:
      - "Sigue la guía de marca de QUKO al mencionar a QUKO o utilizar su nombre, logotipo y recursos. Identifica a QUKO y los sistemas de QUKO correspondientes en las investigaciones que utilicen los datos. El acceso no autoriza a afirmar que existe un respaldo o aprobación más allá de la integración expresamente aceptada por QUKO."
      - "QUKO y el partner deben proteger mutuamente la información no pública compartida para la integración. Utiliza la información confidencial solo para la colaboración aprobada y compártela únicamente con personas autorizadas que la necesiten y estén sujetas a confidencialidad. Mantén confidenciales las credenciales y la documentación no pública de la API."
    links:
      - label: "Lee la guía de marca de QUKO"
        url: "brand/"
  - id: "access-terms"
    eyebrow: "11 · Condiciones de acceso"
    title: "Acceso gratuito, límites acordados"
    points:
      - "El acceso a la Partner API es gratuito. Los límites de uso se acuerdan con QUKO por correo electrónico antes de habilitar el acceso."
      - "Respeta los límites aprobados y solicita autorización antes de aumentar el uso. No eludas los límites mediante cuentas, aplicaciones o credenciales adicionales."
      - "El partner es responsable del funcionamiento de su integración y del soporte a sus propios clientes. Cualquier acuerdo de soporte con QUKO se establece por correo electrónico."
  - id: "revocation"
    eyebrow: "12 · Cumplimiento"
    title: "El acceso puede revocarse"
    paragraphs:
      - "QUKO puede revocar inmediatamente el acceso a la Partner API si se incumplen estos requisitos o las condiciones aprobadas por correo electrónico. No se garantiza un aviso ni un plazo de subsanación previo. El partner debe dejar de utilizar la API y cumplir las obligaciones de eliminación anteriores."
contact:
  eyebrow: "Solicita acceso por correo electrónico"
  title: "Presenta tu empresa para su revisión"
  text: "Envía a QUKO los datos de empresa e integración requeridos. Las solicitudes, consultas, notificaciones y aprobaciones se gestionan por correo electrónico."
  subject: "Solicitud al programa de partners de QUKO"
  label: "Contactar con QUKO"
---
