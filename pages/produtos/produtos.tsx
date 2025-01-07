import Card from "../components/Card"
import Topo from "../components/Topo"
import { useRouter } from "next/router"

function Desconto2(v: number, d: number){
    return v-(d/2)
}


const produtos = [
    {
      produto:'Mouse',
      valor:19.9,
      desconto:'0',
      disponivel: true
    },
    {
      produto:'Teclado',
      valor:49.0,
      desconto:5,
      disponivel: true
    },
    {
      produto:'Monitor',
      valor:29.9,
      desconto:10,
      disponivel: true
    },
    {
      produto:'CPU',
      valor:69.9,
      desconto:1,
      disponivel: true
    },
    {
      produto:'Caixa de som',
      valor:39.9,
      desconto: 0,
      disponivel: false
    },
  ]

export default function ProdutosPagina(){
  const router = useRouter()
    const {nome, curso} = router.query
    console.log(nome, curso)
    return(
      <div>
      <Topo/>
      <div className="flex justify-center gap-3 m-3'">
        {
          produtos.map((element : any, index) => {
            if(element.disponivel){
              return(
              <Card key = {index} produto={element.produto} valor={element.valor} desconto = {element.desconto} funcao ={Desconto2} >  
               <div>Curso de React Next</div>
               <div>CFB Cursos</div>
              </Card>
            )}
          })
        }
      </div>
      </div>
    )
}

