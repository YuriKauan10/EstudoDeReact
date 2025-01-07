import Topo from "./Topo"

interface DisplayStateProps{
    valor: number,
    fvalor: any,
}

export default function DisplayState(props: DisplayStateProps){
    function operacao(op:number){
        props.fvalor(props.valor + op)
    }
    return (
        <div>
            <div >
                {props.valor}
            </div>
             <button className="bg-zinc-700 text-white rounded-md p-1 m-1 hover:bg-zinc-800" onClick = {() => operacao(1)}>adicionar</button>
             <button className="bg-zinc-700 text-white rounded-md p-1 hover:bg-zinc-800" onClick = {() => operacao(-1)}>subtrair</button>
            </div>
    )
}