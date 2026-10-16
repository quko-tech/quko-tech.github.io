---
title: "Almanac"
description: "Quko Almanac convierte los resultados de piragüismo desde 1933 en datos listos para emitir para televisiones, comentaristas y medios: por API o dentro de tu asistente de IA."
layout: "almanac"
image: "images/almanac/tablet-race-final.webp"
draft: false

hero:
  eyebrow: "Quko Almanac · Datos para medios deportivos"
  title_lines: ["Cada regata", "tiene una historia."]
  title_accent: "Almanac la cuenta."
  text: "Campeones defensores, cara a cara, mejores marcas personales y esos “primer oro desde…” que hacen una retransmisión. Almanac convierte el archivo del piragüismo en datos que tus comentaristas pueden leer en directo: a través de una API o dentro de tu asistente de IA."
  primary_label: "Solicitar acceso"
  primary_link: "contact/"
  secondary_label: "Verlo en acción"
  secondary_link: "#briefing"

# La tarjeta del hero reproduce un briefing al estilo de Almanac con deportistas ficticias.
briefing:
  live: "Briefing"
  race: "K1 500 m femenino · Final A"
  competition: "Campeonatos del Mundo"
  sample_note: "Ejemplo de salida de Almanac · deportistas ficticias"
  lane_label: "Calle"
  pb_label: "MMP"
  lanes:
    - { lane: "2", nation: "POR", name: "Ana Costa", pb: "1:49,70" }
    - { lane: "3", nation: "GER", name: "Lena Weber", pb: "1:48,33" }
    - { lane: "4", nation: "ESP", name: "Lucía Martín", pb: "1:47,64" }
    - { lane: "5", nation: "NZL", name: "Mia Taylor", pb: "1:47,85" }
    - { lane: "6", nation: "CZE", name: "Eva Novak", pb: "1:48,72" }
    - { lane: "7", nation: "ITA", name: "Giulia Rossi", pb: "1:48,61" }
  # One athlete per fact, so the highlight moves round the field. Only one
  # lane is ever lit, even for the head-to-head.
  facts:
    - { kind: "Defiende título", lanes: "4", text: "Lucía Martín defiende el título de 2025." }
    - { kind: "Cara a cara", lanes: "3", text: "Lena Weber domina a Giulia Rossi por 4–1 en sus enfrentamientos previos." }
    - { kind: "Marca personal", lanes: "5", text: "Mia Taylor tiene la segunda mejor marca personal de la carrera: 1:47,85." }
    - { kind: "Primera final", lanes: "2", text: "Ana Costa disputa su primera final en Campeonatos del Mundo." }
    - { kind: "La más joven", lanes: "6", text: "Eva Novak es la más joven de la carrera, con 23 años." }

stats:
  - { value: 57600, suffix: "+", label: "Deportistas con su trayectoria" }
  - { value: 58000, suffix: "+", label: "Carreras, de series a finales" }
  - { value: 1250, suffix: "+", label: "Competiciones" }
  - { value: 155, suffix: "+", label: "Países" }
  - { value: 1933, label: "Primer resultado del archivo", plain: true }
  - { value: 1000000, suffix: "+", label: "Datos precalculados" }

ticker:
  label: "Frases de Almanac"
  items:
    - { kind: "Resultado", text: "Lucía Martín gana con 1:47,64, 0,27 s por delante de Taylor." }
    - { kind: "Primer oro", text: "Primer oro de España en esta prueba en Campeonatos del Mundo." }
    - { kind: "Marca personal", text: "Eva Novak logra su mejor marca personal: 1:48,72 (antes 1:48,90)." }
    - { kind: "Cara a cara", text: "Lucía Martín ha superado a Lena Weber en 5 de sus 6 enfrentamientos." }
    - { kind: "Mejor tiempo", text: "Lucía Martín firma un nuevo mejor tiempo mundial en esta prueba: 1:47,64." }
    - { kind: "Defiende título", text: "Lena Weber defiende el título de 2023." }

pipeline:
  eyebrow: "Cómo funciona"
  title: "Del archivo a la cabina de comentaristas"
  text: "Almanac hace la investigación que tu equipo haría entre carrera y carrera, y te la entrega lista para ponerla en pantalla o decirla en antena."
  steps:
    - icon: "fa-database"
      title: "El archivo"
      text: "Resultados desde 1933 hasta hoy: Juegos Olímpicos, Mundiales, Campeonatos continentales, Copas del Mundo y más. Cada ronda, cada calle, cada tripulación."
    - icon: "fa-bolt"
      title: "El motor de datos"
      text: "Récords, rachas, campeones defensores, rivalidades e hitos, calculados de antemano y ordenados por relevancia, de 0 a 1."
    - icon: "fa-microphone"
      title: "En antena"
      text: "Cada dato llega estructurado y con una frase lista para leer, con su fuente y sus matices, para que no salga nada que no puedas respaldar."

race:
  id: "briefing"
  eyebrow: "Briefings de carrera"
  title: "Antes de la salida. Después de la meta."
  text: "Pide cualquier carrera y Almanac te la resume calle por calle: mejores marcas personales y de la temporada, medallas a ese nivel, enfrentamientos previos dentro de la carrera, quién defiende el título y el mejor tiempo del archivo. Cuando llega el resultado, las historias ya están ahí."
  tabs:
    - id: "before"
      label: "Antes de la carrera"
      facts:
        - { kind: "Defiende título", text: "Lucía Martín defiende el título de 2025." }
        - { kind: "Cara a cara", text: "Lucía Martín domina a Giulia Rossi por 6–0 en sus enfrentamientos previos." }
        - { kind: "Calle", text: "Calle 5: Mia Taylor (NZL), mejor marca personal 1:47,85." }
        - { kind: "Participantes", text: "3 deportistas de esta carrera tienen medallas en Campeonatos del Mundo." }
    - id: "after"
      label: "Tras la llegada"
      facts:
        - { kind: "Ganadora", text: "Lucía Martín gana con 1:47,64, 0,27 s por delante de Taylor." }
        - { kind: "Mejor tiempo", text: "Lucía Martín firma un nuevo mejor tiempo del campeonato: 1:47,64." }
        - { kind: "Primer oro", text: "Primer título mundial de España en esta prueba." }
        - { kind: "Marca personal", text: "Lena Weber logra su mejor marca personal: 1:48,33 (antes 1:48,46)." }
  sample_note: "Ejemplo ilustrativo de salida de Almanac. Las deportistas son ficticias."
  points:
    - "Los briefings de las carreras de las próximas tres horas se preparan con antelación, así que la primera consulta ya es instantánea"
    - "Los resultados provisionales se marcan, y cada dato incluye su fuente y cualquier nota de cobertura"
    - "Los mejores tiempos del archivo nunca se presentan como récords del mundo"

access:
  eyebrow: "Dos formas de usarlo"
  title: "Conéctalo a tus gráficos. O simplemente pregunta."
  text: "Usa la API REST para alimentar tus gráficos en pantalla, tu app o las herramientas de tu redacción. O conecta Almanac a Claude, ChatGPT o cualquier asistente compatible con MCP y hazle preguntas en lenguaje natural."
  api:
    label: "API REST"
    title: "Datos estructurados para tus gráficos y apps"
    text: "JSON limpio con IDs, tiempos, medallas, fuentes y una puntuación de relevancia, además de la frase para leer."
    request: "/v1/head-to-head?a=…&b=…&lang=es"
    response_text: "Lucía Martín ha superado a Lena Weber en 5 de sus 6 enfrentamientos."
  ai:
    label: "Asistentes de IA · MCP"
    title: "El nuevo equipo de documentación de tu productor"
    text: "Conéctalo una vez con un inicio de sesión seguro. Tu asistente obtiene las herramientas de Almanac y responde con el archivo, no de memoria."
    question: "¿Quién defiende el título en la final de K1 500 femenino y cómo están los cara a cara de las participantes?"
    answer: "Lucía Martín (calle 4) defiende el título de 2025. Domina a Lena Weber por 5–1 y a Giulia Rossi por 6–0 en sus cara a cara."
    works_with: "Funciona con Claude, ChatGPT y otros clientes MCP"
    window_title: "Asistente de IA"
    connected: "Almanac conectado"
    suggestions:
      - "¿Cuándo ganó España su último oro olímpico en C2?"
      - "¿Más títulos continentales de K1 femenino?"
    placeholder: "Pregunta por cualquier carrera, deportista o país…"

features:
  eyebrow: "Qué sabe"
  title: "Todas las preguntas que se hace un comentarista"
  items:
    - { icon: "fa-id-card", title: "Fichas de deportista", text: "Trayectoria, primera medalla y primer título con la edad, y mejores marcas personales y de la temporada." }
    - { icon: "fa-medal", title: "Medallas a cualquier nivel", text: "Juegos Olímpicos, Mundiales, Campeonatos continentales o Copas del Mundo, por año, prueba, embarcación o categoría." }
    - { icon: "fa-people-arrows", title: "Cara a cara y rivales", text: "Balance completo, balance solo en finales, el último enfrentamiento y los rivales más frecuentes." }
    - { icon: "fa-landmark", title: "Historia de cada prueba", text: "Campeones y podios por edición, y quién suma más títulos por deportista y por país." }
    - { icon: "fa-flag", title: "Hitos por país", text: "Medalleros y “primer oro desde…” resueltos en una sola consulta." }
    - { icon: "fa-list-ol", title: "Clasificaciones", text: "Ordena por medallas, oros, títulos, finales o salidas con cualquier filtro: “más títulos continentales de K1 femenino”." }

screens:
  eyebrow: "Sobre el archivo de Paddle Results"
  title: "93 años de regatas. Un solo archivo."
  text: "Almanac lee del archivo que hay detrás de Paddle Results, la app pública de resultados de piragüismo de QUKO. Si está en la app, tu retransmisión puede contarlo."
  link_label: "Abrir Paddle Results"
  link: "https://results.quko.es/"
  main: { image: "images/almanac/tablet-race-final.webp", alt: "Paddle Results con la final de K1 500 m femenino de los Juegos Olímpicos de París 2024, con calles, tiempos y diferencias" }
  side:
    - { image: "images/almanac/phone-athlete.webp", alt: "Ficha de Lisa Carrington en Paddle Results: 296 salidas, 94 finales principales, 57 oros" }
    - { image: "images/almanac/phone-winner-times.webp", alt: "Gráfico del tiempo ganador por carrera de una prueba, de 2001 a 2026" }
  strip:
    - { image: "images/almanac/tablet-medal-leaders.webp", alt: "Líderes del medallero y mejor tiempo ganador por año de una prueba" }
    - { image: "images/almanac/tablet-nation.webp", alt: "Mejor puesto y medallas por año de un país" }
    - { image: "images/almanac/tablet-athlete.webp", alt: "Ficha de deportista con porcentaje de medallas, Juegos Olímpicos y las pruebas que disputa" }
    - { image: "images/almanac/tablet-rankings.webp", alt: "Rankings con los que más suben y la valoración actual frente a su mejor marca" }

languages:
  eyebrow: "Bilingüe desde el primer día"
  title: "Listo para leer, en inglés y en español"
  text: "Cada frase está escrita en el idioma de tu retransmisión, con una redacción natural y los nombres de prueba correctos. Cambia y compruébalo."
  options:
    - code: "ES"
      lines:
        - "Lucía Martín ha superado a Lena Weber en 5 de sus 6 enfrentamientos."
        - "El mejor tiempo en esta prueba en Campeonatos del Mundo es 1:47,64, de Lucía Martín (2025)."
    - code: "EN"
      lines:
        - "Lucía Martín has beaten Lena Weber in 5 of their 6 head-to-head races."
        - "The fastest time for this event at World Championships is 1:47,64, by Lucía Martín (2025)."

audience:
  eyebrow: "Para quién es"
  title: "Hecho para quienes cuentan la historia"
  items:
    - { icon: "fa-tv", title: "Televisiones", text: "Alimenta rótulos y gráficos de calles con datos que se actualizan con la lista de salida." }
    - { icon: "fa-microphone-alt", title: "Comentaristas", text: "Entra en cabina con todas las historias preparadas, carrera a carrera." }
    - { icon: "fa-newspaper", title: "Medios digitales y apps", text: "Publica previas, directos y páginas de resultados sin montar un departamento de estadística." }
    - { icon: "fa-trophy", title: "Federaciones y organizadores", text: "Da a tus propios canales la historia y el contexto que merecen tus eventos." }

plans:
  eyebrow: "Acceso"
  title: "Un plan a la medida de tu cobertura"
  text: "Almanac es una API para partners. Configuramos cada plan para la organización que lo usa, desde un único campeonato hasta una temporada completa."
  items:
    - "API REST, acceso desde asistentes de IA (MCP) o ambos"
    - "Cuota mensual y límites de uso ajustados a tu cobertura"
    - "Claves de API con permisos, restricción por IP y fecha de caducidad"
    - "Una consola de partner para gestionar claves y apps de IA conectadas"
  primary_label: "Solicitar acceso"
  primary_link: "contact/"
  secondary_label: "Conoce nuestras APIs"
  secondary_link: "apis/"

---
