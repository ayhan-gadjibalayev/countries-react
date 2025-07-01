import React, { useEffect, useState } from "react";
import "./countries.css";
import { DataType, CountryItem } from "./EuropeCountries/CountryItem";

function Countries() {
  const [data, setData] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("https://restcountries.com/v3.1/region/europe")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: DataType[]) => {
        setData(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-Countries">
      {loading ? (
        <div className="loading-indicator">Загрузка...</div>
      ) : (
        data.map((value, index) => <CountryItem data={value} key={index} />)
      )}

    </div>
  );
}

export default Countries;
