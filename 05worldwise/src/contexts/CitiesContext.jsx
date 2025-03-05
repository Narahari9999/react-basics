import { createContext, useContext } from "react";
import { citiesList } from "../../data/cities";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const cities = citiesList.cities;

  function getCity(id) {
    const city = cities.find((city) => city.id === id);

    return city;
  }

  return (
    <CitiesContext.Provider value={{ cities, getCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

export function useCitiesContext() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Cities context was used outside citiescontextprovider");

  return context;
}

export default CitiesProvider;
