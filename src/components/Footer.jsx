import styles from '../Styles/componentes/footer.module.css'

const Footer = ({content}) => {
  return (
    <footer className={styles.container}>
      <p className={styles.footerContent}>{content}</p>
    </footer>
  )
}

export default Footer
