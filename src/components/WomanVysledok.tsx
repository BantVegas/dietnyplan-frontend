import { useState } from "react";

export default function WomanVysledok() {
  // Dummy údaje – tieto si ber z contextu/store alebo props
  const [email, setEmail] = useState("");
  const age = 30;
  const weight = 70;
  const height = 170;
  const name = "Eva";
  const gender = "female";
  const goal = "Udržať váhu";
  const preferences = "bez mäsa";
  const allergies = "laktóza";
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, age, gender, weight, height, goal, preferences, allergies, email,
        }),
      });
      const data = await res.json();
      window.location.href = data.url; // presmeruje na Stripe Checkout
    } catch (err) {
      setError("Nastala chyba pri odosielaní. Skús znova.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-x-hidden">
      {/* Hero obrázok cez overlay + blur */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/goal-udrzat.png"
          alt="Hero pozadie"
          className="w-full h-full object-cover object-center"
          style={{
            filter: "blur(2px) brightness(0.85)"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-100/80 via-white/60 to-teal-200/90" />
      </div>
      {/* Vzorový plán */}
      <div className="mt-16 mb-6 w-full max-w-3xl mx-auto bg-white/95 rounded-2xl shadow-2xl p-8 border-4 border-teal-200 backdrop-blur-sm z-10">
        <h2 className="text-2xl font-extrabold text-teal-800 mb-4 text-center tracking-tight flex items-center justify-center gap-2">
          <span className="text-3xl">🥗</span>
          Ukážka diétného plánu na mieru
        </h2>
        <table className="w-full text-base mb-4">
          <thead>
            <tr className="text-teal-800 border-b-2 border-teal-200">
              <th className="text-left py-2">Jedlo</th>
              <th>Kalórie</th>
              <th>Gramáž</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1">Raňajky: Ovsená kaša s ovocím</td>
              <td className="text-center py-1">350 kcal</td>
              <td className="text-center py-1">60g ovsené vločky, 120g banán, 200ml mandľové mlieko</td>
            </tr>
            <tr className="bg-teal-50">
              <td className="py-1">Desiata: Grécky jogurt s orieškami</td>
              <td className="text-center py-1">180 kcal</td>
              <td className="text-center py-1">120g jogurt, 20g orechy</td>
            </tr>
            <tr>
              <td className="py-1">Obed: Šošovicový šalát</td>
              <td className="text-center py-1">450 kcal</td>
              <td className="text-center py-1">100g šošovica, 50g paprika, 50g paradajka, 10ml olivový olej</td>
            </tr>
            <tr className="bg-teal-50">
              <td className="py-1">Olovrant: Jablko</td>
              <td className="text-center py-1">80 kcal</td>
              <td className="text-center py-1">1 ks (150g)</td>
            </tr>
            <tr>
              <td className="py-1">Večera: Cícerová nátierka s pečivom</td>
              <td className="text-center py-1">340 kcal</td>
              <td className="text-center py-1">80g cícer, 2 ks knackebrot, 50g uhorka</td>
            </tr>
          </tbody>
        </table>
        <div className="text-right text-xs text-gray-600 italic mt-1">
          Celkový denný príjem: <b>1400 kcal</b> | Personalizované na základe vašich údajov
        </div>
        <div className="mt-5 p-4 rounded-lg bg-teal-100/70 border border-teal-300 text-sm text-gray-700">
          <b>Nákupný zoznam na týždeň:</b><br />
          450g ovsené vločky, 7x banán, 1l mandľové mlieko, 1kg šošovica, 500g grécky jogurt, 140g oriešky, 6x jablko, 500g cícer, 2 bal. knackebrot, 350g uhorka, olivový olej, zelenina podľa výberu.
        </div>
      </div>
      {/* Formulár */}
      <form
        onSubmit={handleSubmit}
        className="z-20 bg-white/95 shadow-lg rounded-xl p-8 max-w-md w-full mx-auto flex flex-col gap-4 mb-12"
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
