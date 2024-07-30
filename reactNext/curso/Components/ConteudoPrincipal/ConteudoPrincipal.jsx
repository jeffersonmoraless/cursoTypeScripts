import BarraNavegacao from "../BarraNavegacao/BarraNavegacao";
import Fotter from "../Footer/Fotter";
import styles from "../../src/styles/ConteudoPrincipal.module.css"

const ConteudoPrincipal = ({children}) => {
    return (
        <>
            <BarraNavegacao/>
            <div className={styles.ConteudoPrincipal}>
                {children}
            </div>
            <Fotter/>
        </>
    );
}

export default ConteudoPrincipal;