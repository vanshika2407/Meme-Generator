import React from "react"
import Count from "./countt"
function Trial()
{
    const[count,setCount]=React.useState(0)
     function add()
        {
            setCount(prev=>prev+1)
        }
        function sub()
        {
           setCount(prev=>prev-1)
        }
    return(
        <div>
        <button className="add" onClick={add}>Add</button>
          <button className="sub" onClick={sub}>Subtract</button>
        <Count
            no={count}
        />
        </div>
    )
}

export default Trial;