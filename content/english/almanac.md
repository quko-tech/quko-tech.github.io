---
title: "Almanac"
description: "Quko Almanac turns canoe and kayak results since 1933 into ready-to-air facts for broadcasters, commentators and media: by API or inside your AI assistant."
layout: "almanac"
image: "images/almanac/tablet-race-final.webp"
draft: false

hero:
  eyebrow: "Quko Almanac · Sports media data"
  title_lines: ["Every race", "has a story."]
  title_accent: "Almanac tells it."
  text: "Defending champions, head-to-heads, personal bests and the “first since…” moments that make a broadcast. Almanac turns the canoe and kayak archive into facts your commentators can read on air: through an API, or right inside your AI assistant."
  primary_label: "Request access"
  primary_link: "contact/"
  secondary_label: "See it in action"
  secondary_link: "#briefing"

# The hero card plays an Almanac-style race briefing with fictional athletes.
briefing:
  live: "Briefing"
  race: "K1 Women 500 m · Final A"
  competition: "World Championships"
  sample_note: "Illustrative Almanac output · fictional athletes"
  lane_label: "Lane"
  pb_label: "PB"
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
    - { kind: "Defending champion", lanes: "4", text: "Lucía Martín is the defending champion from 2025." }
    - { kind: "Head to head", lanes: "3", text: "Lena Weber leads Giulia Rossi 4–1 in their previous meetings." }
    - { kind: "Personal best", lanes: "5", text: "Mia Taylor has the second-fastest personal best in the field: 1:47,85." }
    - { kind: "First final", lanes: "2", text: "Ana Costa reaches her first World Championship final." }
    - { kind: "Youngest", lanes: "6", text: "Eva Novak is the youngest in the field, at 23." }

stats:
  - { value: 65000, suffix: "+", label: "Athletes with a career on file" }
  - { value: 60000, suffix: "+", label: "Races, heat to final" }
  - { value: 1300, suffix: "+", label: "Competitions" }
  - { value: 160, suffix: "+", label: "Nations" }
  - { value: 1933, label: "First result in the archive", plain: true }
  - { value: 1000000, display: "1M", suffix: "+", label: "Pre-computed facts" }

ticker:
  label: "Almanac fact lines"
  items:
    - { kind: "Result", text: "Lucía Martín wins in 1:47,64, 0,27 s ahead of Taylor." }
    - { kind: "First since", text: "Spain’s first gold in this event at World Championships." }
    - { kind: "Personal best", text: "Eva Novak sets a personal best: 1:48,72 (previous best 1:48,90)." }
    - { kind: "Head to head", text: "Lucía Martín has beaten Lena Weber in 5 of their 6 head-to-head races." }
    - { kind: "Championship best", text: "Lucía Martín sets a new World Championship best in this event: 1:47,64." }
    - { kind: "Defending champion", text: "Lena Weber is the defending champion from 2023." }

pipeline:
  eyebrow: "How it works"
  title: "From the archive to the commentary box"
  text: "Almanac does the research your team would otherwise do between races, and hands it over in a form you can put straight on screen or on air."
  steps:
    - icon: "fa-database"
      title: "The archive"
      text: "Every round, lane and crew since 1933, from World Cups to the Olympics."
    - icon: "fa-bolt"
      title: "The facts engine"
      text: "Records, streaks, rivalries and milestones, computed ahead and ranked by importance."
    - icon: "fa-microphone"
      title: "On air"
      text: "Structured data plus a ready-to-read line, each with its source."

race:
  id: "briefing"
  eyebrow: "Race briefings"
  title: "Before the gun. After the line."
  text: "Almanac briefs any race lane by lane: bests, medals, head-to-heads and the defending champion. When the result lands, the storylines are waiting."
  tabs:
    - id: "before"
      label: "Before the race"
      facts:
        - { kind: "Defending champion", text: "Lucía Martín is the defending champion from 2025." }
        - { kind: "Head to head", text: "Lucía Martín leads Giulia Rossi 6–0 in their previous meetings." }
        - { kind: "Lane", text: "Lane 5: Mia Taylor (NZL), personal best 1:47,85." }
        - { kind: "Field", text: "3 athletes in this field have won medals at World Championships." }
    - id: "after"
      label: "After the finish"
      facts:
        - { kind: "Winner", text: "Lucía Martín wins in 1:47,64, 0,27 s ahead of Taylor." }
        - { kind: "Championship best", text: "Lucía Martín sets a new championship best: 1:47,64." }
        - { kind: "First since", text: "Spain’s first world title in this event." }
        - { kind: "Personal best", text: "Lena Weber sets a personal best: 1:48,33 (previous best 1:48,46)." }
  sample_note: "Illustrative Almanac output. Athletes are fictional."
  points:
    - "Upcoming races are prepared in advance, so briefings are instant"
    - "Every fact carries its source; provisional results are flagged"
    - "Archive bests are never called world records"

access:
  eyebrow: "Two ways in"
  title: "Plug it into your graphics. Or just ask."
  text: "Use the REST API to feed your on-screen graphics, your app or your newsroom tools. Or connect Almanac to Claude, ChatGPT or any MCP-ready assistant and ask it questions in plain language."
  api:
    label: "REST API"
    title: "Structured facts for your graphics and apps"
    text: "Clean JSON with IDs, times, medals, sources and an importance score, plus the sentence to read out."
    request: "/v1/head-to-head?a=…&b=…&lang=en"
    response_text: "Lucía Martín has beaten Lena Weber in 5 of their 6 head-to-head races."
  ai:
    label: "AI assistants · MCP"
    title: "Your producer’s new research desk"
    text: "Connect once with secure sign-in. Your assistant gets Almanac’s tools and answers from the archive, not from memory."
    question: "Who’s the defending champion in the women’s K1 500 final, and how does the field stack up head to head?"
    answer: "Lucía Martín (lane 4) defends her 2025 title. She leads Lena Weber 5–1 and Giulia Rossi 6–0 head to head."
    works_with: "Works with Claude, ChatGPT and other MCP clients"
    window_title: "AI assistant"
    connected: "Almanac connected"
    suggestions:
      - "When did Spain last win Olympic gold in C2?"
      - "Most continental K1 titles by women?"
    placeholder: "Ask about any race, athlete or nation…"

features:
  eyebrow: "What it knows"
  title: "Every question a commentator asks"
  items:
    - { icon: "fa-id-card", title: "Athlete cards", text: "Career span, first medal and title with age, and personal and season bests." }
    - { icon: "fa-medal", title: "Medals at any scope", text: "Olympics, World Championships, continental championships or World Cups, by year, event, boat or age group." }
    - { icon: "fa-people-arrows", title: "Head to head and rivals", text: "Full record, finals-only record, the last meeting and the most frequent opponents." }
    - { icon: "fa-landmark", title: "Event history", text: "Champions and podiums by edition, and the most titles by athlete and nation." }
    - { icon: "fa-flag", title: "Nation milestones", text: "Medal tables and “first gold since…” answered in a single call." }
    - { icon: "fa-list-ol", title: "Leaderboards", text: "Rank by medals, golds, titles, finals or starts with any filter: “most continental K1 titles by women”." }

languages:
  eyebrow: "Bilingual from day one"
  title: "Ready to read, in English and Spanish"
  text: "Every line is written for the language of your broadcast, with natural phrasing and the right event names. Switch and see."
  options:
    - code: "EN"
      lines:
        - "Lucía Martín has beaten Lena Weber in 5 of their 6 head-to-head races."
        - "The fastest time for this event at World Championships is 1:47,64, by Lucía Martín (2025)."
    - code: "ES"
      lines:
        - "Lucía Martín ha superado a Lena Weber en 5 de sus 6 enfrentamientos."
        - "El mejor tiempo en esta prueba en Campeonatos del Mundo es 1:47,64, de Lucía Martín (2025)."

audience:
  eyebrow: "Who it’s for"
  title: "Made for the people telling the story"
  items:
    - { icon: "fa-tv", title: "Broadcasters", text: "Feed lower thirds and lane graphics with facts that update with the start list." }
    - { icon: "fa-microphone-alt", title: "Commentators", text: "Walk into the booth with every storyline already prepared, race by race." }
    - { icon: "fa-newspaper", title: "Digital media and apps", text: "Power previews, live blogs and results pages without building a stats desk." }
    - { icon: "fa-trophy", title: "Federations and organisers", text: "Give your own channels the history and context your events deserve." }

---
