import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ManVysledok() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Ukážkové dáta - uprav podľa tvojho flow
  const data = {
    name: "Meno",
    age: 33,
    gender: "male",
    weight: 87,
    height: 182,
    goal: "schudnut",
    preferences: "beef,eggs",
    allergies: "nuts",
    email: email,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validácia emailu
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Zadaj platný e-mail.");
      return;
    }
    setLoading(true);
    try {
      // PRIAMY BACKEND URL (všimni si: port 8080, /api/ prefix!)
      const res = await axios.post(
        "http://localhost:8080/api/create-checkout-session",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: false, // alebo true, ak potrebuješ cookies/session
        }
      );
      window.location.href = res.data.url; // redirect na Stripe checkout
    } catch (err: any) {
      setError("Nepodarilo sa vytvoriť platbu. Skús to znova.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tr from-teal-100 via-white to-teal-200">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center pt-32 px-2">
        <h1 className="text-3xl font-extrabold mb-6 text-teal-800 text-center">
          Všetko je pripravené!
        </h1>
        <p className="text-lg text-gray-700 mb-10 max-w-lg text-center">
          Váš osobný diétny plán je pripravený a čaká na vás. Zadajte svoj e-mail, po zaplatení vám zašleme kompletný mesačný plán aj s nákupným zoznamom.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 w-full max-w-sm bg-white/80 rounded-xl p-8 shadow"
        >
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-5 py-4 rounded-xl border border-teal-300 text-lg text-center font-semibold focus:ring-2 focus:ring-teal-400 outline-none"
            placeholder="Zadajte svoj e-mail"
            required
            disabled={loading}
          />
          {error && <div className="text-red-600 font-semibold">{error}</div>}
          <button
            type="submit"
            className={`w-full px-8 py-4 rounded-lg font-bold text-lg transition ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-teal-600 text-white hover:bg-teal-700"}`}
            disabled={loading}
          >
            {loading ? "Prebieha presmerovanie..." : "Získať plán"}
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
