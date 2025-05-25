import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const preferences = [
  { label: "Nemám špeciálne preferencie", icon: "🌍" },
  { label: "Vegetarián", icon: "🥦" },
  { label: "Vegan", icon: "🌱" },
  { label: "Bezlaktózové", icon: "🥛🚫" },
  { label: "Bezlpekové", icon: "🍞🚫" },
  { label: "Chcem rýchle recepty", icon: "⏱️" },
  { label: "Tradičná kuchyňa", icon: "🍲" },
  { label: "Fitness/Šport", icon: "💪" },
];

export default function ManPreferences() {
  const navigate = useNavigate();

  const handleSelect = (idx: number) => {
    // Tu môžeš uložiť preferenciu do contextu/state/backendu
    navigate("/muz/alergie");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-teal-100 via-white to-teal-200">
      <Navbar />
      <main className="flex-1 flex flex-col items-center pt-32 px-2">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-3">
            Aké máš preferencie pri strave?
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl mb-10">
          {preferences.map((pref, idx) => (
            <button
              type="button"
              key={pref.label}
              className={`flex flex-col items-center justify-center h-32 rounded-2xl shadow-md border-2 transition-all
                bg-white hover:scale-105 hover:border-teal-600
              `}
              onClick={() => handleSelect(idx)}
            >
              <span className="text-3xl mb-2">{pref.icon}</span>
              <span className="text-lg font-bold text-teal-700">{pref.label}</span>
            </button>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
