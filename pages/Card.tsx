

function Card(props: any){
    return (
        <div className="flex flex-col border border-red-700 rounded-sm ">
            <div className="cursor-pointer">{props.produto}</div>
            <div className="cursor-pointer">{props.valor}</div>
        </div>
    )
}

export default Card