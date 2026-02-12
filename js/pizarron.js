function toggleMenu(x) {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
  x.classList.toggle('active');
}

const ruta = "images/clientes/";
const fotos = ["cliente1.jpg","cliente2.jpg"];
const galeria = document.getElementById("galeria");
const modal = document.getElementById("modal");
const modalImg = modal.querySelector("img");

fotos.forEach(f => {
  const div = document.createElement("div");
  div.className = "item";
  div.innerHTML = `
    <img src="${ruta}${f}" alt="${f.replace(/\.[^/.]+$/, "")}">
    <p>${f.replace(/\.[^/.]+$/, "").toUpperCase()}</p>
  `;

  div.addEventListener("click", ()=> {
    modal.style.display = "flex";
    modalImg.src = ruta + f;
  });

  galeria.appendChild(div);
});

modal.addEventListener("click", ()=> {
  modal.style.display = "none";
});