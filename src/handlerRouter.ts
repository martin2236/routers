export function router(direccion){
console.log(direccion)
}

export function goto(direccion){
    history.pushState({},"",direccion)
}