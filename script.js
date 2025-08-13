const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".numbers");

let active = 0;
const total = items.length;
let timer;

// Função central para atualizar o slider e o timer
function reloadSlider() {
  // 1. Remove a classe 'active' do item e do dot atual
  document.querySelector(".item.active").classList.remove("active");
  document.querySelector(".dot.active").classList.remove("active");

  // 2. Adiciona a classe 'active' ao novo item e ao novo dot
  items[active].classList.add("active");
  dots[active].classList.add("active");

  // 3. Atualiza o indicador de número
  numberIndicator.textContent = `0${active + 1}`;

  // 4. Limpa e reinicia o timer para a transição automática
  clearInterval(timer);
  timer = setInterval(() => {
    nextButton.click(); // Simula um clique no botão "próximo"
  }, 5000); // Muda de slide a cada 5 segundos
}

// Event Listeners para os botões
prevButton.addEventListener("click", function () {
  active = (active - 1 + total) % total;
  reloadSlider();
});

nextButton.addEventListener("click", function () {
  active = (active + 1) % total;
  reloadSlider();
});

// Event Listeners para os pontos (dots)
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    active = index;
    reloadSlider();
  });
});

// Inicia o carrossel quando a página carrega
reloadSlider();
