function showCartsList(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.articles.length; i++) {
        let cart = array.articles[i];

        htmlContentToAppend += `
       
        <div class="col-lg-8 mb-4 row">
        <form id="cart-update-form" method="post" action="#">
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th class="mob-hide"></th>
                            <th class="mob-hide">Precio Unitario</th>
                            <th class="table-qty">Cantidad</th>
                            <th>Subtotal</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>

                                <h3>` + cart.name + `</h3>


                            </td>
                            <td class="text-center mob-hide">

                                <img src=" ` + cart.src + ` " alt="` + cart.name + `" title="` + cart.name + `">


                            </td>
                            <td class="mob-hide">

                                <span class="order-product-price">$` + cart.unitCost + " " + cart.currency + `</span>

                            </td>
                            <td>
                            <span class=""order-product-price">` + cart.count + `</span>
                            </td>
                            <td>
                                <span class="order-product-subtotal">` + (cart.count * cart.unitCost) + `</span>
                            </td>
                            
                        </tr>

                    </tbody>
                </table>
            </div>
          
        <hr class="my-3">
        <div class="row">

        </div>
    </div>

    
</div>

</div>          
        `
        document.getElementById("carrito").innerHTML = htmlContentToAppend + `<div id="sub-total" class="col-lg-4 mb-4">
        <div class="row">
            <div class="col-12 cart-totals">
                <table class="table table-striped">
                    <tbody>
                        <tr class="totals key">
                            <td colspan="1" class="text-left"><strong>Total:` + (cart.count * cart.unitCost) + `</strong></td>
                        </tr>

                    </tbody>
                </table>

                <div class="text-center cart-actions">
                <a type="button" class="btn btn-primary btn-block" title="Proceder al Pago" data-toggle="modal" data-target="#exampleModal">
                Pagar
               </a>

                    <a class="btn btn-link btn-block"  href="products.html">← Continúa Comprando</a>
                </div>
            </div>
        </div>
    </div>
`;

    }

}

//semana de mudanza tuve poco tiempo no termine de resolver esto.


// function cart() {
//     let checker = new RegExp('^[a-zA-Z0-9\-\]{5-20}$');
//     console.log("prueba");
//     var Pais, Direccion, Numero, NumerodeContacto, NumerodeCuenta, NumerodeTarjeta, CodigodeSeguridad, FechadeV
//     Direccion = document.getElementById("Direccion").value;
//     Pais = document.getElementById("Pais").value;
//     Numero = document.getElementById("Numero").value;
//     NumerodeContacto = document.getElementById("Contacto").value;
//     NumerodeCuenta = document.getElementById("Cuenta").value;
//     NumerodeTarjeta = document.getElementById("Credito").value;
//     CodigodeSeguridad = document.getElementById("Codigo").value;
//     FechadeV = document.getElementById("Fecha").value;



//     if (Pais === "" || checker.test("Pais")) {
//         alert("El nombre del pais esta vacio")
//     } else if (Direccion === "" || checker.test("Direccion")) {
//         alert("La direccion esta vacio");
//         return
//     } else if (Numero === "" || checker.test("Numero")) {
//         alert("El Numero esta vacio");
//         return
//     } else if (NumerodeContacto === "" || checker.test("NumerodeContacto")) {
//         alert("El numero de contacto esta vacio")
//         return

//     } else if (NumerodeCuentas === "" || checker.test("NumerodeCuentas ")) {
//         alert("El numero de cuenta esta vacio")
//     } else if (NumerodeTarjeta === "" || checker.test("NumerodeTarjeta")) {
//         alert("El numero de tarjeta esta vacio");
//         return
//     } else if (CodigodeSeguridad === "" || checker.test("CodigodeSeguridad")) {
//         alert("El codigo de seguridad esta vacio");
//         return
//     } else if (FechadeV === "" || checker.test("FechadeV ")) {
//         alert("La fecah de vencimiento  esta vacio")
//         return


//     }
// }


document.getElementById("Banco").addEventListener("change", (e) => {
    verificarPago = true

    document.getElementById("Cuenta").disabled = false;
    document.getElementById("Credito").disabled = true;
    document.getElementById("Codigo").disabled = true;
    document.getElementById("Fecha").disabled = true;


})

document.getElementById("Tarjetaso").addEventListener("change", (e) => {
    verificarPago = true
    document.getElementById("Credito").disabled = false;
    document.getElementById("Codigo").disabled = false;
    document.getElementById("Fecha").disabled = false;
    document.getElementById("Cuenta").disabled = true;

})




//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    showSpinner();
    getJSONData(CART_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            hideSpinner();
            productsArray = resultObj.data;
            //Muestro los productos
            showCartsList(productsArray);
        }
    });
});