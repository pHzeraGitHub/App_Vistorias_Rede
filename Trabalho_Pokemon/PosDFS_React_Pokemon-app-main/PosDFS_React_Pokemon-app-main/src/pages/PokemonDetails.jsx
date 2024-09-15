// src/pages/PokemonDetails.jsx
import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import logo from '../assets/logo.png';
//import { FaArrowLeft } from 'react-icons/fa'; // Importe o ícone de seta
import styles from '../styles/PokemonDetails.module.css'; // Importe o CSS para estilização

const PokemonDetails = () => {
  const { name } = useParams();
  const { pokemons, loading } = useContext(PokemonContext);

  if (loading) {
    return <p className={styles.loading}>Carregando detalhes...</p>;
  }

  const pokemon = pokemons.find((poke) => poke.name === name);

  if (!pokemon) {
    return <p className={styles.error}>Pokémon não encontrado.</p>;
  }

  return (
    
    
    <div className={styles.container}>
        <Link to="/" >
          <img src={logo} className={styles.imageLogo}></img>
        </Link>
      
      <div className={styles.header}>
        <img src={pokemon.sprites.front_default} alt={pokemon.name.toUpperCase()} className={styles.image} />
        <h2 className={styles.name}>{pokemon.name.toUpperCase()}</h2>
        
      </div>
      <hr className={styles.hrStyle}/>
      <div className={styles.info}>
        <div className={styles.firstAAttributte}>
          <h4>Características</h4>
          <div className={styles.section}>
          {pokemon.types.map((type) => (
            <div key={type.type.name} className={styles[type.type.name]}>
              {type.type.name}
            </div>
          ))}
          </div>
        </div>
        
          <ul className={styles.ajustmentFirst}>
            <li>Altura: {pokemon.height / 10} m</li>
            <li>Peso: {pokemon.weight / 10} kg</li>
          </ul>
        <hr className={styles.hrStyleAttributes} />
        <h4>Habilidades</h4>
        <ul>
          {pokemon.abilities.map((ability) => (
            <li>{ability.ability.name}</li>
          ))}
        </ul>
        <hr className={styles.hrStyleAttributes} />
        <h4>Estatísticas</h4>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
        
        <div className={styles.section}>
          
            
          
        </div>
        
      </div>
    </div>
  );
};

export default PokemonDetails;
