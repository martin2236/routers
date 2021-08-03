import{goto} from "./handlerRouter"
import{router} from "./handlerRouter"

function buscaRutas(link){
    link.addEventListener("click",function rutaInbox(e){
    e.preventDefault()
   let ruta = this.getAttribute("href")
    goto(ruta)
})
}

function main(){
const botonMail = document.querySelectorAll(".mail__cont-noti--img")
const inbox = document.querySelector(".mail__button-inbox")
const sent = document.querySelector(".mail__button-sent")
console.log(sent)
botonMail.forEach((item)=>{
    buscaRutas(item)
})
buscaRutas(inbox)
buscaRutas(sent)

window.addEventListener("load",()=>{
    router(location.pathname)
})
}
main()