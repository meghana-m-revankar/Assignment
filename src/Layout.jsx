import React, { useState } from 'react';
import Sidebar from './components/common/sidebar';
import Navbar from './components/common/navbar';
import Homedashboardpage from './components/Dashboard/homedashboardpage';
import Forecastpage from './components/Dashboard/forecastpage';
//import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Layout = () => {
  const [selectedLocation, setSelectedLocation] = useState('New Delhi');
  const handleChange = (e) => {
    setSelectedLocation(e.target.value);
  };
  
  return (
    <div className="flex h-screen">
      
      <Sidebar />

     
      <main className="flex flex-col flex-1 overflow-hidden">
      
        <nav className="bg-gray-800 text-white">
         
          <Navbar
  selectedLocation={selectedLocation}
  handleChange={handleChange}
/>

        </nav>

        {/* Main Content */}
        <section className="flex-1 overflow-y-auto p-6">
          {/* Pass selectedLocation as prop to Homedashboardpage */}
           <Homedashboardpage Location={selectedLocation} /> 
           <h1>Forecast</h1>
         <Forecastpage Location={selectedLocation}/>

        </section>
      </main>
     
    

    </div>
  );
};

export default Layout;
