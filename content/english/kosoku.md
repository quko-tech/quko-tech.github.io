---
title: "Kosoku"
description: "From Japanese: \"Speed of Light\""
bg_image: "images/logo_koso.png"
layout: "kosoku"
draft: false

########################### about service #############################
kosoku:
  enable : true
  title : "Redefining high-level training in canoeing and kayaking"
  content : "At QUKO, we revolutionize elite sprint canoeing through cutting-edge data analytics and performance optimization technology.
  <br>Our mission is to democratize affordable and accessible technology at the elite level, bridging the gap between coaches, athletes, and data analysts to drive a paradigm shift towards technology-based training optimization."
  image : "images/koso_foto.jpg"

kosoku_video:
  enable : true
  youtube_id: "N_gSmXmxfF0"

########################## featured service ############################
featured_service:
  enable : true
  service_item:
    # featured service item loop
    - name : "Data logging"
      icon : "fas fa-microchip"
      color : "primary"
      content : "Advanced sensor technology capturing 200Hz sampling frequency with sub-centimeter position accuracy and comprehensive kinematic data"

    # featured service item loop
    - name : "Live data streaming"
      icon : "fas fa-satellite-dish"
      color : "primary-darker"
      content : "Real-time data transmission up to 150m range, tracking up to 9 devices simultaneously with live coaching feedback"

    # featured service item loop
    - name : "Garmin compatibility"
      icon : "fas fa-code"
      color : "primary-dark"
      content : "Seamless integration with Garmin Connect featuring custom data fields for real-time athlete feedback and deferred training analysis"

kosoku_video_2:
  enable : true
  youtube_id: "edw6svHVUdE"

############################# Pricing Section ###############################
pricing:
  enable: true
  title: "Choose Your Kosoku Package"
  description: "Revolutionary training technology at kickstarter prices. Limited time early bird offers!"
  pricing_plans:
    - name: "Single device"
      price: "849"
      currency: "€"
      #original_price: "€599"
      #badge: "CHEAPEST"
      description: "Perfect for individual athletes"
      features:
        - "Complete Kosoku device"
        - "Garmin Connect integration"
        - "Compatibility with QUKO Cloud"
        - "Live data streaming (requires additional hardware)"
        - "2-year warranty"
        - "Wireless charger"
      button_text: "Pre-selling soon!"
      #button_text: "Pre-buy a unit"
      #button_link: "https://www.kickstarter.com/projects/pepassaco/169757071"
      featured: true

    - name: "Give me Five!"
      price: "3990"
      currency: "€"
      #original_price: "€1799"
      #badge: "BEST VALUE"
      description: "Ideal for small teams, clubs and training centers"
      features:
        - "5x Kosoku devices"
        - "Garmin Connect integration"
        - "Compatibility with QUKO Cloud"
        - "Live data streaming (requires additional hardware)"
        - "2-year warranty"
        - "Wireless chargers"
        - "Free Transport Briefcase included"
      button_text: "Pre-selling soon!"
      #button_text: "Pre-buy this bundle"
      #button_link: "https://www.kickstarter.com/projects/pepassaco/169757071"
      featured: false

    - name: "Ten out of ten"
      price: "7490"
      currency: "€"
      #original_price: "€3499"
      #badge: "ULTIMATE"
      description: "For national teams and elite programs"
      features:
        - "10x Kosoku devices"
        - "10x 1-month QUKO Cloud subscriptions"
        - "Garmin Connect integration"
        - "Compatibility with QUKO Cloud"
        - "Live data streaming (requires additional hardware)"
        - "2-year warranty"
        - "Wireless chargers"
        - "Free Transport Briefcase included"
      button_text: "Pre-selling soon!"
      #button_text: "Pre-buy this bundle"
      #button_link: "https://www.kickstarter.com/projects/pepassaco/169757071"
      featured: false

############################# Kickstarter Section ###############################
kickstarter:
  enable: false
  title: "🚀 Preselling live on Kickstarter!"
  subtitle: "Join the revolution in paddle sports technology"
  logo: "images/kickstarter-logo.png"
  
  countdown:
    enable: true
    days: "28"
    hours: "15"
    minutes: "42"
    # Note: The JavaScript will calculate real countdown if you set campaign end date
  
  stats:
    - number: "€45K+"
      label: "Funded"
    - number: "150+"
      label: "Backers"
    - number: "78%"
      label: "Complete"
  
  primary_button:
    text: "Back on Kickstarter"
    link: "https://www.kickstarter.com/projects/pepassaco/169757071"
  
  secondary_button:
    text: "Watch Campaign Video"
    link: "#kosoku_video"

############################# Service ###############################

featured_service_2:
  enable : true
  title : "Why choose QUKO Kosoku?"
  service_item:
    # feature item loop
    - icon : fas fa-water #https://fontawesome.com/v5.15/icons
      name : Sport-specific design
      content : "Purpose-built for canoeing and kayaking with waterproof IP67 certificated housing and specialized algorithms for paddle sports analytics."

    # feature item loop
    - icon : fas fa-rocket #https://fontawesome.com/v5.15/icons
      name : Elite performance focus
      content : "Developed by a former CERN physicist and Spanish national-level athlete, using state-of-the-art propietary algorithms for outstanding precision and rigor."

    # feature item loop
    - icon : fas fa-chart-line #https://fontawesome.com/v5.15/icons
      name : Maximum precision at 100 Hz
      content : "Being able to gather high resolution data every 10 milliseconds allows us to perfectly characterise the movement of the vessel"

    - icon : fas fa-broadcast-tower #https://fontawesome.com/v5.15/icons
      name : Real-time Team Monitoring
      content : "Live tracking of up to 9 devices simultaneously with 150+ meter range, streaming kinematic data and biometrics directly to coaches' waterproof tablets."

    # feature item loop
    - icon : fas fa-cloud #https://fontawesome.com/v5.15/icons
      name : Cloud integration
      content : "Seamless connection to QUKO Cloud for advanced visualization, 3D analysis, AI-powered pattern recognition, and comprehensive performance comparisons."

    # feature item loop
    - icon : fas fa-battery-full #https://fontawesome.com/v5.15/icons
      name : Competition-ready
      content : "5-hour battery life, 10Hz double band GPS, 4 HR sensor compatibility and data streaming to 4 Garmin watches simultaneously."

    # feature item loop
    - icon : fas fa-shield-alt #https://fontawesome.com/v5.15/icons
      name : Data security
      content : "Fully encrypted internal storage and ciphered data transmission ensure your competitive data remains confidential during international competitions."

    # feature item loop
    - icon : fas fa-plug #https://fontawesome.com/v5.15/icons
      name : Plug-and-play simplicity
      content : "\"Plug and play\" functionality allows staff members with no technical experience to immediately access advanced performance analytics."

############################# call to action #################################
cta:
  enable : true
  # call to action content comes from "_index.md"
---