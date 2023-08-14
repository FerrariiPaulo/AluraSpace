import Cabecalho from "../../componentes/cabecalho";
import Menu from "../../componentes/menu";
import styles from "./pagina-inicial.module.scss"
import banner from "./banner.png"
import Rodape from "../../componentes/rodape";
import Galeria from "../../componentes/galeria";

export default function PaginaInicial () {
    return (
    <>
        <Cabecalho />
        <main>
            <section className= {styles.principal}>
                <Menu />
                <div className= {styles.principal__imagem}>
                    <h1>A galeria mais completa do espaço</h1>
                    <img src={banner} alt="A imagem da Terra vista do espaço" />
                </div>
            </section>

        </main>
        <div>
            <Galeria />
        </div>
       <Rodape />
    </>
    )
}