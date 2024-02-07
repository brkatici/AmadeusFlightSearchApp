import React from 'react';
import FlightSearch from "./components/Search/FlightSearch";
import { Results } from './components/FlightResults/Results';
import { Navbar } from './components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <FlightSearch />
      <Results/>
      {/* Other components or content can be added here */}
    </div>
  );
};

export default App;
