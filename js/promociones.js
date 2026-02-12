function toggleMenu(x) {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
  x.classList.toggle('active');
}

function abrirPromo(url){
  window.open(url, "_blank");
}