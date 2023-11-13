import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../Styles/componentes/pesquisarFilmes.module.css';
import Subtitle from './Subtitle';
import Text from './Text';

const PesquisarFilmes = () => {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [filmesEncontrados, setFilmesEncontrados] = useState([]);

  const handlePesquisarFilme = async () => {
    try {
      const response = await axios.get('https://reprograma-backend-crud-projeto.onrender.com/', {
        params: {
          query: termoPesquisa,
        },
      });

      const todosOsFilmes = response.data;
      const resultados = todosOsFilmes.filter((filme) =>
        filme.titulo.toLowerCase().includes(termoPesquisa.toLowerCase())
      );

      setFilmesEncontrados(resultados);
      console.log(resultados);
    } catch (error) {
      console.error('Erro ao buscar filme:', error);
      setFilmesEncontrados([]);
    }
  };

  useEffect(() => {
    if (termoPesquisa.trim() !== '') {
      handlePesquisarFilme();
    } else {
      setFilmesEncontrados([]);
    }
  }, [termoPesquisa]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.inputContainer}>
          <FaSearch />
          <label htmlFor="termoPesquisa">Pesquisar Filme:</label>
          <input
            type="text"
            id="termoPesquisa"
            value={termoPesquisa}
            onChange={(e) => setTermoPesquisa(e.target.value)}
          />
        </div>
        {termoPesquisa.trim() !== '' && filmesEncontrados.length > 0 ? (
          <div>
            {filmesEncontrados.map((filme) => (
              <div key={filme.id} className={styles.filmeContainer}>
                <Link to={`/sobreFilme/${filme.id}`}>
                  <img
                    className={styles.posterFilme}
                    src={filme.poster}
                    alt={filme.titulo}
                  />
                </Link>
                <Subtitle content={filme.titulo} />
              </div>
            ))}
          </div>
        ) : (
          termoPesquisa.trim() !== '' && <Text content="Filme não encontrado no site" />
        )}
      </div>
    </>
  );
};

export default PesquisarFilmes;