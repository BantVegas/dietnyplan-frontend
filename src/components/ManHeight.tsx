import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ManHeight() {
  const [height, setHeight] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // SEO meta tags
  useEffect(() => {
    document.title = "Zadaj svoju výšku | dietnyplan.sk";
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute(
      "content",
      "Zadajte svoju výšku pre presné nastavenie diéty na mieru. Naša kalkulačka zohľadňuje každý detail pre efektívny plán chudnutia alebo naberania – bez registrácie, rýchlo a anonymne. Odborné odporúčania, bezpečné spracovanie údajov, žiadne zbytočné otázky."
    );
    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) {
      keywords = document.createElement("meta");
      keywords.setAttribute("name", "keywords");
      document.head.appendChild(keywords);
    }
    keywords.setAttribute(
      "content",
      "výška, diéta, kalkulačka, diétny plán, BMI, zdravie, výživový poradca, chudnutie, naberanie svalov, muž, mužská diéta, výška v cm"
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setHeight(value);
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numHeight = Number(height);

    if (!height || isNaN(numHeight) || numHeight < 140 || numHeight > 210) {
      setError("Zadaj reálnu výšku v rozmedzí 140 – 210 cm.");
      return;
    }
    // Ulož do localStorage pre neskoršie použitie
    localStorage.setItem("height", height);
    navigate("/muz/ciel");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-teal-100 via-white to-teal-200">
      <Navbar />
      <main className="flex-1 flex flex-col items-center pt-14 sm:pt-16 px-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-12 text-gray-900 text-center">
          Zadaj svoju výšku
        </h1>

        {/* Desktop: 3-stĺpcový layout */}
        <div className="hidden sm:grid sm:grid-cols-3 items-start justify-center gap-8 mb-8 w-full max-w-7xl">
          {/* Ľavý dlhý text */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg text-gray-800 text-center leading-relaxed">
              Výška je kľúčový údaj pre správne nastavenie tvojho kalorického príjmu, bielkovín a ďalších živín. Čím presnejšie zadáš svoju výšku, tým presnejší bude celý výpočet tvojho individuálneho plánu – platí to pre chudnutie aj naberanie svalovej hmoty.
              <br /><br />
              Každý centimeter ovplyvňuje aj BMI, výpočet bazálneho metabolizmu a odporúčané množstvá jedla. Odborný plán vždy počíta s presnou výškou – ovplyvňuje totiž energetické aj fyziologické potreby mužského tela.
            </p>
          </div>
          {/* Obrázok */}
          <div className="flex flex-col items-center justify-center">
            <img
              src="/images/muz-vyska.png"
              alt="Muž pri meraní výšky"
              className="w-56 h-80 object-cover"
            />
          </div>
          {/* Pravý dlhý text */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg text-gray-800 text-center leading-relaxed">
              Každý údaj, ktorý zadáš, je anonymný a použije sa iba na výpočet tvojho osobného plánu – nikdy nie na porovnávanie s ostatnými.
              <br /><br />
              Správne nastavený plán berie do úvahy tvoju výšku, vek, životný štýl a cieľ. Neboj sa zadať skutočnú hodnotu – čím presnejšie údaje, tým presnejší plán dostaneš. Zdravé výsledky vždy začínajú presnými vstupmi. Sme tu, aby sme ti pomohli dosiahnuť tvoje ciele efektívne a bezpečne!
            </p>
          </div>
        </div>

        {/* Mobile: všetko pod sebou */}
        <div className="sm:hidden flex flex-col gap-6 mt-2 w-full max-w-2xl mx-auto">
          <img
            src="/images/muz-vyska.png"
            alt="Muž pri meraní výšky"
            className="w-44 h-64 object-cover mx-auto"
          />
          <p className="text-base text-gray-800 text-center leading-relaxed">
            Výška je dôležitý údaj pre nastavenie tvojho kalorického príjmu aj odporúčaných živín. Zadanie skutočnej výšky je základ pre presný plán na mieru.
          </p>
          <p className="text-base text-gray-800 text-center leading-relaxed">
            Všetky údaje zostávajú anonymné a slúžia len pre tvoje odporúčanie. Presné údaje = presné výsledky!
          </p>
        </div>

        {/* Formulár pod layoutom */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 w-full max-w-xs mt-12"
        >
          <label htmlFor="height" className="block text-lg font-semibold text-gray-700 mb-2">
            Tvoja výška v cm
          </label>
          <input
            id="height"
            type="number"
            min={140}
            max={210}
            step={1}
            value={height}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border border-teal-300 text-2xl font-bold text-center focus:ring-2 focus:ring-teal-400 outline-none"
            placeholder="Napr. 180"
            required
            autoFocus
          />
          {error && (
            <div className="text-red-600 text-base font-semibold">{error}</div>
          )}
          <button
            type="submit"
            className="w-full px-8 py-4 rounded-lg bg-teal-600 text-white font-bold text-lg hover:bg-teal-700 transition"
            disabled={!height || Number(height) < 140 || Number(height) > 210}
          >
            Pokračovať
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
