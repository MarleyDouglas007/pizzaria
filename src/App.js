import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Carrossel from './components/Carrossel';

const App = () => {
  return (
    <div style={styles.app}>
      <Navbar />
      <main style={styles.main}>
        <section style={styles.content}>
          <div style={styles.textSection}>
            <h2 style={styles.title}>Bem-vindo à Pizzaria Delícia!</h2>
            <p style={styles.description}>
              Nossa pizzaria é sinônimo de sabor e tradição. Há mais de 20 anos, 
              oferecemos as melhores pizzas feitas com ingredientes frescos e uma 
              receita de massa especial que conquista paladares.
            </p>
            <p style={styles.description}>
              Oferecemos um ambiente acolhedor, perfeito para compartilhar momentos 
              com família e amigos. Além disso, contamos com delivery rápido para 
              você aproveitar nossas delícias no conforto da sua casa!
            </p>
          </div>
          <div style={styles.carouselSection}>
            <Carrossel />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  app: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: '#fff8e1', // Amarelo claro
    color: '#333',
  },
  main: {
    padding: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    gap: '20px',
  },
  textSection: {
    flex: 1,
    paddingRight: '20px',
  },
  title: {
    fontSize: '28px',
    color: '#c62828', // Vermelho escuro
    marginBottom: '10px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  carouselSection: {
    flex: 1,
  },
};

export default App;
