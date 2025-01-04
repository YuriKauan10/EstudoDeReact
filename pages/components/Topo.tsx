import Link from 'next/link';

function Topo(){
    return (
        <div>
            <div className='div'>
            <p>Logo</p>
            <div className='titulo'>Yuri kauan</div>
            <div className = 'subtitulo'>Curso de react</div>
            </div>
            <nav className='flex justify-center bg-slate-500 text-white gap-4'>

            <Link href = '/'>
            <p>Home</p>
            </Link>
            <Link href={
                {
                    pathname: '/produtos/produtos',
                    query: {
                        nome: 'Yuri', curso: "React Next"
                    }
                }
            }>
            <p>Produtos</p>
            </Link>
            <Link href = '/teste/teste'>
            <p>Teste</p>
            </Link>
            </nav>
        </div>
    )
}

export default Topo