import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const DateContext = createContext();

export const useData = () => {
  return useContext(DateContext);
};

export const DataProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [user,setUser]=useState({})
  const baseURL = "http://localhost:5000"
  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };
  useEffect(() => {  
    const performSearch = async () => {
      try {
        const response = await axios.get(`${baseURL}/search?q=${query}`); 
            if(response){
           //   setResults(response.data);
            }
      } catch (error) {
        console.error('Error searching:',error);
      } 
    };

    if (query.length>2) {
      performSearch();
    } else {
     // setResults([]);
    }
  }, [query]);

  return (
    <DateContext.Provider value={{
       query, 
       setQuery, 
       isLoading, 
       startLoading, 
       stopLoading,
       user,
       setUser,
       }}>
      {children}
    </DateContext.Provider>
  );
};