import React from 'react';
import Countries from './components/CountriesComponents/Countries';
import Header from './components/HeaderComponents/Header'

function Main() {
  return (
    <div className='container'>

      <Header></Header>
      <Countries></Countries>

    </div>
  );
}

export default Main;
