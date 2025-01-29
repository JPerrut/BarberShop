const menuIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-xmark');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
	menu.classList.add('open');
	menuIcon.style.display = 'none';
	closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
	menu.classList.remove('open');
	menuIcon.style.display = 'flex';
	closeIcon.style.display = 'none';
});