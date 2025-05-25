import { useState } from "react";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8080";

export default function WomanVysledok() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Statické údaje, príklad vzorového plánu
  const samplePlan = {
    calories: 1400,
    meals: [
      { name: "Raňajky: Ovsená kaša s ovocím", kcal: 350, grams: "60g ovsené vločky, 120g banán, 200ml mandľové mlieko" },
      { name: "Desiata: Grécky jogurt s orieškami", kcal: 180, grams: "120g jogurt, 20g orechy" },
      { name: "Obed: Šošovicový šalát", kcal: 450, grams: "100g šošovica, 50g paprika, 50g paradajka, 10ml olivový olej" },
      { name: "Olovrant: Jablko", kcal: 80, grams: "1 ks (150g)" },
      { name: "Večera: Cícerová nátierka s pečivom", kcal: 340, grams: "80g cícer, 2 ks knackebrot, 50g uhorka" },
    ],
    shoppingList:
      "450g ovsené vločky, 7x banán, 1l mandľové mlieko, 1kg šošovica, 500g grécky jogurt, 140g oriešky, 6x jablko, 500g cícer, 2 bal. knackebrot, 350g uhorka, olivový olej, zelenina podľa výberu."
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
          <span className="text-3xl">🥗</span>
          Ukážka diétného plánu na mieru
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
