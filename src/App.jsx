import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import KartuMenu from "./components/KartuMenu";

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

      <div>
        <KartuMenu menu="Menu Hari Ini" nama="Nasi Ayam Geprek" kategori="Makanan" harga="Rp 13.700" />
        <KartuMenu nama="Es Teh Lemon" kategori="Minuman" harga="Rp 6.000" />
        <KartuMenu nama="Mie Goreng Telur" kategori="Makanan" harga="Rp 12.000" />
      </div>
    </>
  );
}

export default App;
