---
title: "Cobertura de eventos"
description: "Gráficos de datos en directo para retransmisións internacionais de piragüismo de velocidade: sensores Kosoku con precisión de 0,05 s, un director con IA que decide que mostrar e cando, e datos de Almanac en pantalla."
layout: "events_coverage"
image: "videos/web/media_broadcast_poster.jpg"
draft: false

hero:
  on_air: "En directo"
  eyebrow: "Cobertura de eventos · Datos en directo para TV"
  title_lines: ["Cada palada."]
  title_accent: "En directo."
  text: "Gráficos de datos en tempo real para o piragüismo de velocidade internacional do máximo nivel. Sensores Kosoku en cada embarcación, un director con IA que escolle a historia e gráficos na sinal internacional mentres a regata aínda se está a decidir."
  primary_label: "Lévao ao teu evento"
  primary_link: "contact/"
  sound_label: "Ver con son"
  fullscreen_label: "Pantalla completa"
  video_hd: "videos/web/media_broadcast_1080.mp4"
  video: "videos/web/media_broadcast_720.mp4"
  video_mobile: "videos/web/media_broadcast_540.mp4"
  poster: "videos/web/media_broadcast_poster.webp"
  screen_live: "Datos en directo"
  screen_title: "C1 1000 m masculino · Final A"
  video_alt: "Final de C1 1000 m masculino con gráficos en directo de QUKO: clasificación, placas dos deportistas pintadas sobre a auga, unha alerta de cambio de ritmo e un taboleiro táctico cenital."
  ticker:
    - { label: "Rúa 6", value: "21,3 km/h · A máis rápida", tone: "gold" }
    - { label: "Distancia ao 1.º", value: "+0,02 s", tone: "salmon" }
    - { label: "Ritmo de palada", value: "153 ppm", tone: "salmon" }
    - { label: "Cambio de ritmo", value: "+0,6 km/h en 8 s", tone: "purple" }
    - { label: "Palada máis longa", value: "4,98 m", tone: "salmon" }
    - { label: "Líder", value: "a 544 m da meta", tone: "red" }
    - { label: "Liderado definitivo", value: "864 m", tone: "gold" }
    - { label: "Acel. de tracción", value: "10,9 m/s²", tone: "salmon" }

player:
  title: "Gráficos de datos en directo de QUKO nunha final de C1 1000 m masculino"
  close_label: "Pechar vídeo"

specs:
  label: "A cobertura en cifras"
  items:
    - { value: "0.05", display: "0,05", from: 1, decimals: 2, unit: "s", label: "Precisión de cronometraxe" }
    - { value: "9", unit: "rúas", label: "En directo, cada segundo" }
    - { value: "150", unit: "barcos", label: "Seguidos á vez" }
    - { value: "50", unit: "+", label: "Gráficos para TV" }
    - { value: "100", unit: "%", label: "Automático" }

pipeline:
  eyebrow: "Como funciona"
  title: "Da auga á sinal internacional, en directo."
  text: "Os datos saen da embarcación e chegan á pantalla mentres a regata segue en marcha."
  steps:
    - icon: "fas fa-microchip"
      kicker: "En cada embarcación"
      title: "Sensores Kosoku"
      text: "Velocidade, ritmo de palada, forza e equilibrio de cada tripulación, cronometrados a 0,05 s. Ata 150 embarcacións á vez."
    - icon: "fas fa-network-wired"
      kicker: "Na produción"
      title: "Motor en directo de QUKO"
      text: "Fusiona sensores, cronometraxe oficial e imaxe: sabe que plano está no aire e que embarcación é cada unha."
    - icon: "fas fa-brain"
      kicker: "Toma a decisión"
      title: "Director con IA"
      text: "Escolle a historia que importa en cada momento e o gráfico que mellor a conta."
      input_icon: "fas fa-database"
      input: "Almanac achega palmarés, cara a cara e mellores marcas"
    - icon: "fas fa-broadcast-tower"
      kicker: "No aire"
      title: "A túa sinal internacional"
      text: "Unha capa limpa e transparente que se integra directamente na túa produción."

showcase:
  eyebrow: "Os gráficos, no aire"
  title: "Datos que o público sente."
  text: "Imaxes dunha final internacional con gráficos de QUKO en pantalla: placas dos deportistas pintadas sobre a auga, clasificación en directo, alertas de ritmo, resumos de regata e historias para a repetición."
  rail_label: "Escolle un gráfico"
  prev_label: "Gráfico anterior"
  next_label: "Gráfico seguinte"
  groups:
    - { key: "live", label: "Regata en directo" }
    - { key: "athletes", label: "Deportistas" }
    - { key: "replays", label: "Repeticións" }
  items:
    - image: "lane-plates"
      group: "live"
      tag: "Directo"
      title: "Placas dos deportistas sobre a auga"
      text: "O nome e a velocidade en directo de cada deportista pintados na súa propia rúa, a embarcación máis rápida en dourado, coa clasificación, o ritmo de palada e a distancia ao líder ao carón."
      alt: "Plano lateral de dron dunha final de K1 200 m con placas de velocidade pintadas en cada rúa, clasificación e unha tarxeta de palada máis longa."
    - image: "data-columns"
      group: "live"
      tag: "Directo"
      title: "Columnas de datos diante do grupo"
      text: "A métrica que importa nese momento, aquí o ritmo de palada, érguese diante de cada proa para comparar toda a final dunha ollada."
      alt: "Final de C1 1000 m con columnas de ritmo de palada diante de cada embarcación, placas de velocidade e un mapa do grupo."
    - image: "pace-change"
      group: "live"
      tag: "Directo"
      title: "Alerta de cambio de ritmo"
      text: "En canto un palista acelera, o público véo: +0,6 km/h en 8 segundos, coa gráfica dos últimos 20 segundos que o demostra."
      alt: "Tarxeta de cambio de ritmo que mostra un palista acelerando 0,6 km/h en 8 segundos, sobre un plano lateral de dron."
    - image: "overhead-board"
      group: "live"
      tag: "Directo"
      title: "Taboleiro táctico cenital"
      text: "Desde o dron xusto enriba: posición e diferenza de tempo detrás de cada embarcación, tarxetas de rúa con países e unha regra de metros ata a meta."
      alt: "Plano cenital de dron coa posición e a diferenza de tempo detrás de cada embarcación, tarxetas de rúa e unha regra de distancia."
    - image: "highlights-balogh"
      group: "athletes"
      tag: "Tras a meta"
      title: "Resumo de regata"
      text: "Segundos despois da meta: velocidade máxima e onde a acadou, ritmo medio, tracción máis forte e distancia por palada, co mellor rexistro da regata en dourado."
      alt: "Tarxeta de resumo de regata dun finalista de K1 200 m: velocidade, ritmo de palada, aceleración de tracción e distancia por palada."
    - image: "highlights-baptista"
      group: "athletes"
      tag: "Tras a meta"
      title: "Cada finalista, os seus números"
      text: "Cada deportista ten a súa propia tarxeta e despois unha comparación co gañador. Aquí, o ritmo de palada máis alto da regata."
      alt: "Tarxeta de resumo de regata doutro finalista de K1 200 m, co ritmo de palada máis alto da regata destacado."
    - image: "medallist-card"
      group: "athletes"
      tag: "Tras a meta"
      title: "A historia do medallista"
      text: "O momento do podio, cos datos detrás: un pico de tracción de 10,9 m/s² aos 983 m camiño do bronce."
      alt: "Tarxeta de resumo de regata do medallista de bronce dunha final de C1 1000 m."
    - image: "replay-fuksa"
      group: "replays"
      tag: "Repetición"
      title: "Como se gañou"
      text: "A repetición recibe un titular escrito a partir dos datos, o liderado definitivo aos 864 m, e a diferenza trazada ao longo de todo o percorrido."
      alt: "Gráfico de repetición co titular 'colleu o liderado definitivo aos 864 m' e a diferenza entre o primeiro e o segundo."
    - image: "replay-arevalo"
      group: "replays"
      tag: "Repetición"
      title: "Unha historia nova en cada repetición"
      text: "Liderou de principio a fin, por 0,08 s na meta. Cada repetición escolle un dato novo: velocidade final, 50 m máis rápidos, reacción na saída e moito máis."
      alt: "Gráfico de repetición que mostra que o gañador liderou toda a regata, coa diferenza entre o primeiro e o segundo."


director:
  eyebrow: "O director con IA"
  title: "Un director con IA que non perde nin un movemento."
  text: "Os datos por si sós non fan televisión. A IA de QUKO segue á vez a regata e as imaxes, decide que historia contar e cando, e pona no aire por si mesma. O teu operador pode tomar o control en calquera momento."
  points:
    - { icon: "fas fa-video", title: "Le o plano", text: "Sabe se a imaxe é un dron lateral, un cenital, un coche de seguimento ou un primeiro plano, e só debuxa o que ese plano pode levar." }
    - { icon: "fas fa-bullseye", title: "Atopa a historia", text: "Adiantamentos, duelos por menos de 0,3 s, cambios de ritmo e mellores marcas puntúanse no momento. A máis forte sae ao aire." }
    - { icon: "fas fa-stopwatch", title: "Sincronízao coas imaxes", text: "Unha tarxeta cada vez, nunca enriba dun palista, nunca menos de 2,5 s en pantalla e fóra antes de que cambie a cámara." }
    - { icon: "fas fa-sliders-h", title: "O teu operador manda", text: "Destaca unha rúa, forza unha métrica, pide un cara a cara ou activa e desactiva calquera gráfico. Automático por defecto, manual cando queiras." }
  console:
    title: "Rexistro de decisións · C1 1000 m · Final A"
    auto_label: "Auto"
    manual_label: "Operador"
    shot_label: "Plano"
    lines:
      - { time: "−1:40", shot: "Xeral", cue: "Previa · favoritos nas rúas 2 e 3", action: "Rótulo cara a cara" }
      - { time: "0:08.0", shot: "Dron lateral", cue: "Grupo asentado tras a saída", action: "Placas + clasificación" }
      - { time: "1:40.0", shot: "Dron lateral", cue: "Métrica da fase: ritmo de palada", action: "Columnas de datos diante do grupo" }
      - { time: "2:48.2", shot: "Dron lateral", cue: "Rúa 9 · +0,6 km/h en 8 s", action: "Alerta de cambio de ritmo · 7,5 s" }
      - { time: "3:08.6", shot: "Cenital", cue: "Os dous primeiros a menos de 0,02 s", action: "Distancia ao líder tras cada barco" }
      - { time: "3:18.9", shot: "Dron lateral", cue: "O operador pide o duelo: rúas 2 e 4", action: "Tarxeta de duelo", operator: true }
      - { time: "3:35.0", shot: "Dron lateral", cue: "Zona de meta · últimos 50 m", action: "Auga despexada para a chegada" }
      - { time: "Repetición", shot: "Repetición", cue: "Liderado definitivo aos 864 m", action: "Historia «Como se gañou»" }

almanac:
  eyebrow: "Con Almanac dentro"
  title: "Coñece cada deportista da lista de saída."
  text: "A cobertura de QUKO está conectada a Almanac, o arquivo de resultados de piragüismo desde 1933. Campións defensores, enfrontamentos directos, mellores marcas persoais e eses «primeiro desde…» chegan á pantalla e á cabina de comentarios, asociados ao deportista de cada rúa."
  link_label: "Descubre Almanac"
  link: "almanac/"
  stats:
    - { value: 57600, suffix: "+", label: "Deportistas" }
    - { value: 58000, suffix: "+", label: "Regatas" }
    - { value: 1000000, suffix: "+", label: "Datos listos para emitir" }
  card_title: "Datos da saída"
  card_race: "K1 500 m feminino · Final A"
  sample_note: "Exemplo ilustrativo · deportistas ficticias"
  facts:
    - { kind: "Defende título", lane: "4", name: "L. Martín", text: "Defende o título de 2025." }
    - { kind: "Cara a cara", lane: "3", name: "L. Weber", text: "Domina a Giulia Rossi por 4–1 nos seus enfrontamentos previos." }
    - { kind: "Marca persoal", lane: "5", name: "M. Taylor", text: "Segunda mellor marca persoal da final: 1:47,85." }
    - { kind: "Primeira final", lane: "2", name: "A. Costa", text: "Disputa a súa primeira final nuns Campionatos do Mundo." }
    - { kind: "A máis nova", lane: "6", name: "E. Novak", text: "A deportista máis nova da final, con 23 anos." }


workflow:
  eyebrow: "O teu evento, cuberto"
  title: "Nós levamos o equipo. Ti levas o espectáculo."
  steps:
    - kicker: "Antes da regata"
      title: "Listos na liña de saída"
      items: ["Sensores Kosoku colocados e sincronizados coa cronometraxe oficial", "Listas de saída, sede e campo de regatas cargados", "Un dossier de Almanac de cada deportista de cada final"]
    - kicker: "Durante a regata"
      title: "En directo na túa sinal internacional"
      items: ["Gráficos entregados como capa transparente á túa produción", "Director con IA no aire, cun operador ao carón", "Das series ás finais, ata 150 embarcacións á vez"]
    - kicker: "Despois da regata"
      title: "A historia continúa"
      items: ["Historias para a repetición e resumos en segundos", "Datos de regata para comentaristas, medios e redes sociais", "Análise para equipos, deportistas e federacións"]

marketing_cta:
  eyebrow: "Cobertura de eventos"
  title: "Dálle á túa regata a retransmisión que merece."
  text: "Cóntanos como é o teu evento, a túa sede e a túa produción. Amosarémosche como se ven os datos en directo de QUKO sobre as túas imaxes."
  primary_label: "Lévao ao teu evento"
  primary_link: "contact/"
  secondary_label: "Descubre Kosoku"
  secondary_link: "kosoku/"
---
