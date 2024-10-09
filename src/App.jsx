import React, { useState, createContext } from 'react';
import Footer from './components/Footer';

export const UserContext = createContext();

const App = () => {
  const [data, setData] = useState("Bhat important hai");

  return (
    <UserContext.Provider value={{ data, setData }}>
      <Footer />
    </UserContext.Provider>
  );
}

export default App;
