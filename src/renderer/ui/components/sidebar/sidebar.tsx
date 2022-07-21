import { Package, Robot, ArchiveBox, ArrowUDownLeft } from 'phosphor-react'

import styles from './sidebar.module.scss'

export const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <Robot size={25} weight="regular" className={styles.sidebarImage1} />
      </div>
      <button className={styles.sideButton}>
        <ArchiveBox size={25} weight="thin" />
        <text>Cadastro de Produtos</text>
      </button>
      <button className={styles.sideButton}>
        <Package size={25} weight="thin" />
        <text>Produtos</text>
      </button>
      <button className={styles.indexButton}>
        <text>Voltar para Inicio</text>
        <ArrowUDownLeft
          size={32}
          weight="thin"
          className={styles.sidebarImage1}
        />
      </button>
    </aside>
  )
}
