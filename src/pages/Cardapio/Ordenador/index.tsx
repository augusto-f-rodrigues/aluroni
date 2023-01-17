import classNames from "classnames";
import { Dispatch, SetStateAction, useState } from "react";
import opcoes from "./opcoes.json";
import styles from "./Ordenador.module.scss";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

interface IOrdenador {
  ordenador: string;
  setOrdenador: Dispatch<SetStateAction<string>>;
}

function Ordenador({ ordenador, setOrdenador }: IOrdenador) {
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador =
    ordenador && opcoes.find((opcao) => opcao.value === ordenador)?.nome;

  return (
    <button
      className={classNames({
        [styles.ordenador]: true,
        [styles["ordenador--ativo"]]: ordenador !== "",
      })}
      onClick={() => setAberto(!aberto)}
      onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || "Ordenar Por"}</span>
      {aberto ? <RiArrowUpSLine size={22} /> : <RiArrowDownSLine size={22} />}
      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles["ordenador__options--ativo"]]: aberto,
        })}
      >
        {opcoes.map((opcao) => (
          <div
            key={opcao.value}
            className={styles.ordenador__option}
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}

export default Ordenador;
