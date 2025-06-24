import React from "react";

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
  return (
    <div>
      <div className="flags-currency">
        <img src={data.flags.png} alt="" className="flags"/>
        <span>({data.cioc})</span>
      </div>
      <div className="title"><span>{data.name.official}</span></div>
    </div>
  );
}