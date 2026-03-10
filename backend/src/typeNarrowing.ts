const getChai = (kind : string|number) : string =>{
    if(typeof kind === "string"){
        return `making ${kind} `
    }
    return `${kind} is order number`
}


const send = (msg?: string) => {
    if(msg){
        return `sending ${msg}`
    }
    return `nothing sent ${msg}`
}

type student = {
    name: string,
    class:number
}


// function    isStudent(obj:any): obj is student{
//     return(
        
//     )
// }