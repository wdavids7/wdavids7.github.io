let treesLeft = document.getElementById('trees-left');
let treesRight = document.getElementById('trees-right');
let birds = document.getElementById('birds');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    treesLeft.style.left = value * -0.7 + 'px';
    treesRight.style.left = value * 0.7 + 'px';
    birds.style.left = value * 0.5 + 'px';
});