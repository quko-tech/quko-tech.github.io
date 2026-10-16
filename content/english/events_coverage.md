---
title: "Events Coverage"
description: "Live data graphics for international canoe sprint broadcasts: Kosoku sensors timed to 0.05 s, an AI director that decides what to show and when, and Almanac athlete facts on screen."
layout: "events_coverage"
image: "videos/web/media_broadcast_poster.jpg"
draft: false

hero:
  on_air: "On air"
  eyebrow: "Events Coverage · Live broadcast data"
  title_lines: ["Every stroke."]
  title_accent: "Live on air."
  text: "Real-time data graphics for international canoe sprint at the highest level. Kosoku sensors on every boat, an AI director choosing the story, and graphics on the world feed while the race is still being won."
  primary_label: "Bring it to your event"
  primary_link: "contact/"
  sound_label: "Watch with sound"
  fullscreen_label: "Full screen"
  video_hd: "videos/web/media_broadcast_1080.mp4"
  video: "videos/web/media_broadcast_720.mp4"
  video_mobile: "videos/web/media_broadcast_540.mp4"
  poster: "videos/web/media_broadcast_poster.webp"
  screen_live: "Live data"
  screen_title: "Men's C1 1000 m · Final A"
  video_alt: "A men's C1 1000 m final with QUKO live graphics: standings, athlete plates painted on the water, a pace-change alert and an overhead tactical board."
  ticker:
    - { label: "Lane 6", value: "21.3 km/h · Fastest", tone: "gold" }
    - { label: "Gap to 1st", value: "+0.02 s", tone: "salmon" }
    - { label: "Stroke rate", value: "153 spm", tone: "salmon" }
    - { label: "Pace change", value: "+0.6 km/h in 8 s", tone: "purple" }
    - { label: "Longest stroke", value: "4.98 m", tone: "salmon" }
    - { label: "Leader", value: "544 m to go", tone: "red" }
    - { label: "Lead for good", value: "864 m", tone: "gold" }
    - { label: "Pulling accel.", value: "10.9 m/s²", tone: "salmon" }

player:
  title: "QUKO live data graphics on a men's C1 1000 m final"
  close_label: "Close video"

specs:
  label: "Coverage in numbers"
  items:
    - { value: "0.05", from: 1, decimals: 2, unit: "s", label: "Timing precision" }
    - { value: "9", unit: "lanes", label: "Live, every second" }
    - { value: "150", unit: "boats", label: "Tracked at once" }
    - { value: "50", unit: "+", label: "Broadcast graphics" }
    - { value: "100", unit: "%", label: "Automatic" }

pipeline:
  eyebrow: "How it works"
  title: "From the water to the world feed, live."
  text: "Data leaves the boat and reaches the screen while the race is still on."
  steps:
    - icon: "fas fa-microchip"
      kicker: "On every boat"
      title: "Kosoku sensors"
      text: "Speed, stroke rate, force and balance for every crew, timed to 0.05 s. Up to 150 boats at once."
    - icon: "fas fa-network-wired"
      kicker: "In the production"
      title: "QUKO live engine"
      text: "Fuses sensors, official timing and the camera picture: it knows which shot is on air and which boat is which."
    - icon: "fas fa-brain"
      kicker: "Making the call"
      title: "AI director"
      text: "Picks the story that matters right now and the graphic that tells it best."
      input_icon: "fas fa-database"
      input: "Almanac adds records, head-to-heads and personal bests"
    - icon: "fas fa-broadcast-tower"
      kicker: "On air"
      title: "Your world feed"
      text: "A clean, transparent layer that drops straight into your production."

showcase:
  eyebrow: "The graphics, on air"
  title: "Data the audience can feel."
  text: "Frames from an international final with QUKO graphics on the picture: athlete plates painted on the water, live standings, pace alerts, race highlights and replay stories."
  rail_label: "Choose a graphic"
  prev_label: "Previous graphic"
  next_label: "Next graphic"
  groups:
    - { key: "live", label: "Live race" }
    - { key: "athletes", label: "Athletes" }
    - { key: "replays", label: "Replays" }
  items:
    - image: "lane-plates"
      group: "live"
      tag: "Live"
      title: "Athlete plates on the water"
      text: "Each athlete's name and live speed painted in their own lane, the fastest boat in gold, with standings, stroke rate and gap to the leader alongside."
      alt: "Side drone shot of a K1 200 m final with speed plates painted in every lane, standings and a longest-stroke card."
    - image: "data-columns"
      group: "live"
      tag: "Live"
      title: "Data columns ahead of the field"
      text: "The metric that matters right now, here stroke rate, stands up in front of every bow so viewers can compare the whole final at a glance."
      alt: "C1 1000 m final with stroke-rate columns ahead of each boat, speed plates and a pack-lens map."
    - image: "pace-change"
      group: "live"
      tag: "Live"
      title: "Pace-change alert"
      text: "The moment a paddler moves, the audience sees it: +0.6 km/h in 8 seconds, with the 20-second trace that proves it."
      alt: "Pace-change card showing a paddler accelerating by 0.6 km/h in 8 seconds, over a side drone shot."
    - image: "overhead-board"
      group: "live"
      tag: "Live"
      title: "Overhead tactical board"
      text: "From the drone straight above: rank and time gap behind every boat, lane cards with nations and a metre ruler counting down to the line."
      alt: "Overhead drone shot with rank and time gap behind every boat, lane cards and a distance ruler."
    - image: "highlights-balogh"
      group: "athletes"
      tag: "Post-race"
      title: "Race highlights"
      text: "Seconds after the line: top speed and where it came, average stroke rate, strongest pull and distance per stroke, with the race best flagged in gold."
      alt: "Race highlights card for a K1 200 m finalist: boat speed, stroke rate, pulling acceleration and distance per stroke."
    - image: "highlights-baptista"
      group: "athletes"
      tag: "Post-race"
      title: "Every finalist, their numbers"
      text: "Each athlete gets their own card, then a comparison with the winner. Here, the highest stroke rate of the race."
      alt: "Race highlights card for another K1 200 m finalist, with the highest stroke rate of the race highlighted."
    - image: "medallist-card"
      group: "athletes"
      tag: "Post-race"
      title: "The medallist's story"
      text: "The podium moment, with the data behind it: a 10.9 m/s² peak pull at 983 m on the way to bronze."
      alt: "Race highlights card for the bronze medallist of a C1 1000 m final."
    - image: "replay-fuksa"
      group: "replays"
      tag: "Replay"
      title: "How it was won"
      text: "The replay gets a headline written from the data, the lead taken for good at 864 m, and the gap traced along the whole course."
      alt: "Replay graphic with the headline 'took the lead for good at 864 m' and a chart of the gap between first and second."
    - image: "replay-arevalo"
      group: "replays"
      tag: "Replay"
      title: "A new story every replay"
      text: "Led all the way, by 0.08 s at the line. Every replay picks a fresh insight: closing speed, fastest 50 m, start reaction and more."
      alt: "Replay graphic showing the winner led all the way, with the gap between first and second along the course."


director:
  eyebrow: "The AI director"
  title: "An AI director that never misses a move."
  text: "Data alone doesn't make television. QUKO's AI follows the race and the pictures at the same time, decides which story to tell and when, and puts it on air on its own. Your operator can take control at any moment."
  points:
    - { icon: "fas fa-video", title: "Reads the shot", text: "Knows whether the picture is a side drone, an overhead, a follow car or a close-up, and only draws what that shot can carry." }
    - { icon: "fas fa-bullseye", title: "Finds the story", text: "Overtakes, duels inside 0.3 s, pace changes and personal bests are scored as they happen. The strongest one goes to air." }
    - { icon: "fas fa-stopwatch", title: "Times it to the pictures", text: "One card at a time, never over a paddler, never on screen for less than 2.5 s, and gone before the camera cuts." }
    - { icon: "fas fa-sliders-h", title: "Your operator stays in command", text: "Spotlight a lane, force a metric, call a head-to-head or switch any graphic on or off. Automatic by default, manual whenever you want." }
  console:
    title: "Decision log · C1 1000 m · Final A"
    auto_label: "Auto"
    manual_label: "Operator"
    shot_label: "Shot"
    lines:
      - { time: "−1:40", shot: "Wide", cue: "Pre-race · favourites in lanes 2 and 3", action: "Head-to-head lower third" }
      - { time: "0:08.0", shot: "Side drone", cue: "Field settled after the start", action: "Athlete plates + standings" }
      - { time: "1:40.0", shot: "Side drone", cue: "Metric of the phase: stroke rate", action: "Data columns ahead of the field" }
      - { time: "2:48.2", shot: "Side drone", cue: "Lane 9 · +0.6 km/h in 8 s", action: "Pace-change alert · 7.5 s" }
      - { time: "3:08.6", shot: "Overhead", cue: "Top two inside 0.02 s", action: "Gap to the leader behind every boat" }
      - { time: "3:18.9", shot: "Side drone", cue: "Operator calls the duel: lanes 2 and 4", action: "Duel card", operator: true }
      - { time: "3:35.0", shot: "Side drone", cue: "Finish zone · last 50 m", action: "Water cleared for the finish" }
      - { time: "Replay", shot: "Replay", cue: "Lead changed for good at 864 m", action: "“How it was won” story" }

almanac:
  eyebrow: "Almanac inside"
  title: "It knows every athlete on the start list."
  text: "QUKO coverage is connected to Almanac, the canoe and kayak results archive going back to 1933. Defending champions, head-to-head records, personal bests and “first since…” moments arrive on screen and in the commentary box, matched to the athlete in every lane."
  link_label: "Explore Almanac"
  link: "almanac/"
  stats:
    - { value: 46700, suffix: "+", label: "Athletes" }
    - { value: 43000, suffix: "+", label: "Races" }
    - { value: 380000, suffix: "+", label: "Ready-to-air facts" }
  card_title: "Start-list facts"
  card_race: "K1 Women 500 m · Final A"
  sample_note: "Illustrative output · fictional athletes"
  facts:
    - { kind: "Defending champion", lane: "4", name: "L. Martín", text: "Defending champion from 2025." }
    - { kind: "Head to head", lane: "3", name: "L. Weber", text: "Leads Giulia Rossi 4–1 in their previous meetings." }
    - { kind: "Personal best", lane: "5", name: "M. Taylor", text: "Second-fastest personal best in the field: 1:47.85." }
    - { kind: "First final", lane: "2", name: "A. Costa", text: "Reaches her first World Championship final." }
    - { kind: "Youngest", lane: "6", name: "E. Novak", text: "The youngest athlete in the final, at 23." }


workflow:
  eyebrow: "Your event, covered"
  title: "We bring the kit. You get the show."
  steps:
    - kicker: "Before the race"
      title: "Ready at the start line"
      items: ["Kosoku sensors fitted and synced with the official timing", "Start lists, venue and course loaded", "An Almanac briefing for every athlete in every final"]
    - kicker: "During the race"
      title: "Live on your world feed"
      items: ["Graphics delivered as a transparent layer to your production", "AI director on air, with an operator alongside", "Heats to finals, up to 150 boats tracked at once"]
    - kicker: "After the race"
      title: "The story keeps going"
      items: ["Replay stories and race highlights within seconds", "Race data for commentators, media and social channels", "Analysis for teams, athletes and federations"]

marketing_cta:
  eyebrow: "Events Coverage"
  title: "Give your regatta the broadcast it deserves."
  text: "Tell us about your event, your venue and your production. We'll show you what live QUKO data looks like on your pictures."
  primary_label: "Bring it to your event"
  primary_link: "contact/"
  secondary_label: "Discover Kosoku"
  secondary_link: "kosoku/"
---
