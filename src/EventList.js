import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const EventList = props => {
  const explore = props.explore;
  const title = props.title;

  return (
    <div className="Event-List">
      <h3>{title}</h3>
      {explore.map(events => (
        <div className="Content-preview" key={events.id}>
          <Link to={`/explore/${events.id}`}>
            <h3>{events.title}</h3>
            <p>About:{events.body}</p>
            <p>Budget:{events.budget}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default EventList;
