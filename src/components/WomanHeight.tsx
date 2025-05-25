import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function WomanHeight() {
  const [height, setHeight] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // SEO meta tagy
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
      "Zadajte svoju výšku pre správny diétny plán pre ženy. Každý údaj je dôležitý pre efektívne a zdravé chudnutie alebo zmenu životného štýlu. Diskrétne, rýchlo a odborne na dietnyplan.sk."
    );

    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) {
      keywords = document.createElement("meta");
      keywords.setAttribute("name", "keywords");
      document.head.appendChild(keywords);
    }
    keywords.setAttribute(
      "content",
      "výška, diéta pre ženy, diétny plán, zdravé chudnutie, zdravie, BMI, ženy, výživové poradenstvo, výška v cm, ženská výživa"
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

    if (!height || isNaN(numHeight) || numHeight < 130 || numHeight > 200) {
      setError("Zadaj reálnu výšku v rozmedzí 130 – 200 cm.");
      return;
    }
    navigate("/zena/ciel");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-teal-100 via-white to-teal-200">
      <Navbar />
      <main className="flex-1 flex flex-col items-center pt-32 px-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold mb-12 text-gray-900 text-center">
          Zadaj svoju výšku
        </h1>

        {/* Desktop: široké texty po stranách obrázka */}
        <div className="hidden sm:flex flex-row items-start justify-between gap-8 mb-2 w-full max-w-7xl">
          {/* Ľavý odborný/vzdelávací text */}
          <div className="flex-1 flex items-center justify-end">
            <p className="text-xl text-gray-800 text-right leading-relaxed max-w-2xl">
              Výška je dôležitý faktor pri nastavovaní správneho príjmu kalórií, bielkovín aj ďalších živín. Čím presnejšie zadáš svoju výšku, tým presnejší bude celý výpočet tvojho individuálneho stravovacieho plánu.  
              <br /><br />
              Aj niekoľko centimetrov navyše či menej môže ovplyvniť odporúčané množstvo jedla, výpočet BMI alebo bazálneho metabolizmu. Odborný plán pre ženy zohľadňuje výšku vždy ako jeden z kľúčových parametrov, pretože ovplyvňuje energetické aj fyziologické potreby každého tela.
            </p>
          </div>
          {/* Obrázok */}
          <img
            src="/images/zena-vyska.png"
            alt="Žena pri meraní výšky"
            className="w-56 h-80 object-cover mx-4"
          />
          {/* Pravý motivačný/príbehový text */}
          <div className="flex-1 flex items-center justify-start">
            <p className="text-xl text-gray-800 text-left leading-relaxed max-w-2xl">
              Každý údaj, ktorý zadáš, je anonymný a použije sa len na výpočet tvojho osobného plánu – nikdy nie na porovnávanie s ostatnými.  
              <br /><br />
              Správne nastavený diétny plán berie do úvahy tvoju výšku, vek, životný štýl aj tvoje ciele. Nemusíš sa báť – čím presnejšie hodnoty zadáš, tým viac bude plán zodpovedať tvojim reálnym potrebám. Zdravé chudnutie začína poctivou analýzou. Sme tu, aby sme ti pomohli na tvojej ceste k lepšiemu zdraviu a sebavedomiu!
            </p>
          </div>
        </div>

        {/* Mobile: texty pod obrázkom */}
        <div className="sm:hidden flex flex-col gap-6 mt-4 w-full max-w-2xl mx-auto">
          <img
            src="/images/zena-vyska.png"
            alt="Žena pri meraní výšky"
            className="w-44 h-64 object-cover mx-auto"
          />
          <p className="text-base text-gray-800 text-center leading-relaxed">
            Výška je dôležitý faktor pri nastavovaní správneho príjmu kalórií, bielkovín aj ďalších živín. Čím presnejšie zadáš svoju výšku, tým presnejší bude celý výpočet tvojho individuálneho plánu.
          </p>
          <p className="text-base text-gray-800 text-center leading-relaxed">
            Každý údaj, ktorý zadáš, je anonymný a použije sa len na výpočet tvojho osobného plánu. Čím presnejšie hodnoty zadáš, tým viac bude plán zodpovedať tvojim reálnym potrebám.
          </p>
        </div>

        {/* Google AdSense pozícia */}
        <div className="w-full flex justify-center my-8">
          {/* 
          <ins className="adsbygoogle"
            style={{ display: "block", width: "100%", minHeight: "90px" }}
            data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
            data-ad-slot="XXXXXXXXXX"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          */}
        </div>

        {/* Formulár */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 w-full max-w-xs mt-8"
        >
          <input
            type="number"
            min={130}
            max={200}
            step={1}
            value={height}
            onChange={handleChange}
            className="w-full px-5 py-4 rounded-xl border border-teal-300 text-2xl font-bold text-center focus:ring-2 focus:ring-teal-400 outline-none"
            placeholder="Tvoja výška v cm"
            required
          />
          {error && (
            <div className="text-red-600 text-base font-semibold">{error}</div>
          )}
          <button
            type="submit"
            className="w-full px-8 py-4 rounded-lg bg-teal-600 text-white font-bold text-lg hover:bg-teal-700 transition"
            disabled={!height || Number(height) < 130 || Number(height) > 200}
          >
            Pokračovať
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
