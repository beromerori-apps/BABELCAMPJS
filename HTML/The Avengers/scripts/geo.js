// El navegador soporta geolocalización
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        successHandler, // manejador de respuesta correcta
        function() {}, // manejado de errores
        {} // opciones
    );
}
// El navegador no soporta geolocalización
else { /* Código*/ }

function successHandler(data) {
    var coords = data.coords;
    console.log("Latitud", coords.latitude);
    console.log("Longitud", coords.longitude);
    console.log("Precisión", coords.accuracy);
    console.log("Altitud", coords.altitude);
    console.log("Precisión de altitud", coords.altitudeAccuracy);
    // The heading as degrees clockwise from North
    console.log("Preguntar a marinero", coords.heading);
    console.log("Velocidad", coords.speed);
    var API_KEY = 'AIzaSyBgHxMgDI039GioV940S_3j_hFmlxsGVog';
    //var API_KEY = 'AIzaSyCStpBXv25-2qVcyPiFJWeqYOEg2OARry4';
    var iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps/embed/v1/place?key=' + API_KEY + '&q=' + coords.latitude + ',' + coords.longitude;
    iframe.width = '500';
    iframe.height = '500';
    document.body.appendChild(iframe);
    // <iframe
    //   width="600"
    //   height="450"
    //   frameborder="0" style="border:0"
    //   src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY
    //     &q=Lat,Long" allowfullscreen>
    // </iframe>
}
