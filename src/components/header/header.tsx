import styles from './header.module.scss';
import Image from 'next/image';

export default () => {
  return (
    <header className={styles.header}>
      <div>
        <h1>Where in the world?</h1>
      </div>
    </header>
  );
};
