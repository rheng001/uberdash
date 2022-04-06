import React, {useState, createContext} from 'react';

interface SearchContextProps {
  children: React.ReactNode;
}

export interface SearchContextType {
  category: string;
  searchTerm: (name: string) => void;
}

export const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({children}: SearchContextProps) => {
  const [category, setCategory] = useState<string>('Burger');

  const searchTerm = (name: string) => {
    setCategory(name);
  };

  return (
    <SearchContext.Provider value={{category, searchTerm}}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContext;
