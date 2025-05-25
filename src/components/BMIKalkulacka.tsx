import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function BMIKalkulacka() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"male" | "female" | "other">("male");
  const [bmi, setBmi] = useState<number | null>(null);
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.title = "BMI Kalkulačka | dietnyplan.sk";
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      desc.setAttribute("name", "description");
      document.head.appendChild(desc);
    }
    desc.setAttribute(
      "content",
      "Seriózna BMI kalkulačka s vekom a pohlavím. Spočítajte si presnejší BMI a zistite, či je vaša hmotnosť zdravá. Odborné výpočty, žiadne reklamy, diskrétne."
    );
    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) {
      keywords = document.createElement("meta");
      keywords.setAttribute("name", "keywords");
      document.head.appendChild(keywords);
    }
    keywords.setAttribute(
      "content",
      "bmi kalkulačka, bmi s vekom, bmi podľa pohlavia, index telesnej hmotnosti, zdravie, odborné výpočty"
    );
  }, []);

  function getBMICategory(bmi: number, gender: string, age: number) {
    if (bmi < 18.5) return "Podváha";
    if (bmi < 25) return "Normálna hmotnosť";
    if (bmi < 30) return "Nadváha";
    if (bmi < 35) return "Obezita I. stupňa";
    if (bmi < 40) return "Obezita II. stupňa";
    return "Obezita III. stupňa";
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBmi(null);
    setResult("");
    setError(null);

    const h = Number(height);
    const w = Number(weight);
    const a = Number(age);

    if (!h || !w || !a || h < 120 || h > 250 || w < 30 || w > 250 || a < 15 || a > 120) {
      setError("Vyplňte reálne údaje (váha 30–250 kg, výška 120–250 cm, vek 15–120 rokov).");
      return;
    }

    const bmiValue = w / ((h / 100) ** 2);
    setBmi(bmiValue);
    setResult(getBMICategory(bmiValue, gender, a));
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <Navbar />
      <main
        className="flex-1 flex flex-col items-center pt-20 px-2 w-full min-h-screen relative"
        style={{
          backgroundImage: "url('images/BMI.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top"
        }}
      >
        <div className="absolute inset-0 bg-white/70 z-0"></div>
        <div className="relative z-10 w-full flex flex-col items-center">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4 text-center">
            BMI Kalkulačka
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
            Seriózna BMI kalkulačka – rýchlo a diskrétne zistíte, či je vaša hmotnosť v zdravých medziach. Pre presnejšie výsledky pridajte svoj vek a pohlavie.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4 w-full max-w-sm bg-white bg-opacity-90 p-8 rounded-xl shadow"
          >
            <div className="w-full">
              <label htmlFor="weight" className="block text-gray-700 font-semibold mb-1">
                Vaša váha (kg)
              </label>
              <input
                id="weight"
                type="number"
                min={30}
                max={250}
                value={weight}
                onChange={(e) => setWeight(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-5 py-3 rounded-xl border border-teal-300 text-xl font-bold text-center focus:ring-2 focus:ring-teal-400 outline-none"
                placeholder="Napr. 80"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="height" className="block text-gray-700 font-semibold mb-1">
                Vaša výška (cm)
              </label>
              <input
                id="height"
                type="number"
                min={120}
                max={250}
                value={height}
                onChange={(e) => setHeight(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-5 py-3 rounded-xl border border-teal-300 text-xl font-bold text-center focus:ring-2 focus:ring-teal-400 outline-none"
                placeholder="Napr. 180"
                required
              />
            </div>
            <div className="w-full">
              <label htmlFor="age" className="block text-gray-700 font-semibold mb-1">
                Váš vek
              </label>
              <input
                id="age"
                type="number"
                min={15}
                max={120}
                value={age}
                onChange={(e) => setAge(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full px-5 py-3 rounded-xl border border-teal-300 text-xl font-bold text-center focus:ring-2 focus:ring-teal-400 outline-none"
                placeholder="Napr. 36"
                required
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700 font-semibold mb-1">
                Pohlavie
              </label>
              <div className="flex gap-4 justify-center">
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                    className="accent-teal-600"
                  />
                  Muž
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                    className="accent-teal-600"
                  />
                  Žena
                </label>
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    checked={gender === "other"}
                    onChange={() => setGender("other")}
                    className="accent-teal-600"
                  />
                  Iné
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg bg-teal-600 text-white font-bold text-lg hover:bg-teal-700 transition mt-2"
            >
              Vypočítať BMI
            </button>
          </form>
          {error && (
            <div className="mt-6 text-center text-red-600 font-semibold">{error}</div>
          )}
          {bmi !== null && (
            <div className="mt-8 text-center">
              <div className="text-2xl font-extrabold text-gray-900 mb-2">
                Vaše BMI: {bmi.toFixed(1)}
              </div>
              <div className="text-lg font-bold text-teal-700">{result}</div>
              <div className="mt-4 text-gray-600 text-base max-w-md mx-auto">
                BMI je orientačný údaj, ktorý neberie do úvahy svalovú hmotu, rozloženie tuku, vek, ani špecifiká žien a mužov. 
                Ak chcete individuálne odporúčanie, odporúčame <a href="/" className="text-teal-700 underline">diétny plán na mieru</a>.
              </div>
            </div>
          )}
          <div className="mt-10 max-w-2xl mx-auto text-gray-600 text-sm text-center leading-relaxed">
            <strong>Prečo chceme vedieť aj vek a pohlavie?</strong>
            <br />
            V dospelosti sa štandardný BMI hodnotí rovnako pre mužov aj ženy, ale ženy majú prirodzene vyšší podiel telesného tuku. 
            S vekom sa prirodzene mení aj rozloženie tukov a svalov v tele. Ak ste aktívny športovec alebo starší človek, BMI je len orientačný údaj – najviac vypovedá o rizikách extrémov (podváha, obezita).
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


