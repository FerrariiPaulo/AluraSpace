import Botao from "componentes/botao";
import fotosPopulares from "./fotosPopulares.json";
import styles from "./populares.module.scss";

export default function Populares() {
    return (
        <aside className= {styles.populares}>
            <h2>Populares</h2>
            <ul className= {styles.populares__imagens}>
                {fotosPopulares.map((foto) => {
                    return (
                        <li key={foto.id}>
                            <img src={foto.path} alt={foto.alt} />
                        </li>
                    )
                })}
            </ul>
            <Botao />
        </aside>
    )
}