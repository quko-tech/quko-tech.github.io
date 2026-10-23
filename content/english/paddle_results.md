---
title: "Paddle Results"
description: "Paddle Results is QUKO’s free canoe and kayak results archive: every race since 1933, athlete careers, nation records and rankings. On the web, iPhone and Android."
layout: "paddle_results"
image: "images/paddle_results/og.png"
draft: false

apps:
  app_store: "https://apps.apple.com/app/paddle-results/id6803184329"
  app_store_alt: "Download on the App Store"
  google_play: "https://play.google.com/store/apps/details?id=com.quko.paddleresults"
  google_play_alt: "Get it on Google Play"
  web: "https://results.quko.es/"
  web_label: "Open Paddle Results"
  stores_label: "Also on"

hero:
  eyebrow: "Paddle Results · The global paddling archive"
  title_lines: ["Every start."]
  title_accent: "Every finish."
  text: "Canoe and kayak results from the Olympic final to the junior heat. Look up any race, follow an athlete’s whole career and see how nations and events have changed over ninety years of racing."
  note: "Free on the web, iPhone and Android. No account, no ads."
  # The cover shows the web app in a browser, with the phone app beside it.
  browser: { url: "results.quko.es/athletes/…", image: "images/paddle_results/web-athlete", alt: "Lisa Carrington’s career page on the Paddle Results website: 317 starts, 104 primary finals, 59 golds and a 75% medal rate" }
  chips:
    - { icon: "fa-globe", label: "On the web", value: "results.quko.es" }
    - { icon: "fa-mobile-alt", label: "On your phone", value: "iPhone and Android" }

stats:
  label: "The archive in numbers"
  items:
    - { value: 60000, suffix: "+", label: "Races, heat to final" }
    - { value: 65000, suffix: "+", label: "Athletes with a career on file" }
    - { value: 1300, suffix: "+", label: "Competitions" }
    - { value: 160, suffix: "+", label: "Nations" }
    - { value: 1933, label: "First result in the archive", plain: true }

disciplines:
  label: "Disciplines in the archive"
  items: ["Canoe sprint", "Slalom", "Marathon", "Paracanoe", "Kayak cross", "Dragon boat", "SUP"]

web:
  eyebrow: "On the web"
  title: "The whole archive, in your browser."
  text: "No download, no account. Open results.quko.es on any computer, tablet or phone and you get the full archive, with room for complete result tables, career charts and races side by side."
  link_label: "Open results.quko.es"
  tabs_label: "Pages of the web app"
  tabs:
    - { label: "Races", url: "results.quko.es/races/…", image: "images/paddle_results/web-race", alt: "The Paris 2024 Olympic K1 Women 500 m Final A on the Paddle Results website: the full finish order with lanes, times and gaps, led by Lisa Carrington in 1:47.360" }
    - { label: "Athletes", url: "results.quko.es/athletes/…", image: "images/paddle_results/web-athlete", alt: "Lisa Carrington’s career page: starts, primary finals, medals, medal rate and Olympic Games" }
    - { label: "Rankings", url: "results.quko.es/rankings", image: "images/paddle_results/web-rankings", alt: "Rankings on the web: each athlete’s current rating against their career peak, and the leaderboard led by Martin Fuksa" }
    - { label: "Nations", url: "results.quko.es/nations/NZL", image: "images/paddle_results/web-nation", alt: "New Zealand’s best finishing position and rounds reached by year, in senior sprint at World level" }
    - { label: "History lab", url: "results.quko.es/history", image: "images/paddle_results/web-history", alt: "The history lab tracing one event through time, with its winner times and medal leaders" }
  points:
    - { icon: "fa-bolt", title: "Live, without reloading", text: "Results land on the page as soon as they’re published." }
    - { icon: "fa-link", title: "Links that keep your view", text: "Share a link and the filters you chose travel with it." }
    - { icon: "fa-desktop", title: "Made for big screens", text: "Full result tables, career charts and races side by side." }
    - { icon: "fa-mouse-pointer", title: "Nothing to install", text: "No download and no account. Open it and start searching." }

tour:
  eyebrow: "Inside the app"
  title: "The paddling archive, made useful."
  text: "Four ways into ninety years of racing. Scroll through them."
  steps:
    - icon: "fa-search"
      kicker: "Start anywhere"
      title: "One search for everything"
      text: "Type an athlete, an event or a venue. Live competitions sit on the home screen, with what’s coming up next and the latest official results."
      points: ["Live and upcoming competitions", "Athletes, races and venues in one box"]
      image: "images/paddle_results/screen-home.webp"
      alt: "Paddle Results home screen: “Every start. Every finish.” with a search box for athletes, events and venues"
    - icon: "fa-flag-checkered"
      kicker: "Races and competitions"
      title: "Every heat, every final"
      text: "Full finish order with times, gaps and lanes. Start lists before the gun, and the event’s progression, so you can follow a crew from heat to semifinal to final."
      points: ["Start lists and results, side by side", "Live results without reloading"]
      image: "images/paddle_results/screen-race.webp"
      alt: "Event progression and finish order for a K1 Women 500 m race, led by Lisa Carrington"
    - icon: "fa-id-card"
      kicker: "Athlete profiles"
      title: "A whole career on one page"
      text: "Starts, finals reached, medals and medal rate, Olympic appearances and personal bests for each boat and distance. Plus the events they race most and the rivals they keep meeting."
      points: ["Personal bests by boat and distance", "Greatest rivals and frequent teammates"]
      image: "images/paddle_results/screen-athlete.webp"
      alt: "Lisa Carrington’s profile: 296 starts, 94 primary finals, 57 golds and a 78% medal rate"
    - icon: "fa-history"
      kicker: "History lab and compare"
      title: "Trace an event through time"
      text: "Winning times, participation and podiums, season by season. Put two to four races side by side, save your favourites and share a link to exactly what you’re looking at."
      points: ["Winner time by race, since the first edition", "Compare up to four races"]
      image: "images/paddle_results/screen-history.webp"
      alt: "Winner time by race chart and the medal leaders for an event"

# Moved from the Almanac page: the archive on tablet and phone.
screens:
  eyebrow: "Built on the Paddle Results archive"
  title: "93 years of racing. One archive."
  text: "The same archive powers the app on your phone and Almanac, QUKO’s data service for broadcasters. If it’s in the app, a commentator can say it on air."
  link_label: "Open Paddle Results"
  link: "https://results.quko.es/"
  secondary_label: "Discover Almanac"
  secondary_link: "almanac/"
  main: { image: "images/almanac/tablet-race-final.webp", alt: "Paddle Results showing the K1 Women 500 m final at the Paris 2024 Olympic Games, with lanes, times and gaps" }
  side:
    - { image: "images/almanac/phone-athlete.webp", alt: "Lisa Carrington’s athlete profile in Paddle Results: 296 starts, 94 primary finals, 57 golds" }
    - { image: "images/almanac/phone-winner-times.webp", alt: "Winner time by race chart for an event, from 2001 to 2026" }
  strip:
    - { image: "images/almanac/tablet-medal-leaders.webp", alt: "Medal leaders and best winner time by year for an event" }
    - { image: "images/almanac/tablet-nation.webp", alt: "A nation’s best finishing position and medals by year" }
    - { image: "images/almanac/tablet-athlete.webp", alt: "Athlete profile with medal rate, Olympic Games and the events they race" }
    - { image: "images/almanac/tablet-rankings.webp", alt: "Rankings with biggest movers and current rating against career peak" }

principles:
  eyebrow: "Built on facts"
  title: "Times as recorded. Nothing invented."
  text: "Paddle Results reports what happened on the water and is honest about what it doesn’t know."
  items:
    - { icon: "fa-stopwatch", title: "Times as recorded", text: "Nothing is adjusted for venue, conditions or era. A time is the time on the official result." }
    - { icon: "fa-balance-scale", title: "Like with like", text: "No rating is invented to make different eras look comparable when they aren’t." }
    - { icon: "fa-search-plus", title: "Honest about gaps", text: "Where the archive is thin or sources disagree, the app says so rather than guessing." }
  privacy:
    title: "Free and private"
    items: ["No account", "No ads", "No tracking", "Favourites stay on your device"]

download:
  eyebrow: "Get Paddle Results"
  title: "Ninety years of racing, wherever you are."
  text: "Open it in your browser, or take it with you on iPhone, iPad and Android. Free, with no account and no ads."
  footnote: "A QUKO product · performance intelligence for water sports."
---
