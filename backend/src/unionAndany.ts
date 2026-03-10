let subs : number|string = "10M"

// in prod.

let apiReq : 'pending' | 'success' | 'error' = 'pending'

apiReq = 'success'

const orders = ['12','2','21']

let crrOrder : undefined|string;

for (let element of orders) {
    if(element === '28'){
        crrOrder = element
        break
    }
}


console.log(crrOrder);
