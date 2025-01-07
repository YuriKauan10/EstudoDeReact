import { useState } from "react"
import DisplayState from "../components/DisplayState"

export default function Usestate(){
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            usestate
            <DisplayState valor={count} fvalor = {setCount}></DisplayState>
        </div>
    )
}