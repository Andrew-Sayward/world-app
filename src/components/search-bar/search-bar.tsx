'use client';

// components/SearchBar.js
import { useSearch } from '@/contexts/search-context';
import styles from './search-bar.module.scss';
import Image from 'next/image';

const SearchBar = () => {
  const { searchValue, setSearchValue } = useSearch();

  const handleInputChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  return (
    <form
      action=""
      onSubmit={(e) => e.preventDefault()}
      className={styles.search}
    >
      <Image
        width={16}
        height={16}
        src={'/search-outline.svg'}
        alt={'Search Icon'}
      />
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default SearchBar;
