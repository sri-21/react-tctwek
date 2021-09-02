import React, { useState } from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [Location, setLocation] = useState('Kedarnath');
  const handleSubmit = e => {
    e.preventDefault();
    const blog = { title, budget, about };
  };
  return (
    <div className="Create">
      <form onSubmit={handleSubmit}>
        <label>Enter Ur Mail Id:</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <br />
        <label>Choose Location:</label>
        <select value={Location} onChange={e => setLocation(e.target.value)}>
          <option value="Kedarnath">Kedarnath</option>
          <option value="Badrinath">Badrinath</option>
          <option value="Kashi">Kashi</option>
        </select>
        <br />
        <button>Confirm</button>
        <p>{title}</p>
        <p>{Location}</p>
      </form>
    </div>
  );
};
export default Create;
