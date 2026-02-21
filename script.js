// 1. Slow background floating hearts
setInterval(function() {
    const heart = document.createElement('div');
    heart.classList.add('bg-heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 4 + 's';
    heart.style.fontSize = Math.random() * 15 + 10 + 'px'; 
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 7000);
}, 300);

// 2. The Burst Function (Massive explosion logic)
function createBurstHeart() {
    const heart = document.createElement('div');
    heart.classList.add('bg-heart');
    heart.innerHTML = '💖';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 1.5 + 1 + 's'; // Fast!
    heart.style.fontSize = Math.random() * 30 + 20 + 'px'; // Big!
    heart.style.opacity = '0.9'; 
    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, 3000);
}

// 3. Attach Click Event Safely
const btn = document.getElementById('revealBtn');
const msg = document.getElementById('specialMessage');

// Ensure the button actually exists on the page before attaching the click event
if(btn) {
    btn.addEventListener('click', function() {
        // Hide the button, show the hidden message
        btn.style.display = 'none';
        msg.style.display = 'block';
        msg.style.animation = 'fadeInUp 1.5s forwards';
        
        // Trigger 150 fast, glowing hearts!
        for(let i = 0; i < 150; i++) {
            setTimeout(createBurstHeart, i * 10);
        }
    });
}