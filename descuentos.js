//const precioOriginal=120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){

const porcentajePrecioConDescuento =100-descuento;

const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
return precioConDescuento
}


function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const PriceValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount");
    const DiscountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(PriceValue, DiscountValue)
    
    const ResultP = document.getElementById("ResultP");

    ResultP.innerText = "El precio con descuento es $" + precioConDescuento;

}



/*
const porcentajePrecioConDescuento =100-descuento;

const precioConDescuento = (precioOriginal* porcentajePrecioConDescuento)/100;

console.log("El precio Original es " + precioOriginal )

console.log(
{precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento

}
)*/