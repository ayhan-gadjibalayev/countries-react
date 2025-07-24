import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
type Country = {

name: {
  common: string;
  };
  flags: {
    png: string;
  };
  capital: string[];
  region: string;
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
};

export function CountryPage() {
  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    try {
      fetch(`https://restcountries.com/v3.1/name/${name}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data: Country[]) => {
          setCountry(data[0]);
          console.log(data);
        });
    } catch (error) {}
  }, []);

  return (
    <div className="country-page">
      <img src={country?.flags.png} alt="" className="flag" />
      <div className="country-info-block">
      <span style={{fontSize:'20px', fontWeight:'700'}}>{country?.name.common}</span>
      <span>Capital: {country?.capital[0]}</span>
      <span>Currencies: {country?.currencies && Object.values(country.currencies).map(currency => `${currency.name} (${currency.symbol})`).join(", ")}</span>
      <span>Languages:{country?.languages && Object.values(country.languages)}</span>
      <span> Region: {country?.region}</span>
      </div>
    </div>
  );
}

