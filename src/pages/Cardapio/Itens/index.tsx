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

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  function ordenar(novaLista: typeof cardapio) {
    switch (ordenador) {
      case "porcao_cresc":
        return ordenarPropriedadeCrescente(novaLista, "size");
      case "porcao_dec":
        return ordenarPropriedadeDecrescente(novaLista, "size");
      case "preco_cresc":
        return ordenarPropriedadeCrescente(novaLista, "price");
      case "preco_dec":
        return ordenarPropriedadeDecrescente(novaLista, "price");
      case "qtd_pessoas":
        return ordenarPropriedadeCrescente(novaLista, "serving");
      default:
        return novaLista;
    }
  }

  function ordenarPropriedadeCrescente(
    lista: typeof cardapio,
    propriedade: keyof Pick<typeof cardapio[0], "size" | "serving" | "price">
  ) {
    return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? 1 : -1));
  }

  function ordenarPropriedadeDecrescente(
    lista: typeof cardapio,
    propriedade: keyof Pick<typeof cardapio[0], "size" | "serving" | "price">
  ) {
    return lista.sort((a, b) => (a[propriedade] > b[propriedade] ? -1 : 1));
  }

  useEffect(() => {
    const novaLista = cardapio.filter(
      (el) => testaBusca(el.title) && testaFiltro(el.category.id)
    );

    setLista(ordenar(novaLista));
  }, [busca, filtro, ordenador]);

  return (
    <div className={styles.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}

export default Itens;
