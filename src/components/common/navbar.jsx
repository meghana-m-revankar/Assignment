import React, { useState } from 'react';

const Navbar = ({ handleChange }) => {
  const [selectedLocation, setSelectedLocation] = useState('New Delhi');

  const locations = [
    'New Delhi',
    'Mumbai',
    'Bangalore',
    'Kolkata',
    'Chennai',
    'Hyderabad',
    'Pune',
    'Ahmedabad',
    'Jaipur',
    'Surat',
    'Lucknow',
    'Kanpur',
    'Nagpur',
    'Patna',
    'Indore',
    'Thane',
    'Bhopal',
    'Visakhapatnam',
    'Vadodara',
    'Firozabad',
    'London',
    'Paris',
    'Berlin',
    'Rome',
    'Madrid',
    'Tokyo',
    'Beijing',
    'Moscow',
    'Istanbul',
    'Sydney',
  ];

  return (
    <div>
      <header className="bg-purple-900 text-white">
        <nav className="flex items-center justify-between px-6 py-3">
          <div>
            <span className="text-lg font-semibold">Weather Dashboard</span>
          </div>

          <div className="relative">
            <div className="relative inline-block text-left">
              <select
                value={selectedLocation}
                onChange={(e) => {
                  setSelectedLocation(e.target.value);
                  handleChange(e); 
                }}
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8  shadow leading-tight focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black rounded-lg"
              >
                 <option  value="">
                    Select Location
                  </option>
                {locations.map((location) => (
                  
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
