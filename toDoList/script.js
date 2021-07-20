const btnAdd = document.querySelector('.btn-add');
const btnSearch = document.querySelector('.btn-search');
const ul = document.querySelector('.list');
const addInput = document.querySelector('.add-input');
const form = document.querySelector('.form');
const info = document.querySelector('.info');
let number = 0;


//Add item to list
function addItem() {
    if (addInput.value == '') {
        info.textContent = 'Wpisz przynajmniej jeden znak';
    } else {
        info.textContent = '';
        number++;

        // Create list item
        const listItem = document.createElement('li');
        ul.appendChild(listItem);
        listItem.classList.add(`item`);
        listItem.classList.add(`item-${number}`);
        listItem.textContent = `${addInput.value}`;

        // Create delete button in li
        const delBtn = document.createElement('button');
        listItem.appendChild(delBtn);
        delBtn.classList.add(`del`);
        delBtn.classList.add(`del-${number}`);
        const iconBtn = document.createElement('i');
        delBtn.appendChild(iconBtn);
        iconBtn.classList.add('fas');
        iconBtn.classList.add('fa-trash-alt');

        addInput.value = '';

        delBtn.addEventListener('click', removeItem);
    }

}

// const removeItem = (e) => {
//     e.target.parentNode.remove();
// }


// Delete list item with button
function removeItem(e) {
    this.parentNode.remove();
}

btnAdd.addEventListener('click', addItem);


