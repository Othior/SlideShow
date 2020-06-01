let rightButton = document.querySelector(".rightButton");
let leftButton = document.querySelector(".leftButton");
let images = document.querySelectorAll(".image");

let imageIndex = 1;

let majSlide = function(n) {
  slides((imageIndex += n));
};

let slides = function(n) {
  let i;

  if (n > images.length) {
    imageIndex = 1;
  }
  if (n < 1) {
    imageIndex = images.length;
  }

  for (i = 0; i < images.length; i++) {
    images[i].classList.remove("active");
  }

  images[imageIndex - 1].classList.add("active");
};

leftButton.addEventListener("click", function() {
  majSlide(-1);
});

rightButton.addEventListener("click", function() {
  majSlide(1);
});
