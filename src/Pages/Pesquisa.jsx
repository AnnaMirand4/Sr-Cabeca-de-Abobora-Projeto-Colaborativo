import PesquisarFilmes from '../components/PesquisarFilmes'
import style from '../Styles/Page/pesquisa.module.css'

const Pesquisa = () => {
  return (
    <div className={style.container}>
        <PesquisarFilmes/>
    </div>
  )
}

export default Pesquisa