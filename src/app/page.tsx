// app/page.js
import CountryCard from '@/components/country-card/country-card';
import styles from './page.module.scss';
import { Country } from '@/models/country';
import { SearchContext } from '@/contexts/search-context';
import { useContext } from 'react';
import SearchBar from '@/components/search-bar/search-bar';
import CountryList from '@/components/country-list/country-list';
import DropDown from '@/components/drop-down/drop-down';

const getData = async () => {
  //THIS WOULD NORMALLY COME FROM AN ENVIROMENT VARIABLE SERVERSIDE
  const response = await fetch('https://restcountries.com/v2/all'); // Corrected API endpoint
  return await response.json();
};

export default async function Home() {
  const data: Country[] = await getData();

  return (
    <main className={styles.main}>
      <section>
        <div className={`${styles.container} ${styles.filters}`}>
          <SearchBar />
          <DropDown data={data} />
        </div>
      </section>
      <section className={styles.container}>
        <CountryList data={data} />
      </section>
    </main>
  );
}
