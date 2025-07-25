import React, { useState } from 'react';
import '../HeaderComponents/header.css';

function Header() {
  const [selected, notSelected] = useState<string | null>(null);

  const handleClick = (continent: string) => {
    notSelected(continent === selected ? null : continent);
  };

  return (
    <div className="container">
      <span className="supported-countries">Supported Countries</span>
      <div className="continents-container">
        <span className={`continents ${selected === 'Africa' ? 'active' : ''}`} onClick={() => handleClick('Africa')}>Africa</span>
        <span className={`continents ${selected === 'Asia Pacific' ? 'active' : ''}`} onClick={() => handleClick('Asia Pacific')} >Asia Pacific</span>
        <span className={`continents ${selected === 'Europe' ? 'active' : ''}`} onClick={() => handleClick('Europe')}>Europe</span>
        <span className={`continents ${selected === 'America' ? 'active' : ''}`} onClick={() => handleClick('America')}>America</span>
      </div>
    </div>
  );
}

export default Header;