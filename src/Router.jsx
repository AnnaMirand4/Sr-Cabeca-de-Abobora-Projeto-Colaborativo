import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import ListaFilmes from './Pages/ListaFilmes.jsx'
import SobreFilme from './Pages/SobreFilme.jsx'
import Navbar from './components/NavBar'
import Footer from './components/Footer.jsx'
import Pesquisa from './Pages/Pesquisa.jsx'

const Router = () => {
    return(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/listaFilmes' element= {<ListaFilmes />} />
            <Route path='/sobreFilme/:filmeId' element= {<SobreFilme />} />
            <Route path='/pesquisa' element= {<Pesquisa />} />
        
        </Routes>
        <Footer content="Feito com ♡ " />
    </BrowserRouter>
    )
}

export default Router