import styles from './indexmenu.module.scss'

export const Indexmenu = () => {
  return (
    <div className={styles.menu}>
      <p className={styles.titulo}>Controle de Produtos</p>
      <div className={styles.menuButtons}>
        <button className={styles.menuButton1}>Cadastre um Produto</button>
        <button className={styles.menuButton2}>
          Veja os produtos <br />
          já cadastrados
        </button>
      </div>
    </div>
  )
}
