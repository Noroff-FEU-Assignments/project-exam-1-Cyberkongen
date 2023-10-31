const apiUrl = "https://www.nordicelegance.no/wp-json/wp/v2/posts?_embed"
const carousel = document.querySelector(".carousel");
const carouselNav = document.querySelector(".carouselNav");


fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    let slideIndex = 1;

    data.forEach((post) => {
        const carouselImg = document.createElement("img");
        carouselImg.src = post._embedded["wp:featuredmedia"][0].source_url;
        carousel.appendChild(carouselImg);
        carouselImg.id = "slide-" + slideIndex;

        const carouselButton = document.createElement("a");
        carouselNav.appendChild(carouselButton);
        carouselButton.href = "#slide-" + slideIndex;

        slideIndex++;
    })
  });


