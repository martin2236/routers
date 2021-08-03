import { crearInbox } from "./inbox-comp/inbox-comp"
import { crearSent } from "./sent-comp/sent-comp"
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
    }
}


}

export function goto(direccion){
 history.pushState({},"",direccion)
router(direccion)
}