window.reveal = ScrollReveal({reset:true})

reveal.reveal('.hidden.left', {
	duration: 2000,
	distance: '90px',
	origin: 'left',
	interval: 200,
});

reveal.reveal('.hidden.right', {
	duration: 2000,
	distance: '90px',
	origin: 'right',
	interval: 200,
});

reveal.reveal('.hidden.bottom', {
duration: 2000,
distance: '90px',
origin: 'bottom',
interval: 200,
});

reveal.reveal('.hidden.top', {
	duration: 2000,
	distance: '90px',
	origin: 'top',
	interval: 200,
});