function startGame() {
    document.getElementById('start-screen').classList.remove('active');
    document.getElementById('question-screen').classList.add('active');
}

function showLove() {
    document.getElementById('question-screen').classList.remove('active');
    document.getElementById('love-screen').classList.add('active');
    createHearts();
}

function showNoMessage() {
    const questionScreen = document.getElementById('question-screen');
    questionScreen.innerHTML = `
        <h2 class="mb-4">Haha, no problem! But you should love me anyways! 😊</h2>
        <div class="buttons">
            <button class="btn btn-success btn-lg mx-2" onclick="showLove()">Fine, I love you</button>
            <button class="btn btn-danger btn-lg mx-2 moving-btn" id="noBtn" onmouseover="moveButton()">Still No</button>
        </div>
    `;
}

function playAgain() {
    document.getElementById('love-screen').classList.remove('active');
    document.getElementById('start-screen').classList.add('active');
    document.getElementById('hearts-container').innerHTML = '';
}

function moveButton() {
    const btn = document.getElementById('noBtn');
    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    btn.style.position = 'fixed';
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
}

function createHearts() {
    const container = document.getElementById('hearts-container');
    
    // Create multiple hearts
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.innerHTML = '💖';
            heart.style.left = `${Math.random() * 100}%`;
            container.appendChild(heart);
            
            // Remove heart after animation
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 200);
    }
}

// Handle the "No" button click
document.getElementById('noBtn').addEventListener('click', (e) => {
    e.preventDefault();
    showNoMessage();
}); 