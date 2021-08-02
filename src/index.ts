import{goto} from "./handlerRouter"
import{router} from "./handlerRouter"

function main(){
const botonMail = document.querySelector(".mail__cont-noti--img")
const inbox = document.querySelector(".mail__button-inbox")
const sent = document.querySelector(".mail__button-sent")

inbox.addEventListener("click",(e)=>{
    e.stopPropagation()
    goto("/inbox")
})

inbox.addEventListener("click",(e)=>{
    e.stopPropagation()
    goto("/sent")
})

window.addEventListener("load",()=>{
    router(location.pathname)
})
}
main()