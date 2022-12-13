showSlides();
initRecommendationSlider();
initFilterProjects();

const sendBtn = document.getElementById("sendMessage");
const closeBtn = document.getElementById('close');

sendBtn.addEventListener("click", () => {
  sendMessage();
});

closeBtn.addEventListener("click", () => {
  document.querySelector('.modal').style.display = 'none'
});



function sendMessage() {

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "https://borjomi.loremipsum.ge/api/send-message", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onload = function () {
    // do something to response
    const result = JSON.parse(this.responseText);

    if(result.status === 1) {
      document.querySelector('.modal').style.display = 'block'
    }
  };
  xhr.send(JSON.stringify({
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    website: document.getElementById('url').value,
    message: document.getElementById('message').value
  }));
}

function showSlides() {
  let slideIndex = 0;
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000);
}

const autoProgressBar = document.querySelector(".autoProgressBar");
const Design = document.getElementById("Design");
const Photography = document.getElementById("Photography");
const Marking = document.getElementById("Marking");
const Photoshop = document.getElementById("Photoshop");

window.addEventListener("scroll", () => {
  if (autoProgressBar.getBoundingClientRect().top <= 500) {
    Design.style.width = 80 + "%";
    Photography.style.width = 50 + "%";
    Marking.style.width = 65 + "%";
    Photoshop.style.width = 30 + "%";
  }
});

function initFilterProjects() {
  const filters = document.querySelectorAll(".bar-li");
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    project.style.display = "block";
  });

  filters.forEach((filter) => {
    filter.addEventListener("click", () => {
      const name = filter.dataset.name;

      if (name === "all") {
        projects.forEach((project) => {
          project.style.display = "block";
        });
      } else {
        projects.forEach((project) => {
          project.style.display = "none";
        });
        const currentProject = Array.from(projects).find(
          (project) => project.dataset.name === name
        );

        currentProject.style.display = "block";
      }
    });
  });
}

function initRecommendationSlider() {
  const slides = document.querySelectorAll(".recommendation-position");
  const dots = document.querySelectorAll(".buttons");

  activateFirstItem(slides, dots);
  addClickListener(slides, dots);
}

function addClickListener(slides, dots) {
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = dot.dataset.index;

      activateDot(dots, index);
      activateSlide(slides, index);
    });
  });
}

function activateFirstItem(slides, dots) {
  dots[0].classList.add("active");
  slides[0].style.display = "flex";
}

function activateDot(dots, index) {
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[index].classList.add("active");
}

function activateSlide(slides, index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}
