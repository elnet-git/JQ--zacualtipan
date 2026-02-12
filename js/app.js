// ===============================
// VISOR UNIFICADO PARA PIZARRÓN Y PROMOCIONES
// ===============================
const visor = document.getElementById("visor");

if (visor) {
  const visorImg = visor.querySelector("img");

  // todas las imágenes expandibles
  const expandableImages = [
    ...document.querySelectorAll(".foto img"),
    ...document.querySelectorAll(".promo-card img")
  ];

  expandableImages.forEach(img => {
    img.addEventListener("click", (e) => {
      e.stopPropagation();

      // marcar solo promos como 'expanded'
      if (img.closest(".promo-card")) img.classList.add("expanded");

      visor.style.display = "flex";
      visorImg.src = img.src;
    });
  });

  // cerrar visor al hacer click en overlay
  visor.addEventListener("click", () => {
    visor.style.display = "none";
    visorImg.src = "";

    document.querySelectorAll(".promo-card img.expanded")
      .forEach(img => img.classList.remove("expanded"));
  });
}
  
  (function(){
    const slides = document.querySelectorAll('.slide');
    let idx = 0;
    if (!slides.length) return;
    setInterval(()=>{
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    },4000);
  })();
