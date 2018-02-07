if( navigator.userAgent.match(/Mobile Safari/i)|| navigator.userAgent.match(/webOS/i)|| navigator.userAgent.match(/iPhone/i)|| navigator.userAgent.match(/iPod/i)|| navigator.userAgent.match(/BlackBerry/i)|| navigator.userAgent.match(/Windows Phone/i) ) {
    var fondo1mod = document.querySelectorAll(".fondo1");
    var fondo2mod = document.querySelectorAll(".fondo2");
    console.log("Es un mobil");
    fondo1mod.style.background="rgba(128, 159, 255, 0.7)";
    fondo1mod.style.background="rgba(0, 163, 204, 0.7)";
}else if(/Android|iPad/i.test(navigator.userAgent)){
    var fondo1mod = document.querySelectorAll(".fondo1");
    var fondo2mod = document.querySelectorAll(".fondo2");
    console.log("Es una tablet");
    fondo1mod.style.background="rgba(134, 89, 45, 0.7)";
    fondo1mod.style.background="rgba(230, 153, 0, 0.7)";

}else{
    var fondo1mod = document.querySelectorAll(".fondo1");
    var fondo2mod = document.querySelectorAll(".fondo2");
    console.log("Es una desktop");
    fondo1mod.style.background="rgba(64, 191, 64, 0.7)";
    fondo1mod.style.background="rgba(0, 255, 191, 0.7)";
}