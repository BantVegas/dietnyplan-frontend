import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080/api";

export default function ManVysledok() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Statické údaje príklad vzorového plánu pre muža
  const samplePlan = {
    calories: 1800,
    meals: [
      { name: "Raňajky: Vaječná omeleta so zeleninou", kcal: 400, grams: "3 vajcia, 100g paprika, 50g špenát" },
      { name: "Desiata: Tvaroh s orechmi", kcal: 250, grams: "150g tvaroh, 30g orechy" },
      { name: "Obed: Kuracie prsia s ryžou a brokolicou", kcal: 600, grams: "150g kuracie, 200g ryža, 100g brokolica" },
      { name: "Olovrant: Banán", kcal: 90, grams: "1 ks (120g)" },
      { name: "Večera: Losos s pečenou zeleninou", kcal: 460, grams: "150g losos, 200g zelenina" },
    ],
    shoppingList:
      "18 vajec, 700g paprika, 350g špenát, 1050g tvaroh, 210g orechy, 1050g kuracie prsia, 1400g ryža, 700g brokolica, 7 banánov, 1050g losos, zelenina na pečenie."
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch(`${BACKEND_URL}/create-checkout-session`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Chyba servera");
      const data = await res.json();
      window.location.href = data.url;
    } catch {
      setError("Nastala chyba pri odosielaní. Skús znova.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-x-hidden bg-teal-50">
      {/* Ukážka diétného plánu */}
      <div className="mt-16 mb-6 w-full max-w-3xl mx-auto bg-white rounded-2xl shadow p-8 border-4 border-teal-300">
        <h2 className="text-2xl font-extrabold text-teal-800 mb-4 text-center flex items-center justify-center gap-2">
          <span className="text-3xl">🥩</span>
          Ukážka diétného plánu na mieru (Muž)
        </h2>
        <table className="w-full text-base mb-4">
          <thead>
            <tr className="text-teal-800 border-b-2 border-teal-200">
              <th className="text-left py-2">Jedlo</th>
              <th className="text-center">Kalórie</th>
              <th className="text-center">Gramáž</th>
            </tr>
          </thead>
          <tbody>
            {samplePlan.meals.map((meal, idx) => (
              <tr key={idx} className={idx % 2 === 1 ? "bg-teal-50" : ""}>
                <td className="py-1">{meal.name}</td>
                <td className="text-center py-1">{meal.kcal} kcal</td>
                <td className="text-center py-1">{meal.grams}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right text-xs text-gray-600 italic mt-1">
          Celkový denný príjem: <b>{samplePlan.calories} kcal</b> | Personalizované na základe vašich údajov
        </div>
        <div className="mt-5 p-4 rounded-lg bg-teal-100 border border-teal-300 text-sm text-gray-700">
          <b>Nákupný zoznam na týždeň:</b><br />
          {samplePlan.shoppingList}
        </div>
      </div>

      {/* Formulár pre email */}
      <form
        onSubmit={handleSubmit}
        className="z-20 bg-white shadow-lg rounded-xl p-8 max-w-md w-full mx-auto flex flex-col gap-4 mb-12"
      >
        <h1 className="text-2xl font-bold text-teal-700 mb-2 text-center">
          Všetko je pripravené! Zadajte svoj e-mail a získajte plán na mieru:
        </h1>
        <input
          type="email"
          className="w-full p-4 border border-teal-300 rounded-lg text-lg"
          placeholder="Tvoj email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        {error && <div className="text-red-500">{error}</div>}
        <button
          type="submit"
          className="w-full bg-teal-600 text-white py-3 rounded-lg font-bold hover:bg-teal-700 transition"
          disabled={loading}
        >
          {loading ? "Odosielam..." : "Získať diétny plán"}
        </button>
      </form>
    </div>
  );
}

