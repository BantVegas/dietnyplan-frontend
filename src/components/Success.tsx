import { useEffect } from "react";

export default function SuccessPage() {
  useEffect(() => {
    document.title = "Platba úspešná | Diétny plán na mieru";
    // Ak chceš nastaviť meta popis dynamicky:
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Ďakujeme za nákup diétneho plánu! Váš osobný jedálniček je pripravený. Získajte tipy na zdravé stravovanie, chudnutie a zlepšenie životného štýlu."
      );
    }
  }, []);

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Ďakujeme za vašu platbu!</h1>
      <p className="text-lg mb-6">
        Vaša objednávka bola úspešne dokončená. Čoskoro dostanete <strong>osobný diétne plán</strong> na váš e-mail.
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Čo získavate?</h2>
        <ul className="list-disc pl-6">
          <li>Individuálne navrhnutý jedálniček na celý mesiac</li>
          <li>Podrobný nákupný zoznam</li>
          <li>Tipy na zdravé varenie a pohyb</li>
          <li>Možnosť prispôsobenia podľa vašich potrieb</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Prečo si vybrať diétny plán od nás?</h2>
        <p>
          Sme slovenská online služba zameraná na <strong>zdravé chudnutie</strong>, správnu výživu a dlhodobé výsledky.
          Naše jedálničky sú tvorené odborníkmi na výživu, zohľadňujú vaše zdravotné ciele, alergie aj chuťové preferencie.
        </p>
      </div>
      <a
        href="/"
        className="inline-block mt-4 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
      >
        Späť na hlavnú stránku
      </a>
      {/* Tu príde prípadne AdSense reklama */}
    </main>
  );
}
