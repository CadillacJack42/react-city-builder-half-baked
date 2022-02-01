import { useState } from 'react';
import './App.css';
import SkylineDropdown from './SkylineDropdown';
import WaterfrontDropdown from './WaterfrontDropdown';
import CastleDropdown from './CastleDropdown';
import SloganList from './SloganList';
import SloganForm from './SloganForm';
import CityNameInput from './CityNameInput';
import City from './City';

function App() {
  // track some state here.
  // You'll need to keep track of a skylineId, waterfrontId, and castleId. All these start out as 1
  const [skylineId, setSkylineId] = useState(1);
  const [waterfrontId, setWaterfrontId] = useState(1);
  const [castleId, setCastleId] = useState(1);
  // you'll need to track a city name, which starts as the city name of your choice.
  const [cityName, setCityName] = useState('Las Vegas');
  // finally, you'll need an array of slogans, which could start out as ['The City of Excellence'] for example
  const [slogans, setSlogans] = useState(['The City of Sin']);

  return (
    <div className="App">
      <City 
        skylineId={skylineId}
        waterfrontId={waterfrontId}
        castleId={castleId}
      />
      <h1>
        {`Welcome to beautiful ${cityName}!`}
      </h1>
      <div className='bottom'>
        <CityNameInput 
          setCityName={setCityName}
        />
        <section className='dropdowns'>
          <SkylineDropdown setSkylineId={setSkylineId}/>
          <WaterfrontDropdown setWaterfrontId={setWaterfrontId}/>
          <CastleDropdown setCastleId={setCastleId}/>
        </section>
        <SloganForm 
          setSlogans={setSlogans}
          slogans={slogans}
        />
        <SloganList slogans={slogans} />

      </div>
    </div>
  );
}

export default App;
