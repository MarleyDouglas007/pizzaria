import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>🍕 Pizzaria Delícia</h1>
      <ul style={styles.menu}>
        <li>Início</li>
        <li>Menu</li>
        <li>Contato</li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 20px',
    backgroundColor: '#d32f2f', // Vermelho temático
    color: '#fff',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  menu: {
    display: 'flex',
    gap: '20px',
    listStyle: 'none',
    margin: 0,
  },
};

export default Navbar;
