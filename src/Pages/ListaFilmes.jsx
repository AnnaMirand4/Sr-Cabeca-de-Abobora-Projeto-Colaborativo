import PesquisarGeneros from "../components/PesquisarGeneros"
import Subtitle from "../components/Subtitle"
import style from  '../Styles/Page/listafilme.module.css'

const ListaFilmes = () => {
  return (
    <>
    <main className="container">

    <Subtitle content='Filtros de Busca' />
    <PesquisarGeneros />
    
    </main>
    </>
  )
}

export default ListaFilmes