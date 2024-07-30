import styles from "../../src/styles/BarraNavegacao.module.css"
import Link from "next/link";
const BarraNavegacao = ({navegacaoLogado}) => {
    return (
        <div className = {`${styles.barraNavegacao}[${styles.navegacaoLogado}]`}>
           <a href="#">navBar</a> 
        </div>
    );
}

export default BarraNavegacao;