
// -------- scrols boton de las tendencias mujer

const mujR = document.querySelector("#btn-right-mujer");
const mujL = document.querySelector("#btn-left-mujer");

const content =document.querySelector(".tendenciaMujer");

// llamar a botones tendencia hombre

const hombR = document.querySelector("#right-hombre");
const hombL = document.querySelector("#left-hombre");

const contentHom =document.querySelector(".tendenciaHombre");


// llamar a botones nuevas promos

const btnPromLeft = document.querySelector("#btn-prom-left");
const btnPromRight = document.querySelector("#btn-prom-right");

const prom = document.querySelector(".Contenedor-nuevasPromociones");

// para mover contenedor, utilizamos scrolleft

// ----------- scrols boton de las tendencias mujer
mujR.addEventListener("click",()=> {
    content.scrollLeft += 600;
} );

mujL.addEventListener("click",()=> {
    content.scrollLeft -= 600;
})

//  ----------- scrols boton de las tendencias hombre

hombR.addEventListener("click",()=> {
    contentHom.scrollLeft += 600;
} );

hombL.addEventListener("click",()=> {
    contentHom.scrollLeft -= 600;
})

// ----------- scrols boton de las nuevas promociones

btnPromRight.addEventListener("click",()=> {
    prom.scrollLeft += 400;
} );

btnPromLeft.addEventListener("click",()=> {
    prom.scrollLeft -= 400;
})



const navlist = document.querySelector(".nav-list");
const abrirmenu = document.querySelector(".abrir-menu");


abrirmenu.addEventListener("click", () => { 
    navlist.classList.toggle("active") 
});