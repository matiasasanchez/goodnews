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

