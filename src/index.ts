import{goto} from "./handlerRouter"
import{router} from "./handlerRouter"

export function buscaRutas(link){
    link.addEventListener("click",function rutaInbox(e){
    e.preventDefault()
   let ruta = this.getAttribute("href")
   console.log(ruta)
    goto(ruta)
})
}

function main(){
const inbox = document.querySelector(".mail__button-inbox")
const sent = document.querySelector(".mail__button-sent")
console.log(inbox)
buscaRutas(inbox)
buscaRutas(sent)

window.addEventListener("load",()=>{
    router(location.pathname)
})
}
main()