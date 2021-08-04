export function crearInbox(){
const div = document.createElement("div");
div.innerHTML = `
<h3 class="mail__cont-h3">inbox</h3>
<div class="mail__cont-noti">
    <a class="mail__cont-noti--p href="/inbox/mail">Un email</a>
    <img class="mail__cont-noti--img" src="./imagenes/Polygon 1.png" alt="boton">
</div> 
<div class="mail__cont-noti">
    <a class="mail__cont-noti--p href="/inbox/mail">Un email</a>
    <img class="mail__cont-noti--img" src="./imagenes/Polygon 1.png" alt="boton">
</div> 

`
return div
}