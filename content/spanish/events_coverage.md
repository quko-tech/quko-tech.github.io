---
title: "Cobertura de eventos"
description: "Gráficos de datos en directo para retransmisiones internacionales de piragüismo de velocidad: sensores Kosoku con precisión de 0,05 s, un director con IA que decide qué mostrar y cuándo, y datos de Almanac en pantalla."
layout: "events_coverage"
image: "videos/web/media_broadcast_poster.jpg"
draft: false

hero:
  on_air: "En directo"
  eyebrow: "Cobertura de eventos · Datos en directo para TV"
  title_lines: ["Cada palada."]
  title_accent: "En directo."
  text: "Gráficos de datos en tiempo real para el piragüismo de velocidad internacional de máximo nivel. Sensores Kosoku en cada embarcación, un director con IA que elige la historia y gráficos en la señal internacional mientras la carrera aún se está decidiendo."
  primary_label: "Llévalo a tu evento"
  primary_link: "contact/"
  sound_label: "Ver con sonido"
  fullscreen_label: "Pantalla completa"
  video_hd: "videos/web/media_broadcast_1080.mp4"
  video: "videos/web/media_broadcast_720.mp4"
  video_mobile: "videos/web/media_broadcast_540.mp4"
  poster: "videos/web/media_broadcast_poster.webp"
  screen_live: "Datos en directo"
  screen_title: "C1 1000 m masculino · Final A"
  video_alt: "Final de C1 1000 m masculino con gráficos en directo de QUKO: clasificación, placas de los deportistas pintadas sobre el agua, una alerta de cambio de ritmo y una pizarra táctica cenital."
  ticker:
    - { label: "Calle 6", value: "21,3 km/h · La más rápida", tone: "gold" }
    - { label: "Distancia al 1.º", value: "+0,02 s", tone: "salmon" }
    - { label: "Ritmo de palada", value: "153 ppm", tone: "salmon" }
    - { label: "Cambio de ritmo", value: "+0,6 km/h en 8 s", tone: "purple" }
    - { label: "Palada más larga", value: "4,98 m", tone: "salmon" }
    - { label: "Líder", value: "a 544 m de meta", tone: "red" }
    - { label: "Liderato definitivo", value: "864 m", tone: "gold" }
    - { label: "Acel. de tracción", value: "10,9 m/s²", tone: "salmon" }

player:
  title: "Gráficos de datos en directo de QUKO en una final de C1 1000 m masculino"
  close_label: "Cerrar vídeo"

specs:
  label: "La cobertura en cifras"
  items:
    - { value: "0.05", display: "0,05", from: 1, decimals: 2, unit: "s", label: "Precisión de cronometraje" }
    - { value: "9", unit: "calles", label: "En directo, cada segundo" }
    - { value: "150", unit: "barcos", label: "Seguidos a la vez" }
    - { value: "50", unit: "+", label: "Gráficos para TV" }
    - { value: "100", unit: "%", label: "Automático" }

pipeline:
  eyebrow: "Cómo funciona"
  title: "Del agua a la señal internacional, en directo."
  text: "Los datos salen de la embarcación y llegan a la pantalla mientras la carrera sigue en marcha."
  steps:
    - icon: "fas fa-microchip"
      kicker: "En cada embarcación"
      title: "Sensores Kosoku"
      text: "Velocidad, ritmo de palada, fuerza y equilibrio de cada tripulación, cronometrados a 0,05 s. Hasta 150 embarcaciones a la vez."
    - icon: "fas fa-network-wired"
      kicker: "En la producción"
      title: "Motor en directo de QUKO"
      text: "Fusiona sensores, cronometraje oficial e imagen: sabe qué plano está en el aire y qué embarcación es cada una."
    - icon: "fas fa-brain"
      kicker: "Toma la decisión"
      title: "Director con IA"
      text: "Elige la historia que importa en cada momento y el gráfico que mejor la cuenta."
      input_icon: "fas fa-database"
      input: "Almanac aporta palmarés, cara a cara y mejores marcas"
    - icon: "fas fa-broadcast-tower"
      kicker: "En el aire"
      title: "Tu señal internacional"
      text: "Una capa limpia y transparente que se integra directamente en tu producción."

showcase:
  eyebrow: "Los gráficos, en el aire"
  title: "Datos que el público siente."
  text: "Imágenes de una final internacional con gráficos de QUKO en pantalla: placas de los deportistas pintadas sobre el agua, clasificación en directo, alertas de ritmo, resúmenes de carrera e historias para la repetición."
  rail_label: "Elige un gráfico"
  prev_label: "Gráfico anterior"
  next_label: "Gráfico siguiente"
  groups:
    - { key: "live", label: "Carrera en directo" }
    - { key: "athletes", label: "Deportistas" }
    - { key: "replays", label: "Repeticiones" }
  items:
    - image: "lane-plates"
      group: "live"
      tag: "Directo"
      title: "Placas de los deportistas sobre el agua"
      text: "El nombre y la velocidad en directo de cada deportista pintados en su propia calle, la embarcación más rápida en dorado, con la clasificación, el ritmo de palada y la distancia al líder al lado."
      alt: "Plano lateral de dron de una final de K1 200 m con placas de velocidad pintadas en cada calle, clasificación y una tarjeta de palada más larga."
    - image: "data-columns"
      group: "live"
      tag: "Directo"
      title: "Columnas de datos delante del grupo"
      text: "La métrica que importa en ese momento, aquí el ritmo de palada, se levanta delante de cada proa para comparar toda la final de un vistazo."
      alt: "Final de C1 1000 m con columnas de ritmo de palada delante de cada embarcación, placas de velocidad y un mapa del grupo."
    - image: "pace-change"
      group: "live"
      tag: "Directo"
      title: "Alerta de cambio de ritmo"
      text: "En cuanto un palista acelera, el público lo ve: +0,6 km/h en 8 segundos, con la gráfica de los últimos 20 segundos que lo demuestra."
      alt: "Tarjeta de cambio de ritmo que muestra a un palista acelerando 0,6 km/h en 8 segundos, sobre un plano lateral de dron."
    - image: "overhead-board"
      group: "live"
      tag: "Directo"
      title: "Pizarra táctica cenital"
      text: "Desde el dron justo encima: posición y diferencia de tiempo detrás de cada embarcación, tarjetas de calle con países y una regla de metros hasta la meta."
      alt: "Plano cenital de dron con la posición y la diferencia de tiempo detrás de cada embarcación, tarjetas de calle y una regla de distancia."
    - image: "highlights-balogh"
      group: "athletes"
      tag: "Tras la meta"
      title: "Resumen de carrera"
      text: "Segundos después de la meta: velocidad máxima y dónde la alcanzó, ritmo medio, tracción más fuerte y distancia por palada, con el mejor registro de la carrera en dorado."
      alt: "Tarjeta de resumen de carrera de un finalista de K1 200 m: velocidad, ritmo de palada, aceleración de tracción y distancia por palada."
    - image: "highlights-baptista"
      group: "athletes"
      tag: "Tras la meta"
      title: "Cada finalista, sus números"
      text: "Cada deportista tiene su propia tarjeta y después una comparación con el ganador. Aquí, el ritmo de palada más alto de la carrera."
      alt: "Tarjeta de resumen de carrera de otro finalista de K1 200 m, con el ritmo de palada más alto de la carrera destacado."
    - image: "medallist-card"
      group: "athletes"
      tag: "Tras la meta"
      title: "La historia del medallista"
      text: "El momento del podio, con los datos detrás: un pico de tracción de 10,9 m/s² a los 983 m camino del bronce."
      alt: "Tarjeta de resumen de carrera del medallista de bronce de una final de C1 1000 m."
    - image: "replay-fuksa"
      group: "replays"
      tag: "Repetición"
      title: "Cómo se ganó"
      text: "La repetición recibe un titular escrito a partir de los datos, el liderato definitivo a los 864 m, y la diferencia trazada a lo largo de todo el recorrido."
      alt: "Gráfico de repetición con el titular 'tomó el liderato definitivo a los 864 m' y la diferencia entre el primero y el segundo."
    - image: "replay-arevalo"
      group: "replays"
      tag: "Repetición"
      title: "Una historia nueva en cada repetición"
      text: "Lideró de principio a fin, por 0,08 s en la meta. Cada repetición elige un dato nuevo: velocidad final, 50 m más rápidos, reacción en la salida y mucho más."
      alt: "Gráfico de repetición que muestra que el ganador lideró toda la carrera, con la diferencia entre el primero y el segundo."


director:
  eyebrow: "El director con IA"
  title: "Un director con IA que no se pierde ni un movimiento."
  text: "Los datos por sí solos no hacen televisión. La IA de QUKO sigue a la vez la carrera y las imágenes, decide qué historia contar y cuándo, y la pone en el aire por sí misma. Tu operador puede tomar el control en cualquier momento."
  points:
    - { icon: "fas fa-video", title: "Lee el plano", text: "Sabe si la imagen es un dron lateral, un cenital, un coche de seguimiento o un primer plano, y solo dibuja lo que ese plano puede llevar." }
    - { icon: "fas fa-bullseye", title: "Encuentra la historia", text: "Adelantamientos, duelos por menos de 0,3 s, cambios de ritmo y mejores marcas se puntúan en el momento. La más fuerte sale al aire." }
    - { icon: "fas fa-stopwatch", title: "Lo sincroniza con las imágenes", text: "Una tarjeta cada vez, nunca encima de un palista, nunca menos de 2,5 s en pantalla y fuera antes de que cambie la cámara." }
    - { icon: "fas fa-sliders-h", title: "Tu operador manda", text: "Destaca una calle, fuerza una métrica, pide un cara a cara o activa y desactiva cualquier gráfico. Automático por defecto, manual cuando quieras." }
  console:
    title: "Registro de decisiones · C1 1000 m · Final A"
    auto_label: "Auto"
    manual_label: "Operador"
    shot_label: "Plano"
    lines:
      - { time: "−1:40", shot: "General", cue: "Previa · favoritos en las calles 2 y 3", action: "Rótulo cara a cara" }
      - { time: "0:08.0", shot: "Dron lateral", cue: "Grupo asentado tras la salida", action: "Placas + clasificación" }
      - { time: "1:40.0", shot: "Dron lateral", cue: "Métrica de la fase: ritmo de palada", action: "Columnas de datos delante del grupo" }
      - { time: "2:48.2", shot: "Dron lateral", cue: "Calle 9 · +0,6 km/h en 8 s", action: "Alerta de cambio de ritmo · 7,5 s" }
      - { time: "3:08.6", shot: "Cenital", cue: "Los dos primeros a menos de 0,02 s", action: "Distancia al líder tras cada barco" }
      - { time: "3:18.9", shot: "Dron lateral", cue: "El operador pide el duelo: calles 2 y 4", action: "Tarjeta de duelo", operator: true }
      - { time: "3:35.0", shot: "Dron lateral", cue: "Zona de meta · últimos 50 m", action: "Agua despejada para la llegada" }
      - { time: "Repetición", shot: "Repetición", cue: "Liderato definitivo a los 864 m", action: "Historia «Cómo se ganó»" }

almanac:
  eyebrow: "Con Almanac dentro"
  title: "Conoce a cada deportista de la lista de salida."
  text: "La cobertura de QUKO está conectada a Almanac, el archivo de resultados de piragüismo desde 1933. Campeones defensores, enfrentamientos directos, mejores marcas personales y esos «primero desde…» llegan a la pantalla y a la cabina de comentarios, asociados al deportista de cada calle."
  link_label: "Descubre Almanac"
  link: "almanac/"
  stats:
    - { value: 57600, suffix: "+", label: "Deportistas" }
    - { value: 58000, suffix: "+", label: "Carreras" }
    - { value: 1000000, suffix: "+", label: "Datos listos para emitir" }
  card_title: "Datos de la salida"
  card_race: "K1 500 m femenino · Final A"
  sample_note: "Ejemplo ilustrativo · deportistas ficticias"
  facts:
    - { kind: "Defiende título", lane: "4", name: "L. Martín", text: "Defiende el título de 2025." }
    - { kind: "Cara a cara", lane: "3", name: "L. Weber", text: "Domina a Giulia Rossi por 4–1 en sus enfrentamientos previos." }
    - { kind: "Marca personal", lane: "5", name: "M. Taylor", text: "Segunda mejor marca personal de la final: 1:47,85." }
    - { kind: "Primera final", lane: "2", name: "A. Costa", text: "Disputa su primera final en unos Campeonatos del Mundo." }
    - { kind: "La más joven", lane: "6", name: "E. Novak", text: "La deportista más joven de la final, con 23 años." }


workflow:
  eyebrow: "Tu evento, cubierto"
  title: "Nosotros llevamos el equipo. Tú te llevas el espectáculo."
  steps:
    - kicker: "Antes de la carrera"
      title: "Listos en la línea de salida"
      items: ["Sensores Kosoku colocados y sincronizados con el cronometraje oficial", "Listas de salida, sede y campo de regatas cargados", "Un dossier de Almanac de cada deportista de cada final"]
    - kicker: "Durante la carrera"
      title: "En directo en tu señal internacional"
      items: ["Gráficos entregados como capa transparente a tu producción", "Director con IA en el aire, con un operador al lado", "De las series a las finales, hasta 150 embarcaciones a la vez"]
    - kicker: "Después de la carrera"
      title: "La historia continúa"
      items: ["Historias para la repetición y resúmenes en segundos", "Datos de carrera para comentaristas, medios y redes sociales", "Análisis para equipos, deportistas y federaciones"]

marketing_cta:
  eyebrow: "Cobertura de eventos"
  title: "Dale a tu regata la retransmisión que merece."
  text: "Cuéntanos cómo es tu evento, tu sede y tu producción. Te enseñaremos cómo se ven los datos en directo de QUKO sobre tus imágenes."
  primary_label: "Llévalo a tu evento"
  primary_link: "contact/"
  secondary_label: "Descubre Kosoku"
  secondary_link: "kosoku/"
---
