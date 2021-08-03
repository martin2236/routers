export function crearInbox(){
const div = document.createElement("div");
div.innerHTML = `
<h3 class="mail__cont-h3">inbox</h3>
<div class="mail__cont-noti">
    <p class="mail__cont-noti--p">un email</p>
    <img class="mail__cont-noti--img" src="./src/imagenes/Polygon 1.png" alt="boton">
</div> 
<div class="mail__cont-noti">
    <p class="mail__cont-noti--p">un email</p>
    <img class="mail__cont-noti--img" src="./src/imagenes/Polygon 1.png" alt="boton">
</div> 

`
return div
}