---
title: MeteoQUKO stations map
description: Live water temperature from MeteoQUKO stations in reservoirs, on a map, with the last 24 hours of readings.
layout: stations_map
draft: false
translationKey: stations_map
eyebrow: MeteoQUKO network
heading: Water temperature, live from the reservoir.
text: MeteoQUKO stations measure the water temperature in reservoirs and report it every few minutes. Pick a station to see its latest reading and how the water has changed over the last 24 hours.
explore: See the stations
legend_title: How to read the map
legend_samples:
  ok: 18.40 °C
  stale: 17.90 °C · 3h
list_title: Stations
note: Readings come straight from the sensors and are published as they arrive, without manual review. Map tiles are loaded from OpenStreetMap.
noscript: The live map and readings need JavaScript. Please enable it to see the stations.
ui:
  map_label: Map of MeteoQUKO stations
  loading: Loading stations…
  error_title: Live data is unavailable right now
  error_text: We couldn't reach the stations service. We'll keep trying automatically, or you can try again now.
  retry: Try again
  empty_title: Stations are being installed
  empty_text: The first MeteoQUKO stations are being installed in reservoirs. Their live water temperature will appear here as soon as they start reporting.
  list_empty: No public stations yet.
  list_error: The station list will appear here once the data is available.
  map_unavailable: The map couldn't be loaded. The station list below still shows the latest readings.
  loaded: "Stations loaded: {count}."
  status_ok: Checked at {time} · refreshes every minute
  status_stale: Couldn't refresh. Showing data from {ago}.
  close: Close station details
  water_temperature: Water temperature
  updated: Updated {ago}
  never: No readings yet
  no_valid_reading: No recent valid reading
  rel_now: just now
  rel_minute: "{n} min ago"
  rel_hour: "{n} h ago"
  rel_day: "{n} d ago"
  state_ok: Live
  state_ok_text: A recent, valid reading.
  state_stale: Delayed
  state_stale_text: The station hasn't reported recently. This is its last reading.
  state_stale_invalid_text: No recent valid reading. The last reading the station sent wasn’t valid, and it hasn’t reported since.
  state_fault: Sensor fault
  state_fault_text: The last reading wasn't valid. The station may need maintenance.
  state_no_data: Awaiting data
  state_no_data_text: This station hasn't sent its first reading yet.
  approx_label: Approximate location
  approx_text: Placed automatically from the radio network, in the middle of the nearest reservoir or lake. The sensor may be elsewhere on the water.
  last_24h: Last 24 hours
  min: Min
  max: Max
  at: "{value} at {time}"
  chart_label: "Water temperature over the last 24 hours, from {min} to {max}"
  chart_loading: Loading the last 24 hours…
  chart_error: The history couldn't be loaded right now.
  chart_empty: No readings in the last 24 hours.
  chart_unavailable: No history available for this station.
---
