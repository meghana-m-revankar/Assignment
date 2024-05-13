import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
    <aside className="flex flex-col w-64 bg-purple-900 h-full">
      <div className="flex items-center justify-center h-16 bg-purple-900">
        <span className="text-white text-lg font-semibold">WD</span>
      </div>
      <ul className="mt-6 flex-1 overflow-y-auto">
        <li className="px-6 py-3 hover:bg-gray-500">
        <a className="navbar-brand" href="/">Home</a>
        </li>
        <li className="px-6 py-3 hover:bg-gray-500">
       
    {/*     <a className="navbar-brand" href="/">Forecast</a> */}
        </li>
      </ul>
    </aside>
    </div>
  )
}

export default Sidebar
