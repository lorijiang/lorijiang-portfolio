/* Citation: https://webdesign.tutsplus.com/how-to-build-a-simple-carousel-with-vanilla-javascript--cms-41734t */

document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded");

    const slidesContainer = document.getElementById("slides-container");
    const slide = document.querySelector(".slide");
    const prevButton = document.getElementById("slide-arrow-prev");
    const nextButton = document.getElementById("slide-arrow-next");

    nextButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      console.log("left-arrow pressed");
      slidesContainer.scrollLeft += slideWidth;
    });
    
    prevButton.addEventListener("click", () => {
      const slideWidth = slide.clientWidth;
      console.log("right-arrow pressed");
      slidesContainer.scrollLeft -= slideWidth;
    });
});