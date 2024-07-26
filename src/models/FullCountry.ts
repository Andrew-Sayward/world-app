import { Currencies } from './Currencies';
import { Languages } from './Languages';

export interface FullCountry {
  flag: string;
  alt: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: Currencies[];
  languages: Languages[];
  borders: string[];
  alpha3Code: string;
}
