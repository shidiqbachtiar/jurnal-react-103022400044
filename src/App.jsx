import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

function App() {
  const elemen = <h1>Kantin Shidiq</h1>;
  const elemen1 = <p>Selamat pagi</p>;
  const elemen2 = <p>Saldo awal kartu kantin: Rp 44.000</p>;

  return (
    <>
      <div className="App">
        {elemen}
        {elemen1}
        {elemen2}
        <button disabled={true}>Bayar</button>
      </div>
    </>
  );
}

export default App;