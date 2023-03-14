//selecciona el elemento del menú desplegable
let res = document.getElementById("tema");

//define una función que cambia las imágenes en función de la opción seleccionada
function cambiarImagenes() {
  if (res.value === "perros") {
    document.getElementById("img1").setAttribute("src","image/perro1.jpg");
    document.getElementById("img2").setAttribute("src","image/perro2.jpg");
    document.getElementById("img3").setAttribute("src","image/perro3.jpg");
  } else if (res.value === "gatos") {
    document.getElementById("img1").setAttribute("src","image/gato1.png");
    document.getElementById("img2").setAttribute("src","image/gato2.png");
    document.getElementById("img3").setAttribute("src","image/gato3.png");
  } else if (res.value === "personas") {
    document.getElementById("img1").setAttribute("src","image/persona1.png");
    document.getElementById("img2").setAttribute("src","image/persona2.jpg");
    document.getElementById("img3").setAttribute("src","image/persona3.png");
  }
}

//asigna el evento onchange al elemento del menú desplegable
res.onchange = cambiarImagenes;


function cambio1(){
document.getElementById("grande").setAttribute("src",document.getElementById("img1").getAttribute("src"));
}

function cambio2(){
document.getElementById("grande").setAttribute("src",document.getElementById("img2").getAttribute("src"));
}
function cambio3(){
document.getElementById("grande").setAttribute("src",document.getElementById("img3").getAttribute("src"));
}

function otrotxt(){
    document.getElementById("ejtxt").innerHTML=document.getElementById("mem").value;
}

 let res2=document.getElementById("tipotxt");
 
 function cambiarTexto() {
    let p = document.getElementById("ejtxt");
    if (res2.value === "golos") {
      p.style.fontFamily = "'Golos Text', sans-serif";
    } else if (res2.value === "bassa") {
      p.style.fontFamily = "'Noto Sans Bassa Vai', sans-serif";
    } else if (res2.value === "shantel") {
      p.style.fontFamily = "'Shantell Sans', cursive";
    } else if (res2.value === "jp") {
      p.style.fontFamily = "'Noto Sans JP', sans-serif";
    } else {
      p.style.fontFamily = "'Golos Text', sans-serif";
    }
  }
  
  res2.addEventListener("change", cambiarTexto);

   let res3=document.getElementById("colortxt");
 
 function cambiarColor() {
    let p = document.getElementById("ejtxt");
    if (res3.value === "Negro") {
      p.style.color="black";
    }
    if (res3.value === "Blanco") {
      p.style.color="white";
    }
    if (res3.value === "Amarillo") {
      p.style.color="yellow";
    }
  }

   res3.onchange=cambiarColor;

   let res4=document.getElementById("tamaniotxt");
 
 function cambiartamanio() {
    let p = document.getElementById("ejtxt");
    if (res4.value === "ch") {
      p.style.fontSize="small";
    }
    if (res4.value === "m") {
      p.style.fontSize="medium";
    }
    if (res4.value === "g") {
      p.style.fontSize="large";
    }
  }

   res4.onchange=cambiartamanio;




