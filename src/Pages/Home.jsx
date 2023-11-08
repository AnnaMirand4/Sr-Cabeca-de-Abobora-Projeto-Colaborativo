import style from '../Styles/Page/home.module.css'
import Listagem from '../components/Listagem'
import Title from '../components/Title'

const Home = () => {
  return (
    <>
    <div className={style.container}>
      <Title content='Filmes' />
      <Listagem />
        
    </div>
    </>
    
  )
}

export default Home