import React from 'react';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import BMI from './screens/BMIScreen';

function App() {
  return (
    <div className="main">
      <Header />
      <main>
        <BMI />
      </main>
      <Footer />
    </div>
  );
}

export default App;
