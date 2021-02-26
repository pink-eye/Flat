
// SWIPER

const slider = document.querySelector('.swiper-container');

const mySwiper = new Swiper(slider, {
	setWrapperSize: true,
	loop: false,
	slidesPerGroup: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})


// POPUP

const openPPs = document.querySelectorAll('.pp');
const popup = document.querySelector('.popup');
const body = document.querySelector('body');
const closePP = document.querySelector('.close-popup');
const paddingOffset = (window.innerWidth - document.body.offsetWidth) + 'px';


for (let index = 0; index < openPPs.length; index++) {

	const openPP = openPPs[index];

	openPP.addEventListener('click', function () {
		popup.classList.add('_active');
		body.style.overflow = 'hidden';
		body.style.paddingRight = paddingOffset;
	});
}

closePP.addEventListener('click', function () {
	popup.classList.remove('_active');
	body.style.overflow = 'visible';
	body.style.paddingRight = '0px';
});

popup.addEventListener('click', function (e) {
	if (popup.classList.contains('_active') && e.target == popup) {
		popup.classList.remove('_active');
		body.style.overflow = 'visible';
		body.style.paddingRight = '0px';
	}
});


// VIDEO-player

let player = new Playerjs({ id: "player", file: "https://invidious.snopyta.org/latest_version?id=dnC7XCYb9Qg&itag=22&local=true" });
const openPs = document.querySelectorAll('.player');
const videoPlayer = document.querySelector('.video-player');


for (let index = 0; index < openPs.length; index++) {

	const openP = openPs[index];

	openP.addEventListener('click', function () {
		videoPlayer.classList.add('_active');
		body.style.overflow = 'hidden';
		body.style.paddingRight = paddingOffset;
	});
}

videoPlayer.addEventListener('click', function (e) {
	if (videoPlayer.classList.contains('_active') && e.target == videoPlayer) {
		videoPlayer.classList.remove('_active');
		body.style.overflow = 'visible';
		body.style.paddingRight = '0px';
		player.api("stop");
	}
});