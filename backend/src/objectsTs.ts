const obj = {
    name:"puneeth",
    classNo:2,
    isGood : true
}


// interface objType{
//     name:string,
//     classNo:number,
//     isGood:boolean
// }


class chai{
    public flavor:string = "Masala"
    
    private secret:string = 'cardamom'
    
    revel() {
        return this.secret
    }
    
}

class shop{
    protected shopName = "chai corner"
}

class branch extends shop{
    getName(){
        return this.shopName
    }
}


const c = new chai()



