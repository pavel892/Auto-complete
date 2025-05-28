const words = ['redux', 'react', 'vue', 'angular'];

const inputField = document.querySelector('input');
const ul = document.querySelector('ul');
const appMain = document.querySelector('.app');
const itemList = document.querySelector('.item-list');

function debounce(fn, debounceTime) {
	let timeout = 0;

	return (...args) => {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
            fn(...args);
        }, debounceTime)
    }
}

inputField.addEventListener('input', function() {
    const matches = [];

    if (inputField.value.trim() === '') {
    	ul.innerHTML = '';
    	return;
    }

    words.forEach(el => {
    	if (el.startsWith(inputField.value.toLowerCase())) {
    		matches.push(el);
    	}
    });

    ul.innerHTML = '';

    matches.forEach(el => {
    	const item = document.createElement('li');
		item.textContent = el;
		item.classList.add('suggestion-item');

		item.addEventListener('click', function() {
			inputField.value = el;
			ul.innerHTML = '';
			const listItem = document.createElement('li');
			const closeBtn = document.createElement('span');
			closeBtn.innerHTML = '&times;';
			closeBtn.classList.add('close-btn');
			listItem.classList.add('list-item');

			function createSpanWithNames(text) {
				const span = document.createElement('span');
        		span.textContent = text;
        		span.appendChild(document.createElement('br'));
        		return span;
			}

			const itemName = createSpanWithNames(el);
			const itemName2 = createSpanWithNames(el);
			const itemName3 = createSpanWithNames(el);
			itemName.innerHTML = el + '<br>';
			itemName2.innerHTML = el + '<br>';
			itemName3.innerHTML = el + '<br>';

			
			listItem.appendChild(itemName);
			listItem.appendChild(itemName2);
			listItem.appendChild(itemName3);

			listItem.appendChild(closeBtn);
			itemList.appendChild(listItem);

			closeBtn.addEventListener('click', function(e) {
				e.stopPropagation();
				listItem.remove();
			});
		});

		ul.appendChild(item);
    });



    console.log(matches);
});
