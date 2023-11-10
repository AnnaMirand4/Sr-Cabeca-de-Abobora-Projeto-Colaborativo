import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../Styles/Page/sobreFilme.module.css';
import Subtitle from '../components/Subtitle';
import Text from '../components/Text';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

const SobreFilme = () => {
  const { filmeId } = useParams();
  const [detalhesDoFilme, setDetalhesDoFilme] = useState(null);

  useEffect(() => {
    const buscarDetalhesDoFilme = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${filmeId}`, {
          params: {
            api_key: 'e753cc6024016884351bf6a084813ac0',
          },
        });
        setDetalhesDoFilme(response.data);
      } catch (error) {
        console.error('Erro ao buscar detalhes do filme:', error);
      }
    };

    buscarDetalhesDoFilme();
  }, [filmeId]);

  if (!detalhesDoFilme) {
    return <p>Carregando...</p>;
  }

  return (
    <main className={styles.container}> 
      <img className={styles.posterFilme} src={`${baseUrl}${detalhesDoFilme.poster_path}`} alt={detalhesDoFilme.title} />
      <div className={styles.textContainer}>
      <Subtitle content='Título: ' />
      <Text content={detalhesDoFilme.title} />
      <Subtitle content='Sinopse: ' />
      <Text content={detalhesDoFilme.overview} />
      <Subtitle content='Ano: ' />
      <Text content={detalhesDoFilme.release_date?.substring(0, 4)} />
    </div>
    </main>
  );
};

export default SobreFilme;


// const SobreFilme = () => {
//   const { filmeId } = useParams();
//   const [detalhesDoFilme, setDetalhesDoFilme] = useState(null);
//   console.log('params', useParams());
//   console.log('filmeId', filmeId);

//   useEffect(() => {
//     console.log('filmeId', filmeId); // Verificar se filmeId está definido

//     const buscarDetalhesDoFilme = async () => {
//       try {
//         if (!filmeId) {
//           console.error('ID do filme não definido');
//           return;
//         }

//         const response = await axios.get(`https://reprograma-backend-crud-projeto.onrender.com/${filmeId}`);
//         console.log('response.data', response.data); // Adicionado para verificar a resposta
//         setDetalhesDoFilme(response.data);
//       } catch (error) {
//         console.error('Erro ao buscar detalhes do filme:', error);
//         if (error.response) {
//           console.error('Resposta do servidor:', error.response.data);
//         }
//       }
//     };

//     buscarDetalhesDoFilme();
//   }, [filmeId]);

//   if (!detalhesDoFilme) {
//     return <p>Carregando...</p>;
//   }

//   return (
//     <main className={styles.container}> 
//       <img className={styles.posterFilme} src={detalhesDoFilme.poster} alt={detalhesDoFilme.titulo} />
//       <div className={styles.textContainer}>
//       <Subtitle content='Título: ' />
//       <Text content={detalhesDoFilme.titulo} />
//       <Subtitle content='Ano: ' />
//       <Text content={detalhesDoFilme.ano} />
//       <Subtitle content='Gênero: ' />
//       <Text content={detalhesDoFilme.genero} />
//       <Subtitle content='Direção: ' />
//       <Text content={detalhesDoFilme.diretor} />
//       <Subtitle content='Sinopse: ' />
//       <Text content={detalhesDoFilme.sinopse} />
    
//       </div>
//     </main>
//   );
// };

// export default SobreFilme;
