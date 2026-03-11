interface props{
    name:string,
    price:number,
    isSpecial? : boolean
}


const ChaiCard = ({name,price,isSpecial = false}: props) => {
  return (
    <article>
        <h2>{name} {isSpecial && <span>*</span>} </h2>
        
        <p>{price}</p>
    </article>
  )
}

export default ChaiCard