import opcoes from "./opcoes.json";
import styles from "./Ordenador.module.scss";
import React from "react";

function Ordenador() {
  return (
    <button className={styles.ordenador}>
      <span >Ordenar por:</span>
      <div className={styles.ordenador__options}>
        {opcoes.map((opcao) => (
          <div key={opcao.value} className={styles.ordenador__option}>{opcao.nome}</div>
        ))}
      </div>
    </button>
  );
}

export default Ordenador;
