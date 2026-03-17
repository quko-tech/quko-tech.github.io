---
title: "QUKO Cloud"
description: "The future of sport technology"
bg_image: "images/cloud.png"
layout: "quko_cloud"
draft: false

########################### about service #############################
qukocloud:
  enable : true
  title : "A bridge between the latest state-of-the-art technologies and paddle sport"
  content : "QUKO Cloud revolutionizes paddle sports training by transforming complex sensor data into clear, actionable insights. Our intelligent platform combines cutting-edge cloud computing with sports science expertise, empowering coaches and athletes to optimize performance through data-driven analysis"
  image : "images/qukosim.png"

qukocloud_video:
  enable : true
  youtube_id: "HAdz6oQfJj0"

########################## featured service ############################
featured_service:
  enable : true
  service_item:
    # featured service item loop
    - name : "Cloud computing"
      icon : "fas fa-cloud"
      color : "primary"
      content : "Process high resolution sensor data in real time with the deployed cloud computing solutions"

    # featured service item loop
    - name : "Interactive results"
      icon : "fas fa-hand-point-up"
      color : "primary-darker"
      content : "Adapt the data visualization to your needs thanks to the interactive charts and renders"

    # featured service item loop
    - name : "Artificial Intelligence"
      icon : "fas fa-chart-line"
      color : "primary-dark"
      content : "First implementation of a LLM model to aid coaches and stuff interpret and analyse the gathered data"

qukocloud_video_2:
  enable : true
  youtube_id: "CuyHIUiBL-w"

############################# Pricing Section ###############################
pricing:
  enable: false #TODO: enable
  title: "Choose Your Kosoku Package"
  description: "Revolutionary training technology at kickstarter prices. Limited time early bird offers!"
  pricing_plans:
    - name: "Monthly subscription"
      plan_id: "basic"
      price: "TBD"
      #price: "95"
      currency: "€"
      #original_price: "€599"
      #badge: "CHEAPEST"
      description: "Ideal for trainig camps or short training periods"
      features:
        - "Unlimited number of uploads"
        - "Access to 3D simulations"
        - "AI Data analyst"
        - "Access to the full platform"
      button_text: "Pre-selling soon!"
      #button_text: "Pre-buy a unit"
      #button_link: "https://www.kickstarter.com/projects/pepassaco/169757071"
      featured: false

    - name: "Yearly subscription"
      plan_id: "pro"
      price: "TBD"
      #price: "1050"
      currency: "€"
      #original_price: "€1799"
      #badge: "BEST VALUE"
      description: "The best option to step up your trainings during the season"
      features:
        - "Unlimited number of uploads"
        - "Access to 3D simulations"
        - "AI Data analyst"
        - "Access to the full platform"
      button_text: "Pre-selling soon!"
      #button_text: "Pre-buy this bundle"
      #button_link: "https://www.kickstarter.com/projects/pepassaco/169757071"
      featured: true

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
  title : "QUKO Cloud is just different"
  service_item:
    # feature item loop
    - icon : fas fa-water #https://fontawesome.com/v5.15/icons
      name : Tailored for water sports
      content : "All the algorithms and processing techniques are specifically designed and optimised for paddle sports like rowing, canoeing and kayaking."

    # feature item loop
    - icon : fas fa-bolt #https://fontawesome.com/v5.15/icons
      name : State of the art engineering
      content : "Actively researching to apply the most nobel processing techniques to bring the highest accuracy and precision."

    # feature item loop
    - icon : fas fa-microscope #https://fontawesome.com/v5.15/icons
      name : Sports science focused
      content : "Finding the right balance between engineering and sports science, to show all the relevant metrics for an easy biomechanical interpretation"

    - icon : fas fa-dumbbell #https://fontawesome.com/v5.15/icons
      name : No knowledge required
      content : "No technical experience is needed to make the most out of QUKO Cloud: all data is visualized in ways coachs and athletes can easily understand."

    # feature item loop
    - icon : fas fa-laptop-code #https://fontawesome.com/v5.15/icons
      name : Active development
      content : "In QUKO, we like to listen to the feedback received from trainers and data analyst to update and improve our services with new maningful fatures."

    # feature item loop
    - icon : fas fa-microchip #https://fontawesome.com/v5.15/icons
      name : Kosoku compatible
      content : "Designed to make QUKO Cloud integrate seamlessly with the rest of the QUKO ecosystem."

    # feature item loop
    - icon : fas fa-key #https://fontawesome.com/v5.15/icons
      name : Data security
      content : "All data is stored in secure servers with regular backups, and no other user can have access unless specifically given."

    # feature item loop
    - icon : fas fa-rocket #https://fontawesome.com/v5.15/icons
      name : Easy and fast
      content : "\"Drag and drop\" functionality: upload the session file, hit continue and enjoy the results in just some seconds!"

############################# call to action #################################
cta:
  enable : true
  # call to action content comes from "_index.md"
---