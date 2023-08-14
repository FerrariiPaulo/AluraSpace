import styles from "./menu.module.scss"
import home from "../../assets/home-ativo.png"
import curtidas from "../../assets/mais-curtidas-inativo.png"
import views from "../../assets/mais-vistas-inativo.png"
import novas from "../../assets/novas-inativo.png"
import supreenda from "../../assets/surpreenda-me-inativo.png"

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.meunu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt="home" />
                <a href="/">Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src={curtidas} alt= "Mais curtidas" />
                <a href="/">Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={views} alt="Mais vistas" />
                <a href="/">Mais vistas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novas} alt="Novas" />
                <a href="/">Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={supreenda} alt="Surpeenda-me" />
                <a href="/">Supreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}
