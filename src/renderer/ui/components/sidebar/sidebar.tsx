import { Package, Robot, ArchiveBox, ArrowUDownLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import styles from './sidebar.module.scss'

export const Sidebar = () => {
  let navigate = useNavigate()

  return (
    <aside className={styles.sidebar}>
      <div id="logoDaAPP" className={styles.logo}>
        <Robot size={25} weight="regular" className={styles.sidebarImage1} />
      </div>
      <button
        type="button"
        id="botaoCadastroProdutos"
        className={styles.sideButton}
        onClick={() => navigate('/cadastro')}
      >
        <ArchiveBox size={25} weight="thin" />
        <span>Cadastro de Produtos</span>
      </button>
      <button
        type="button"
        id="botaoProdutos"
        className={styles.sideButton}
        onClick={() => navigate('/produto')}
      >
        <Package size={25} weight="thin" />
        <span>Produtos</span>
      </button>
      <button
        type="button"
        id="botaoInicio"
        className={styles.indexButton}
        onClick={() => navigate('/')}
      >
        <span>Voltar para Inicio</span>
        <ArrowUDownLeft
          size={32}
          weight="thin"
          className={styles.sidebarImage1}
        />
      </button>
    </aside>
  )
}
