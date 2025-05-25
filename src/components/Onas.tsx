import { useEffect } from "react";

export default function Onas() {
  useEffect(() => {
    document.title = "O nás | Diétny plán na mieru";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Sme tím skúsených výživových poradcov, ktorí pomohli viac než 300 klientom zdravšie schudnúť. Špecializujeme sa na osobné diétné plány a dlhodobé výsledky."
      );
    }
  }, []);

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-start pt-0 relative overflow-hidden"
      style={{
        backgroundImage: `url('/images/goal-schudnut.png')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      {/* HERO */}
      <div className="bg-white/90 rounded-2xl shadow-xl max-w-2xl mt-16 mx-4 px-8 py-10 flex flex-col items-center border-t-8 border-teal-400">
        <h1 className="text-3xl font-bold text-teal-700 mb-2 text-center">
          Sme tím, ktorý mení životy k lepšiemu
        </h1>
        <p className="text-lg text-gray-700 text-center mb-6">
          Pomáhame Slovákom schudnúť <b>zdravým spôsobom</b> a zmeniť stravovanie natrvalo.<br />
          <span className="text-teal-600 font-semibold">
            Viac než 3 roky skúseností &nbsp;•&nbsp; 300+ spokojných klientov &nbsp;•&nbsp; Osobný prístup ku každému.
          </span>
        </p>
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          {/* Fotka dietológa */}
          <div className="flex-shrink-0">
            <img
              src="/images/peter-novak.png"
              alt="Mgr. Peter Novák – odborník na výživu"
              className="rounded-full border-4 border-teal-300 shadow-xl w-32 h-32 object-cover"
            />
            <div className="text-center mt-2">
              <span className="font-bold">Mgr. Peter Novák</span>
              <br />
              <span className="text-xs text-gray-500">Odborník na výživu & zakladateľ</span>
            </div>
          </div>
          {/* Info blok */}
          <div>
            <ul className="list-disc pl-4 text-base mb-4 text-gray-700">
              <li>
                Individuálny prístup k <strong>chudnutiu bez hladovania</strong>
              </li>
              <li>
                Plány zostavené podľa vašich cieľov, preferencií a potrieb
              </li>
              <li>
                Neobmedzená podpora, tipy a odpovede počas celej vašej premeny
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 mt-3">
              <span className="px-4 py-2 rounded-lg bg-teal-100 text-teal-800 font-semibold shadow-sm">
                300+ spokojných zákazníkov
              </span>
              <span className="px-4 py-2 rounded-lg bg-amber-100 text-amber-800 font-semibold shadow-sm">
                10 rokov praxe
              </span>
              <span className="px-4 py-2 rounded-lg bg-green-100 text-green-800 font-semibold shadow-sm">
                Odborné poradenstvo
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* FEEDBACKY */}
      <section className="mt-10 max-w-3xl w-full px-4">
        <h2 className="text-2xl font-bold text-center text-teal-800 mb-6">Čo o nás hovoria naši klienti?</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white/90 rounded-xl shadow p-4 flex flex-col items-center">
            <span className="font-bold text-teal-600">Ivana, 29</span>
            <p className="text-sm text-gray-600 mt-1 text-center">
              „Schudla som 8 kg za dva mesiace a cítim sa skvelo! Plán bol jednoduchý a chutný, odporúčam každému.”
            </p>
            <div className="text-yellow-400 mt-2">★★★★★</div>
          </div>
          <div className="bg-white/90 rounded-xl shadow p-4 flex flex-col items-center">
            <span className="font-bold text-teal-600">Martin, 41</span>
            <p className="text-sm text-gray-600 mt-1 text-center">
              „Konečne mám energiu a naučil som sa jesť pravidelne. Plán mi pomohol upraviť cholesterol a zbaviť sa únavy.”
            </p>
            <div className="text-yellow-400 mt-2">★★★★★</div>
          </div>
          <div className="bg-white/90 rounded-xl shadow p-4 flex flex-col items-center">
            <span className="font-bold text-teal-600">Lucia, 34</span>
            <p className="text-sm text-gray-600 mt-1 text-center">
              „Jedálniček mi prispôsobili aj na intolerancie. Perfektný servis a podpora na e-maile vždy rýchla!”
            </p>
            <div className="text-yellow-400 mt-2">★★★★★</div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-400 mt-4">
          Viac než <strong>300 spokojných klientov</strong> po celom Slovensku.
        </div>
      </section>
    </div>
  );
}
