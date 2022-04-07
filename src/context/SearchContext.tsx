import React, {useState, createContext} from 'react';

interface SearchContextProps {
  children: React.ReactNode;
}

export interface SearchContextType {
  category: string;
  city: string;
  searchTerm: (name: string) => void;
  searchCity: (city: string) => void;
}

export const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({children}: SearchContextProps) => {
  const [category, setCategory] = useState<string>('Burger');
  const [city, setCity] = useState<string>('Paramount');

  const searchTerm = (name: string) => {
    setCategory(name);
  };

  const searchCity = (city: string) => {
    setCity(city);
  };

  return (
    <SearchContext.Provider value={{category, city, searchTerm, searchCity}}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
