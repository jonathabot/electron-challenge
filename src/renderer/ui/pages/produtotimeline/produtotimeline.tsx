import { Sidebar } from '../../components/sidebar/sidebar'
import { Produto } from '../../components/produto/produto'

import styles from '../../App.module.scss'

export const ProdutoTimelinePage = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Produto />
    </div>
  )
}
