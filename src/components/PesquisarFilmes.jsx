import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../Styles/componentes/pesquisarFilmes.module.css';
import Subtitle from './Subtitle';
import Text from './Text';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

const PesquisarFilmes = () => {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [filmeEncontrado, setFilmeEncontrado] = useState(null);
  const [mostrarPesquisa, setMostrarPesquisa] = useState(false);

  const handlePesquisarFilme = async () => {
    try {
      const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'e753cc6024016884351bf6a084813ac0',
          query: termoPesquisa,
        },
      });

      const primeiroResultado = response.data.results[0];

      setFilmeEncontrado(primeiroResultado);
    } catch (error) {
      console.error('Erro ao buscar filme:', error);
      setFilmeEncontrado(null);
    }
  };

    useEffect(() => {
        if (termoPesquisa.trim() !== '') {
        handlePesquisarFilme();
        } else {
        setFilmeEncontrado(null);
        }
    }, [termoPesquisa]);

  const handleTogglePesquisa = () => {
    setMostrarPesquisa(!mostrarPesquisa);
  };

  return (
    <div className={styles.pesquisarFilmes}>
      <button onClick={handleTogglePesquisa}>
        <FaSearch />
      </button>
      {mostrarPesquisa && (
        <>
          <label htmlFor="termoPesquisa">Pesquisar Filme:</label>
          <input
            type="text"
            id="termoPesquisa"
            value={termoPesquisa}
            onChange={(e) => setTermoPesquisa(e.target.value)}
          />
        </>
      )}
      {filmeEncontrado ? (
        <div>
            <Subtitle content= 'Filme Encontrado!' />
          <Link to={`/sobreFilme/${filmeEncontrado.id}`}>
            <img
              className={styles.posterFilme}
              src={`${baseUrl}${filmeEncontrado.backdrop_path}`}
              alt={filmeEncontrado.title}
            />
          </Link>
          <Subtitle content={filmeEncontrado.title} />
        </div>
      ) : (
        mostrarPesquisa && (
            <Text content= 'Filme não encontrado no site' />
        )
      )}
    </div>
  );
};

export default PesquisarFilmes;
