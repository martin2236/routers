export function crearSent(){
const div = document.createElement("div");
div.style.height = '100vh'
div.style.backgroundColor = '#FF9BB3'
div.innerHTML = `
<h3 class="mail__cont-h3">Sent</h3>
<div class="mail__cont-noti">
    <p class="mail__cont-noti--p">un email</p>
    <img class="mail__cont-noti--img" src="./imagenes/Polygon 1.png" alt="boton">
</div> 
<div class="mail__cont-noti">
    <p class="mail__cont-noti--p">un email</p>
    <img class="mail__cont-noti--img" src="./imagenes/Polygon 1.png" alt="boton">
</div> 

`
return div
}