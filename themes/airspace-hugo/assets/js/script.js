// Passive event listeners
jQuery.event.special.touchstart = {
  setup: function (_, ns, handle) {
    'use strict';
    this.addEventListener('touchstart', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};
jQuery.event.special.touchmove = {
  setup: function (_, ns, handle) {
    'use strict';
    this.addEventListener('touchmove', handle, {
      passive: !ns.includes('noPreventDefault')
    });
  }
};

// Preloader js
$(window).on('load', function () {
  'use strict';
  $('.preloader').fadeOut(0);
});

$(document).ready(function () {
  'use strict';

  // ============================================================
  // SCROLL REVEAL - IntersectionObserver based
  // ============================================================
  var revealElements = document.querySelectorAll('[data-reveal]');
  if (revealElements.length && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var delay = el.getAttribute('data-reveal-delay') || 0;
          setTimeout(function () {
            el.classList.add('revealed');
          }, parseInt(delay));
          revealObserver.unobserve(el);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: just show everything
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  }

  // ============================================================
  // PARALLAX SUBTLE FLOAT on scroll
  // ============================================================
  var floatElements = document.querySelectorAll('[data-float]');
  if (floatElements.length) {
    var lastScrollY = window.scrollY;
    var ticking = false;

    function updateFloat() {
      var scrollY = window.scrollY;
      floatElements.forEach(function (el) {
        var speed = parseFloat(el.getAttribute('data-float')) || 0.05;
        var rect = el.getBoundingClientRect();
        var center = rect.top + rect.height / 2;
        var viewCenter = window.innerHeight / 2;
        var offset = (center - viewCenter) * speed;
        el.style.transform = 'translateY(' + offset + 'px)';
      });
      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) {
        requestAnimationFrame(updateFloat);
        ticking = true;
      }
    }, { passive: true });
  }

  // ============================================================
  // TILT EFFECT for hero section on mouse move
  // ============================================================
  var slider = document.querySelector('.slider');
  if (slider && window.innerWidth > 992) {
    slider.addEventListener('mousemove', function (e) {
      var rect = slider.getBoundingClientRect();
      var x = (e.clientX - rect.left) / rect.width - 0.5;
      var y = (e.clientY - rect.top) / rect.height - 0.5;
      var block = slider.querySelector('.block');
      if (block) {
        block.style.transform = 'translate(' + (x * 8) + 'px, ' + (y * 5) + 'px)';
      }
    });
    slider.addEventListener('mouseleave', function () {
      var block = slider.querySelector('.block');
      if (block) {
        block.style.transform = 'translate(0, 0)';
        block.style.transition = 'transform 0.5s ease';
        setTimeout(function () {
          block.style.transition = '';
        }, 500);
      }
    });
  }

  // ============================================================
  // NAVBAR SHRINK on scroll
  // ============================================================
  var nav = document.querySelector('.navigation');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 80) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    }, { passive: true });
  }

  // ============================================================
  // MAGNETIC BUTTON hover effect (CTA buttons)
  // ============================================================
  document.querySelectorAll('.btn-main').forEach(function (btn) {
    if (window.innerWidth <= 992) return;
    btn.addEventListener('mousemove', function (e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = 'translate(' + (x * 0.15) + 'px, ' + (y * 0.15) + 'px)';
    });
    btn.addEventListener('mouseleave', function () {
      btn.style.transform = '';
    });
  });

  // ============================================================
  // EXISTING FUNCTIONALITY
  // ============================================================

  // Shuffle js filter and masonry
  var containerEl = document.querySelector('.shuffle-wrapper');
  if (containerEl) {
    var Shuffle = window.Shuffle;
    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
      itemSelector: '.shuffle-item',
      buffer: 1
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
      var input = evt.currentTarget;
      if (input.checked) {
        myShuffle.filter(input.value);
      }
    });
  }

  $('.portfolio-single-slider').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000

  });

  $('.clients-logo').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.testimonial-slider').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  //  Count Up (improved: only fire once)
  var countFired = false;
  function counter() {
    if (countFired) return;
    var oTop;
    if ($('.count').length !== 0) {
      oTop = $('.count').offset().top - window.innerHeight;
    }
    if ($(window).scrollTop() > oTop) {
      countFired = true;
      $('.count').each(function () {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum).toLocaleString());
          },
          complete: function () {
            $this.text(parseInt(this.countNum).toLocaleString());
          }
        });
      });
    }
  }
  $(window).on('scroll', function () {
    counter();
  });

  // Turn cloaked e-mail addresses into clickable mailto links
  let emailSpans = document.getElementsByClassName("cloaked-e-mail");

  for (let emailSpan of emailSpans) {
    let emailLink = document.createElement("a");
    let emailAddress = emailSpan.attributes.getNamedItem("data-user").value.split('').reverse().join('') + "@" + emailSpan.attributes.getNamedItem("data-domain").value.split('').reverse().join('');
    emailLink.href = "mailto:" + emailAddress;
    emailLink.innerText = emailAddress;
    emailSpan.parentElement.insertBefore(emailLink, emailSpan);
    emailSpan.parentElement.removeChild(emailSpan)
  }

	// map initialize
	$(map);
});
