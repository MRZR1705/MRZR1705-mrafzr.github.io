window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})


setInterval(function() {
  document.title = titleText[counter % titleText.length];
  counter++;
}, 2000);

// document.addEventListener("DOMContentLoaded", function() {
//     const sections = document.querySelectorAll('.lol');
//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//             }
//         });
//     }, { threshold: 0.3 });

//     sections.forEach(section => observer.observe(section));
// });

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.am');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
});


document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.loll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hide');
      } else {
        entry.target.classList.add('hide');
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.5 // Sensitivitas 10% dari elemen harus terlihat untuk animasi
  });
  
  // Mengamati semua elemen dengan kelas 'scroll-element'
  const elements = document.querySelectorAll('.lol');
  elements.forEach((el) => observer.observe(el));
  
  const myObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        entry.target.classList.remove('hide');
      } else {
        entry.target.classList.add('hide');
        entry.target.classList.remove('show');
      }
    });
  }, {
    threshold: 0.2 // Sensitivitas 10% dari elemen harus terlihat untuk animasi
  });
  
  // Mengamati semua elemen dengan kelas 'scroll-element'
  const myElements = document.querySelectorAll('.lolll');
  myElements.forEach((el) => myObserver.observe(el));

  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.lolll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => observer.observe(section));
});




document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.lollll');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
});




document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll('.lo');
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          }
      });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
});





// ggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg





let swiperCards = new Swiper('.card__content', {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    600:{
      slidesPerView: 2,
    },
    968:{
      slidesPerView: 3,
    }
  },

});