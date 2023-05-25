

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
let timer = 30;
let mostrarTiempo = document.getElementById("tempo")
let tiempoRegresivo

let numbers = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]

let numerosImg = [
    {"id":1, "img":"./img/Sharon.png"},
    {"id":1, "img":"./img/Sharon.png"},
    {"id":2, "img":"./img/Dicaprio.png"},
    {"id":2, "img":"./img/Dicaprio.png"},
    {"id":3, "img":"./img/KillBill.png"},
    {"id":3, "img":"./img/KillBill.png"},
    {"id":4, "img":"./img/Landa.png"},
    {"id":4, "img":"./img/Landa.png"},
    {"id":5, "img":"./img/Mia.png"},
    {"id":5, "img":"./img/Mia.png"},
    {"id":6, "img":"./img/Mr.Pink.png"},
    {"id":6, "img":"./img/Mr.Pink.png"},
    {"id":7, "img":"./img/Samuel.png"},
    {"id":7, "img":"./img/Samuel.png"},
    {"id":8, "img":"./img/Shoshana.png"},
    {"id":8, "img":"./img/Shoshana.png"},

]

numerosImg.sort(() => {return Math.random("id") -0.5})
console.log(numerosImg)


numbers.sort(()=> {return Math.random() -0.5})
console.log(numbers)

function desbloquearCard(){
    for (let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = `<img src="./img/${numbers[i]}.png" alt="">`;
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
        cardOne.innerHTML = `<img src="./img/${firtsResult}.png" alt="">`;

        // DESACTIVAR UNA CARD
        cardOne.disabled = true;
    
    }else if(cardUnlock == 2){
        cardTwo = document.getElementById(id);
        secondResult = numbers[id]
        cardTwo.innerHTML = `<img src="./img/${secondResult}.png" alt="">`;

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


