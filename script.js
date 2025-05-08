// Redirects the user to yes_page.html when the "Yes" button is clicked
function nextPage() {
    window.location.href = "yes.html";
}

// Moves the "No" button to random positions with fun animations
function moveButton() {
    const button = document.getElementById("noButton");

    // Generate random position within the window's dimensions
    const randomX = Math.random() * (window.innerWidth - button.clientWidth);
    const randomY = Math.random() * (window.innerHeight - button.clientHeight);

    // Add smooth transition for a fun effect
    button.style.transition = "all 0.2s ease";

    // Apply rotation for a playful effect
    const randomAngle = Math.random() * 360;

    // Set the new position and rotation
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
    button.style.transform = `rotate(${randomAngle}deg)`;
}

// Attach event listeners when the DOM is fully loaded
window.onload = function() {
    const noButton = document.getElementById("noButton");

    // Event listeners for both PC (mouseover) and mobile (touchstart)
    noButton.addEventListener("mouseover", moveButton); // For PC
    noButton.addEventListener("touchstart", moveButton); // For mobile
};
