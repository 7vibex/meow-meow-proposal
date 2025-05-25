function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    noButton.disabled = true;

    let x, y;
    do {
        x = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
        y = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
    } while (
        x < yesButton.offsetLeft + yesButton.clientWidth &&
        x + noButton.clientWidth > yesButton.offsetLeft &&
        y < yesButton.offsetTop + yesButton.clientHeight &&
        y + noButton.clientHeight > yesButton.offsetTop
    );

    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    setTimeout(() => {
        noButton.disabled = false;
    }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
    const noButton = document.getElementById("noButton");
    noButton.addEventListener("mousedown", moveButton);
    noButton.addEventListener("touchstart", moveButton);

    // Floating hearts
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = 2 + Math.random() * 3 + 's';
        document.getElementById('heart-container').appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
});
