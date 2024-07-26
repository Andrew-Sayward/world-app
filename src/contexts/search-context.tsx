'use client';

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useContext,
} from 'react';

export const SearchContext = createContext<{
  searchValue: string;
  setSearchValue: Dispatch<SetStateAction<string>>;
  regionValue: string;
  setRegionValue: Dispatch<SetStateAction<string>>;
}>({
  searchValue: '',
  setSearchValue: () => {},
  regionValue: '',
  setRegionValue: () => {},
});
export const useSearch = () => useContext(SearchContext);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchValue, setSearchValue] = useState('');
  const [regionValue, setRegionValue] = useState('');

  return (
    <SearchContext.Provider
      value={{ searchValue, setSearchValue, regionValue, setRegionValue }}
    >
      {children}
    </SearchContext.Provider>
  );
};
