// src/pages/Home.jsx
import React from 'react';
import PokemonList from '../components/PokemonList';
import styles from '../styles/PokemonLogo.module.css';

const Home = () => {
  return (
    <div><center>
      <div class={styles.boxHeaderText}><h2>Lista de Pokémons</h2> </div>
    </center>
      <PokemonList />
    </div>
  );
};

export default Home;
