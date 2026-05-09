// SNOW
const canvas = document.getElementById("snow");
const ctx = canvas.getContext("2d");

let width, height, flakes = [];

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

function init() {
    flakes = [];
    for (let i = 0; i < 100; i++) {
        flakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            r: Math.random() * 3 + 1,
            d: Math.random()
        });
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "white";

    flakes.forEach(f => {
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();

        f.y += f.d * 2;
        f.x += Math.sin(f.y * 0.01);

        if (f.y > height) {
            f.y = 0;
            f.x = Math.random() * width;
        }
    });

    requestAnimationFrame(draw);
}

resize();
init();
draw();

window.addEventListener("resize", () => {
    resize();
    init();
});

// SKILL BAR
window.addEventListener("scroll", () => {
    document.querySelectorAll(".skill-progress").forEach(bar => {
        if (bar.getBoundingClientRect().top < window.innerHeight) {
            bar.style.width = bar.dataset.width;
        }
    });
});

// Toggle Translate
function toggleTranslate() {
    const element = document.getElementById('google_translate_element');
    if (element.style.display === 'none' || element.style.display === '') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

// Hamburger Menu
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    });
});

