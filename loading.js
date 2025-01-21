document.addEventListener("DOMContentLoaded", function () {
    const counter = document.querySelector(".counter");
    const loadingBarFront = document.querySelector(".loading-bar-front");

    let progress = 0;
    const interval = setInterval(() => {
        if (progress < 100) {
            progress++;
            counter.textContent = `${progress}%`;
            loadingBarFront.style.width = `${progress}%`;
        } else {
            clearInterval(interval);
        }
    }, 50); // Adjust the interval time to control the speed of the loading bar
});