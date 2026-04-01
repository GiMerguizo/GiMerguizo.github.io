const toggleTheme = document.getElementById('toggleTheme');
const rootHtml = document.documentElement;

// Configuração do tema light/dark

function changeTheme() {
    const cuurentTheme = rootHtml.getAttribute('data-theme');

    if (cuurentTheme === 'dark') rootHtml.setAttribute('data-theme', 'light');
    else rootHtml.setAttribute('data-theme', 'dark');

    toggleTheme.classList.toggle('bi-sun');
    toggleTheme.classList.toggle('bi-moon-stars');
}

toggleTheme.addEventListener('click', changeTheme);

const accordionHeaders = document.querySelectorAll('.accordion__header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionActive = accordionItem.classList.contains("active");

        accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
    })
})

// Ativação dos links selecionados

const menuLinks = document.querySelectorAll('.menu__link');

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})

// Configuração do dropdown do menu

const dropdown = document.querySelector('.dropdown');
const dropdownTrigger = document.querySelector('.dropdown .menu__link');

if (dropdownTrigger) {
  dropdownTrigger.addEventListener('click', (event) => {
    // Adiciona ou remove a classe que mostra o menu
    dropdown.classList.toggle('show-dropdown');
  });
}

// Fecha o dropdown se o usuário clicar fora dele
window.addEventListener('click', (event) => {
  if (!dropdown.contains(event.target)) {
    dropdown.classList.remove('show-dropdown');
  }
});