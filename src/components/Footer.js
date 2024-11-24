import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024 Pizzaria Delícia. Feito com ❤️ para você!</p>
    </footer>
  );
};

const styles = {
  footer: {
    position: 'fixed', // Torna o rodapé fixo
    bottom: 0, // Fixa na parte inferior
    left: 0,
    width: '100%', // Garante que o rodapé ocupe toda a largura da página
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#333',
    color: '#fff',
    fontSize: '14px',
    zIndex: 1000, // Garante que o rodapé fique sobre outros elementos
  },
};

export default Footer;
