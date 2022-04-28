const hamburguer_menu = document.getElementById('collapsed-navigation');
const btn_navigation = document.getElementById('collapsed-btn-navigation')
const btn_close = document.getElementById('close-navigation')

const window_width = window.innerWidth;

hamburguer_menu.addEventListener('click', () => {
  btn_navigation.style.display = 'flex';
});

btn_close.addEventListener('click', () => {
  btn_navigation.style.display = 'none';
})