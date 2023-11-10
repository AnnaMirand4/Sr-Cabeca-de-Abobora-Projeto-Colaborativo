import { Link } from "react-router-dom"
import {useState} from "react";
import {TiThMenuOutline} from "react-icons/ti"
import style from "../Styles/componentes/navBar.module.css"
import logotxt from '../assets/Senhor Cabeça de Abóbora Nome com Fundo.png'
import { FaSearch } from 'react-icons/fa';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
    const handleMenuToggle = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <nav className={style.container}> 

        <div className={style.icon} onClick={handleMenuToggle}>
          <TiThMenuOutline size={25} />
        </div>
        {menuOpen && (
          <div className={style.menu}>
            <ul>
              <li><Link className={style.menuLink} to='/'>Início</Link> </li>
              <li><Link className={style.menuLink} to='/listaFilmes'>Lista de Filmes</Link></li>
            </ul>
          </div>
        )}

        <div className={style.logo}>
        <img src={logotxt} alt="Logo do Site com o nome Senhor cabeça de abóbora e uma imagem de uma abobora de halloween com um chapéu de bruxa roxo"/>
        </div>

        <div className={style.icon}>
          <Link to='/pesquisa'>
              <FaSearch color='#fc8722' size={25} />
          </Link>
        </div>
  
      </nav>
    );
  };
  
  export default Navbar;