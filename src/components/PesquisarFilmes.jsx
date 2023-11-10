import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styles from '../Styles/componentes/pesquisarFilmes.module.css';
import Subtitle from './Subtitle';
import Text from './Text';



const PesquisarFilmes = () => {
  const [termoPesquisa, setTermoPesquisa] = useState('');
  const [filmeEncontrado, setFilmeEncontrado] = useState(null);

  const handlePesquisarFilme = async () => {
    try {
      const response = await axios.get('https://reprograma-backend-crud-projeto.onrender.com/', {
        params: {
          query: termoPesquisa,
        },
      });

      const primeiroResultado =response.data[0];
      

      setFilmeEncontrado(primeiroResultado);
      console.log(response.data)
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
      {termoPesquisa.trim() !== '' && filmeEncontrado ? (
        <div className={styles.filmeContainer}>
          <Subtitle content="Filme Encontrado!" />
          <Link to={`/sobreFilme/${filmeEncontrado.id}`}>
            <img
              className={styles.posterFilme}
              src={filmeEncontrado.poster}
              alt={filmeEncontrado.titulo}
            />
          </Link>
          <Subtitle content={filmeEncontrado.titulo} />
        </div>
      ) : (
        termoPesquisa.trim() !== '' && (
          <Text content="Filme não encontrado no site" />
        )
      )}
    </div>
    </>
  );
};

export default PesquisarFilmes;