let navToggle = document.querySelector(".navToggle");
let navBar = document.querySelector(".navBar");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navBar.classList.toggle("active");
});
// click navBar when click in navItem
let navList = document.querySelectorAll(".navList li");
navList.forEach(e => {
  e.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
});

// header
let header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("active", scrollY > 10);
});

// ScrollReveal
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 100,
});
ScrollReveal().reveal(".home_info  ", {
  origin: "left",
  duration: 1000,
  distance: "50px",
  easing: "ease-out",
});
ScrollReveal().reveal(".home_img span ", {
  origin: "top",
  duration: 1000,
  distance: "100px",
  easing: "ease-out",
});
ScrollReveal().reveal(".home_img img ", {
  origin: "right",
  duration: 1000,
  distance: "50px",
  easing: "ease-out",
});
ScrollReveal().reveal(".about_info ", {
  origin: "top",
  duration: 1000,
  distance: "100px",
  easing: "ease-out",
});
ScrollReveal().reveal(".about_img ", {
  origin: "bottom",
  duration: 1000,
  distance: "100px",
  easing: "ease-out",
});
// service
ScrollReveal().reveal(".allBoxService .box:nth-child(1) ", {
  origin: "bottom",
  duration: 1000,
  distance: "150px",
  easing: "ease-out",
});
ScrollReveal().reveal(".allBoxService .box:nth-child(2) ", {
  origin: "bottom",
  duration: 1300,
  distance: "150px",
  easing: "ease-out",
});
ScrollReveal().reveal(".allBoxService .box:nth-child(3) ", {
  origin: "bottom",
  duration: 1600,
  distance: "150px",
  easing: "ease-out",
});
ScrollReveal().reveal(".allBoxService .box:nth-child(4) ", {
  origin: "bottom",
  duration: 1900,
  distance: "150px",
  easing: "ease-out",
});
// pricing
ScrollReveal().reveal(".allBoxPricing .box:nth-child(1) ", {
  origin: "left",
  duration: 1000,
  distance: "50px",
  easing: "ease-out",
});
ScrollReveal().reveal(".allBoxPricing .box:nth-child(2) ", {
  origin: "bottom",
  duration: 1000,
  distance: "50px",
  easing: "ease-out",
});
ScrollReveal().reveal(".allBoxPricing .box:nth-child(3) ", {
  origin: "right",
  duration: 1000,
  distance: "50px",
  easing: "ease-out",
});
// team
ScrollReveal().reveal(".allBoxTeam .box:nth-child(1) ", {
  origin: "left",
  duration: 1000,
  distance: "50px",
  easing: "ease-out",
});
ScrollReveal().reveal(".allBoxTeam .box:nth-child(2) ", {
  origin: "bottom",
  duration: 1000,
  distance: "50px",
  easing: "ease-out",
});
ScrollReveal().reveal(".allBoxTeam .box:nth-child(3) ", {
  origin: "right",
  duration: 1000,
  distance: "50px",
  easing: "ease-out",
});
// contact
ScrollReveal().reveal(".contact_info ", {
  origin: "left",
  duration: 1000,
  distance: "50px",
  easing: "ease-out",
});
ScrollReveal().reveal(".contact_form ", {
  origin: "right",
  duration: 1000,
  distance: "50px",
  easing: "ease-out",
});
ScrollReveal().reveal(".contact .heading ", {
  origin: "top",
  duration: 1000,
  distance: "50px",
  easing: "ease-out",
});

// start hide and show style-switcher
let styleSwitcher = document.querySelector(".style-switcher");
let switcherToggler = document.querySelector(".style-switcher-toggler");
switcherToggler.addEventListener("click", () => {
  styleSwitcher.classList.toggle("active");
});
// start theme color

const themeColor = () => {
  const hueSlider = document.querySelector(".js-hue-slider");
  const html = document.querySelector("html");
  const setHue = value => {
    html.style.setProperty("--hue", value);
    document.querySelector(".js-hue").innerHTML = value;
  };
  hueSlider.addEventListener("input", () => {
    setHue(hueSlider.value);
    // save in local Storage
    localStorage.setItem("--hue", hueSlider.value);
  });
  //save value of hue  when load the website
  const slider = value => {
    hueSlider.value = value;
  };
  if (localStorage.getItem("--hue") !== null) {
    setHue(localStorage.getItem("--hue"));
    slider(localStorage.getItem("--hue"));
  } else {
    // default value
    const hues = getComputedStyle(html).getPropertyValue("--hue");
    setHue(hues);
    slider(hues.split(" ").join(""));
  }
};
themeColor();

// dark mode
const themeLightDark = () => {
  const darkModeCheckBox = document.querySelector(".js-dark-mode");
  const themeMode = () => {
    if (localStorage.getItem("dark_mode") === "false") {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };
  darkModeCheckBox.addEventListener("click", () => {
    localStorage.setItem("dark_mode", darkModeCheckBox.checked);
    themeMode();
  });
  if (localStorage.getItem("dark_mode") !== null) {
    themeMode();
  } else {
    darkModeCheckBox.checked = true;
  }
};
themeLightDark();
