import { Sidebar } from '../../components/sidebar/sidebar'
import { Indexmenu } from '../../components/indexmenu/indexmenu'


import styles from '../../App.module.scss'

export const PaginaInicial = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Indexmenu />
    </div>
  )
}
