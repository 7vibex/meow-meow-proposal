function nextPage() {
    window.location.href = "yes_page.html";
}

function moveButton() {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    // Disable the button briefly to avoid accidental clicks
    noButton.disabled = true;

    let x, y;

    // Keep generating positions until the buttons do not overlap
    do {
        x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
        y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
    } while (
        // Check for overlap with the Yes button
        x < yesButton.offsetLeft + yesButton.clientWidth &&
        x + noButton.clientWidth > yesButton.offsetLeft &&
        y < yesButton.offsetTop + yesButton.clientHeight &&
        y + noButton.clientHeight > yesButton.offsetTop
    );

    // Update button position
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    // Re-enable the button after a short delay
    setTimeout(() => {
        noButton.disabled = false;
    }, 100); // Adjust delay as needed
}

// Attach the moveButton function to both click and touch events for better responsiveness
document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("noButton");
    noButton.addEventListener("mousedown", moveButton);
    noButton.addEventListener("touchstart", moveButton);
});
