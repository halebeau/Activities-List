const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const lis = listUl.children;
const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;


function attachListItemsButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);

  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);

  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i += 1) {
  attachListItemsButtons(lis[i]);
}

function hideUpDownBtns() {
  for (let i = 0; i < lis.length; i++) {
    if (!lis[i].previousElementSibling) {
      lis[i].childNodes[1].style.visibility = 'hidden';
    } else if (!lis[i].nextElementSibling){
      lis[i].childNodes[2].style.display = 'none';
    } else {
      lis[i].childNodes[1].style.visibility = 'visible';
      lis[i].childNodes[2].style.display = 'flex';
    }
  }
}

hideUpDownBtns();

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
    if (event.target.className == 'up') {
      let li = event.target.parentNode;
      let prevLi = li.previousElementSibling;
      let ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
    if (event.target.className == 'down') {
      let li = event.target.parentNode;
      let nextLi = li.nextElementSibling;
      let ul = li.parentNode;
      if (nextLi) {
        ul.insertBefore(nextLi, li);
      }
    }
    hideUpDownBtns();
  }
});

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
      toggleList.textContent = 'Hide list';
      listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show List';
    listDiv.style.display = 'none';
    }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  attachListItemsButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
  hideUpDownBtns();
});








