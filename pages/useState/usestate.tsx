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
            <DisplayState valor={count} funcao = {adicionar} funcao2 = {subtrair}></DisplayState>
        </div>
    )
}