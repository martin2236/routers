import { crearInbox } from "./inbox-comp/inbox-comp"
import { crearSent } from "./sent-comp/sent-comp"
import { buscaRutas } from "./index"
export function router(direccion){

    const rutas = [
        {
            path:/\/inbox/,
            handler: crearInbox
        },
        {
            path:/\/sent/,
            handler: crearSent
        }

    ]

    for (const r of rutas){
        if (r.path.test(direccion)){
        const div =  r.handler()
        const contenedor = document.querySelector(".mail__cont")
        if(contenedor.firstChild){
        contenedor.firstChild.remove()
        }
        contenedor.appendChild(div)
        const botonMail = document.querySelectorAll(".mail__cont-noti--p")
        botonMail.forEach((item)=>{
            console.log(item)
             buscaRutas(item)
        })
       
        }
    }
}


export function goto(direccion){
 history.pushState({},"",direccion)
router(direccion)
}