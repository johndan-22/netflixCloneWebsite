const scrollContainer = document.getElementById("movieSection");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

const scrollAmount = 300;

backBtn.addEventListener("click", () => {
     scrollContainer.scrollBy({
          left: -scrollAmount,
          behavior: "smooth"
     });

});

nextBtn.addEventListener("click", () => {
     scrollContainer.scrollBy({
          left: scrollAmount,
          behavior: "smooth"
     });
});