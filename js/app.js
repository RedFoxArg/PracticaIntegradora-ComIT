/* Index */
$("#search-btn").on("click", function() {
    let apiKey = "2fy56ZbcakH7Vg1lRLn247UzbigOyTOa";
    let busqueda = document.getElementById("search-input");
    /* 
    let data = {
        type: "GET",
        url: "api.giphy.com/v1/gifs/search",
        api_key: "2fy56ZbcakH7Vg1lRLn247UzbigOyTOa",
        data: busqueda,
        dataType: "json",
        success: (response) => {console.log(response)},
        error: (response) => {console.log(response)}
    };
    $.ajax({data});
    */
   /* if(window.location != "./index.html"){
       window.location.href = "./index.html";
   } */
    if(busqueda.value != ""){
        let search = busqueda.value;
        $.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${search}`, (response) => {
            // Averiguar cómo redireccionar si la búsqueda se inicio en la página de contacto (y no perder la entrada del usuario).
            /*
                if(window.location.href.indexOf("index.html") < 1){
                    window.location.href = "./index.html";   
                }
            */
            $("#content").empty();
            $("#match-info").empty();

            $("#match-info").append(`
                <div class="col my-4">
                    <h5>We found ${response.data.length} results that matches with the search "${search}"</h5>
                </div>
            `);
            /* console.log(`busqueda: ${busqueda.value}`);
            console.log(`search: ${search}`); */
            response.data.forEach(e => {
                $("#content").append(`
                    <div class="col">
                        <div class="card">
                            <img src="${e.images.downsized.url}" class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${e.title}</h5>
                            <p class="card-text">${e.username}</p>
                            </div>
                        </div>
                    </div>
                `);
            });
            // console.log(response.data);
        });
    }
    busqueda.value = "";            
});

/* Form Confirmation */
$(document).ready(function(){
    const urlEnviada = window.location.search;
    const urlParms = new URLSearchParams(urlEnviada);

    $("#texto-confirmacion").append(`<p>
        Nombre: ${urlParms.get("lastName")}, ${urlParms.get("firstName")}
        Contacto: ${urlParms.get("e-mail")} | ${urlParms.get("phoneNumber")}
        Mensaje: ${urlParms.get("message")}
    </p>`);
});