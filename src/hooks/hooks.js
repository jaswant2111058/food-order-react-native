import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
const DateContext = createContext();
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useData = () => {
  return useContext(DateContext);
};

export const DataProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [user,setUser]=useState({})
  const baseURL = "http://localhost:5000"
  const startLoading = () => {
    setLoading(true);
  };
  useEffect(()=>{
    const isUser = async () => {
        try {
          const value = await AsyncStorage.getItem('user');
          if (value !== null) {
            setUser(JSON.parse(value))
          } else {
            console.log('No data found');
          }
        } catch (error) {
          console.error('Error retrieving data: ', error);
        }
      };
      isUser();
    
},[])


  const stopLoading = () => {
    setLoading(false);
  };


  useEffect(() => {  
    const performSearch = async () => {
      try {
        const response = await axios.get(`${baseURL}/search?q=${query}`); 
            if(response){
              setSearchResult(response.data);
            }
      } catch (error) {
        console.error('Error searching:',error);
      } 
    };

    if (query.length>2) {
      performSearch();
    } else {
        setSearchResult([]);
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
       searchResult
       }}>
      {children}
    </DateContext.Provider>
  );
};