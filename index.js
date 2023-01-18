const botaoMenu = document.querySelector('.header__menu')
const menu = document.querySelector('.sidebar')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('sidebar--ativo')
})

