import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Importando imagens locais
import p1 from '../assets/p1.jpeg'; // Substitua pelo caminho correto relativo ao local do seu arquivo
import p2 from '../assets/p2.jpg'; // Substitua pelo caminho correto relativo ao local do seu arquivo
import p3 from '../assets/p3.jpg'; // Substitua pelo caminho correto relativo ao local do seu arquivo
import p4 from '../assets/p4.png'; // Substitua pelo caminho correto relativo ao local do seu arquivo
import p5 from '../assets/p5.avif'; // Substitua pelo caminho correto relativo ao local do seu arquivo

// Lista de pizzas
const pizzas = [
  {
    nome: 'Pizza Margherita',
    imagem: p4, // Usando a imagem importada
    preco: 'R$ 25,00',
  },
  {
    nome: 'Pizza Calabresa',
    imagem: p2,
    preco: 'R$ 30,00',
  },
  {
    nome: 'Pizza Quatro Queijos',
    imagem: p3,
    preco: 'R$ 35,00',
  },
  {
    nome: 'Pizza Portuguesa',
    imagem: p1,
    preco: 'R$ 40,00',
  },
  {
    nome: 'Pizza Pepperoni',
    imagem: p5,
    preco: 'R$ 45,00',
  },
];

const Carrossel = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      showStatus={false}
      interval={4000}
      dynamicHeight
    >
      {pizzas.map((pizza, index) => (
        <div key={index} style={styles.card}>
          <img src={pizza.imagem} alt={pizza.nome} style={styles.image} />
          <div style={styles.info}>
            <h3 style={styles.title}>{pizza.nome}</h3>
            <p style={styles.price}>{pizza.preco}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

const styles = {
  card: {
    textAlign: 'center',
    backgroundColor: '#f9f9f9',
  },
  image: {
    width: '100%',
    height: '350px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  info: {
    padding: '10px',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: '18px',
    fontWeight: 'bold',
    margin: '5px 0',
  },
  price: {
    fontSize: '16px',
    color: '#c62828',
  },
};

export default Carrossel;
