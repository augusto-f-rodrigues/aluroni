import React from "react";
import Item from "./Item";
import cardapio from "./itens.json";
import styles from "./Itens.module.scss";

function Itens() {
  return (
    <div className={styles.itens}>
      {cardapio.map((item) => (
        <Item key={item.id} />
      ))}
    </div>
  );
}

export default Itens;
