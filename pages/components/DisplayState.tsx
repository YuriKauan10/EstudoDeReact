interface DisplayStateProps{
    valor: number,
    funcao: any,
    funcao2: any
}

export default function DisplayState(props: DisplayStateProps){
    return (
        <div>
            <div >
                {props.valor}
            </div>
             <button className="bg-zinc-700 text-white rounded-md p-1 m-1 hover:bg-zinc-800" onClick = {props.funcao}>adicionar</button>
             <button className="bg-zinc-700 text-white rounded-md p-1 hover:bg-zinc-800" onClick = {props.funcao2}>subtrair</button>
            </div>
    )
}