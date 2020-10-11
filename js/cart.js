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
                    <a href="/checkout?token=debf3cee724db262de7e1d7f9da3cc18" class="btn btn-primary btn-block" title="Proceder al Pago">Pagar</a>

                    <a class="btn btn-link btn-block"  href="products.html">← Continúa Comprando</a>
                </div>
            </div>
        </div>
    </div>
`;

    }

}




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