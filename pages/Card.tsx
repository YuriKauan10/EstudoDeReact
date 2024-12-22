interface CardProps{
    produto: string,
    valor: number,
    desconto: number
}

function Card(props: CardProps){
    return (
        <div className="flex flex-col border border-red-700 rounded-sm p-2">
            <div className="cursor-pointer">Produto: {props.produto}</div>
            <div className="cursor-pointer">Valor : R${props.valor}</div>
            <div>Desconto: R${props.desconto}</div>
        </div>
    )
}

export default Card