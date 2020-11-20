// Get random images
const randomImage = () => {
  const images = Array.from(document.querySelectorAll("img"));
  const randomIndex = Math.floor(Math.random() * images.length);

  for (let img of images) {
    img.style.display = "";
  }
  images[randomIndex].style.display = "block";
};

// Get random positions of images
const images = document.getElementsByTagName("img");

const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

for (let i = 0; i < images.length; i++) {
  const thisImages = images[i];

  randomTop = getRandomNumber(0, winHeight);
  randomLeft = getRandomNumber(0, winWidth);

  thisImages.style.top = randomTop + "px";
  thisImages.style.left = randomLeft + "px";
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

// Activate Screen Saver
(function () {
  window.addEventListener("load", function () {
    const el = document.getElementById("Screensaver");
    el.className = "Screensaver";

    let timeoutId = null;

    //Configuration entry with options
    const timeout = 10000;
    const showImage = setInterval(randomImage, 5000);

    function disable() {
      el.style.display = "none";
      timeoutId && clearTimeout(timeoutId);
      timeoutId = setTimeout(function () {
        showImage;
        el.style.display = "block";
      }, timeout);
    }
    disable();
    document.addEventListener("mousemove", disable);
    document.addEventListener("keydown", disable);
  });
})();
