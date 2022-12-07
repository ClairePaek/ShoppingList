const add_button = document.querySelector('.add_button');
const shopping_list = document.querySelector('.shopping_list');
const trash_button = document.querySelectorAll('.trash');

add_button.addEventListener('click', () => {
  shopping_list.innerHTML += getForm();
});

function remove(element) {
  shopping_list.removeChild(element.parentElement);
}

function getForm() {
  return "<div class='item'> <input placeholder='text' /> <button onclick='remove(this)'>trash</button> </div>";
}
