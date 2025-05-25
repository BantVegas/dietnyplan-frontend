import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const allergies = [
  { label: "Žiadne alergie", icon: "✅" },
  { label: "Laktóza", icon: "🥛" },
  { label: "Glutén", icon: "🍞" },
  { label: "Orechy", icon: "🥜" },
  { label: "Sója", icon: "🌱" },
  { label: "Vajcia", icon: "🥚" },
  { label: "Ryby", icon: "🐟" },
  { label: "Morské plody", icon: "🦐" },
  { label: "Iné", icon: "❓" },
];

export default function WomanAllergies() {
  const [selected, setSelected] = useState<number[]>([]);
  const navigate = useNavigate();

  const handleToggle = (idx: number) => {
    // Ak vyberieš "Žiadne alergie" alebo "Iné" — rovno pokračuj
    if (allergies[idx].label === "Žiadne alergie" || allergies[idx].label === "Iné") {
      // Tu môžeš uložiť výber do contextu/state/backendu
      navigate("/zena/vysledok");
      return;
    }

    // Multi-select ostatných alergií
    setSelected((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  // Ak chceš automaticky prejsť po prvej voľbe (nechaj handleToggle spustiť navigate aj pri inom výbere)
  // Alebo pridaj „Pokračovať“ tlačidlo – dám ti aj tú verziu, ak chceš.

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-teal-100 via-white to-teal-200">
      <Navbar />
      <main className="flex-1 flex flex-col items-center pt-32 px-2">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 text-center mb-3">
            Máš nejaké alergie?
          </h1>
          <p className="text-gray-600 text-base text-center">Môžeš označiť viac možností.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mb-10">
          {allergies.map((al, idx) => (
            <button
              type="button"
              key={al.label}
              className={`flex flex-col items-center justify-center h-24 rounded-2xl shadow-md border-2 transition-all
                ${selected.includes(idx)
                  ? "border-teal-600 bg-teal-50 scale-105"
                  : "border-transparent bg-white"}
              `}
              onClick={() => handleToggle(idx)}
            >
              <span className="text-2xl mb-1">{al.icon}</span>
              <span className="text-base font-medium text-teal-700">{al.label}</span>
            </button>
          ))}
        </div>
        {/* Ak má užívateľ označené aspoň jednu alergiu (okrem Žiadne/Iné), môže pokračovať */}
        {selected.length > 0 && (
          <button
            className="w-full max-w-xs px-8 py-4 rounded-lg font-bold text-lg transition bg-teal-600 text-white hover:bg-teal-700"
            onClick={() => navigate("/zena/vysledok")}
          >
            Pokračovať
          </button>
        )}
      </main>
      <Footer />
    </div>
  );
}
