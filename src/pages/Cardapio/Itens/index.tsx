import Item from "./Item";
import cardapio from "./itens.json";
import styles from "./Itens.module.scss";
import { useEffect, useState } from "react";

interface IItens {
  busca: string;
  filtro: number | null;
  ordenador: string;
}

function Itens({ busca, filtro, ordenador }: IItens) {
  const [lista, setLista] = useState(cardapio);

  function testaBusca(title: string) {
    const regex = new RegExp(busca, "i");
    return regex.test(title);
  }

  function testaFiltro(id: number){
    if(filtro !== null) return filtro === id;
    return true;
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (el) => testaBusca(el.title) && testaFiltro(el.category.id)
    );

    setLista(novaLista);
  }, [busca, filtro]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Itens;
