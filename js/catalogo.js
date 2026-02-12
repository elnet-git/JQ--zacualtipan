document.addEventListener("DOMContentLoaded", () => {

/* ===============================
   SOLO MOTOS + BUSCADOR
   =============================== */

const motos = [
  { id: "dominar400",  nombre: "Dominar 400",  img: "/images/motos/dominar400.png" },
  { id: "dominar250",  nombre: "Dominar 250",  img: "/images/motos/dominar250.png" },
  { id: "ns200",       nombre: "NS 200",       img: "/images/motos/ns200.png" },
  { id: "pulsar180",   nombre: "Pulsar 180",   img: "/images/motos/pulsar180.png" },
  { id: "platina100",  nombre: "Platina 100",  img: "/images/motos/platina100.png" }
];

const contenedorMotos = document.getElementById("submodelos");
const partesDiv = document.getElementById("partes");
const piezasDiv = document.getElementById("piezas");

if(!contenedorMotos || !partesDiv || !piezasDiv){
  console.error("Faltan contenedores en el HTML");
  return;
}

contenedorMotos.innerHTML = "";
partesDiv.innerHTML = "";
piezasDiv.innerHTML = "";

motos.forEach(moto => {

  const card = document.createElement("div");
  card.className = "pieza";

  card.innerHTML = `
    <img src="${moto.img}">
    <span>${moto.nombre}</span>
  `;

  card.addEventListener("click", () => mostrarBuscador(moto));

  contenedorMotos.appendChild(card);
});

function mostrarBuscador(moto){

  partesDiv.innerHTML = `
    <div style="width:100%;max-width:420px;margin:auto;margin-top:20px">

      <h3 style="text-align:center;margin-bottom:12px">
        Buscar refacción para ${moto.nombre}
      </h3>

      <input
        id="buscadorPieza"
        type="text"
        placeholder="Nombre o código de pieza"
        style="
          width:100%;
          padding:12px;
          border-radius:8px;
          border:none;
          outline:none;
          font-size:16px;
        "
      >

      <button
        id="btnBuscar"
        style="
          width:100%;
          margin-top:10px;
          padding:12px;
          border:none;
          border-radius:8px;
          background:#8B1E1E;
          color:white;
          font-weight:600;
          cursor:pointer;
        "
      >
        Buscar
      </button>

      <div
        id="resultadoBusqueda"
        style="margin-top:15px;text-align:center;opacity:.8"
      ></div>

    </div>
  `;

  piezasDiv.innerHTML = "";

  document.getElementById("btnBuscar").onclick = () => {

    const q = document.getElementById("buscadorPieza").value.trim();

    document.getElementById("resultadoBusqueda").innerText =
      q
        ? `Buscando "${q}" en ${moto.nombre}...`
        : "Escribe un nombre o código de pieza";
  };
}

});