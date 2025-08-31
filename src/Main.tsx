import React, { useState } from 'react';
import Countries from './components/CountriesComponents/Countries';
import Header from './components/HeaderComponents/Header'

function Main() {
    const [selected, setSelected] = useState<string | null>("Africa");
  
    const handleClick = (continent: string) => {
      setSelected(continent);
    };

  return (
    <div className='container'>
      <Header></Header>

      <div className="continents-container">
        <span className={`continents ${selected === 'Africa' ? 'active' : ''}`} 
              onClick={() => handleClick('Africa')}>Africa</span>
        <span className={`continents ${selected === 'Asia Pacific' ? 'active' : ''}`} 
              onClick={() => handleClick('Asia Pacific')}>Asia Pacific</span>
        <span className={`continents ${selected === 'Europe' ? 'active' : ''}`} 
              onClick={() => handleClick('Europe')}>Europe</span>
        <span className={`continents ${selected === 'America' ? 'active' : ''}`} 
              onClick={() => handleClick('America')}>America</span>
      </div>

      <Countries selected={selected}></Countries>
    </div>
  );
}

export default Main;