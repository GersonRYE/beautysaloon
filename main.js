// DOM Document Object Model

// document.body.style.background = "red"
/* ei documento ("document") quero a modelagem do HTML, ache a tag HTML (body), aplica um style que é uma propriedade ("style"), e aplica um baackground como cor vermelho. */

/* abre e fecha o menu quano clicar no icone-menu e icone-close */
const nav =
  document.querySelector(
    'header nav'
  ) /* quer(procurar) selector(seletor) */ /* na constante "nav" preciso fazer o objeto(document) procurar(query) pelo seletor(selector) header nav e apresente para mim o resultado na constante "nav" */

const toggle =
  document.querySelectorAll(
    'nav .toggle'
  ) /* na constante "toggle" preciso fazer o objeto (document) procurar(query) pelo seletor(selector) todos os toggles(all) nav .toggle e apresente para mim o resultado na constante toggle. */

for (const element of toggle) {
  /* para ("for") cada toggle (of) dentro do parenteses quero que a constante elemento receba um novo elemento. (const element) e imprima (console.log) apresentando o resultado, e depois que ele averiguar todos os toggle ele encerra o processo. */
  // console.log(element)
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  }) /* leitura: element como voce é um objeto voce deve ter funcionalidade, então dentro do seu conjunto de funcionalidades, voce tem uma funcionalidade quando receber um click?, se sim chama-se addEventListener, então deve existir uma função apos o click. */
  /* "addEventListener" - adicina um evento que fica ouvindo, dentro do parenteses escreva primeiro o evento(1 argumento), e depois a função (2 argumento) */

  /* ei "nav" na sua lista de classe("classList") ten um "show", se sim retira da lista de classe("classList") da "nav" quando executar uma função, mas que função? essa função sera executado quando? quando der o click, mas em quem? no "element", mas quem é o element? o element é icone-menu e depois o outro element icone-close */
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll(
    'nav ul li a'
  ) /* quero receber os links(const links), aonde estão os links? no meu document(document) e pesquise por todos os seletores(querySelectorAll) (nav ul li a) enão atribua um valor a constante links(const links)*/

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
} /* para(for) cada link de links dentro dos links que são no total 5, então para cada link eu preciso adocionar um evento de click e esse event vai rodar uma função, essa função fara o que? então do nav" da lista de classe("classList") do nav,  remova(remove) a classe "show"  */



const header = document.querySelector('#header')
const navHeight = header.offsetHeight /* deslocamento da altura (offsetHeight) */
  // se na janela eu tenho um deslocamento no eixo Y(vertical) for maior ou igual a altura da navegação (navHeight)
  
function changeHeaderWhenScroll () {
  
  if (window.scrollY >= navHeight) {
   // scroll é maior que a altura do header
    header.classList.add('scroll');
    
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
} /*  mudar o header da pagina quando der scroll */


/* testimonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  /* quantoS slides, que no caso seria os comentarios, quero que apareça na minha interface */
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: { /* "767" é um breakPoint de um tablet */
      slidesPerView: 2,
      setWrapperSize: true /* esta opção garante que o tamanho seja fixo e ajustado corretamente na janela da internet, claro de acordo com os slidesPerView */
    }
  }
})

/* SCROLLREVEAL: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
 #about .image, #about .text,
 #services header, #services .card,
 #testimonials header, #testimonials .testimonials,
 #contact .text, #contact .links, 
 footer .brand, footer .social`, 
  {
    interval: 100
  } /* scrollReveal.reveal - delay de como as imagens e texto irão aparecer quando rolar a pagina, "interval:100" - tempo colocado */
)

/* BOTÃO VOLTAR PARA O TOPO */
const backToTopButton = document.querySelector(".back-to-top"); /* back-to-top - o modo como esta escrito separado com hifen é um jeito padrão para o CSS */

function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* MENU ATIVO CONFORME A SEÇÃO VISIVEL NA PAGINA */
const sections = document.querySelectorAll(' main section[id]') /* nesta parte quero que selecione todos os seletore que contenham o [id]; dentro do main que procure a seção que contenha o [id] */
function activateMenuAtCurrentSection(){
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 /* checkpoint da pagina inteira */

  for( const section of sections) {
    const sectionTop = section.offsetTop /* offsetTop = quando pegar o topo */
    const sectionHeight = section.offsetHeight /* offsetHeight = quando quando pegar altura */
    const sectionId = section.getAttribute('id') /* quando pegar o "ID" */
  

  const checkpointStart = checkpoint >= sectionTop
  const checkpointEnd = checkpoint <= sectionTop + sectionHeight

  if(checkpointStart && checkpointEnd) {
    document.querySelector('nav ul li a[href*=' + sectionId + ']') /* + sectionId + = concatenação strings e se transforma num "home"*/
    .classList.add('active')
  } else {
    document.querySelector('nav ul li a[href*=' + sectionId + ']')
    .classList.remove('active')
  }
  }
}

/* AGRUPAMENTO DAS FUNÇÕES QUE UTILIZAM SCROLL (WHEN SCROLL) */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll ()
  backToTop()
  activateMenuAtCurrentSection ()
}) /* na janela(window) inteira vou adicionar um evento de scrool e ele deve rodar uma funcionalidade */



