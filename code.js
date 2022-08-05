const collections = [
    { nombre: 'tshirts', modelo: ['Good News', 'Simple Gospel', 'Love wins', 'No fear'] },
    { nombre: 'hoodie', modelo: ['white', 'black', 'grey'] },
    { nombre: 'jeans', modelo: ['Rock', 'Pop', 'Jazz', 'Fusion'] },
    { nombre: 'caps', modelo: ['He Loves', 'She loves', 'We are', 'They Can'] },
]

const clothe = [
    { nombre: 'Good News', precio: 2000, talles: ['s', 'm', 'l', 'xl', 'xxl'] },
    { nombre: 'Simple Gospel', precio: 1900, talles: [, 'm', 'l', 'xl', 'xxl'] },
    { nombre: 'Love wins', precio: 1900, talles: ['s', 'm', 'l'] },
    { nombre: 'No fear', precio: 1700, talles: ['s', 'm', 'l'] },
    { nombre: 'white', precio: 1800, talles: ['s', 'l', 'xl'] },
    { nombre: 'black', precio: 1800, talles: ['s', 'm', 'l', 'xl', 'xxl'] },
    { nombre: 'grey', precio: 2100, talles: ['s', 'm', 'xl', 'xxl'] },
    { nombre: 'Rock', precio: 1700, talles: ['m', 'l', 'xl'] },
    { nombre: 'Pop', precio: 1900, talles: ['s', 'm', 'l', 'xl'] },
    { nombre: 'Jazz', precio: 1700, talles: ['s', 'm', 'l', 'xxl'] },
    { nombre: 'Fusion', precio: 2000, talles: ['s', 'l', 'xl', 'xxl'] },
    { nombre: 'He Loves', precio: 1800, talles: ['s', 'm', 'l', 'xl', 'xxl'] },
    { nombre: 'She loves', precio: 2100, talles: ['s', 'm', 'xl', 'xxl'] },
    { nombre: 'We are', precio: 2000, talles: ['m', 'l', 'xl', 'xxl'] },
    { nombre: 'They Can', precio: 1900, talles: ['s', 'm', 'l', 'xxl'] },
]

let precioClothe = 0;
let carrito = [];
let totalCarrito = 0;

function mostrarMenu() {
    let input = prompt("Choose your collection:\n tshirts\n hoodie\n jeans\n caps\n-'Carrito' para ver el carrito.");

    let modelo = collections.find((collections) => {
        return collections.nombre == input
    }).modelo;
    
    //let modelo = encontrarCollections(input).modelo;


    clotheFiltradas = clothe.filter((clothe) => {
        return modelo.includes(clothe.nombre)
    })
    
    //clotheFiltradas = filtrarclothe(clothe);

    
    let infoClothe = clotheFiltradas.map(clothe => {
        return clothe.nombre + " $" + clothe.precio
    })
    

    /*let infoClothe = []
    for (let i = 0; i < ClotheFiltradas.length; i++) {
        infoRemeras.push( ClotheFiltradas[i].nombre + " $" + remerasFiltradas[i].precio)
    }*/

    /*
    const infoRemeras = [
        'Good News $1500',
        'Simple Gospel $1500',
        'Love wins $1700',
    ]
    */

    listamodelo = infoClothe.join("\n");
    let style = prompt("Available:\n" + listamodelo);

    let instock = consultarStock(style);

    if (!instock) {
        alert("Sorry, we don;t have more stock " + diseño);
        return;
    }

    let amount = prompt("Thanks for choose " + diseño + ". How many do you want for $" + precioClothe + " each one:");

    let itemIndex = carrito.findIndex(item => {
        return item.estampa.toLowerCase() == diseño.toLowerCase()
    })

    if (itemIndex >= 0) {
        carrito[itemIndex].amount += parseInt(amount);
        carrito[itemIndex].subtotal += amount * precioClothe;
    } else {
        carrito.push({
            modelo: diseño,
            amount: parseInt(camount),
            subtotal: amount * precioClothe
        })
    }

    totalCarrito += (cantidad * precioClothe)
    console.log(carrito);
    console.log(totalCarrito);

    alert("You add " +diseño+ " to the shopping cart. The total is $" + totalCarrito);

    mostrarMenu();
}

function filtrarclothe(modelo) {
    let clotheFiltradas = [];

    for (let i = 0; i < clothe.length; i++) {
        if (modelo.indexOf(clothe[i].nombre) >= 0) {
            clotheFiltradas.push(clothe[i]);
        }
    }

    return remerasFiltradas;
}

function encontrarCollections(collections) {
    for (let i = 0; i < categorias.length; i++) {
        if (collections[i].nombre == collections) return collections[i];
    }
    return;
}

mostrarMenu();

function consultarStock(diseño) {
    infoClothe = remeras.find(Clothe => {
        return Clothe.nombre.toLowerCase() == diseño.toLowerCase();
    });

    if (!infoClothe) return false;

    precioClothe = infoClothe.precio;
    return true;
}

/*
const modelos= clothe.map((clothe)=>{
    return{
        nombre:clothe.nombre,
        precio:clothe.precio,
    }
})
console.table(modelos);*/
console.table(nombre)
const carritoFinal = nombre.filter((clothe) => clothe.diseño.includes("carritoFinal"))
console.table(carritoFinal)
