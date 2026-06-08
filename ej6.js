const tarjeta = document.getElementById("tarjeta");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", function() {  
   
    const estadoOculto = tarjeta.classList.toggle("oculto");
    if (estadoOculto) {
        btnToggle.textContent = "Mostrar";
    } else {
        btnToggle.textContent = "Ocultar";
    }
});