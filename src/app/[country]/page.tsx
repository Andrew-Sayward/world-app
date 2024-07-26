import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.scss';
import { FullCountry } from '@/models/FullCountry';

export default async function Page({
  params,
}: {
  params: { country: string };
}) {
  const getData = async () => {
    const response = await fetch(
      //THIS WOULD NORMALLY COME FROM AN ENVIROMENT VARIABLE SERVERSIDE
      `https://restcountries.com/v2/name/${params.country}`
    );
    return await response.json();
  };

  const data: FullCountry[] = await getData();
  const country = data[0];

  const getNameByCode = async (border: string) => {
    const response = await fetch(
      `https://restcountries.com/v2/alpha/${border}?fields=name`
    );
    return (await response.json()).name;
  };

  return (
    <main className={styles.main}>
      <section className={styles.container}>
        <Link className={styles.back} href={'/'}>
          <Image
            src={'/arrow-back-outline.svg'}
            alt="Back Arrow"
            width={16}
            height={16}
          />{' '}
          Back
        </Link>
        <div className={styles.countryCard}>
          <div className={styles.image}>
            <Image src={country.flag} alt={country.alt} fill />
          </div>
          <div className={styles.content}>
            <h2>{country.name}</h2>
            <ul>
              <li>
                <b>Native Name: </b>
                {country.nativeName}
              </li>
              <li>
                <b>Population: </b>
                {country.population}
              </li>
              <li>
                <b>Region: </b>
                {country.region}
              </li>
              <li>
                <b>Sub Region: </b>
                {country.subregion}
              </li>
              <li>
                <b>Capital: </b>
                {country.capital}
              </li>
              <li>
                <b>Top Level Domain: </b>
                {country.topLevelDomain}
              </li>
              {country.currencies && (
                <li>
                  <b>Currencies: </b>
                  {country.currencies.map((cur) => cur.name + ' ')}
                </li>
              )}
              {country.languages && (
                <li>
                  <b>Languages: </b>
                  {country.languages.map((lan) => lan.name + ' ')}
                </li>
              )}
            </ul>
            {/* I was looking for a way to be able to search the names via the code and display these here but am not seeing any routes in the api documentation */}
            {country.borders && (
              <div className={styles.borderLinks}>
                <h3>Border Countries:</h3>
                <ul>
                  {country.borders.map(async (border) => {
                    const link = await getNameByCode(border);
                    return (
                      <li key={border}>
                        <Link href={`/` + link}>{link}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
