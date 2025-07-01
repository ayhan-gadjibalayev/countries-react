import React from "react";
import { useNavigate } from 'react-router-dom';

export interface DataType {
  id: number;
  name: {
    common: string;
    nativeName: object;
    official: string;
  };
  cioc: string;
  flags: {
    png: string;
  };
}

export function CountryItem( {data} : {data : DataType}) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("country/" + data.name.common.toLowerCase());
  }

  return (
    <div onClick={handleClick}>
      <div className="flags-currency">
        <img src={data.flags.png} alt="" className="flags"/>
        <span>({data.cioc})</span>
      </div>
      <div className="title"><span>{data.name.official}</span></div>
    </div>
  );
}