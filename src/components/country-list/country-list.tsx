'use client';

import { Country } from '@/models/country';
import CountryCard from '../country-card/country-card';
import styles from './country-list.module.scss';
import { useSearch } from '@/contexts/search-context';
import { useEffect, useState } from 'react';

export default ({ data }: { data: Country[] }) => {
  const { searchValue, regionValue } = useSearch();
  const [loadValue, setLoadValue] = useState(8);

  // Filter the data based on both the search value and region value
  const filteredData = data.filter(
    (country) =>
      (regionValue
        ? country.region.toLowerCase().includes(regionValue.toLowerCase())
        : true) &&
      (searchValue
        ? country.name.toLowerCase().includes(searchValue.toLowerCase())
        : true)
  );

  return (
    <>
      <div className={styles.grid}>
        {filteredData.slice(0, loadValue).map((country: Country) => (
          <CountryCard
            key={country.name}
            flag={country.flag}
            alt={country.name}
            name={country.name}
            capital={country.capital}
            population={country.population}
            region={country.region}
            alpha3Code={country.alpha3Code.toLowerCase()}
          />
        ))}
      </div>
      {filteredData.length > loadValue && (
        <div className={styles.loadMore}>
          <button
            onClick={() => setLoadValue((prev) => prev + 8)}
            disabled={loadValue >= filteredData.length}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};
