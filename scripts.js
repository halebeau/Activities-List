
const title = document.querySelector('h1');
title.textContent = "My Activities List";

title.style.color = 'dodgerblue';

const desc = document.querySelector('.desc');
desc.innerHTML = "A list of <em>fun</em> things I want to do today";

const list = document.querySelector('ul');
list.className = 'list';

const item = document.createElement('li');
item.innerHTML = "<input> Play COD";
list.appendChild(item);

const input = document.getElementsByTagName('input');
for (let i = 0; i < input.length; i += 1) {
    input[i].type = 'checkbox';
}

const deleteButton = document.createElement('button');
deleteButton.textContent = 'Delete';

const extra = document.querySelector('.extra');
extra.appendChild(deleteButton);

const container = document.querySelector('.container');
deleteButton.addEventListener('click', () => {
    container.removeChild(extra);
});












