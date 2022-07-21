import { useState } from 'react'
import styles from './cadastro.module.scss'
import { ipcRenderer } from 'electron'

export const Cadastro = () => {
  const [nomeProduto, setNomeProduto] = useState('')
  const [idProduto, setIdProduto] = useState('')
  const [obsProduto, setObsProduto] = useState('')
  const [valorProduto, setValorProduto] = useState('')

  const produtoCadastro = document.querySelector('produtoCadastro')

  function handleClick() {
    const produto = {
      nome: nomeProduto,
      id: idProduto,
      obs: obsProduto,
      valor: valorProduto
    }
    ipcRenderer.send('novoNomeProduto', produto)
    alert(
      'Produto cadastrado com sucesso!. Você já pode vê-la na aba de Produtos.'
    )
  }

  return (
    <div className={styles.cadastroComponent}>
      <form id="cadastroProdutoForm" className={styles.cadastroProduto}>
        <label>
          <span className={styles.labelName}>Nome:</span>
          <input
            id="nomedoproduto"
            type="text"
            name="nomedoproduto"
            placeholder="Nome do produto"
            className={styles.inputName}
            onChange={e => {
              setNomeProduto(e.target.value)
            }}
            autoFocus
          />
        </label>
        <label>
          <span className={styles.labelName}>ID:</span>
          <input
            id="idProduto"
            type="number"
            min="0"
            name="ID"
            placeholder="Número de identificação do produto"
            className={styles.inputId}
            onChange={e => {
              setIdProduto(e.target.value)
            }}
          />
        </label>
        <label>
          <span className={styles.labelName}>Observações:</span>
          <input
            id="obsProduto"
            type="text"
            name="observações"
            placeholder="Mais detalhes do produto"
            className={styles.inputObservacoes}
            onChange={e => {
              setObsProduto(e.target.value)
            }}
          />
        </label>
        <label>
          <span className={styles.labelName}>Valor:</span>
          <input
            id="obsProduto"
            type="number"
            name="valor"
            min="0"
            placeholder="R$0,00."
            className={styles.inputValor}
            onChange={e => {
              setValorProduto(e.target.value)
            }}
          />
        </label>
        <button
          id="produtoCadastro"
          type="submit"
          className={styles.buttonAdicionar}
          onClick={handleClick}
        >
          Adicionar
        </button>
      </form>
    </div>
  )
}
