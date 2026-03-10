function identity<T>(value:T): T{
    return value;
}

const identity2 = <T> (value:T):T => {
    return value
}


interface user<T>{
    name:T
}