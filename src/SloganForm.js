import { useState } from 'react';

export default function SloganForm({ setSlogans, slogans }) {
  const [newSlogan, setNewSlogan] = useState('');
    
  function handleSubmit(e) {
    e.preventDefault();
    setSlogans([...slogans, newSlogan]);
    setNewSlogan('');
  }

  const handleChange = (e) => {
    setNewSlogan(e.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        Add a slogan to the list!
        <input required value={newSlogan} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </section>
  );
}
