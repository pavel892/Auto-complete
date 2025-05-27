const words = ['redux', 'react', 'vue', 'angular'];

const inputField = document.querySelector('input');
const ul = document.querySelector('ul');

inputField.addEventListener('input', function() {
	words.forEach(el => {
		if (inputField.value === el) {
			const item = document.createElement('li');
			item.textContent = el;
			item.classList.add('suggestion-item');
			ul.appendChild(item);
		}
	});
	
});
