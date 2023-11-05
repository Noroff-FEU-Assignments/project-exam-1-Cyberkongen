document.addEventListener("DOMContentLoaded", function() {

  const apiUrl = "https://www.nordicelegance.no/wp-json/wp/v2/posts?_embed";
  const carousel = document.querySelector(".carousel");
  const carouselNav = document.querySelector(".carouselNav");


fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    let slideIndex = 0;

    data.forEach((post) => {
      const carouselImg = document.createElement("img");
      carouselImg.src = post._embedded["wp:featuredmedia"][0].source_url;
      carousel.appendChild(carouselImg);
      carouselImg.id = "slide-" + (slideIndex + 1);

      const carouselButton = document.createElement("a");
      carouselNav.appendChild(carouselButton);
      carouselButton.href = "#slide-" + (slideIndex + 1);


      slideIndex++;
    });
    const leftArrow = document.getElementById('leftarrow');
    const rightArrow = document.getElementById('rightarrow');
    console.log(leftArrow);

    let currentSlideIndex = 0;

    leftArrow.addEventListener('click', () => {
      // Decrement the current slide index
      currentSlideIndex = (currentSlideIndex - 1 + data.length) % data.length;
      window.location.hash = "slide-" + (currentSlideIndex + 1);
    });

    rightArrow.addEventListener('click', () => {
      // Increment the current slide index
      currentSlideIndex = (currentSlideIndex + 1) % data.length;
      window.location.hash = "slide-" + (currentSlideIndex + 1);
    });


  });
})

window.addEventListener('load', function() {
  window.location.hash = "slide-1";
});