import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const receptyChudnutie = [
  {
    nazov: "Cuketové rezance s kuracím mäsom",
    popis: "Nízko kalorické, rýchle a chutné jedlo pre zdravé chudnutie.",
    suroviny: [
      "1 stredná cuketa",
      "150 g kuracích pŕs",
      "1 strúčik cesnaku",
      "1 PL olivového oleja",
      "Soľ, korenie, bylinky podľa chuti",
      "Parmezán na posypanie (voliteľné)",
    ],
    postup: [
      "Kuracie prsia nakrájame na plátky, osolíme a okoreníme.",
      "Na panvici rozohrejeme olej, pridáme cesnak a krátko orestujeme.",
      "Pridáme mäso a opečieme do zlata.",
      "Cuketu nastrúhame na špagety (spiralizér, škrabka).",
      "Pridáme k mäsu, premiešame, varíme 2-3 minúty do zmäknutia.",
      "Podávame posypané bylinkami alebo parmezánom.",
    ],
  },
  {
    nazov: "Šalát s grilovaným lososom",
    popis: "Omega-3 mastné kyseliny a veľa zeleniny na podporu spaľovania tukov.",
    suroviny: [
      "120 g lososa",
      "Miešaný listový šalát",
      "10 cherry paradajok",
      "1/2 avokáda",
      "1/4 citróna",
      "Soľ, korenie, olivový olej",
    ],
    postup: [
      "Lososa osolíme, okoreníme a opečieme na panvici.",
      "Listový šalát, paradajky a avokádo umyjeme a nakrájame.",
      "Na tanier rozložíme šalát, pridáme zeleninu a lososa.",
      "Pokvapkáme citrónom a olivovým olejom.",
    ],
  },
  {
    nazov: "Tvarohové placky bez múky",
    popis: "Vysoký obsah bielkovín, minimum sacharidov – ideálne na večeru.",
    suroviny: [
      "250 g nízkotučného tvarohu",
      "2 vajcia",
      "Štipka soli, škorica podľa chuti",
      "Kokosový olej na pečenie",
    ],
    postup: [
      "Tvaroh zmiešame s vajcami, osolíme a pridáme škoricu.",
      "Na rozpálenej panvici vytvárame malé placky a opečieme z oboch strán.",
      "Podávame s čerstvým ovocím alebo jogurtom.",
    ],
  },
  {
    nazov: "Kuracia polievka s brokolicou",
    popis: "Výživná, sýta a zároveň veľmi ľahká.",
    suroviny: [
      "100 g kuracích pŕs",
      "1/2 brokolice",
      "1 malá mrkva",
      "1 zemiak",
      "Soľ, korenie, petržlenová vňať",
    ],
    postup: [
      "Kuracie mäso uvaríme v osolenej vode a nakrájame na kúsky.",
      "Pridáme očistenú zeleninu, varíme domäkka.",
      "Dochutíme soľou, korením a posypeme vňaťou.",
    ],
  },
  {
    nazov: "Ovocné smoothie s chia semienkami",
    popis: "Rýchle raňajky s vlákninou a nízkym obsahom cukru.",
    suroviny: [
      "1 banán",
      "100 g lesného ovocia (mrazeného alebo čerstvého)",
      "200 ml mandľového mlieka",
      "1 PL chia semienok",
    ],
    postup: [
      "Všetko ovocie vložíme do mixéra.",
      "Zalejeme mliekom, pridáme chia semienka.",
      "Mixujeme dohladka a podávame hneď.",
    ],
  },
];

const receptyUdrzanie = [
  {
    nazov: "Morčacie prsia s bulgurom",
    popis: "Komplexné sacharidy a kvalitné bielkoviny v ideálnom pomere.",
    suroviny: [
      "120 g morčacích pŕs",
      "60 g bulguru",
      "1/2 papriky",
      "Soľ, korenie, olivový olej",
      "Citrónová šťava",
    ],
    postup: [
      "Morčacie mäso nakrájame na kúsky, osolíme a okoreníme.",
      "Opečieme na olivovom oleji do zlata.",
      "Bulgur uvaríme podľa návodu.",
      "Paprika nakrájame na kocky, premiešame so všetkým.",
      "Zakvapkáme citrónovou šťavou.",
    ],
  },
  {
    nazov: "Celozrnný wrap so zeleninou a tuniakom",
    popis: "Skvelý obed do práce alebo školy – rýchly a vyvážený.",
    suroviny: [
      "1 celozrnný wrap",
      "80 g tuniaka vo vlastnej šťave",
      "1/4 uhorky",
      "2 listy ľadového šalátu",
      "1 PL gréckeho jogurtu",
      "Soľ, korenie, citrónová šťava",
    ],
    postup: [
      "Tuniaka premiešame s jogurtom, soľou, korením a citrónom.",
      "Na wrap uložíme šalát, uhorku na plátky a tuniakovú zmes.",
      "Zrolujeme a rozkrojíme.",
    ],
  },
  {
    nazov: "Quinoa šalát s avokádom a fazuľou",
    popis: "Jednoduchý, zdravý a dlho zasýti.",
    suroviny: [
      "50 g quinoy",
      "1/2 avokáda",
      "80 g červenej fazule",
      "Kúsok červenej cibule",
      "Limetová šťava",
      "Soľ, korenie, olivový olej",
    ],
    postup: [
      "Quinou prepláchneme a uvaríme podľa návodu.",
      "Zmiešame s fazuľou, nasekaným avokádom a cibuľou.",
      "Dochutíme limetou, olejom, soľou a korením.",
    ],
  },
  {
    nazov: "Zapečená cuketa so syrom a šunkou",
    popis: "Lahodné jedlo na udržanie váhy bez zbytočných kalórií.",
    suroviny: [
      "1 stredná cuketa",
      "50 g šunky",
      "40 g strúhaného syra",
      "1 vajce",
      "Soľ, korenie, olivový olej",
    ],
    postup: [
      "Cuketu nakrájame na plátky a nasolíme.",
      "Poukladáme na pekáč, pridáme šunku a posypeme syrom.",
      "Zalejeme rozšľahaným vajíčkom.",
      "Pečieme pri 180°C cca 20 minút.",
    ],
  },
  {
    nazov: "Jogurt s ovocím a orechmi",
    popis: "Ideálne raňajky alebo snack počas dňa.",
    suroviny: [
      "200 g bieleho jogurtu",
      "Hrsť ovocia (jahody, maliny, čučoriedky...)",
      "10 g vlašských orechov",
      "Štipka škorice alebo medu (voliteľné)",
    ],
    postup: [
      "Jogurt dáme do misky.",
      "Pridáme ovocie a nasekané orechy.",
      "Môžeme dochutiť škoricou alebo trochou medu.",
    ],
  },
];

const receptyPribratie = [
  {
    nazov: "Ovsená kaša s arašidovým maslom a banánom",
    popis: "Energeticky bohaté raňajky na zdravé priberanie.",
    suroviny: [
      "60 g ovsených vločiek",
      "250 ml plnotučného mlieka",
      "1 banán",
      "1 PL arašidového masla",
      "Med, orechy podľa chuti",
    ],
    postup: [
      "Ovsené vločky zalejeme mliekom a uvaríme kašu.",
      "Vmiešame arašidové maslo, ozdobíme nakrájaným banánom.",
      "Podľa chuti pridáme med a orechy.",
    ],
  },
  {
    nazov: "Hovädzí burger s domácou žemľou",
    popis: "Bielkoviny a kalórie v dokonalej harmónii.",
    suroviny: [
      "120 g hovädzieho mletého mäsa",
      "1 domáca žemľa",
      "Listový šalát",
      "Plátok syra",
      "Plátok paradajky, cibuľa",
      "1 PL dresingu (jogurt/majonéza)",
      "Soľ, korenie",
    ],
    postup: [
      "Mäso osolíme, okoreníme, vytvarujeme fašírku.",
      "Opečieme na panvici.",
      "Na rozkrojenú žemľu dáme šalát, mäso, syr, zeleninu a dresing.",
      "Priklopíme vrchnou časťou žemle.",
    ],
  },
  {
    nazov: "Cestoviny s lososom a smotanovou omáčkou",
    popis: "Výdatné jedlo pre nárast hmotnosti.",
    suroviny: [
      "80 g celozrnných cestovín",
      "80 g lososa",
      "50 ml smotany na varenie",
      "1 PL olivového oleja",
      "Soľ, korenie, kôpor",
    ],
    postup: [
      "Cestoviny uvaríme podľa návodu.",
      "Na oleji opečieme lososa, pridáme smotanu, dochutíme.",
      "Premiešame s cestovinami, podávame posypané kôprom.",
    ],
  },
  {
    nazov: "Tvarohový koláč s ovocím",
    popis: "Sladký dezert, ktorý zároveň podporí príjem bielkovín.",
    suroviny: [
      "250 g nízkotučného tvarohu",
      "1 vajce",
      "2 PL trstinového cukru",
      "50 g špaldovej múky",
      "Ovocie podľa chuti",
    ],
    postup: [
      "Tvaroh, vajce, cukor a múku zmiešame.",
      "Nalejeme do malej formy, navrch dáme ovocie.",
      "Pečieme pri 180°C cca 25 minút.",
    ],
  },
  {
    nazov: "Smoothie bowl s ovocím, jogurtom a granolou",
    popis: "Vitamíny, minerály a kalórie v jednej miske.",
    suroviny: [
      "150 g bieleho jogurtu",
      "1 banán",
      "Hrsť mrazeného ovocia",
      "2 PL granoly",
      "Kokosové lupienky, chia podľa chuti",
    ],
    postup: [
      "Jogurt, banán a ovocie rozmixujeme dohladka.",
      "Nalejeme do misky, posypeme granolou a kokosom.",
      "Môžeme pridať aj chia semienka.",
    ],
  },
];

export default function Recepty() {
  useEffect(() => {
    document.title = "Recepty | Diétny plán na mieru";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Recepty na chudnutie, udržanie váhy aj priberanie – všetko v prehľadných sekciách. Inšpirujte sa zdravou kuchyňou!"
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
      <Navbar />
      <div className="w-full flex flex-col items-center pt-24 pb-10 px-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-teal-700 mb-6 text-center drop-shadow">
          Zdravé recepty na každý cieľ
        </h1>
        <p className="text-lg text-gray-700 text-center mb-10 max-w-2xl">
          Inšpirujte sa našimi najobľúbenejšími receptami na <b>chudnutie</b>, <b>udržanie váhy</b> aj <b>priberanie</b>. Každý recept má suroviny aj podrobný postup – stačí si vybrať.
        </p>
        <div className="space-y-14 w-full max-w-5xl">
          {/* Recepty na chudnutie */}
          <section>
            <h2 className="text-2xl font-semibold text-amber-700 mb-4 text-center">Recepty na chudnutie</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {receptyChudnutie.map((r, idx) => (
                <div key={idx} className="bg-white/90 rounded-xl shadow flex flex-col items-center px-3 py-4 min-h-[220px]">
                  <span className="font-bold text-teal-700 text-center">{r.nazov}</span>
                  <p className="text-sm text-gray-600 mt-2 text-center">{r.popis}</p>
                  <details className="mt-2 w-full">
                    <summary className="cursor-pointer text-teal-600 font-semibold mb-1">Zobraziť recept</summary>
                    <div className="mt-2 text-left text-xs text-gray-700">
                      <div><b>Suroviny:</b>
                        <ul className="list-disc pl-5">
                          {r.suroviny.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                      <div className="mt-2"><b>Postup:</b>
                        <ol className="list-decimal pl-5">
                          {r.postup.map((p, i) => <li key={i}>{p}</li>)}
                        </ol>
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </section>
          {/* Recepty na udržanie váhy */}
          <section>
            <h2 className="text-2xl font-semibold text-green-700 mb-4 text-center">Recepty na udržanie váhy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {receptyUdrzanie.map((r, idx) => (
                <div key={idx} className="bg-white/90 rounded-xl shadow flex flex-col items-center px-3 py-4 min-h-[220px]">
                  <span className="font-bold text-teal-700 text-center">{r.nazov}</span>
                  <p className="text-sm text-gray-600 mt-2 text-center">{r.popis}</p>
                  <details className="mt-2 w-full">
                    <summary className="cursor-pointer text-teal-600 font-semibold mb-1">Zobraziť recept</summary>
                    <div className="mt-2 text-left text-xs text-gray-700">
                      <div><b>Suroviny:</b>
                        <ul className="list-disc pl-5">
                          {r.suroviny.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                      <div className="mt-2"><b>Postup:</b>
                        <ol className="list-decimal pl-5">
                          {r.postup.map((p, i) => <li key={i}>{p}</li>)}
                        </ol>
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </section>
          {/* Recepty na pribratie */}
          <section>
            <h2 className="text-2xl font-semibold text-rose-700 mb-4 text-center">Recepty na pribratie</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {receptyPribratie.map((r, idx) => (
                <div key={idx} className="bg-white/90 rounded-xl shadow flex flex-col items-center px-3 py-4 min-h-[220px]">
                  <span className="font-bold text-teal-700 text-center">{r.nazov}</span>
                  <p className="text-sm text-gray-600 mt-2 text-center">{r.popis}</p>
                  <details className="mt-2 w-full">
                    <summary className="cursor-pointer text-teal-600 font-semibold mb-1">Zobraziť recept</summary>
                    <div className="mt-2 text-left text-xs text-gray-700">
                      <div><b>Suroviny:</b>
                        <ul className="list-disc pl-5">
                          {r.suroviny.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>
                      <div className="mt-2"><b>Postup:</b>
                        <ol className="list-decimal pl-5">
                          {r.postup.map((p, i) => <li key={i}>{p}</li>)}
                        </ol>
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
