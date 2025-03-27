document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".smooth-scroll").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offset = 130; // Adjust scroll position 100px before the div
                const topPos = targetElement.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: topPos, behavior: "smooth" });
            }
        });
    });
});