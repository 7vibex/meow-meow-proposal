
function nextPage() {
    window.location.href = "yes.html";
}


function moveButton() {
    const button = document.getElementById("noButton");

    
    const randomX = Math.random() * (window.innerWidth - button.clientWidth);
    const randomY = Math.random() * (window.innerHeight - button.clientHeight);

   
    button.style.transition = "all 0.2s ease";
    
    const randomAngle = Math.random() * 360;


    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
    button.style.transform = `rotate(${randomAngle}deg)`;
}
