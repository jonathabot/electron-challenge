import styles from './cadastro.module.scss'

export const Cadastro = () => {
  return (
    <div className={styles.cadastroComponent}>
      <form className={styles.cadastroProduto}>
        <label>
          <text className={styles.labelName}>Nome:</text>
          <input
            type="text"
            name="name"
            placeholder="Nome do produto"
            className={styles.inputName}
          />
        </label>
        <label>
          <text className={styles.labelName}>ID:</text>
          <input
            type="number"
            min="0"
            name="ID"
            placeholder="Número de identificação do produto"
            className={styles.inputId}
          />
        </label>
        <label>
          <text className={styles.labelName}>Observações:</text>
          <input
            type="text"
            name="observações"
            placeholder="Mais detalhes do produto"
            className={styles.inputObservacoes}
          />
        </label>
        <label>
          <text className={styles.labelName}>Valor:</text>
          <input
            type="number"
            name="valor"
            min="0"
            placeholder="R$0,00."
            className={styles.inputValor}
          />
        </label>
        <button className={styles.buttonAdicionar}>Adicionar
        </button>
      </form>
    </div>
  )
}
