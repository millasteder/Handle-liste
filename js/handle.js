
const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function (){
    let newItem = input.value;
    input.value = '';

    let itemList = document.createElement('li');
    let itemText = document.createElement('span');
    let itemButton = document.createElement('button');

    itemList.appendChild(itemText);
    itemText.textContent = newItem;

    itemList.appendChild(itemButton);
    itemButton.textContent = 'fjern';

    list.appendChild(itemList);

    itemButton.onclick = function () {
    list.removeChild(itemList);
    }

}

function initEvent(){
    const inputElement = document.getElementById('fill');

}

function initEvent(){
    const buttonElement = document.getElementById('add');

buttonElement.addEventListener('click', addName);
}
window.addEventListener('keyup', (event) => {
    if(event.key === 'Enter'){
        addName();
    }
}) ;

function addName(){
    const liElement = document.createElement('li');
    if(inputElement.value !==''){
        liElement.textContent = inputElement.value;
        resultElement.appendChild(liElement);
    }
}

initEvent();










