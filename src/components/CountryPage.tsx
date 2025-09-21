import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

type Country = {
  name: {
    common: string;
    official: string;
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
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
        
        if (!response.ok) {
          throw new Error("Country not found");
        }
        
        const data = await response.json();
        setCountry(data[0]);
      } catch (err) {} 
    };

    if (name) {
      fetchCountry();
    }
  }, [name]);

  if (!country) return;

  return (
    <div className="country-page">
      
      <img src={country.flags.png} alt = { country.name.common} className="flag" />
      
      <div className="country-info-block">
        <h1>{country.name.common}</h1>
        <p><strong>Official Name:</strong> {country.name.official}</p>
        <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
        <p><strong>Region:</strong> {country.region}</p>        
        <p><strong>Currencies:</strong> {country.currencies && 
          Object.entries(country.currencies).map(([code, currency]) => 
            `${currency.name} (${currency.symbol})`
          ).join(", ")}
        </p>
        
        <p><strong>Languages:</strong> {country.languages && 
          Object.values(country.languages).join(", ")}
        </p>
      </div>
    </div>
  );
}