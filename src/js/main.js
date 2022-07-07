import "../styles/main.css";
import "../styles/scheme.css";

const moreOptions = document.getElementById("bmore");
const bShowMobileLinks = document.getElementById("bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".menu");

bShowMobileLinks.addEventListener("click", (event) => {
  event.preventDefault();

  mobileMenu.classList.toggle("show");
});

moreOptions.addEventListener("click", (event) => {
  event.preventDefault();

  moreMenu.classList.toggle("show");
});

const videos = [
  {
    id: "PyMlV5_HRWk",
  },
  {
    id: "Fmdb-KmlzD8",
  },
  {
    id: "OkMY1hRAlfc",
  },
  {
    id: "lOthvD1rMbQ",
  },
  {
    id: "MBb88gLmJZY",
  },
];

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videosContainer = document.querySelector("#videos-container");
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
let current = 0;

btnNext.addEventListener("click", (e) => {
  current++;
  if (current > videos.length - 1) {
    current = 0;
  }
  renderCurrentVideo(videos[current].id);
});
btnPrev.addEventListener("click", () => {
  current--;
  if (current < 0) {
    current = videos.length - 1;
  }
  renderCurrentVideo(videos[current].id);
});

renderCurrentVideo(videos[current].id);
renderThumbnails();

function renderCurrentVideo(id) {
  currentContainer.innerHTML = `
    <iframe
      width="100%"
      height="720"
      src="https://www.youtube.com/embed/${id}"
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen></iframe>
  `;
}

function renderThumbnails() {
  const html = videos.map((video, idx) => {
    return `
      <div class="item" data-id=${idx}>
        <a href="#">
          <img src="https://img.youtube.com/vi/${video.id}/mqdefault.jpg" alt="thumbnail">
        </a>
      </div>
    `;
  });
  videosContainer.innerHTML = html.join("");

  document.querySelectorAll(".item a").forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      current = item.parentElement.dataset.id;
      renderCurrentVideo(videos[current].id);
    });
  });
}
