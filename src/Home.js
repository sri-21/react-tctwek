import React, { useState } from 'react';
const Home = () => {
  const [explore, setExplore] = useState('list');
  const [events, setEvents] = useState('Type');
  const handleClick = () => {
    console.log('hii');
    setExplore([
      'Kedarnath',
      ' ManaSarovar ',
      ' Badrinath ',
      ' Kasi ',
      ' Vaishnoi '
    ]);
  };
  const handleClick1 = () => {
    console.log('heelo');
    setEvents(['Devotional ', ' Trek ', ' Rejoice']);
  };

  return (
    <div className="Home">
      <h2> Bienvenidas to the World of Dhagads</h2>
      <p>{explore}</p>
      <p>{events}</p>
      <button onClick={handleClick}>Explore</button>
      <button onClick={handleClick1}>Events</button>
    </div>
  );
};
export default Home;
