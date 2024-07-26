'use client';

import { Country } from '@/models/country';
import styles from './drop-down.module.scss';
import { useSearch } from '@/contexts/search-context';

export default ({ data }: { data: Country[] }) => {
  const { regionValue, setRegionValue } = useSearch();

  const handleSelectChange = (e: any) => {
    if (e.target.value === 'Reset') {
      setRegionValue('');
    } else {
      setRegionValue(e.target.value);
    }
  };

  // Extract unique regions
  const uniqueRegions = Array.from(
    new Set(data.map((country) => country.region))
  );

  return (
    <div className={styles.dropdown}>
      <select value={regionValue} onChange={handleSelectChange}>
        <option value="" disabled>
          Select a region
        </option>
        {uniqueRegions.map((region) => {
          return (
            <option key={region} value={region}>
              {region}
            </option>
          );
        })}
        <option value="Reset">Reset</option>
      </select>
    </div>
  );
};
