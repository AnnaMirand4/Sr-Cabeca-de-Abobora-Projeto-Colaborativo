import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../Styles/componentes/listagem.module.css';
import Subtitle from './Subtitle';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

const Listagem = () => {
  const [filmesRecentes, setFilmesRecentes] = useState([]);

  useEffect(() => {
    const fetchFilmesRecentes = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
          params: {
            api_key: 'e753cc6024016884351bf6a084813ac0',
          },
        });

        const filmes = response.data.results.slice(0, 10);
        setFilmesRecentes(filmes);
      } catch (error) {
        console.error('Erro ao buscar filmes recentes:', error);
      }
    };

    fetchFilmesRecentes();
  }, []); 

  return (
    <div className={styles.container}>
      <Subtitle content="Filmes Mais Recentes" />
      <ul>
        {filmesRecentes.map((filme) => (
          <li key={filme.id}>
            <Link to={`/sobreFilme/${filme.id}`}>
              <img
                src={`${baseUrl}${filme.poster_path}`}
                alt={filme.title}
              />
              <p>{filme.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listagem;
