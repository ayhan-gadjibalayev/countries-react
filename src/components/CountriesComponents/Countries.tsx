import React, { useEffect, useState } from "react";
import "./countries.css";
import { DataType, CountryItem } from "./EuropeCountries/CountryItem";

function Countries({ selected }: { selected: string | null }) {
  const [countries, setCountries] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        const region = selected === 'America' ? 'americas' : selected === 'Asia Pacific' ? 'asia' : selected?.toLowerCase();
        const url = selected ? `https://restcountries.com/v3.1/region/${region}` : 'https://restcountries.com/v3.1/all';
        const response = await fetch(url);
        const data = await response.json();
        
        setCountries(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error("Fetch error:", error);
        setCountries([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selected]);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="container-Countries">
      {countries.map((country, index) => (
        <CountryItem data={country} key={index} />
      ))}
    </div>
  );
}

export default Countries;