document.addEventListener("DOMContentLoaded", function() {
    let pages = document.querySelectorAll(".page");
    let currentPage = 0;

    function showNextPage() {
        if (currentPage < pages.length - 1) {
            pages[currentPage].style.display = "none";
            currentPage++;
            pages[currentPage].style.display = "block";
        }
    }

    document.body.addEventListener("click", showNextPage);

    let noButton = document.getElementById("noButton");

    noButton.addEventListener("mouseover", function() {
        let x = Math.random() * (window.innerWidth - 200);
        let y = Math.random() * (window.innerHeight - 100);

        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
        noButton.style.transition = "top 0.3s, left 0.3s";
    });

    document.getElementById("yesButton").addEventListener("click", function() {
        alert("Yay! I knew it! ❤️");
    });
});
