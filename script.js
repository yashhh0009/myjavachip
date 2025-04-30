document.addEventListener("DOMContentLoaded", function () {
    let pages = document.querySelectorAll(".page");
    let currentPage = 0;
    let noButton = document.getElementById("noButton");
    let yesButton = document.getElementById("yesButton");
    let music = document.getElementById("bg-music");
    let startBtn = document.getElementById("start-btn");

    startBtn.addEventListener("click", function () {
        music.play();
        pages[currentPage].style.display = "none";
        currentPage++;
        pages[currentPage].style.display = "block";
    });

    document.body.addEventListener("click", function (event) {
        if (event.target !== startBtn && !event.target.closest(".buttons") && currentPage < pages.length - 1) {
            pages[currentPage].style.display = "none";
            currentPage++;
            pages[currentPage].style.display = "block";

            if (pages[currentPage].classList.contains("text-page")) {
                typeEffect(pages[currentPage]);
            }
        }
    });

    function typeEffect(element) {
        const text = element.getAttribute("data-text");
        let i = 0;
        const target = element.querySelector(".typed-text") || element;
        target.textContent = "";

        const interval = setInterval(() => {
            target.textContent += text.charAt(i);
            i++;
            if (i === text.length) clearInterval(interval);
        }, 40);
    }

    noButton.addEventListener("mouseover", function () {
        let x = Math.random() * (window.innerWidth - 200);
        let y = Math.random() * (window.innerHeight - 100);
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });

    yesButton.addEventListener("click", function () {
        
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
