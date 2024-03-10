import React, { useState, useEffect } from 'react';
import axios from 'axios';

import CardList from './components/CardList/CardList';
import Modal from './components/Modal/Modal';

function App() {
  const [items, setItems] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('https://api.thedogapi.com/v1/images/search?limit=10')
      .then(response => {
        setItems(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const cardAdd = () => {
    axios.get('https://api.thedogapi.com/v1/images/search?limit=1')
      .then(response => {
        const newItems = [...items, response.data[0]];
        setItems(newItems);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const cardDelete = () => {
    const updatedItems = [...items];
    updatedItems.splice(-1, 1);
    setItems(updatedItems);
    setIsModalOpen(true);
  };
  
  const modalToggle = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <main>
      <div className='wrapper'>
        <h1>Что-то про собачек</h1>
        <button onClick={modalToggle}>Меню</button>
      </div>
      <CardList items={items} />
      <Modal 
        isModalOpen={isModalOpen} 
        cardAdd={cardAdd} 
        cardDelete={cardDelete} 
        modalClose={modalToggle}
      />
    </main>
  );
}

export default App;