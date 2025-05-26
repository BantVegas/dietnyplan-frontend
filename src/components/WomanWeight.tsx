import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function WomanWeight() {
  const [weight, setWeight] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Zadaj svoju váhu | dietnyplan.sk";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Zadajte svoju aktuálnu váhu a získajte diétny plán na mieru podľa svojich cieľov. Bezpečné, anonymné, efektívne – dietnyplan.sk."
    );
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setWeight(value);
    setError(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numWeight = Number(weight);

    if (!weight || isNaN(numWeight) || numWeight < 30 || numWeight > 200) {
      setError("Zadaj reálnu váhu v rozmedzí 30 – 200 kg.");
      return;
    }
    // Uloženie váhy do localStorage
    localStorage.setItem("weight", weight);
    navigate("/zena/vyska");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-teal-100 via-white to-teal-200">
      <Navbar />
      <main className="flex-1 flex flex-col md:flex-row justify-center items-center gap-12 w-full max-w-6xl mx-auto px-4 py-10 pt-14 sm:pt-16">
        {/* Motivácia a obrázok vľavo */}
        <section className="flex-1 max-w-xl flex flex-col items-center md:items-start justify-center gap-8">
          <img
            src="/images/individualny-pristup.png"
            alt="Individuálny prístup"
            className="w-60 md:w-72 rounded-2xl shadow-lg mb-4"
            loading="lazy"
          />
          <h2 className="text-2xl sm:text-3xl font-extrabold text-teal-700 mb-1 text-center md:text-left">
            Individuálny prístup k tvojej premene
          </h2>
          <p className="text-gray-800 text-lg text-center md:text-left">
            Každá žena je jedinečná. Náš tím odborníkov zostaví plán priamo pre tvoje potreby a ciele. Zohľadníme vek, zdravotný stav aj životný štýl. Všetko diskrétne a bezpečne.
          </p>
        </section>
        {/* Formulár vpravo */}
        <section className="flex-1 flex flex-col items-center justify-center gap-5 w-full">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-teal-700 mb-2 text-center">
            Zadaj svoju váhu
          </h1>
          <img
            src="/images/zena-vaha.png"
            alt="Váženie"
            className="w-36 sm:w-44 md:w-48 rounded-xl mb-3"
            loading="lazy"
          />
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 w-full max-w-xs"
            autoComplete="off"
          >
            <label htmlFor="weight" className="sr-only">
              Váha v kilogramoch
            </label>
            <input
              id="weight"
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              min={30}
              max={200}
              step={1}
              value={weight}
              onChange={handleChange}
              className="w-full px-5 py-4 rounded-xl border border-teal-300 text-2xl font-bold text-center focus:ring-2 focus:ring-teal-400 outline-none bg-white shadow"
              placeholder="Tvoja váha v kg"
              required
            />
            {error && (
              <div className="text-red-600 text-base font-semibold">{error}</div>
            )}
            <button
              type="submit"
              className={`w-full px-8 py-4 rounded-lg font-bold text-lg transition ${
                !weight || Number(weight) < 30 || Number(weight) > 200
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-teal-600 text-white hover:bg-teal-700"
              }`}
              disabled={!weight || Number(weight) < 30 || Number(weight) > 200}
            >
              Pokračovať
            </button>
          </form>
          <span className="text-gray-400 text-xs text-center mt-2">
            Bezpečnosť a anonymita zaručená.
          </span>
        </section>
      </main>
      <Footer />
    </div>
  );
}

