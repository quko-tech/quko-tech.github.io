---
title: Mapa de estaciones MeteoQUKO
description: Temperatura del agua en directo de las estaciones MeteoQUKO en embalses, en un mapa, con las lecturas de las últimas 24 horas.
layout: stations_map
draft: false
translationKey: stations_map
eyebrow: Red MeteoQUKO
heading: La temperatura del agua, en directo desde el embalse.
text: Las estaciones MeteoQUKO miden la temperatura del agua en embalses y la envían cada pocos minutos. Elige una estación para ver su última lectura y cómo ha cambiado el agua en las últimas 24 horas.
explore: Ver las estaciones
legend_title: Cómo leer el mapa
legend_samples:
  ok: 18,40 °C
  stale: 17,90 °C · 3h
list_title: Estaciones
note: Las lecturas llegan directamente de los sensores y se publican según se reciben, sin revisión manual. Las teselas del mapa se cargan desde OpenStreetMap.
noscript: El mapa y las lecturas en directo necesitan JavaScript. Actívalo para ver las estaciones.
ui:
  map_label: Mapa de las estaciones MeteoQUKO
  loading: Cargando estaciones…
  error_title: Los datos en directo no están disponibles ahora mismo
  error_text: No hemos podido conectar con el servicio de estaciones. Seguiremos intentándolo automáticamente, o puedes volver a intentarlo ahora.
  retry: Reintentar
  empty_title: Estamos instalando las estaciones
  empty_text: Las primeras estaciones MeteoQUKO se están instalando en embalses. Su temperatura del agua aparecerá aquí en cuanto empiecen a enviar datos.
  list_empty: Todavía no hay estaciones públicas.
  list_error: La lista de estaciones aparecerá aquí en cuanto los datos estén disponibles.
  map_unavailable: No se ha podido cargar el mapa. La lista de estaciones sigue mostrando las últimas lecturas.
  loaded: "Estaciones cargadas: {count}."
  status_ok: Comprobado a las {time} · se actualiza cada minuto
  status_stale: No se ha podido actualizar. Datos de {ago}.
  close: Cerrar los detalles de la estación
  water_temperature: Temperatura del agua
  updated: Actualizado {ago}
  never: Sin lecturas todavía
  no_valid_reading: Sin lectura válida reciente
  rel_now: ahora
  rel_minute: "hace {n} min"
  rel_hour: "hace {n} h"
  rel_day: "hace {n} d"
  state_ok: En directo
  state_ok_text: Lectura reciente y válida.
  state_stale: Con retraso
  state_stale_text: La estación no ha enviado datos recientemente. Esta es su última lectura.
  state_stale_invalid_text: Sin lectura válida reciente. La última lectura que envió la estación no era válida y no ha vuelto a enviar datos.
  state_fault: Fallo del sensor
  state_fault_text: La última lectura no es válida. Puede que la estación necesite mantenimiento.
  state_no_data: Esperando datos
  state_no_data_text: Esta estación todavía no ha enviado su primera lectura.
  approx_label: Ubicación aproximada
  approx_text: Situada automáticamente a partir de la red de radio, en el centro del embalse o lago más cercano. El sensor puede estar en otro punto del agua.
  last_24h: Últimas 24 horas
  min: Mín.
  max: Máx.
  at: "{value} a las {time}"
  chart_label: "Temperatura del agua en las últimas 24 horas, entre {min} y {max}"
  chart_loading: Cargando las últimas 24 horas…
  chart_error: No se ha podido cargar el historial ahora mismo.
  chart_empty: Sin lecturas en las últimas 24 horas.
  chart_unavailable: No hay historial disponible para esta estación.
---
