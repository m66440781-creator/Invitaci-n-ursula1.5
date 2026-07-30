// ===================================
// INVITACIÓN ÚRSULA NAZARETH v2
// ROSITA FRESITA
// SCRIPT LIMPIO
// ===================================


// ELEMENTOS

const bienvenida = document.getElementById("bienvenida");
const fresaInicio = document.getElementById("fresaInicio");

const bosque = document.getElementById("bosque");
const decoracion = document.getElementById("decoracion");

const sobre = document.getElementById("sobre");

const libro = document.getElementById("libro");

const historia = document.getElementById("historia");

const continuar = document.getElementById("continuar");

const invitacionFinal =
document.getElementById("invitacionFinal");




// TEXTO DEL CUENTO

const textoHistoria = 
"Había una vez una pequeña llamada Úrsula Nazareth... que estaba a punto de cumplir 4 añitos. Y quiere compartir este día tan especial contigo. 🍓✨";





// ===================================
// TOCAR FRESA INICIAL
// ===================================


fresaInicio.addEventListener("click",()=>{


    if(typeof confetti === "function"){

        confetti({

            particleCount:120,

            spread:90,

            origin:{
                y:.7
            }

        });

    }



    bienvenida.style.opacity="0";


    setTimeout(()=>{


        bienvenida.style.display="none";


        bosque.classList.add("activo");


        crearEscenario();



    },1200);



});





// ===================================
// ABRIR SOBRE
// ===================================


sobre.addEventListener("click",()=>{


    sobre.classList.add("abierto");



    setTimeout(()=>{


        libro.classList.add("activo");


        escribirHistoria();



        if(typeof confetti === "function"){


            confetti({

                particleCount:180,

                spread:100,

                origin:{
                    y:.6
                }

            });


        }



    },900);



});






// ===================================
// ESCRITURA MÁQUINA
// ===================================


function escribirHistoria(){


    historia.innerHTML="";


    let letra=0;


    const maquina=setInterval(()=>{


        historia.innerHTML +=
        textoHistoria.charAt(letra);



        letra++;



        if(letra >= textoHistoria.length){


            clearInterval(maquina);


        }


    },45);



}






// ===================================
// BOTÓN FINAL
// ===================================


continuar.addEventListener("click",()=>{


    continuar.innerHTML=
    "🍓 Preparando sorpresa...";



    setTimeout(()=>{


        invitacionFinal.classList.add("activa");



        if(typeof confetti === "function"){


            confetti({

                particleCount:200,

                spread:120,

                origin:{
                    y:.5
                }

            });


        }



    },1000);



});







// ===================================
// CREAR ESCENARIO
// ===================================


function crearEscenario(){


    crearNubes(10);

    crearArboles();

    crearArbustos();

    crearHongos();


}







// ===================================
// NUBES
// ===================================


function crearNubes(cantidad){


    for(let i=0;i<cantidad;i++){


        const nube=document.createElement("div");


        nube.className="nube";


        nube.innerHTML="☁️";


        nube.style.left=
        Math.random()*100+"vw";


        nube.style.top=
        Math.random()*45+"vh";



        nube.style.animationDelay=
        (-Math.random()*20)+"s";



        decoracion.appendChild(nube);



    }


}







// ===================================
// ÁRBOLES
// ===================================


function crearArboles(){


    const posiciones=[
        5,18,35,52,70,86
    ];



    posiciones.forEach((pos,i)=>{


        const arbol=
        document.createElement("div");



        arbol.className="arbol";


        arbol.innerHTML="🌳";



        arbol.style.left=
        pos+"vw";



        arbol.style.fontSize=
        (80 + i*8)+"px";



        decoracion.appendChild(arbol);



    });



}







// ===================================
// ARBUSTOS
// ===================================


function crearArbustos(){


    for(let i=0;i<12;i++){


        const arbusto=
        document.createElement("div");



        arbusto.className="arbusto";


        arbusto.innerHTML="🌿";



        arbusto.style.left=
        (i*8)+"vw";



        decoracion.appendChild(arbusto);



    }


}







// ===================================
// HONGOS
// ===================================


function crearHongos(){


    [10,25,45,65,82,90]
    .forEach(pos=>{


        const hongo=
        document.createElement("div");


        hongo.className="hongo";


        hongo.innerHTML="🍄";


        hongo.style.left=
        pos+"vw";



        decoracion.appendChild(hongo);



    });



}
