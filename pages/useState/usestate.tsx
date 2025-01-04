import { useState } from "react"
import DisplayState from "../components/DisplayState"

export default function Usestate(){
    const [count, setCount] = useState<number>(0)

    function adicionar(){
        setCount(count + 1)
    }

    function subtrair(){
        setCount(count - 1)
    }

    return (
        <div>
            usestate
            <DisplayState valor={count}></DisplayState>
            <button className="bg-zinc-700 text-white rounded-md p-1 m-1 hover:bg-zinc-800" onClick = {adicionar}>adicionar</button>
            <button className="bg-zinc-700 text-white rounded-md p-1 hover:bg-zinc-800" onClick = {subtrair}>subtrair</button>
        </div>
    )
}