import Image from "next/image";

interface ICountry {
    name: string;
    capital: string;
    population: number;
    flagUrl: string;
}

async function getCountry(countryName: string): Promise<ICountry> {
    const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    const country = (await res.json())[0];
    return {
        name: country.name.common,
        capital: country.capital[0],
        population: country.population,
        flagUrl: country.flags.svg,
    };
}

export default async function Page({params}: {params: {country: string}}) {
    const country = await getCountry(params.country);
    return (
        <div>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <Image src={country.flagUrl} alt={country.name} width={400} height={250} />
        </div>
    );
}