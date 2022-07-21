import React, { useEffect, useState } from 'react'
import { getDate } from '../../common/getDate'

import { Sidebar } from './components/sidebar/sidebar'
import { Indexmenu } from './components/indexmenu/indexmenu'
import { Cadastro } from './components/cadastro/cadastro'
import { Produto } from './components/produto/produto'

import styles from './App.module.scss'

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Indexmenu />
    </div>
  )
}
