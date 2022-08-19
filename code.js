const remeras = [
    { nombre:"forgive", precio: 2000 }, 
    { nombre:"good", precio: 3000 }, 
    { nombre:"grateful", precio: 2000 }, 
    { nombre:"pure", precio: 2000 }, 
]; 

let carrito= [ ]

let seleccion = prompt( "¿Quieres comprar una de nuestras remeras, ¿si o no?")

while(seleccion != "si" && seleccion != "no") {
    alert ("por favor ingresa si o no")
    seleccion = prompt( "¿Quieres comprar una de nuestras remeras, ¿si o no?")
}

if (seleccion == "si") {
    alert ("a continuacion nuestros modelos de remeras")
    let todasLasRemeras = remeras.map (
        (remeras) => remeras.nombre + remeras.precio + "$"
    ) ; 
    alert (todasLasRemeras.join (" - "))
} else if (seleccion == "no") {
alert("Gracias por visitarnos, te esperamos pronto.")
}

while(seleccion != "no") {
let producto = prompt("Agrega una remera a tu carrito")
let precio = 0

if (producto == "forgive" || producto == "good" || producto == "grateful" || producto == "pure"){
    switch (producto) {
        case "forgive" :
            precio = 2000;
            break; 
            case "good" :
            precio = 3000;
            break; 
            case "grateful" :
            precio = 2000;
            break; 
            case "pure" :
            precio = 2000;
            break; 
            default:
                break; 
    
    }
    let unidades = parseInt(prompt("¿cuantas unidades quieres?"))
    
    carrito.push({producto, unidades, precio})
    console.log (carrito)
} else { 
    alert("no tenemos el producto indicado")
}

seleccion = prompt ("¿deseas seguir comprando?")

while(seleccion === "no") {
    alert("Excelente")
    carrito.forEach((carritoFinal) => { 
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
        total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
    } )
    break; 

}
} 

const total =  carrito.reduce ((acc, el) =>  acc + el.precio * el.unidades, 0)
console.log(`el total final de su compra es: ${total}`)


// EVENTOS
let miBoton=document.getElementById("miBoton");
miBoton.addEventListener("click", agregar); 
function agregar() {
    // alert ("Agregaste modelo FORGIVE al Carrito");
Swal.fire( "Remera FORGIVE " +
    "agregada al carrito",
    "success" ) 

}

let miBoton2=document.getElementById("miBoton2");
miBoton2.addEventListener("click", agregar2); 
function agregar2() {
    // alert ("Agregaste modelo GOOD al Carrito");
    Swal.fire( "Remera GOOD " +
    "agregada al carrito",
    "success" ) 
}
let miBoton3=document.getElementById("miBoton3");
miBoton3.addEventListener("click", agregar3); 
function agregar3() {
    // alert ("Agregaste  modelo GRATEFUL al Carrito");
    Swal.fire( "Remera GRATEFUL " +
    "agregada al carrito",
    "success" ) 
}
let miBoton4=document.getElementById("miBoton4");
miBoton4.addEventListener("click", agregar4); 
function agregar4() {
    // alert ("Agregaste modelo PURE al Carrito");
    Swal.fire( "Remera PURE " +
    "agregada al carrito",
    "success" ) 
}


// JSON Y STORAGE
const guardarLocal= (nombre, precio) => {localStorage.setItem (nombre,precio) }; 
guardarLocal("listaRemeras", JSON.stringify(remeras)); 

localStorage.setItem("carrito",JSON.stringify(carrito));

