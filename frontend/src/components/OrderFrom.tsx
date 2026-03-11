import React, { useState } from "react";

interface props{
    onSubmit(order:{name:string;cups:number}):void
}


const OrderFrom = ({onSubmit}:props) => {
    const [name, setName] = useState<string>("")
    const [cups, setCups] = useState<number>(1)
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit({name,cups});
    }
    
    
  return (
    <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setName(e.target.value)}}/>
            
        <label>cups</label>
        <input type="number" onChange={(e:React.ChangeEvent<HTMLInputElement>) => {setCups(Number(e.target.value))}}/>
            
    </form>
  )
}

export default OrderFrom