// Start header
let ul = document.querySelector(".header ul");
let a = document.querySelectorAll(".header ul li a");
let searchForm = document.querySelector(".header .search-form");
let loginForm = document.querySelector(".header .login-form");
let contactInfo = document.querySelector(".contact-info");

a.forEach((el) => {
  el.onclick = () => {
    a.forEach((ele) => {
      ele.classList.remove("active");
    });
    el.classList.add("active");
  };
});

document.querySelector("#menu-btn").onclick = () => {
  ul.classList.toggle("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  loginForm.classList.remove("active");
  ul.classList.remove("active");
};

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  searchForm.classList.remove("active");
  ul.classList.remove("active");
};

document.querySelector("#info-btn").onclick = () => {
  contactInfo.classList.add("active");
  ul.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#close-contact").onclick = () => {
  contactInfo.classList.remove("active");
};

window.onscroll = () => {
  ul.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
  contactInfo.classList.remove("active");
};
// End Header

let homeSwiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let reviewsSwiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

let blogsSwiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

let logoSwiper = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});

lightGallery(document.querySelector(".projects .box-container"));
