const surpriseBtn = document.getElementById("surpriseBtn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// Open popup
surpriseBtn.addEventListener("click", () => {
    popup.classList.add("active");
});

// Close popup
surpriseBtn.addEventListener("click", () => {
    popup.classList.add("active");
    launchConfetti();
});

// Close when clicking outside
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.classList.remove("active");
    }
});

// Smooth scroll for "Begin Reading"
document.querySelector(".scroll-btn").addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector("#gallery").scrollIntoView({
        behavior: "smooth"
    });
});
function launchConfetti() {
    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });
}