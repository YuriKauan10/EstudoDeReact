import '../styles/globals.css';
import Topo from "./Topo"
import Card from './Card';

export default function Home() {
  return (
    <div>
      <Topo/>
      <div className="appDiv">
        <div className="font-bold text-blue-700 text-">Curso de react NextTypescript</div>
        <div className="bg-slate-400 text-orange-200 font-bold pl-1 pr-1 rounded-md">React</div>
      </div>
      <div className = 'flex justify-center gap-3 m-3'>
        <Card produto = {'Mouse'} valor = {40.00} desconto = {10}/>
        <Card produto = {'Teclado'} valor = {60.00} desconto = {0}/>
        <Card produto = {'Monitor'} valor = {450.00} desconto = {2}/>
        <Card produto = {'CPU'} valor = {750.00} desconto = {50}/>
      </div>
    </div>   
  )
}
