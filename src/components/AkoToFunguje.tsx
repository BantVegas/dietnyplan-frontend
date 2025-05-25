import { useEffect } from "react";

export default function AkoToFunguje() {
  useEffect(() => {
    document.title = "Ako to funguje | Diétny plán na mieru";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Zistite, ako jednoducho si vyplníte online formulár a získate mesačný diétny plán s nákupným zoznamom za bezkonkurenčných 9,99 €."
      );
    }
  }, []);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start pt-0 relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/goal-pribrat.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* HERO */}
      <div className="bg-white/90 rounded-2xl shadow-xl max-w-3xl mt-16 mx-4 px-8 py-10 flex flex-col items-center border-t-8 border-teal-400">
        <h1 className="text-3xl font-bold text-teal-700 mb-4 text-center">
          Ako to funguje?
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Získajte <b>osobný diétny plán na mieru</b> jednoducho v pár krokoch. Vyplňte krátky formulár, zaplaťte pohodlne online a ihneď získate <span className="text-teal-600 font-semibold">mesačný jedálniček</span> aj s kompletným <span className="text-teal-600 font-semibold">nákupným zoznamom</span> priamo do vašej e-mailovej schránky – a to všetko len za <span className="text-amber-600 font-bold">9,99&nbsp;€</span>.
        </p>
        <ol className="list-decimal pl-6 text-base text-gray-700 mb-4 w-full max-w-md space-y-3">
          <li>
            <b>Vyberte si pohlavie a vyplňte krátky formulár</b> – zadáte svoje údaje (vek, výšku, váhu, cieľ, obľúbené jedlá a alergie).
          </li>
          <li>
            <b>Skontrolujte a potvrďte svoje zadanie</b> – na mieru pripravíme váš plán.
          </li>
          <li>
            <b>Zaplatiť jednoducho kartou</b> – cez bezpečný platobný systém Stripe.
          </li>
          <li>
            <b>Okamžite získate mesačný diétny plán</b> – spolu s nákupným zoznamom vo formáte PDF.
          </li>
        </ol>
        <div className="flex flex-col gap-3 w-full mt-4">
          <div className="px-4 py-2 rounded-lg bg-teal-100 text-teal-900 font-semibold shadow-sm text-center">
            Mesačný jedálniček na mieru – žiadna diéta z internetu
          </div>
          <div className="px-4 py-2 rounded-lg bg-amber-100 text-amber-900 font-semibold shadow-sm text-center">
            Obsahuje detailný <b>nákupný zoznam</b> na celý mesiac
          </div>
          <div className="px-4 py-2 rounded-lg bg-green-100 text-green-900 font-semibold shadow-sm text-center">
            Jednorazová platba <span className="font-bold text-amber-700">9,99&nbsp;€</span>, žiadne predplatné!
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          <span className="font-semibold text-teal-600">Rýchle, jednoduché a plne online – získajte zdravšie stravovanie už dnes.</span>
        </div>
      </div>
    </div>
  );
}
