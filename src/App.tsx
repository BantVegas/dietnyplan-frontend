// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // <- pridaj Navbar komponentu!

// Hlavná stránka & špeciálne stavy
import GenderSelect from "./components/GenderSelect";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Onas from "./components/Onas";
import AkoToFunguje from "./components/AkoToFunguje";
import Recepty from "./components/Recepty";
import BMIKalkulacka from "./components/BMIKalkulacka";
import Blog from "./components/Blog";



// Flow pre ženy
import SelectAgeWoman from "./components/SelectAgeWoman";
import WomanWeight from "./components/WomanWeight";
import WomanHeight from "./components/WomanHeight";
import WomanGoal from "./components/WomanGoal";
import WomanPreferences from "./components/WomanPreferences";
import WomanAllergies from "./components/WomanAllergies";
import WomanVysledok from "./components/WomanVysledok";

// Flow pre mužov
import SelectAgeMan from "./components/SelectAgeMan";
import ManWeight from "./components/ManWeight";
import ManHeight from "./components/ManHeight";
import ManGoal from "./components/ManGoal";
import ManPreferences from "./components/ManPreferences";
import ManAllergies from "./components/ManAllergies";
import ManVysledok from "./components/ManVysledok";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar bude vždy zobrazený na všetkých stránkach */}
      <Navbar />

      {/* Všetky routes stránky */}
      <Routes>
        {/* Hlavná stránka */}
        <Route path="/" element={<GenderSelect />} />
        <Route path="/blog" element={<Blog />} />

        {/* Flow pre ženy */}
        <Route path="/zena/vek" element={<SelectAgeWoman />} />
        <Route path="/zena/vaha" element={<WomanWeight />} />
        <Route path="/zena/vyska" element={<WomanHeight />} />
        <Route path="/zena/ciel" element={<WomanGoal />} />
        <Route path="/zena/preferencie" element={<WomanPreferences />} />
        <Route path="/zena/alergie" element={<WomanAllergies />} />
        <Route path="/zena/vysledok" element={<WomanVysledok />} />

        {/* Flow pre mužov */}
        <Route path="/muz/vek" element={<SelectAgeMan />} />
        <Route path="/muz/vaha" element={<ManWeight />} />
        <Route path="/muz/vyska" element={<ManHeight />} />
        <Route path="/muz/ciel" element={<ManGoal />} />
        <Route path="/muz/preferencie" element={<ManPreferences />} />
        <Route path="/muz/alergie" element={<ManAllergies />} />
        <Route path="/muz/vysledok" element={<ManVysledok />} />

        {/* Stavy po platbe a informácie */}
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/onas" element={<Onas />} />
        <Route path="/ako-to-funguje" element={<AkoToFunguje />} />
        <Route path="/recepty" element={<Recepty />} />
        <Route path="/bmi" element={<BMIKalkulacka />} />


      </Routes>
    </BrowserRouter>
  );
}
