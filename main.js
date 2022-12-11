const addBtn = document.querySelector('.footer__button');
const input = document.querySelector('.footer__input');
const items = document.querySelector('.items');
let id = 0;

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

items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;

  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
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
  itemRow.setAttribute('data-id', `${id}`);

  itemRow.innerHTML += `<div class="item">
                          <span class="item__name">${text}</span>
                          <button class="item__delete">
                            <i class='fa-solid fa-trash-can' data-id=${id}></i>
                          </button>
                        </div>
                        <div class="item__divider"></div>`;

  id++;
  return itemRow;
}
