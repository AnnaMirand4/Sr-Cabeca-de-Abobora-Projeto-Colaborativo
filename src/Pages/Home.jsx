import style from '../Styles/Page/home.module.css'
import Listagem from '../components/Listagem'
import Title from '../components/Title'
import Subtitle from '../components/Subtitle'
import logoImage from '../assets/Senhor Cabeça de Abóbora Favcon com Fundo Cinza.png'
import Text from '../components/Text'

const Home = () => {
  return (
    <>
    <main className={style.container}>
      <img src={logoImage} alt="Logo do Site com a imagem do Senhor Cabeça de Abóbora. Uma abóbora moranga caracterizada de halloween, com olhos e nariz triangulares, soriso macabro um chapéu de bruxa na cor roxo" />
      <div>
      <Title content='Sr. Cabeça de abóbora em: Noite de Todos os Santos Curatorial'/>
      <Subtitle content= 'Bem-vindos apaixonados por folcore! Esta é a jornada única no mundo da sétima arte! Aqui você vai explorar o meu papel de curador. Suas percepções sobre o bem e o mal vão se expandir E seus horizontes culturais serão ampliados.'/>
      <Text content='É um prazer estar diante de você para falar sobre o mundo fascinante da curadoria e como esse papel crucial molda nossa experiência cinematográfica. Eu selecionei, preservei e apresento ciações artisticas de maneira que vão além da simples projeção na tela. 
      Mais do que apenas um entendimento, tenho uma compreensão profunda da história do cinema, dos diferentes gêneros e um olhar refinado para identificar obras que merecem destaque. 
      Cada seleção foi feita com cuidado, levando em consideração temas, estilos e mensagens que ressoam com diferentes público-alvo.
      Busquei filmes, séries e desenhos de artistas de diferentes origens culturais, étnicas e sociais. Assim, proporciono à vocês uma visão global e inclusiva do mundo.
      Solte a bruxa, livre-se dos fantasmas e assista!'/>
      <Listagem />
      </div> 
    </main>
    </>
    
  )
}

export default Home