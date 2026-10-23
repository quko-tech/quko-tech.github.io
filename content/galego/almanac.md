---
title: "Almanac"
description: "Quko Almanac converte os resultados de piragüismo desde 1933 en datos listos para emitir para televisións, comentaristas e medios: por API ou dentro do teu asistente de IA."
layout: "almanac"
image: "images/almanac/tablet-race-final.webp"
draft: false

hero:
  eyebrow: "Quko Almanac · Datos para medios deportivos"
  title_lines: ["Cada regata", "ten unha historia."]
  title_accent: "Almanac cóntaa."
  text: "Campións defensores, cara a cara, mellores marcas persoais e eses “primeiro ouro desde…” que fan unha retransmisión. Almanac converte o arquivo do piragüismo en datos que os teus comentaristas poden ler en directo: a través dunha API ou dentro do teu asistente de IA."
  primary_label: "Solicitar acceso"
  primary_link: "contact/"
  secondary_label: "Velo en acción"
  secondary_link: "#briefing"

# A tarxeta do hero reproduce un briefing ao estilo de Almanac con deportistas
# ficticias. A API escribe en inglés e castelán, así que as frases van en castelán.
briefing:
  live: "Briefing"
  race: "K1 500 m feminino · Final A"
  competition: "Campionatos do Mundo"
  sample_note: "Exemplo de saída de Almanac (en castelán) · deportistas ficticias"
  lane_label: "Rúa"
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
    - { kind: "Defende título", lanes: "4", text: "Lucía Martín defiende el título de 2025." }
    - { kind: "Cara a cara", lanes: "3", text: "Lena Weber domina a Giulia Rossi por 4–1 en sus enfrentamientos previos." }
    - { kind: "Marca persoal", lanes: "5", text: "Mia Taylor tiene la segunda mejor marca personal de la carrera: 1:47,85." }
    - { kind: "Primeira final", lanes: "2", text: "Ana Costa disputa su primera final en Campeonatos del Mundo." }
    - { kind: "A máis nova", lanes: "6", text: "Eva Novak es la más joven de la carrera, con 23 años." }

stats:
  - { value: 65000, suffix: "+", label: "Deportistas coa súa traxectoria" }
  - { value: 60000, suffix: "+", label: "Carreiras, de series a finais" }
  - { value: 1300, suffix: "+", label: "Competicións" }
  - { value: 160, suffix: "+", label: "Países" }
  - { value: 1933, label: "Primeiro resultado do arquivo", plain: true }
  - { value: 1000000, display: "1M", suffix: "+", label: "Datos precalculados" }

ticker:
  label: "Frases de Almanac"
  items:
    - { kind: "Resultado", text: "Lucía Martín gana con 1:47,64, 0,27 s por delante de Taylor." }
    - { kind: "Primeiro ouro", text: "Primer oro de España en esta prueba en Campeonatos del Mundo." }
    - { kind: "Marca persoal", text: "Eva Novak logra su mejor marca personal: 1:48,72 (antes 1:48,90)." }
    - { kind: "Cara a cara", text: "Lucía Martín ha superado a Lena Weber en 5 de sus 6 enfrentamientos." }
    - { kind: "Mellor tempo", text: "Lucía Martín firma un nuevo mejor tiempo mundial en esta prueba: 1:47,64." }
    - { kind: "Defende título", text: "Lena Weber defiende el título de 2023." }

pipeline:
  eyebrow: "Como funciona"
  title: "Do arquivo á cabina de comentaristas"
  text: "Almanac fai a investigación que o teu equipo faría entre carreira e carreira, e entrégacha lista para poñela en pantalla ou dicila en antena."
  steps:
    - icon: "fa-database"
      title: "O arquivo"
      text: "Cada rolda, rúa e tripulación desde 1933, das Copas do Mundo aos Xogos Olímpicos."
    - icon: "fa-bolt"
      title: "O motor de datos"
      text: "Récords, rachas, rivalidades e fitos, calculados de antemán e ordenados por relevancia."
    - icon: "fa-microphone"
      title: "En antena"
      text: "Datos estruturados e unha frase lista para ler, cada un coa súa fonte."

race:
  id: "briefing"
  eyebrow: "Briefings de carreira"
  title: "Antes da saída. Despois da meta."
  text: "Almanac resume calquera carreira rúa por rúa: mellores marcas, medallas, cara a cara e quen defende o título. Cando chega o resultado, as historias xa están aí."
  tabs:
    - id: "before"
      label: "Antes da carreira"
      facts:
        - { kind: "Defende título", text: "Lucía Martín defiende el título de 2025." }
        - { kind: "Cara a cara", text: "Lucía Martín domina a Giulia Rossi por 6–0 en sus enfrentamientos previos." }
        - { kind: "Rúa", text: "Calle 5: Mia Taylor (NZL), mejor marca personal 1:47,85." }
        - { kind: "Participantes", text: "3 deportistas de esta carrera tienen medallas en Campeonatos del Mundo." }
    - id: "after"
      label: "Tras a chegada"
      facts:
        - { kind: "Gañadora", text: "Lucía Martín gana con 1:47,64, 0,27 s por delante de Taylor." }
        - { kind: "Mellor tempo", text: "Lucía Martín firma un nuevo mejor tiempo del campeonato: 1:47,64." }
        - { kind: "Primeiro ouro", text: "Primer título mundial de España en esta prueba." }
        - { kind: "Marca persoal", text: "Lena Weber logra su mejor marca personal: 1:48,33 (antes 1:48,46)." }
  sample_note: "Exemplo ilustrativo de saída de Almanac, en castelán. As deportistas son ficticias."
  points:
    - "As próximas carreiras prepáranse con antelación, así que o briefing é instantáneo"
    - "Cada dato inclúe a súa fonte; os resultados provisionais márcanse"
    - "Os mellores tempos do arquivo nunca se presentan como récords do mundo"

access:
  eyebrow: "Dúas formas de usalo"
  title: "Conéctao aos teus gráficos. Ou simplemente pregunta."
  text: "Usa a API REST para alimentar os teus gráficos en pantalla, a túa app ou as ferramentas da túa redacción. Ou conecta Almanac a Claude, ChatGPT ou calquera asistente compatible con MCP e faille preguntas en linguaxe natural."
  api:
    label: "API REST"
    title: "Datos estruturados para os teus gráficos e apps"
    text: "JSON limpo con IDs, tempos, medallas, fontes e unha puntuación de relevancia, ademais da frase para ler."
    request: "/v1/head-to-head?a=…&b=…&lang=es"
    response_text: "Lucía Martín ha superado a Lena Weber en 5 de sus 6 enfrentamientos."
  ai:
    label: "Asistentes de IA · MCP"
    title: "O novo equipo de documentación do teu produtor"
    text: "Conéctao unha vez cun inicio de sesión seguro. O teu asistente obtén as ferramentas de Almanac e responde co arquivo, non de memoria."
    question: "Quen defende o título na final de K1 500 feminino e como están os cara a cara das participantes?"
    answer: "Lucía Martín (rúa 4) defende o título de 2025. Domina a Lena Weber por 5–1 e a Giulia Rossi por 6–0 nos seus cara a cara."
    works_with: "Funciona con Claude, ChatGPT e outros clientes MCP"
    window_title: "Asistente de IA"
    connected: "Almanac conectado"
    suggestions:
      - "Cando gañou España o seu último ouro olímpico en C2?"
      - "Máis títulos continentais de K1 feminino?"
    placeholder: "Pregunta por calquera carreira, deportista ou país…"

features:
  eyebrow: "Que sabe"
  title: "Todas as preguntas que se fai un comentarista"
  items:
    - { icon: "fa-id-card", title: "Fichas de deportista", text: "Traxectoria, primeira medalla e primeiro título coa idade, e mellores marcas persoais e da tempada." }
    - { icon: "fa-medal", title: "Medallas a calquera nivel", text: "Xogos Olímpicos, Mundiais, Campionatos continentais ou Copas do Mundo, por ano, proba, embarcación ou categoría." }
    - { icon: "fa-people-arrows", title: "Cara a cara e rivais", text: "Balance completo, balance só en finais, o último enfrontamento e os rivais máis frecuentes." }
    - { icon: "fa-landmark", title: "Historia de cada proba", text: "Campións e podios por edición, e quen suma máis títulos por deportista e por país." }
    - { icon: "fa-flag", title: "Fitos por país", text: "Medalleiros e “primeiro ouro desde…” resoltos nunha soa consulta." }
    - { icon: "fa-list-ol", title: "Clasificacións", text: "Ordena por medallas, ouros, títulos, finais ou saídas con calquera filtro: “máis títulos continentais de K1 feminino”." }

languages:
  eyebrow: "Bilingüe desde o primeiro día"
  title: "Listo para ler, en inglés e en castelán"
  text: "Cada frase está escrita no idioma da túa retransmisión, cunha redacción natural e os nomes de proba correctos. Cambia e compróbao."
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
  eyebrow: "Para quen é"
  title: "Feito para quen conta a historia"
  items:
    - { icon: "fa-tv", title: "Televisións", text: "Alimenta rótulos e gráficos de rúas con datos que se actualizan coa lista de saída." }
    - { icon: "fa-microphone-alt", title: "Comentaristas", text: "Entra na cabina con todas as historias preparadas, carreira a carreira." }
    - { icon: "fa-newspaper", title: "Medios dixitais e apps", text: "Publica previas, directos e páxinas de resultados sen montar un departamento de estatística." }
    - { icon: "fa-trophy", title: "Federacións e organizadores", text: "Dálles ás túas propias canles a historia e o contexto que merecen os teus eventos." }

---
