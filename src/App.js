import React, {useState,createContext}from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DemoComponent from './DemoComponent';
import Loginhere from './Loginhere';
import Registerhere from './Registerhere';
import Demofinal from './Demofinal';
import Finished from './Finished';

export const store = createContext();

const App = () => {
  const [token, setToken] = useState(null);
  return (
    <div>
      <store.Provider value={[token,setToken]}>
      <BrowserRouter>
        <Routes>
          <Route path="/loginhere" element={<Loginhere />} />
          <Route path="/Register" element={<Registerhere />} />
          <Route path="/Democomponent" element={<DemoComponent />} />
          <Route path="/Demofinal" element={<Demofinal />} />
          <Route path="/Finished" element={<Finished />} />
          
        </Routes>
      </BrowserRouter>
      </store.Provider>
    </div>
  );
};

export default App;