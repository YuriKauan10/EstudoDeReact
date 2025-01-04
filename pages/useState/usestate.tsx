import { useState } from "react"

export default function Usestate(){
    const [count, setCount] = useState<number>(0)

    function contador(){
        setCount(count + 1)
    }

    return (
        <div>
            usestate
            <div>{count}</div>
            <button onClick = {contador}>add</button>
        </div>
    )
}