import React, { useState, useEffect } from 'react';

const BMIScreen = () => {
  const [tinggi, setTinggi] = useState(null);
  const [berat, setBerat] = useState(null);
  const [pesan, setPesan] = useState('');
  const [bmi, setBmi] = useState(null);
  const rumus = berat / Math.pow(tinggi, 2);

  useEffect(() => {
    if (bmi && bmi <= 18.5) {
      setPesan('Kekurangan berat badan.');
    }
    if (bmi && bmi >= 18.5 && bmi <= 25) {
      setPesan('Berat badan ideal.');
    }
    if (bmi && bmi >= 25 && bmi <= 30) {
      setPesan('Overweight, tapi tidak obese.');
    }
    if (bmi && bmi > 30) {
      setPesan('Obesitas.');
    }
  }, [bmi])

  const clickHandler = () => {
    setBmi(rumus);
    console.log(rumus);
    console.log(berat);
    console.log(tinggi);
  };

  return (
    <div className="m-12 text-center h-screen">
      <h1 className="font-bold text-2xl mb-6">Body Mass Index</h1>
      {bmi !== 0 && bmi}
      {pesan === '' ? <h1>Mohon masukkan data</h1> : <h1>{pesan}</h1>}
      <div className="flex items-center flex-col mb-8">
        <>
          <label className="font-bold" htmlFor="bb">
            Berat Badan
          </label>
          <input
            className="px-2 outline-none border-2 border-green-700 text-center"
            placeholder="Masukkan Berat Badan"
            name="bb"
            onChange={(e) => setBerat(e.target.value)}
            type="number"
            value={berat}
          />
        </>
        <>
          <label className="font-bold" htmlFor="tinggi">
            Tinggi Badan
          </label>
          <input
            className="px-2 outline-none border-2 border-green-700 text-center"
            placeholder="Masukkan Tinggi Badan"
            name="tinggi"
            onChange={(e) => setTinggi(e.target.value)}
            type="number"
            value={tinggi}
          />
        </>
      </div>
      <button
        className="py-2 px-4 bg-green-500 border-2 rounded border-black"
        onClick={() => clickHandler()}
      >
        Kalkulasi
      </button>
    </div>
  );
};

export default BMIScreen;
