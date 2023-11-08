import { useState, useEffect } from 'react';
import axios from 'axios'
import style from '../styles/componentes/listagem.module.css'
import Subtitle from '../components/Subtitle'
import Text from './Text'


const Listagem = () => {
    const [filme, setFilme] = useState([])

    useEffect(()=> {
        const getFilme = async () => {
      
          try {
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                params: {
                  api_key: 'e753cc6024016884351bf6a084813ac0',
                },
              });
              setFilme(response.data.results);
      
          } catch (error) {
      
            console.error("Erro ao pegar o filme:". error)
            
          }
      
      }
      getFilme()


      }, []);


  return (
    <>
    <div className= {style.cardContainer}>
        
        {filme.map (filme => {
        
            <div key={filme.id} className={style.filmCard}>

            <Subtitle content='Título: ' />
            <Text content={filme.title} />
            <Subtitle content='Sinopse: ' />
            <Text content={filme.overview} />
                
            </div>
               
        
        
        })

        }
    </div>
    </>
  )
}

export default Listagem