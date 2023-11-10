import PesquisarGeneros from "../components/PesquisarGeneros"
import Title from "../components/Title"
import style from  '../Styles/Page/listafilme.module.css'

const ListaFilmes = () => {
  return (
    <>
    <main className="container">

    <div className={style.text}> <Title content='Filtros de Busca:' /> </div>
    <PesquisarGeneros />
    
    </main>
    </>
  )
}

export default ListaFilmes