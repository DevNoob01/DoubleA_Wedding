// JavaScript code for countdown timer
const eventDate = new Date('2024-07-03').getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = 'EXPIRED';
    }
}, 1000);

// JavaScript code for toggling hamburger menu
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('active');
});
