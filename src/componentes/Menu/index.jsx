import styles from "./Menu.module.css";
import { Link, useLocation } from "react-router-dom";
export default function Menu() {
    const localizacao = useLocation();
    console.log(localizacao);
   return (
       <header>
           <nav className={styles.navegacao}>
               <Link className={styles.link} to="/">
                   Início
               </Link>
               <Link className={styles.link} to="/sobremim">
                   Sobre Mim
               </Link>
           </nav>
       </header>
   )
}
