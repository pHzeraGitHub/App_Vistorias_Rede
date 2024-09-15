import styles from '../styles/PokemonLogo.module.css';
import HeaderLogo from './HeaderLogo';


function BoxHeaderLogo() {
    return (
        <header className={styles.boxHeader}>
            <HeaderLogo />
        </header>
    )
}

export default BoxHeaderLogo;