//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let productsArray = [];

function showProductInfo(array) {

    console.log(array);
    let htmlContentToAppend = "";
    let product = array[0];



    htmlContentToAppend += `
       
         <div class="list-group-item list-group-item-action">            
                 <div class="row">
                    <div class="col-3">
                                <img src="` + product.imgSrc + `" class="img-thumbnail">
                            </div>              
                        <input type="submit" class="col" id="` + product.name + `" value="` + product.name + `">
                            <div class="d-flex w-100 justify-content-between">
                                <div> Mondeda ` + product.currency + ` ` + product.cost + `</div>  
                                <div> Descripcion: ` + product.description + ` </div>                              
                                <div> Vendidos :` + product.soldCount + `</div>
                            </div>              
                    </div> 
        </div>            
        `

    document.getElementById("prod-detail-container").innerHTML = htmlContentToAppend;
}



document.addEventListener("DOMContentLoaded", function(e) {
    showSpinner();
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            hideSpinner();
            productsArray = resultObj.data;
            //Muestro los productos
            showProductInfo(productsArray);
        }
    });
});