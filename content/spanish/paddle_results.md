---
title: "Paddle Results"
description: "Paddle Results es el archivo gratuito de resultados de piragüismo de QUKO: cada regata desde 1933, trayectorias de deportistas, historial por países y rankings. En la web, iPhone y Android."
layout: "paddle_results"
image: "images/paddle_results/og.png"
draft: false

apps:
  app_store: "https://apps.apple.com/app/paddle-results/id6803184329"
  app_store_alt: "Descárgalo en el App Store"
  google_play: "https://play.google.com/store/apps/details?id=com.quko.paddleresults"
  google_play_alt: "Disponible en Google Play"
  web: "https://results.quko.es/"
  web_label: "Abrir Paddle Results"
  stores_label: "También en"

hero:
  eyebrow: "Paddle Results · El archivo mundial del piragüismo"
  title_lines: ["Cada salida."]
  title_accent: "Cada llegada."
  text: "Resultados de piragüismo, de la final olímpica a la serie júnior. Busca cualquier regata, sigue la trayectoria completa de un deportista y descubre cómo han cambiado países y pruebas en noventa años de competición."
  note: "Gratis en la web, iPhone y Android. Sin cuenta y sin anuncios."
  # La portada muestra la app web en un navegador, con la app del móvil al lado.
  browser: { url: "results.quko.es/athletes/…", image: "images/paddle_results/web-athlete", alt: "Ficha de Lisa Carrington en la web de Paddle Results: 317 salidas, 104 finales principales, 59 oros y un 75 % de medallas" }
  chips:
    - { icon: "fa-globe", label: "En la web", value: "results.quko.es" }
    - { icon: "fa-mobile-alt", label: "En tu móvil", value: "iPhone y Android" }

stats:
  label: "El archivo en cifras"
  items:
    - { value: 50000, suffix: "+", label: "Regatas, de series a finales" }
    - { value: 55000, suffix: "+", label: "Deportistas con su trayectoria" }
    - { value: 1200, suffix: "+", label: "Competiciones" }
    - { value: 150, suffix: "+", label: "Países" }
    - { value: 1933, label: "Primer resultado del archivo", plain: true }

disciplines:
  label: "Modalidades del archivo"
  items: ["Aguas tranquilas", "Slalom", "Maratón", "Paracanoe", "Kayak cross", "Dragon boat", "SUP"]

web:
  eyebrow: "En la web"
  title: "Todo el archivo, en tu navegador."
  text: "Sin descargas y sin cuenta. Abre results.quko.es en cualquier ordenador, tableta o móvil y tendrás el archivo completo, con espacio para tablas de resultados enteras, gráficos de trayectoria y regatas lado a lado."
  link_label: "Abrir results.quko.es"
  tabs_label: "Páginas de la app web"
  tabs:
    - { label: "Regatas", url: "results.quko.es/races/…", image: "images/paddle_results/web-race", alt: "La final A de K1 500 m femenino de los Juegos Olímpicos de París 2024 en la web de Paddle Results: el orden de llegada completo con calles, tiempos y diferencias, encabezado por Lisa Carrington en 1:47.360" }
    - { label: "Deportistas", url: "results.quko.es/athletes/…", image: "images/paddle_results/web-athlete", alt: "Ficha de Lisa Carrington: salidas, finales principales, medallas, porcentaje de medallas y Juegos Olímpicos" }
    - { label: "Rankings", url: "results.quko.es/rankings", image: "images/paddle_results/web-rankings", alt: "Rankings en la web: la valoración actual de cada deportista frente a su mejor marca y la clasificación, encabezada por Martin Fuksa" }
    - { label: "Países", url: "results.quko.es/nations/NZL", image: "images/paddle_results/web-nation", alt: "Mejor puesto y rondas alcanzadas por año de Nueva Zelanda, en aguas tranquilas sénior de nivel mundial" }
    - { label: "Laboratorio histórico", url: "results.quko.es/history", image: "images/paddle_results/web-history", alt: "El laboratorio histórico siguiendo una prueba a lo largo del tiempo, con sus tiempos ganadores y los líderes del medallero" }
  points:
    - { icon: "fa-bolt", title: "En directo, sin recargar", text: "Los resultados aparecen en la página en cuanto se publican." }
    - { icon: "fa-link", title: "Enlaces que guardan tu vista", text: "Comparte un enlace y los filtros que elegiste viajan con él." }
    - { icon: "fa-desktop", title: "Pensada para pantallas grandes", text: "Tablas de resultados completas, gráficos de trayectoria y regatas lado a lado." }
    - { icon: "fa-mouse-pointer", title: "Nada que instalar", text: "Sin descargas y sin cuenta. Ábrela y empieza a buscar." }

tour:
  eyebrow: "Dentro de la app"
  title: "El archivo del piragüismo, útil de verdad."
  text: "Cuatro formas de entrar en noventa años de regatas. Desplázate para verlas."
  steps:
    - icon: "fa-search"
      kicker: "Empieza por donde quieras"
      title: "Una búsqueda para todo"
      text: "Escribe un deportista, una prueba o una sede. Las competiciones en directo están en la pantalla de inicio, junto a lo próximo y los últimos resultados oficiales."
      points: ["Competiciones en directo y próximas", "Deportistas, regatas y sedes en un solo buscador"]
      image: "images/paddle_results/screen-home.webp"
      alt: "Pantalla de inicio de Paddle Results: «Every start. Every finish.» con un buscador de deportistas, pruebas y sedes"
    - icon: "fa-flag-checkered"
      kicker: "Regatas y competiciones"
      title: "Cada serie, cada final"
      text: "Orden de llegada completo con tiempos, diferencias y calles. Listas de salida antes del disparo y la progresión de la prueba, para seguir a una tripulación de la serie a la semifinal y a la final."
      points: ["Listas de salida y resultados, lado a lado", "Resultados en directo sin recargar"]
      image: "images/paddle_results/screen-race.webp"
      alt: "Progresión y orden de llegada de una regata de K1 500 m femenino, encabezada por Lisa Carrington"
    - icon: "fa-id-card"
      kicker: "Fichas de deportistas"
      title: "Toda una carrera en una página"
      text: "Salidas, finales disputadas, medallas y porcentaje de medallas, Juegos Olímpicos y mejores marcas por embarcación y distancia. Además, las pruebas que más disputa y los rivales con los que más coincide."
      points: ["Mejores marcas por embarcación y distancia", "Grandes rivales y compañeros habituales"]
      image: "images/paddle_results/screen-athlete.webp"
      alt: "Ficha de Lisa Carrington: 296 salidas, 94 finales principales, 57 oros y un 78 % de medallas"
    - icon: "fa-history"
      kicker: "Laboratorio histórico y comparador"
      title: "Sigue una prueba a lo largo del tiempo"
      text: "Tiempos ganadores, participación y podios, temporada a temporada. Compara de dos a cuatro regatas, guarda tus favoritos y comparte un enlace a exactamente lo que estás viendo."
      points: ["Tiempo ganador por regata desde la primera edición", "Compara hasta cuatro regatas"]
      image: "images/paddle_results/screen-history.webp"
      alt: "Gráfico del tiempo ganador por regata y líderes del medallero de una prueba"

# Trasladado desde la página de Almanac: el archivo en tableta y móvil.
screens:
  eyebrow: "Sobre el archivo de Paddle Results"
  title: "93 años de regatas. Un solo archivo."
  text: "El mismo archivo alimenta la app de tu móvil y Almanac, el servicio de datos de QUKO para televisiones. Si está en la app, un comentarista puede contarlo en directo."
  link_label: "Abrir Paddle Results"
  link: "https://results.quko.es/"
  secondary_label: "Descubre Almanac"
  secondary_link: "almanac/"
  main: { image: "images/almanac/tablet-race-final.webp", alt: "Paddle Results con la final de K1 500 m femenino de los Juegos Olímpicos de París 2024, con calles, tiempos y diferencias" }
  side:
    - { image: "images/almanac/phone-athlete.webp", alt: "Ficha de Lisa Carrington en Paddle Results: 296 salidas, 94 finales principales, 57 oros" }
    - { image: "images/almanac/phone-winner-times.webp", alt: "Gráfico del tiempo ganador por carrera de una prueba, de 2001 a 2026" }
  strip:
    - { image: "images/almanac/tablet-medal-leaders.webp", alt: "Líderes del medallero y mejor tiempo ganador por año de una prueba" }
    - { image: "images/almanac/tablet-nation.webp", alt: "Mejor puesto y medallas por año de un país" }
    - { image: "images/almanac/tablet-athlete.webp", alt: "Ficha de deportista con porcentaje de medallas, Juegos Olímpicos y las pruebas que disputa" }
    - { image: "images/almanac/tablet-rankings.webp", alt: "Rankings con los que más suben y la valoración actual frente a su mejor marca" }

principles:
  eyebrow: "Basado en hechos"
  title: "Tiempos tal cual. Nada inventado."
  text: "Paddle Results cuenta lo que pasó en el agua y es honesto con lo que no sabe."
  items:
    - { icon: "fa-stopwatch", title: "Tiempos tal cual", text: "Nada se ajusta por sede, condiciones o época. Un tiempo es el del resultado oficial." }
    - { icon: "fa-balance-scale", title: "Lo comparable, con lo comparable", text: "No se inventa ninguna valoración para que épocas distintas parezcan comparables cuando no lo son." }
    - { icon: "fa-search-plus", title: "Honesto con los huecos", text: "Donde el archivo es escaso o las fuentes no coinciden, la app lo dice en lugar de adivinar." }
  privacy:
    title: "Gratis y privada"
    items: ["Sin cuenta", "Sin anuncios", "Sin rastreo", "Tus favoritos se quedan en tu dispositivo"]

download:
  eyebrow: "Consigue Paddle Results"
  title: "Noventa años de regatas, estés donde estés."
  text: "Ábrela en tu navegador o llévatela en iPhone, iPad y Android. Gratis, sin cuenta y sin anuncios."
  footnote: "Un producto de QUKO · inteligencia de rendimiento para deportes de agua."
---
