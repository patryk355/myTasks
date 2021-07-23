const btnAdd = document.querySelector('.btn-add');
const btnSearch = document.querySelector('.btn-search');
const ul = document.querySelector('.list');
const addInput = document.querySelector('.add-input');
const searchInput = document.querySelector('.search-input');
const form = document.querySelector('.form');
const info = document.querySelector('.info');

let number = 1;


//Add item to list
function addItem(e) {
    e.preventDefault();
    if (addInput.value == '') info.textContent = 'Wpisz przynajmniej jeden znak';
    else {
        info.textContent = '';
        number = ul.children.length + 1;

        // Create list item
        const listItem = document.createElement('li');
        ul.appendChild(listItem);
        listItem.classList.add(`item`, `item-${number}`);
        listItem.textContent = `${addInput.value}`;

        // Create delete button in li
        const delBtn = document.createElement('button');
        listItem.appendChild(delBtn);
        delBtn.classList.add(`del`, `del-${number}`);

        const iconBtn = document.createElement('i');
        delBtn.appendChild(iconBtn);
        iconBtn.classList.add('fas', 'fa-trash-alt');

        addInput.value = '';

        number++;

        delBtn.addEventListener('click', removeItem);
    }

}


// Delete list item with button
function removeItem(e) {
    // e.preventDefault();

    this.parentNode.remove();

    // Actual number in class
    const items = [...document.querySelectorAll('.item')];
    console.log(items);
    // items.forEach(item => {
    //     // Remove old class
    //     item.classList.remove(item.classList.item(1));

    //     // Add actual class
    //     // actualNumber = ul.children.length;
    //     item.classList.add(`item-${actualNumber}`);
    //     actualNumber++;
    //     // number++;
    // });

    for (let i = 0; i <= items.length; i++) {
        // Remove old class
        items[i].classList.remove(items[i].classList.item(1));

        // Add actual class
        items[i].classList.add(`item-${i + 1}`);

    }
    // console.log(items);
}

// Search items
const searchItem = function (e) {
    const items = [...document.querySelectorAll('.item')];
    const result = items.filter(item => {
        const textInside = e.target.value;
        if (item.outerText.toLowerCase().includes(textInside.toLowerCase())) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}


form.addEventListener('submit', addItem);
btnAdd.addEventListener('click', addItem);
searchInput.addEventListener('input', searchItem);


