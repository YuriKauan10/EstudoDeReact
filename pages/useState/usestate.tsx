import { useState } from "react"
import DisplayState from "../components/DisplayState"
import Topo from "../components/Topo"

export default function Usestate(){
    const [count, setCount] = useState<number>(0)

    return (
        <div>
            <Topo/>
            usestate
            <DisplayState valor={count} fvalor = {setCount}></DisplayState>
        </div>
    )
}