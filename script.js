document.addEventListener("DOMContentLoaded", function() {
    let pages = document.querySelectorAll(".page");
    let currentPage = 0;
    let noButton = document.getElementById("noButton");
    let yesButton = document.getElementById("yesButton");
    let music = document.getElementById("bg-music");
    let musicBtn = document.getElementById("music-btn");
    let speed = 1;

    // Typing Effect for First Page
    let messageText = "Hi,\n\nI want to share something with you.\nI couldn’t keep up with myself.";
    let index = 0;

    function typeEffect() {
        if (index < messageText.length) {
            document.getElementById("message").innerHTML += messageText.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        }
    }
    typeEffect();

    // Show next page on click
    document.body.addEventListener("click", function() {
        if (currentPage < pages.length - 1) {
            pages[currentPage].style.display = "none";
            currentPage++;
            pages[currentPage].style.display = "block";
        }
    });

    // Moving "No" Button (Gets Faster)
    noButton.addEventListener("mouseover", function() {
        let x = Math.random() * (window.innerWidth - 200);
        let y = Math.random() * (window.innerHeight - 100);

        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
        speed += 0.5;
        noButton.style.transition = `${speed}s`;
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
