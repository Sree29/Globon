(function () {
  "use strict";

  // 1. WOW.js scroll animations
  if (typeof WOW !== 'undefined') {
    new WOW().init();
  }

  // 2. Sticky Header
  window.addEventListener('scroll', function () {
    const header = document.getElementById('header-sticky');
    if (header) {
      if (window.scrollY > 200) {
        header.classList.add('tp-header-sticky');
      } else {
        header.classList.remove('tp-header-sticky');
      }
    }
  });

  // 3. Search Popup toggle
  const searchOpenBtns = document.querySelectorAll('.search-open-btn');
  const searchCloseBtn = document.querySelector('.search-close-btn');
  const searchArea = document.querySelector('.search-area');
  const searchOverlay = document.querySelector('.search-overlay');

  if (searchArea && searchOverlay) {
    searchOpenBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        searchArea.classList.add('search-opened');
        searchOverlay.classList.add('opened');
      });
    });

    const closeSearch = function (e) {
      if (e) e.preventDefault();
      searchArea.classList.remove('search-opened');
      searchOverlay.classList.remove('opened');
    };

    if (searchCloseBtn) searchCloseBtn.addEventListener('click', closeSearch);
    searchOverlay.addEventListener('click', closeSearch);
  }

  // 4. Offcanvas Mobile sidebar panel
  const offcanvasOpenBtns = document.querySelectorAll('.offcanvas-open-btn');
  const offcanvasCloseBtn = document.querySelector('.offcanvas-close-btn');
  const offcanvasArea = document.querySelector('.offcanvas__area');
  const bodyOverlay = document.querySelector('.body-overlay');

  if (offcanvasArea && bodyOverlay) {
    offcanvasOpenBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        offcanvasArea.classList.add('offcanvas-opened');
        bodyOverlay.classList.add('opened');
      });
    });

    const closeOffcanvas = function (e) {
      if (e) e.preventDefault();
      offcanvasArea.classList.remove('offcanvas-opened');
      bodyOverlay.classList.remove('opened');
    };

    if (offcanvasCloseBtn) offcanvasCloseBtn.addEventListener('click', closeOffcanvas);
    bodyOverlay.addEventListener('click', closeOffcanvas);
  }

  // 5. Mobile Submenu Dropdowns (Toggle Accordion)
  const dropdownToggleBtns = document.querySelectorAll('.tp-main-menu-mobile .dropdown-toggle-btn');
  dropdownToggleBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      const parentLi = this.closest('li');
      if (parentLi) {
        const submenu = parentLi.querySelector('.submenu, .tp-submenu');
        if (submenu) {
          const isHidden = window.getComputedStyle(submenu).display === 'none';
          submenu.style.display = isHidden ? 'block' : 'none';
          this.classList.toggle('dropdown-opened');
          const icon = this.querySelector('i');
          if (icon) {
            if (isHidden) {
              icon.className = 'fa-regular fa-angle-down';
            } else {
              icon.className = 'fa-regular fa-angle-right';
            }
          }
        }
      }
    });
  });

  // 6. Swiper Sliders Initialization
  if (typeof Swiper !== 'undefined') {
    // Hero Slider (Home 1)
    if (document.querySelector('.tp-hero-active')) {
      new Swiper('.tp-hero-active', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        effect: 'fade',
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.hero-button-next-1',
          prevEl: '.hero-button-prev-1',
        },
        pagination: {
          el: '.tp-hero-pagination',
          clickable: true,
        },
      });
    }

    // Services Slider
    if (document.querySelector('.tp-service-active')) {
      new Swiper('.tp-service-active', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.service-button-next-1',
          prevEl: '.service-button-prev-1',
        },
        breakpoints: {
          1200: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 }
        }
      });
    }

    // Testimonial 1 Slider
    if (document.querySelector('.tp-testimonial-active')) {
      new Swiper('.tp-testimonial-active', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.testimonial-button-next-1',
          prevEl: '.testimonial-button-prev-1',
        },
        breakpoints: {
          992: { slidesPerView: 2 },
          0: { slidesPerView: 1 }
        }
      });
    }

    // Testimonial 2 Slider
    if (document.querySelector('.tp-testimonial-2-active')) {
      new Swiper('.tp-testimonial-2-active', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.testimonial-button-next-1',
          prevEl: '.testimonial-button-prev-1',
        },
        breakpoints: {
          992: { slidesPerView: 2 },
          0: { slidesPerView: 1 }
        }
      });
    }

    // Testimonial 3 Slider
    if (document.querySelector('.tp-testimonial-3-active')) {
      new Swiper('.tp-testimonial-3-active', {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        breakpoints: {
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 }
        }
      });
    }

    // Blog Post Slider
    if (document.querySelector('.tp-blog-post-active')) {
      new Swiper('.tp-blog-post-active', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '.tp-blog-next-1',
          prevEl: '.tp-blog-prev-1',
        },
      });
    }
  }

  // 7. Video Popup Modal (Vanilla JS)
  const videoPopupBtns = document.querySelectorAll('.popup-video');
  videoPopupBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const videoId = this.getAttribute('data-video-id') || 'bgMEvrd2E';

      // Create modal overlay
      const overlay = document.createElement('div');
      overlay.className = 'custom-video-modal-overlay';
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.85)';
      overlay.style.zIndex = '99999';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';

      // Close button
      const closeBtn = document.createElement('button');
      closeBtn.innerHTML = '&times;';
      closeBtn.style.position = 'absolute';
      closeBtn.style.top = '20px';
      closeBtn.style.right = '20px';
      closeBtn.style.fontSize = '40px';
      closeBtn.style.color = '#fff';
      closeBtn.style.border = 'none';
      closeBtn.style.background = 'none';
      closeBtn.style.cursor = 'pointer';

      // Iframe wrapper
      const wrapper = document.createElement('div');
      wrapper.style.width = '80%';
      wrapper.style.maxWidth = '800px';
      wrapper.style.position = 'relative';
      wrapper.style.paddingBottom = '45%'; // 16:9 aspect ratio
      wrapper.style.height = '0';

      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
      iframe.style.position = 'absolute';
      iframe.style.top = '0';
      iframe.style.left = '0';
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = '0';
      iframe.setAttribute('allow', 'autoplay; encrypted-media');
      iframe.setAttribute('allowfullscreen', 'true');

      wrapper.appendChild(iframe);
      overlay.appendChild(closeBtn);
      overlay.appendChild(wrapper);
      document.body.appendChild(overlay);

      const removeModal = () => {
        document.body.removeChild(overlay);
      };

      closeBtn.addEventListener('click', removeModal);
      overlay.addEventListener('click', function (evt) {
        if (evt.target === overlay) {
          removeModal();
        }
      });
    });
  });

  // 8. Stat Counters Animation
  const counters = document.querySelectorAll('.counter-value');
  const startCounter = (el) => {
    const target = parseInt(el.getAttribute('data-target') || '0');
    if (target === 0) return;

    let count = 0;
    const duration = 1500; // ms
    const interval = 30; // ms
    const step = Math.ceil(target / (duration / interval));

    const timer = setInterval(() => {
      count += step;
      if (count >= target) {
        el.innerText = target;
        clearInterval(timer);
      } else {
        el.innerText = count;
      }
    }, interval);
  };

  if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
          entry.target.classList.add('counted');
          startCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
  } else {
    counters.forEach(counter => startCounter(counter));
  }

})();
