let carrito = JSON.parse(localStorage.getItem("carrito"))||[];
let productosJSON = [];
let dolarVenta;
let lista

//Evento-Cuando la ventana está cargada
window.onload=()=>{
    lista=document.getElementById("milista");
    document.getElementById("depto5").style.background="white";
    obtenerValorDolar();
    //selector y evento change
    document.getElementById("miSeleccion").setAttribute("option", "pordefecto");
    document.getElementById("miSeleccion").onchange=()=>ordenar();
};

function renderizarProductos() {
   
    console.log(productosJSON)
    for (const prod of productosJSON) {
        lista.innerHTML+=(`<li class="col-sm-3 list-group-item">
        <h3> ID: ${prod.id}</h3> 
        <img src="${prod.foto}" width="250px" height="270px">
        <H2>REME: ${prod.nombre}</H2>
        <p>Precio $ ${prod.precio}</p>
        <p>Precio U$ ${(prod.precio/dolarVenta).toFixed(1)}</p>
        <button class="btn btn-secondary" id='btn${prod.id}'>AGREGAR</button>
    </li>`);
    }
    //EVENTOS
    productosJSON.forEach(prod=> {
         //Evento para cada boton
         document.getElementById(`btn${prod.id}`).onclick= function() {
            agregarACarrito(prod);
        };
    });
}

function agregarACarrito(productoNuevo) {
    let encontrado = carrito.find(p => p.id == productoNuevo.id);
    console.log(encontrado);
    if (encontrado == undefined) {
        let prodACarrito = {
            ...productoNuevo,
            cantidad:1
        };
        carrito.push(prodACarrito);
        console.log(carrito);
        Swal.fire(
            'Nuevo producto agregado al carro',
            productoNuevo.nombre,
            'success'
        );
      
        document.getElementById("tablabody").innerHTML+=(`
            <tr id='fila${prodACarrito.id}'>
            <td> ${prodACarrito.id} </td>
            <td> ${prodACarrito.nombre}</td>
            <td id='${prodACarrito.id}'> ${prodACarrito.cantidad}</td>
            <td> ${prodACarrito.precio}</td>
            <td> <button class='btn btn-light' onclick='eliminar(${prodACarrito.id})'>🗑️</button>`);
    } else {
        
        let posicion = carrito.findIndex(p => p.id == productoNuevo.id);
        console.log(posicion);
        carrito[posicion].cantidad += 1;
        //con querySelector falla
        document.getElementById(productoNuevo.id).innerHTML=carrito[posicion].cantidad;
    }

    document.getElementById("gastoTotal").innerText=(`Total: $ ${calcularTotal()}`);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

function calcularTotal() {
    let suma = 0;
    for (const elemento of carrito) {
        suma = suma + (elemento.precio * elemento.cantidad);
    }
    return suma;
}

function eliminar(id){
    let indice=carrito.findIndex(prod => prod.id==id);
    carrito.splice(indice,1);//eliminando del carro
    let fila=document.getElementById(`fila${id}`);
    document.getElementById("tablabody").removeChild(fila);//eliminando de la tabla
    document.getElementById("gastoTotal").innerText=(`Total: $ ${calcularTotal()}`);
    localStorage.setItem("carrito",JSON.stringify(carrito));
    Swal.fire("Producto eliminado del carro!")
}

function ordenar() {
    let seleccion = document.getElementById("miSeleccion").value;
    console.log(seleccion)
    if (seleccion == "menor") {
        productosJSON.sort(function(a, b) {
            return a.precio - b.precio
        });
    } else if (seleccion == "mayor") {
        productosJSON.sort(function(a, b) {
            return b.precio - a.precio
        });
    } else if (seleccion == "alfabetico") {
        productosJSON.sort(function(a, b) {
            return a.nombre.localeCompare(b.nombre);
        });
    }
    lista.innerHTML="";
    renderizarProductos();
}

// productos.json
async function obtenerJSON() {
    const URLJSON="productos.json"
    const resp=await fetch(URLJSON)
    const data= await resp.json()
    productosJSON = data;
    renderizarProductos();
}


//API DOLAR
async function obtenerValorDolar() {
    const URLDOLAR = "https://api-dolar-argentina.herokuapp.com/api/dolarblue";
    const resp=await fetch(URLDOLAR)
    const data=await resp.json()
    document.getElementById("depto5").innerHTML+=(`<p align="center">Dolar compra: $ ${data.compra}  Dolar venta: $ ${data.venta}</p>`);
    dolarVenta = data.venta;
    
    obtenerJSON();
}