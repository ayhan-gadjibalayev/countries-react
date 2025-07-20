import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function CountryPage() {
  type Country = {
    name: {
      common: string;
    };
  };

  const { name } = useParams<{ name: string }>();
  const [country, setCountry] = useState<Country | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const [data] = await response.json();
        setCountry(data);
      } catch (error) {}
    };

    fetchData();
  });

  return (
    <div>
      <span>Country {country?.name.common}</span>
    </div>
  );
}