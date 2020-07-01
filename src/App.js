import React from 'react';
import './App.scss';
import './components/Navbar/Navbar';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';

function App() {
  return (
    <main className="App">
        <Navbar />
        <TourList />
    </main>
  );
}

export default App;
