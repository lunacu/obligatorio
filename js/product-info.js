//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let productsArray;
let comArray = [];

function showProductInfo(array) {

    let htmlContentCarrusel = "";
    let htmlContentToAppend = "";
    let htmlContentToRelacionados = "";
    let product = array

    htmlContentCarrusel += `
    <div id="demo" class="carousel slide" data-ride="carousel">

            <!-- The slideshow -->
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block img-fluid" src="` + product.images[0] + `">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="` + product.images[1] + `">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="` + product.images[2] + `">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid"src="` + product.images[3] + `">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="` + product.images[4] + `">
                </div>
            </div>

            <!-- Left and right controls -->
            <a class="carousel-control-prev" href="#demo" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
            </a>
            <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
            </a>
        </div>
        
        `

    htmlContentToAppend += `
    <div class="list-group-item list-group-item-action">
    <div class="row">
            <div class="col" id="` + product.name + `"> </div>
            <div class="d-flex w-100 justify-content-between">
                <div> Mondeda ` + product.currency + ` ` + product.cost + `</div>
                <div> Descripcion: ` + product.description + ` </div>
                <div> Vendidos :` + product.soldCount + `</div>
            </div>
        
   
</div>
                    
        `

    document.getElementById("prod-image-carrusel").innerHTML = htmlContentCarrusel;
    document.getElementById("prod-detail-container").innerHTML = htmlContentToAppend;

}

function showProductCom(array) {

    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let product = array[i];

        htmlContentToAppend += `
       
        <div class="list-group-item list-group-item-action">

       

        <div class="d-flex w-100 justify-content-between">
        <div class="col-3">
            <img src="img/tipitoLogin.png" class="img-thumbnail" >
        </div>
            <div Usuario: ` + product.user + `> </div>
            <div> Comentario: ` + product.description + `</div>
            <div> Fecha: ` + product.dateTime + `</div>
        </div>

    </div>      
        `
        document.getElementById("contComentarios").innerHTML = htmlContentToAppend;

    }
}


function showProductRelacionados(array) {

    let htmlContentToRelacionados = "";

    let product = array;

    htmlContentToRelacionados += `
        
        <div class="row">
  <div class="col-md-12">

    <div id="mdb-lightbox-ui"></div>

    <div class="list-group-item list-group-item-action">
    <div class="row">

      <figure class="col">
        
          <img alt="picture" src="` + product[1].imgSrc + `"
            class="img-fluid">
          <h3 class="text-center my-3">` + product[1].name + `</h3>
        </a>
      </figure>

      <figure class="col">
        
          <img alt="picture" src="` + product[3].imgSrc + `"
            class="img-fluid" />
          <h3 class="text-center my-3">` + product[3].name + `</h3>
        </a>
      </figure>

    </div>
    </div>

  </div>
</div>


        `

    document.getElementById("relacionados-image-carrusel").innerHTML = htmlContentToRelacionados;


}




document.addEventListener("DOMContentLoaded", function(e) {
    showSpinner();
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            hideSpinner();
            productsArray = resultObj.data;
            //Muestro los productos
            showProductInfo(productsArray);

        }
    });

    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            hideSpinner();
            productsArray = resultObj.data;
            //Muestro los productos
            showProductCom(productsArray);

        }
    });

    getJSONData(PRODUCTS_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            hideSpinner();
            productsArray = resultObj.data;
            //Muestro los productos
            showProductRelacionados(productsArray);

        }
    });
});