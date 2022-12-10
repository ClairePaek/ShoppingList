const addBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');
const items = document.querySelector('.items');

/**
 * 아이템을 추가합니다.
 * @returns void
 */
function onAdd() {
  const text = input.value;

  if (!text) {
    input.focus();
    return;
  }

  const item = createItem(text);
  items.appendChild(item);
  item.scrollIntoView({ behavior: 'smooth', block: 'center' });
  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  if (event.key == 'Enter') {
    onAdd();
  }
});

/**
 * 아이템을 생성합니다.
 * @param {string} text
 * @returns 새로운 아이템
 */
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = "<i class='fa-solid fa-trash-can'></i>";
  deleteBtn.addEventListener('click', (event) => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'item__divider');

  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}
