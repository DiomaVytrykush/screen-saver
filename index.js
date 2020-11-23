// Get random images
const randomImage = () => {
  const images = Array.from(document.querySelectorAll("img"));
  const randomIndex = Math.floor(Math.random() * images.length);

  for (let img of images) {
    img.style.display = "";
  }

  images[randomIndex].style.display = "block";
};

// Get random position of images
window.onload = function () {
  const images = document.getElementsByTagName("img");

  const getRandomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;

  for (let i = 0; i < images.length; i++) {
    const thisImages = images[i];

    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);

    //fixed images width
    if (randomLeft + thisImages.naturalWidth > winWidth) {
      thisImages.style.left = winWidth - thisImages.naturalWidth - 30 + "px";
    } else {
      thisImages.style.left = randomLeft + "px";
    }
  }
};

// Activate Screen Saver
const screenSaver = (delay, interval) => {
  window.addEventListener("load", function () {
    const el = document.getElementById("Screensaver");

    let timeoutId = null;

    const timeout = delay;
    const showImage = setInterval(randomImage, interval);

    const disable = () => {
      el.style.display = "none";
      timeoutId && clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        showImage;
        el.style.display = "block";
      }, timeout);
    };
    disable();
    document.addEventListener("mousemove", disable);
    document.addEventListener("keydown", disable);
  });
};

//Configuration entry with options
screenSaver(10000, 5000);
