
let messages = ["Porfavor?", "Dame una oportunidad!", "estas segura?", "piensalo otra vez!", "podrias arrepentirte de eso!", "una ultima oportunidad!", "cariño por favor😞?", "no rompas mi corazón 💔"];
let noCount = 0;
let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let messageText = document.getElementById("message");

noButton.addEventListener("click", rejectLove);
yesButton.addEventListener("click", acceptLove);

function rejectLove() {
    if (noCount < messages.length) {
        messageText.innerText = messages[noCount];
        noCount++;
        noButton.style.transform = `scale(${1 - noCount * 0.1})`;
        yesButton.style.transform = `scale(${1 + noCount * 0.1})`;
    }
    if (noCount === messages.length) {
        noButton.style.display = "none";
    }
}

function acceptLove() {
    document.getElementById("valentine").innerHTML = `
        <img src="https://media1.tenor.com/m/aEWN44So2ckAAAAC/kiss-kisses.gif" class="gif">
        <div class="question">Mi amor🥺💗, mi niña🥺💗, Te amo mucho🥺💗</div>
        
        <div class="question">
Hoy es San Valentín, pero para mí, cada día a tu lado es una celebración del amor más puro y hermoso que existe. No necesito un calendario para recordarme cuánto te amo, porque lo llevo tatuado en el alma, en cada latido, en cada suspiro que pronuncia tu nombre en silencio.

Eres mi refugio y mi aventura, mi calma y mi tempestad perfecta. En tus ojos encuentro la eternidad, en tu risa, la melodía que quiero escuchar por siempre. Me haces creer en lo mágico, en lo eterno, en lo inefable que es amarte con cada parte de mí.

Hoy quiero prometerte que seguiré eligiéndote, una y otra vez, en cada amanecer y en cada anochecer. Que mi amor por ti será siempre un hogar cálido donde puedas descansar tu corazón, un jardín donde florezcan todos tus sueños.

Feliz San Valentín, mi niña. Que la vida nos dé mil días más para amarnos, pero si solo nos diera uno, que sea eterno en tu abrazo.

Te amo con todo mi ser. 💖✨❤️</div>
    `;
    launchConfetti();
    startHeartRain();
}

function launchConfetti() {
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 5,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 5,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}

function startHeartRain() {
    const heartContainer = document.getElementById("heart-container");
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 300);
}
