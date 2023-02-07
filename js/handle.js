function list() {
    const list = document.querySelector('ul');
    const input = document.querySelector('input');
    const button = document.querySelector('button');

    const inputElement = document.getElementById('fill');

    const buttonElement = document.getElementById('add');

    const itemListElement = document.getElementById('item-list');


    buttonElement.addEventListener('click', renderList);

    window.addEventListener('keyup', (event) => {
        if(event.code === 'Enter') {
            renderList();
        }
    }) ;

    function renderList(){
        if(inputElement.value !== '') {
            const liElement = document.createElement('li');
            const itemButton = document.createElement('button');
            itemButton.textContent = 'fjern';
            liElement.textContent = inputElement.value;
            liElement.appendChild(itemButton);
            itemListElement.appendChild(liElement);
            inputElement.value = '';
            itemButton.addEventListener('click', () => {
            itemListElement.removeChild(liElement);
            })
        } else {
            alert('Skriv inn en gyldig verdi')
        }
    }
}
list();

// localStorage.setItem
// localStorage.getItem













