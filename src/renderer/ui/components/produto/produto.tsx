import styles from './produto.module.scss'

export const Produto = () => {
  return (
    <div className={styles.produtoTimeline}>
      <text className={styles.produtoTimelineTitle}>Produtos cadastrados</text>
      <div className={styles.produto}>
        <div className={styles.coluna1}>
          <text className={styles.produtoBold}>Nome do Produto:</text>
          <text className={styles.produtoBold}>Observações:</text>
        </div>
        <div className={styles.coluna2}>
          <text className={styles.produtoBold}>ID:</text>
          <text className={styles.produtoBold}>Valor:</text>
        </div>
      </div>
    </div>
  )
}
