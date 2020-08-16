var productsArray = [];




function showProductsList(array) {


    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let product = array[i];

        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
            <div class="col-3">
                        <img src="` + product.imgSrc + `" class="img-thumbnail">
                    </div>              
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div> U$D ` + product.cost + `</div>
                        <div>` + product.name + `</div>
                        <div>` + product.description + `</div>
                    </div>

                </div>
            </div>
        </div>
        `
        document.getElementById("prod-list-container").innerHTML = htmlContentToAppend;


    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e) {
    showSpinner();
    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            hideSpinner();
            productsArray = resultObj.data;
            //Muestro los productos
            showProductsList(productsArray);
        }
    });
});