import '../styles/globals.css';
import Topo from "./components/Topo"

export default function Home() {
  return (
    <div>
      <Topo/>
      <div className="appDiv">
          <div className="font-bold text-blue-700 text-">Curso de react NextTypescript</div>
          <div className="bg-slate-400 text-orange-200 font-bold pl-1 pr-1 rounded-md">React</div>
      </div>
    </div>   
  )
}
