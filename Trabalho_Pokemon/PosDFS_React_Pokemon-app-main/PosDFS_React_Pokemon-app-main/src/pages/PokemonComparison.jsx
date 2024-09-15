// src/pages/PokemonComparison.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from '../styles/PokemonComparison.module.css';
import HeaderLogo from '../components/HeaderLogo';


const PokemonComparison = () => {
  const location = useLocation();
  const { pokemons } = location.state || { pokemons: [] };

  if (pokemons.length !== 2) {
    return <p>Selecione dois Pokémons para comparar.</p>;
  }

  const [pokemon1, pokemon2] = pokemons;

  return (
    <div>
      <center><HeaderLogo /></center>
    <div className={styles.container}>
      <h2 className={styles.title}>Comparar Pokémons</h2>
      <div className={styles.comparison}>
        <div className={styles.pokemon}>
            <h2 className={styles.pokeName}>{pokemon1.name.toUpperCase()}</h2>
          
          <img src={pokemon1.sprites.front_default} alt={pokemon1.name} />
          <hr />
            <div className={styles.textLeftAjustment}>
            <h4>Características</h4>
            <ul className={styles.ajustmentFirst}>
              <li>Altura: {pokemon1.height} m</li>
              <li>Peso: {pokemon1.weight} kg</li>
            </ul>
          </div>
        </div>
        <div className={styles.pokemon}>
            <h2 className={styles.pokeName}>{pokemon2.name.toUpperCase()}</h2>
          <img src={pokemon2.sprites.front_default} alt={pokemon2.name} />
            
            <hr />
            <div className={styles.textLeftAjustment}>
            <h4>Características</h4>
            <ul className={styles.ajustmentFirst}>
              <li>Altura: {pokemon2.height} m</li>
              <li>Peso: {pokemon2.weight} kg</li>
            </ul>
            </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PokemonComparison;
