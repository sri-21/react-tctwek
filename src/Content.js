import React, { useState } from 'react';
import EventList from './EventList';
import './index.css';

const Content = () => {
  const [explore, setExplore] = useState([
    { title: 'Kedarnath', body: 'akhfbkabvkBKJVAUKU', budget: 50000, id: 1 },
    {
      title: 'Bhadrinath',
      body: 'skniuonojndslnunoooiniuonfou',
      category: 'Devotional',
      budget: 70000,
      id: 2
    },
    { title: 'Kashi', body: '$%^&jnsrnginrg', budget: 50000, id: 3 }
  ]);

  return (
    <div className="Content">
      <h2> Bienvenidas to the World of Dhagads</h2>
      <EventList explore={explore} title="Events:" />
    </div>
  );
};
export default Content;
