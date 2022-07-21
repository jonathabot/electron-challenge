import styles from './indexmenu.module.scss'
import { useNavigate } from 'react-router-dom'

export const Indexmenu = () => {
  let navigate = useNavigate()

  return (
    <div className={styles.menu}>
      <p className={styles.titulo}>Controle de Produtos</p>
      <div className={styles.menuButtons}>
        <button
          className={styles.menuButton1}
          onClick={() => navigate('/cadastro')}
        >
          Cadastre um Produto
        </button>
        <button
          className={styles.menuButton2}
          onClick={() => navigate('/produto')}
        >
          Veja os produtos <br /> já cadastrados
        </button>
      </div>
    </div>
  )
}
