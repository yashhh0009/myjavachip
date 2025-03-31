document.addEventListener("DOMContentLoaded", function() {
    let pages = document.querySelectorAll(".page");
    let currentPage = 0;
    let noButton = document.getElementById("noButton");
    let yesButton = document.getElementById("yesButton");
    let music = document.getElementById("bg-music");
    let startBtn = document.getElementById("start-btn");

    // Start Music & Show Blank Page
    startBtn.addEventListener("click", function() {
        music.play();
        pages[currentPage].style.display = "none"; // Hide start page
        currentPage++;
        pages[currentPage].style.display = "block"; // Show blank page
    });

    // Show Next Page on Click with Typing Effect
    document.body.addEventListener("click", function(event) {
        if (event.target !== startBtn && currentPage < pages.length - 1) {
            pages[currentPage].style.display = "none";
            currentPage++;
            pages[currentPage].style.display = "block";

            if (pages[currentPage].classList.contains("text-page")) {
                typeEffect(pages[currentPage]);
            }
        }
    });

    // Typing Effect for All Pages
    function typeEffect(element) {
        let text = element.getAttribute("data-text");
        element.textContent = "";
        let index = 0;

        function type() {
            if (index < text.length) {
                element.textContent += text.charAt(index);
                index++;
                setTimeout(type, 50);
            }
        }
        type();
    }

    // Moving "No" Button (Gets Faster)
    noButton.addEventListener("mouseover", function() {
        let x = Math.random() * (window.innerWidth - 200);
        let y = Math.random() * (window.innerHeight - 100);

        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    // Fireworks Effect on "Yes"
    yesButton.addEventListener("click", function() {
        startFireworks();
        setTimeout(() => alert("Yay! Java Chip & Choco Frappe forever ❤️☕"), 1000);
    });

    function startFireworks() {
        let canvas = document.createElement("canvas");
        document.body.appendChild(canvas);
        let ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = "fixed";
        canvas.style.top = "0";
        canvas.style.left = "0";
        canvas.style.pointerEvents = "none";

        function createFirework(x, y) {
            for (let i = 0; i < 50; i++) {
                setTimeout(() => {
                    ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
                    ctx.beginPath();
                    ctx.arc(x + Math.random() * 50 - 25, y + Math.random() * 50 - 25, 5, 0, Math.PI * 2);
                    ctx.fill();
                }, i * 50);
            }
        }
        createFirework(window.innerWidth / 2, window.innerHeight / 2);
    }
});