import Image from 'next/image';
import styles from './country-card.module.scss';
import { Country } from '@/models/country';
import Link from 'next/link';

export default ({
  flag,
  alt,
  name,
  capital,
  population,
  region,
  alpha3Code,
}: Country) => {
  return (
    <Link href={'/' + name.toLowerCase()} className={styles.countryCard}>
      <div className={styles.image}>
        <Image src={flag} alt={alt} fill />
      </div>
      <div className={styles.content}>
        <h2>{name}</h2>
        <p>
          <b>Population: </b>
          {population}
        </p>
        <p>
          <b>Region: </b>
          {region}
        </p>
        <p>
          <b>Capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
};
