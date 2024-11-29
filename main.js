import 'normalize.css';
import './style.css';


const burger = document.getElementById('burger');
const showMoreBtn = document.getElementById('showMore-btn')
const showList = document.querySelectorAll('.hidden');
const sign = document.getElementById('sign')

	burger.addEventListener('click', () => {
		document.querySelector('.header').classList.toggle('open')
	})

	if(showMoreBtn){
		showMoreBtn.addEventListener('click', () => {
			showList.forEach( item=> item.classList.remove('hidden'))
		})
	}

// const currentLocation = location.href;
// const menuItem = document.querySelectorAll('.nav__list-link');
// console.log(menuItem);
// const menuLenght = menuItem.length

// for (let i = 0; i < menuLenght; i++) {
//     if (menuItem[i].href === currentLocation) {
// 			console.log(menuItem[i].href);
//         menuItem[i].classList.add('active');
//     }
// }

