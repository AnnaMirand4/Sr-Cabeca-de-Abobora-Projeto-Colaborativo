import styles from '../Styles/componentes/pesquisarGeneros.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

const PesquisarGeneros = () => {
  const [genero, setGenero] = useState([]);
  const [selecionarGenero, setSelecionarGenero] = useState('');
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const pegarGenero = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
          params: {
            api_key: 'e753cc6024016884351bf6a084813ac0',
          },
        });
        setGenero(response.data.genres);
      } catch (error) {
        console.error('Erro ao buscar o gênero:', error);
      }
    };
    pegarGenero();
    console.log(pegarGenero)
  }, []);
  

  useEffect(() => {
    const pegarFilme = async () => {
      if (selecionarGenero) {
        try {
          const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
            params: {
              api_key: 'e753cc6024016884351bf6a084813ac0',
              with_genres: selecionarGenero,
            },
          });
          setFilmes(response.data.results);
          console.log(response.data.results)
        } catch (error) {
          console.error('Erro ao buscar filme:', error);
        }
      }
    };
    pegarFilme();
  }, [selecionarGenero]);

  const handleChangeGenre = (e) => {
    setSelecionarGenero(e.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <label htmlFor="generoSelecionado">Selecione um gênero:</label>
        <select id="generoSelecionado" value={selecionarGenero} onChange={handleChangeGenre}>
          <option value="">Selecione...</option>
          {genero.map((genre) => (
            <option key={genre.id} value={genre.id}>
              {genre.name}
            </option>
          ))}
        </select>


        {selecionarGenero && <h2>Filmes do Gênero {genero.find((genre) => genre.id === parseInt(selecionarGenero))?.name}:</h2>}

        <ul>
          {filmes.map((filme) => (
            <li key={filme.id}>
            {filme.backdrop_path && (
              <Link to={`/sobreFilme/${filme.id}`}>
                <img className={styles.posterFilme} src={`${baseUrl}${filme.poster_path}`} alt={filme.title} />
              </Link>
            )}
           {filme.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default PesquisarGeneros;
