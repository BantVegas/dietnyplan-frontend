import { useEffect } from "react";

export default function CancelPage() {
  useEffect(() => {
    document.title = "Platba zrušená | Diétny plán na mieru";
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Platba bola zrušená. Nevadí! Vyskúšajte si znovu objednať svoj individuálny diétny plán alebo nás kontaktujte pre viac informácií."
      );
    }
  }, []);

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Platba bola zrušená</h1>
      <p className="text-lg mb-6">
        Vaša platba nebola dokončená. Môžete to skúsiť znova alebo nás kontaktovať, ak potrebujete pomoc.
      </p>
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Prečo si objednať diétny plán?</h2>
        <ul className="list-disc pl-6">
          <li>Zdravé recepty na mieru</li>
          <li>Jednoduchý nákupný zoznam</li>
          <li>Podpora odborníkov na výživu</li>
        </ul>
      </div>
      <div className="mb-6">
        <p>
          Diétny plán na mieru vám pomôže získať lepšie zdravie, <strong>schudnúť efektívne</strong> a naučiť sa správne stravovať.
          Naša služba je rýchla, jednoduchá a prispôsobená presne vašim potrebám.
        </p>
      </div>
      <a
        href="/"
        className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Skúsiť znova
      </a>
    </main>
  );
}
