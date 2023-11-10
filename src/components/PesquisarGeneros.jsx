import styles from '../Styles/componentes/pesquisarGeneros.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Text from './Text';


const PesquisarGeneros = () => {
  const [genero, setGenero] = useState([]);
  const [selecionarGenero, setSelecionarGenero] = useState('');
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const pegarGenero = async () => {
      try {
        const response = await axios.get('https://reprograma-backend-crud-projeto.onrender.com/genero/Terror');
        setGenero(response.data.genero);
      } catch (error) {
        console.error('Erro ao buscar o gênero:', error);
      }
    };
    pegarGenero();
  }, []);

  useEffect(() => {
    const pegarFilme = async () => {
      if (selecionarGenero) {
        try {
          const response = await axios.get('https://reprograma-backend-crud-projeto.onrender.com/', {
            params: {
              with_genres: selecionarGenero,
            },
          });
          setFilmes(response.data.results);
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
      <section className={styles.container}>
        <label htmlFor="generoSelecionado">Selecione um gênero:</label>
        <select id="generoSelecionado" value={selecionarGenero} onChange={handleChangeGenre}>
          <option value="">Selecione...</option>
          {genero.map((genero) => (
            <option key={genero.id} value={genero.id}>
              {genero.name}
            </option>
          ))}
        </select>

        {selecionarGenero && <h2>Filmes do Gênero {genero.find((genero) => genero.id === parseInt(selecionarGenero))?.name}:</h2>}
        <div className={styles.poster}>
          <ul>
            {filmes.map((filme) => (
              <li key={filme.id}>
                {filme.backdrop_path && (
                  <Link to={`/sobreFilme/${filme.id}`}>
                    <img className={styles.posterFilme} src={filme.poster} alt={filme.titulo} />
                  </Link>
                )}
                <Text content={filme.titulo} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default PesquisarGeneros;