import { useState } from "react"

    const Counter = () => {
        const [count,setCount] = useState<number>(0)
  return (
    <div>
        
        {count}
        <button onClick={() => {setCount((c) => c+1)}}>click me....</button>
        
        </div>
  )
}

export default Counter