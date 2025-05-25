import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

// Recenzie pre dôveryhodnosť
const recenzie = [
  {
    meno: "Ivana, 29",
    text: "Schudla som 8 kg za dva mesiace a cítim sa skvelo! Plán bol chutný a jednoduchý.",
    hviezdy: 5,
    avatar: "👩‍🦰",
  },
  {
    meno: "Martin, 41",
    text: "Konečne mám energiu a naučil som sa jesť pravidelne. Plán mi pomohol aj s cholesterolom.",
    hviezdy: 5,
    avatar: "🧔",
  },
  {
    meno: "Lucia, 34",
    text: "Prispôsobili mi jedálniček aj na intolerancie. Perfektný servis, rýchla podpora.",
    hviezdy: 5,
    avatar: "👩",
  },
];

export default function GenderSelect() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Diétny plán na mieru | dietnyplan.sk";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute(
      "content",
      "Získajte svoj osobný diétny plán na mieru vrátane nákupného zoznamu. 100% online, overené odborníkmi, už od 9.99 €."
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-teal-100 via-white to-teal-200">
      <main className="flex-1 w-full flex flex-col items-center px-2">
        {/* HERO + výber pohlavia */}
        <section className="w-full max-w-3xl flex flex-col items-center pt-8 sm:pt-14">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-teal-700 mb-3 text-center drop-shadow">
            Získaj diétny plán na mieru, ktorý ťa naozaj zmení
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 text-center mb-6 max-w-2xl">
            <b>Mesačný jedálniček + nákupný zoznam</b> online, prispôsobený presne tvojmu cieľu.
            Už <span className="text-teal-600 font-bold">300+ klientov</span> dosiahlo výsledky bez hladovania a obmedzení!
          </p>
          
        </section>

        {/* Výber pohlavia */}
        <section id="vyber-pohlavia" className="w-full flex flex-col items-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-gray-900 text-center">
            Vyber svoje pohlavie
          </h2>
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full justify-center">
            <div
              className="cursor-pointer rounded-xl bg-white shadow-lg p-4 max-w-xs w-full mx-auto transition-transform hover:scale-105 border-2 border-teal-100"
              onClick={() => navigate("/zena/vek")}
              tabIndex={0}
              aria-label="Vybrať Žena"
              role="button"
              onKeyPress={e => {
                if (e.key === "Enter") navigate("/zena/vek");
              }}
            >
              <img
                src="/images/zena.png"
                alt="Žena"
                className="rounded-xl w-44 sm:w-48 h-auto object-cover mx-auto"
                loading="lazy"
              />
              <p className="mt-3 text-center font-semibold text-lg text-gray-800">
                Žena &gt;
              </p>
            </div>
            <div
              className="cursor-pointer rounded-xl bg-white shadow-lg p-4 max-w-xs w-full mx-auto transition-transform hover:scale-105 border-2 border-teal-100"
              onClick={() => navigate("/muz/vek")}
              tabIndex={0}
              aria-label="Vybrať Muž"
              role="button"
              onKeyPress={e => {
                if (e.key === "Enter") navigate("/muz/vek");
              }}
            >
              <img
                src="/images/muz.png"
                alt="Muž"
                className="rounded-xl w-44 sm:w-48 h-auto object-cover mx-auto"
                loading="lazy"
              />
              <p className="mt-3 text-center font-semibold text-lg text-gray-800">
                Muž &gt;
              </p>
            </div>
          </div>
        </section>

        {/* Benefity a recenzie DOLE */}
        <section className="w-full flex flex-col items-center mt-0 mb-10">
          {/* BENEFITY */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 w-full max-w-2xl">
            <div className="flex flex-col items-center text-sm">
              <span className="text-2xl">💻</span>
              <span className="font-semibold text-gray-700 mt-1">100% online</span>
            </div>
            <div className="flex flex-col items-center text-sm">
              <span className="text-2xl">⏱️</span>
              <span className="font-semibold text-gray-700 mt-1">Rýchle vybavenie</span>
            </div>
            <div className="flex flex-col items-center text-sm">
              <span className="text-2xl">⭐</span>
              <span className="font-semibold text-gray-700 mt-1">300+ spokojných klientov</span>
            </div>
            <div className="flex flex-col items-center text-sm">
              <span className="text-2xl">👨‍⚕️</span>
              <span className="font-semibold text-gray-700 mt-1">Odborný prístup</span>
            </div>
          </div>
          {/* RECENZIE */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3">
            {recenzie.map((r, i) => (
              <div key={i} className="bg-white/90 rounded-xl shadow p-4 flex flex-col items-center min-h-[110px] border-t-4 border-teal-100">
                <span className="text-3xl mb-1">{r.avatar}</span>
                <span className="font-bold text-teal-700">{r.meno}</span>
                <div className="flex flex-row my-1">
                  {Array(r.hviezdy)
                    .fill(0)
                    .map((_, idx) => (
                      <span key={idx} className="text-yellow-400">★</span>
                    ))}
                </div>
                <p className="text-xs text-gray-700 text-center italic">„{r.text}”</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

