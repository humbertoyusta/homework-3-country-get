import { Inter } from 'next/font/google';
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

async function getCountries(): Promise<string[]> {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const countries = await res.json();
    return countries.map((country: any) => country.name.common);
}

export default async function Home() {
    const countries = await getCountries();
    return (
        <ul>
            {countries.map((country) => (
                <Link key={country} href={`/${country}`}>
                    <li>{country}</li>
                </Link>
            ))}
        </ul>
    )
}
