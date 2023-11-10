import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from  'react-router-dom';
import styles from '../Styles/componentes/listagem.module.css';
import Text from './Text';
import Title from './Title';


const Listagem = () => {
  const [filmesRecentes, setFilmesRecentes] = useState([]);

  useEffect(() => {
    const fetchFilmesRecentes = async () => {
      try {
        const response = await axios.get('https://reprograma-backend-crud-projeto.onrender.com/');

        const filmes = response.data.slice(0, 5);
        setFilmesRecentes(filmes);
      } catch (error) {
        console.error('Erro ao buscar filmes recentes:', error);
      }
    };

    fetchFilmesRecentes();
  }, []); 

  return (
    <div className={styles.container}>
      <Title className={styles.containerTitle} content="FILMES" />
      <div className={styles.poster}>
      <ul>
        {filmesRecentes.map((filme) => (
          <li key={filme.id}>
          <Link to={`/sobreFilme/${filme.id}`}>
            <img
              src={filme.poster}
              alt={filme.titulo}
            />
              <Text content={filme.titulo} />
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Listagem;
