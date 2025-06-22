import React, { useEffect, useState } from "react";
import "../AverageComponents/average.css";
import { DataType, CountryItem } from "./AfricanСountries/CountryItem";

function Countries() {
  const [data, setData] = useState<DataType[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/region/europe")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: DataType[]) => {
        setData(data);
        // setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        // setError(error.message);
        console.log(error);
        // setLoading(false);
      });
  }, []);

  return (
    <div className="container-average">
      {data.map((value, index) => (
        <CountryItem data={value} key={index}/>
      ))}
    </div>
  );
}

export default Countries;



