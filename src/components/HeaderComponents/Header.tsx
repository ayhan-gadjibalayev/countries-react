import React, { useState } from 'react';
import styles from '../HeaderComponents/header.module.css';

function Header() {
  const [selected, notSelected] = useState<string | null>(null);

  const handleClick = (continent: string) => {
    notSelected(continent === selected ? null : continent);
  };

  return (
    <div className={styles.container}>
      <span className={styles.supportedCountries}>Supported Countries</span>
      <div className={styles.continentsContainer}>
        <span className={`${styles.continents} ${selected === 'Africa' ? styles.active : ''}`} onClick={() => handleClick('Africa')}>Africa</span>
        <span className={`${styles.continents} ${selected === 'Asia Pacific' ? styles.active : ''}`} onClick={() => handleClick('Asia Pacific')} >Asia Pacific</span>
        <span className={`${styles.continents} ${selected === 'Europe' ? styles.active : ''}`} onClick={() => handleClick('Europe')}>Europe</span>
        <span className={`${styles.continents} ${selected === 'America' ? styles.active : ''}`} onClick={() => handleClick('America')}>America</span>
      </div>
    </div>
  );
}

export default Header;