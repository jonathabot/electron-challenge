import { ProdutoTimelinePage } from './pages/produtotimeline/produtotimeline'
import { CadastroPage } from './pages/cadastroproduto/cadastroproduto'
import { PaginaInicial } from './pages/paginainicial/paginainicial'
import { HashRouter, Route, Routes } from 'react-router-dom'

import styles from './App.module.scss'

export const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PaginaInicial></PaginaInicial>} />
        <Route
          path="/produto"
          element={<ProdutoTimelinePage></ProdutoTimelinePage>}
        />
        <Route path="/cadastro" element={<CadastroPage></CadastroPage>} />
      </Routes>
    </HashRouter>
  )
}
