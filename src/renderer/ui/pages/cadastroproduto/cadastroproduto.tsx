import { Sidebar } from '../../components/sidebar/sidebar'
import { Cadastro } from '../../components/cadastro/cadastro'

import styles from '../../App.module.scss'

export const CadastroPage = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Cadastro />
    </div>
  )

}
