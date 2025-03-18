let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.querySelector('.container');
let items = container.querySelectorAll('.list .item');
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li');
let numberElement = document.querySelector('.indicators .number');

// Adicione logs para depuração
console.log("Número de itens encontrados:", items.length);
console.log("Número de dots encontrados:", dots.length);

let active = 0;
let firstPosition = 0;
let lastPosition = items.length - 1;

// Função para atualizar o número do slide
function updateNumber() {
    numberElement.textContent = (active + 1).toString().padStart(2, '0');
}

nextButton.onclick = () => {
    console.log("Botão next clicado");
    // Remove classes ativas do item atual
    items[active].classList.remove('active');
    dots[active].classList.remove('active');
    
    // Atualiza o índice do item ativo
    active = active + 1 > lastPosition ? 0 : active + 1;
    console.log("Novo item ativo:", active);
    
    // Adiciona classes ativas ao novo item
    items[active].classList.add('active');
    dots[active].classList.add('active');
    
    // Atualiza o número
    updateNumber();
};

prevButton.onclick = () => {
    console.log("Botão prev clicado");
    // Remove classes ativas do item atual
    items[active].classList.remove('active');
    dots[active].classList.remove('active');
    
    // Atualiza o índice do item ativo
    active = active - 1 < firstPosition ? lastPosition : active - 1;
    console.log("Novo item ativo:", active);
    
    // Adiciona classes ativas ao novo item
    items[active].classList.add('active');
    dots[active].classList.add('active');
    
    // Atualiza o número
    updateNumber();
};

// Inicializa o número do slide
updateNumber();