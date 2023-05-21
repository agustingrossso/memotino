

// let traerCaja = document.getElementById("boton")
// traerCaja.addEventListener("click", divLogin)

function divLogin(){ 

   if(clic==1){

   document.getElementById("caja").style.height = "100px";

   clic = clic + 1;

   } else{

       document.getElementById("caja").style.height = "0px";      

    clic = 1;

   }   

}

// 

// let clicks = 1

// FUNCIONES PARA MOSTRAR LOS DIVS - 
function mostrarSegundoDiv() {
        let segundoDiv = document.getElementById("segundoDiv");
        segundoDiv.style.display = "block";
  }

 function mostrarPrimerDiv() {
    var segundoDiv = document.getElementById("segundoDiv");
        segundoDiv.style.display = "none";
 }

function mostrar (numero){
    let mostrar
    console.log(mostrar)
    switch (numero) {
        case "1":
            mostrar = document.getElementById("uno");
                mostrar.style.display = "block";
            break;
        case 2:
              mostrar = document.getElementById("2");
                mostrar.style.display = "block";
            break;
        case 3: 
                 mostrar = document.getElementById("3");
                    mostrar.style.display = "block";
            break;
    
        default:
            break;
    }
    
}

// MI CODIGO 👇
// function mostrarSegundoDiv() {
//     let segundoDiv = document.getElementsById("segundaCard");
//     segundoDiv.style.display = "block";
// }

// function mostrarPrimerDiv() {
// var segundoDiv = document.getElementByClassName("segundaCard");
//     segundoDiv.style.display = "none";
// }


let cardUnlock = 0;
let cardOne
let cardTwo
let firtsResult
let secondResult
let movimientos = 0;
let parrafo
let parrafoDos
let aciertos = 0;
let temporizador = false;
let timer = 3;
let mostrarTiempo = document.getElementById("tempo")
let tiempoRegresivo

let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numbers.sort(()=> {return Math.random() -0.5})
console.log(numbers)

function desbloquearCard(){
    for (let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numbers[i];
        tarjetaBloqueada.disabled = true;
        
    }
}

function contarTiempo(){
    tiempoRegresivo = setInterval(()=>{
        timer--;
        mostrarTiempo.innerHTML = timer;
        if (timer == 0) {
            clearInterval(tiempoRegresivo);
            desbloquearCard();
            
        }
    }, 1000);

 
    
}

// FUCION QUE MUESTRA TODAS LAS TARJETAS CUANDO TERMINA EL TIEMPO


// FUNCION DEL JUEGO
function unlockCard (id){

    if (temporizador == false) {
        contarTiempo();
        temporizador = true;
        
    }

    cardUnlock++
    if (cardUnlock == 1) {
        cardOne = document.getElementById(id);
        firtsResult = numbers[id]
        cardOne.innerHTML = firtsResult;

        // DESACTIVAR UNA CARD
        cardOne.disabled = true;
    
    }else if(cardUnlock == 2){
        cardTwo = document.getElementById(id);
        secondResult = numbers[id]
        cardTwo.innerHTML = secondResult;

         // DESACTIVAR UNA CARD
         cardTwo.disabled = true;

        // MOSTRAR MOVIMIENTOS 
        movimientos++
        parrafo = document.getElementById("movimientos")
        parrafo.innerHTML = movimientos
        
        
        if(firtsResult === secondResult){
            cardUnlock = 0;
    
            // AUMENTAR ACIERTOS
            aciertos++
            parrafoDos = document.getElementById("aciertos");
            parrafoDos.innerHTML = aciertos;
        }else{
            setTimeout(()=>{
                cardOne.innerHTML = "";
                cardTwo.innerHTML = "";
                cardOne.disabled = false;
                cardTwo.disabled = false;
                cardUnlock = 0;
            }, 2000)
        }
    }


   

    // if (firtsResult == secondResult) {
    //     cardOne.innerHTML = "si es";
    //     cardTwo.innerHTML = "si es";
    //     // AUMENTAR ACIERTOS
    //     aciertos++
    //     parrafo = document.getElementById("aciertos")
    //     parrafo.innerHTML = aciertos;
    // }
    // CANTIDAD DE MOVIMIENTOS QUE VAN DEL JUGADOR
    
}

