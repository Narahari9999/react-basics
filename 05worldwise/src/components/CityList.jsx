import CityItem from "./CityItem";
import styles from "./CityList.module.css";
import Message from "./Message";

function CityList({ cities }) {
  if (!cities.length)
    return (
      <Message message="Add your first ciity by clicking a city on the map" />
    );

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
