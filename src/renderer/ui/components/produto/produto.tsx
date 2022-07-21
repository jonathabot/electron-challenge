import { ipcRenderer } from 'electron'
import { render } from 'react-dom'
import styles from './produto.module.scss'
import { Trash } from 'phosphor-react'

export const Produto = () => {
  let produtos: any = []

  function renderProdutos(produtos: any) {
    const listarProdutos = document.querySelector('#listarProdutos')

    listarProdutos.innerHTML = ''
    produtos.map((t: any) => {
      listarProdutos.innerHTML += `
          <div>
            <h4>Produto Id: ${t.id}</h4>
            <p>Nome do Produto: ${t.nome}</p>
            <p>Observações do Produto: ${t.obs}</p>
            <p>Valor: R$ ${t.valor}</p>
          </div>
        `
    })
  }

  ipcRenderer.on('novo-produto-criado', (e, args) => {
    const novoProduto = JSON.parse(args)
    produtos.push(novoProduto)
    renderProdutos(produtos)
  })

  ipcRenderer.send('mostrarProdutos')

  ipcRenderer.on('mostrarProdutos', (e, args) => {
    const produtosCriados = JSON.parse(args)
    produtos = produtosCriados
    renderProdutos(produtos)
  })

  return <div id="listarProdutos" className={styles.produtoTimeline}></div>
}
