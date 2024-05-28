import React from 'react';
import styles from './CityList.module.css';
import Spinner from './Spinner';
import CityItems from './CityItems';
import Message from './Message';
import { useCities } from '../contexts/CitiesContext';

function CityList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return (
      <Message message='Add your first cities by clicking on the city map' />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItems city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
