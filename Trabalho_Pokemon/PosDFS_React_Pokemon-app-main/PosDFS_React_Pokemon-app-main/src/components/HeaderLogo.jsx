import styles from '../styles/PokemonLogo.module.css';
import logo from '../assets/logo.png'; // Importe a imagem do logotipo
import { Link } from 'react-router-dom';


function HeaderLogo() {
    return (
        <header className={styles.headerClass}>
            <Link to="/"> <img src={logo} alt="logo" className={styles.imageLogo} /></Link>
        </header>
    )
}

export default HeaderLogo