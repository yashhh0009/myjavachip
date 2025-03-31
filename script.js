document.addEventListener("DOMContentLoaded", function() {
    let pages = document.querySelectorAll(".page");
    let currentPage = 0;
    let noButton = document.getElementById("noButton");
    let yesButton = document.getElementById("yesButton");
    let music = document.getElementById("bg-music");
    let musicBtn = document.getElementById("music-btn");
    let speed = 1;

    function typeEffect(element, text, index = 0) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            setTimeout(() => typeEffect(element, text, index + 1), 50);
        }
    }

    function startTypingEffect() {
        let messages = document.querySelectorAll(".message");
        messages.forEach(message => {
            let text = message.getAttribute("data-text");
            message.innerHTML = ""; // Clear existing text
            typeEffect(message, text);
        });
    }

    startTypingEffect();

    // Show next page on click
    document.body.addEventListener("click", function() {
        if (currentPage < pages.length - 1) {
            pages[currentPage].style.display = "none";
            currentPage++;
            pages[currentPage].style.display = "block";
        }
    });

    // Moving "No" Button (Random but Controlled)
    noButton.addEventListener("mouseover", function() {
        let x = Math.random() * (window.innerWidth - 200);
        let y = Math.random() * (window.innerHeight - 100);

        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
        speed += 0.3;
        noButton.style.transition = `0.2s`;
    });

    // Play/Pause Music
    musicBtn.addEventListener("click", function() {
        if (music.paused) {
            music.play();
            musicBtn.textContent = "⏸ Pause Music";
        } else {
            music.pause();
            musicBtn.textContent = "🎵 Play Music";
        }
    });

    // Fireworks Effect on "Yes"
    yesButton.addEventListener("click", function() {
        startFireworks();
        setTimeout(() => alert("Yay! Java Chip & Choco Frappe forever ❤️☕"), 1000);
    });

    function startFireworks() {
        let canvas = document.getElementById("fireworks");
        let ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

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
