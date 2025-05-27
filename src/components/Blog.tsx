import React, { useEffect } from "react";

const blogs = [
  {
    title: "Ako začať s diétou bez stresu a hladovania",
    image: "/images/blog1.png",
    imageAlt: "Usmievavý človek pripravuje zdravé raňajky v modernej kuchyni",
    content: (
      <>
        <p className="mb-2">
          Začať s diétou nemusí znamenať hladovanie alebo neustály pocit viny. Moderné prístupy k stravovaniu sú postavené na rovnováhe a pochopení potrieb vlastného tela.
        </p>
        <h3 className="font-semibold mt-4 mb-1">1. Nezačínaj „od pondelka“, začni dnes</h3>
        <p>
          Čím skôr urobíš malé zmeny, tým rýchlejšie uvidíš výsledky. Zabudni na veľké zákazy a radšej pridaj do jedálnička viac zeleniny a kvalitných bielkovín.
        </p>
        <h3 className="font-semibold mt-4 mb-1">2. Neboj sa jedla</h3>
        <p>
          Jedlo nie je nepriateľ! Kľúč je v správnej skladbe – pravidelné malé porcie ti udržia energiu aj dobrú náladu.
        </p>
        <h3 className="font-semibold mt-4 mb-1">3. Plánuj si jedlo vopred</h3>
        <p>
          Vďaka plánovaniu sa vyhneš náhodným „prehreškom“. Osobný plán ti pomôže vedieť, čo variť aj nakupovať.
        </p>
        <h3 className="font-semibold mt-4 mb-1">4. Nezabúdaj na pohyb</h3>
        <p>
          Nemusíš každý deň do fitka – aj prechádzka alebo krátke cvičenie doma spravia rozdiel.
        </p>
        <h3 className="font-semibold mt-4 mb-1">5. Buď k sebe trpezlivý/á</h3>
        <p>
          Nedokonalosti patria k procesu. Každý deň je nový začiatok a malé pokroky sa počítajú.
        </p>
        <p className="mt-4 font-medium">
          Začni so zdravou zmenou bez extrémov. Skús si vytvoriť vlastný plán, ktorý bude vyhovovať práve tebe.
        </p>
      </>
    ),
  },
  {
    title: "Najčastejšie chyby pri chudnutí – a ako sa im vyhnúť",
    image: "/images/blog2.png",
    imageAlt: "Žena pozerá do chladničky, rozhoduje sa medzi zdravým a nezdravým jedlom",
    content: (
      <>
        <p className="mb-2">
          Mnohí sa pri snahe schudnúť dopúšťajú opakovaných chýb, ktoré môžu celý proces brzdiť. Pozri sa, čo sú tie najčastejšie a ako sa im elegantne vyhnúť.
        </p>
        <h3 className="font-semibold mt-4 mb-1">1. Príliš nízky príjem kalórií</h3>
        <p>
          Hladovanie spôsobuje spomalenie metabolizmu a často vedie k prejedaniu.
        </p>
        <h3 className="font-semibold mt-4 mb-1">2. Vynechávanie jedál</h3>
        <p>
          Ak vynecháš raňajky alebo obed, večer pravdepodobne zješ viac, než potrebuješ.
        </p>
        <h3 className="font-semibold mt-4 mb-1">3. Obmedzovanie všetkého „dobrého“</h3>
        <p>
          Prísne zákazy vedú k túžbe po zakázanom ovocí a následným „prehreškom“.
        </p>
        <h3 className="font-semibold mt-4 mb-1">4. Ignorovanie pohybu</h3>
        <p>
          Strava je základ, ale bez pohybu pôjde všetko pomalšie.
        </p>
        <h3 className="font-semibold mt-4 mb-1">5. Zabudnutý pitný režim</h3>
        <p>
          Často si zamieňame hlad s obyčajným smädom. Pi pravidelne čistú vodu.
        </p>
        <p className="mt-4 font-medium">
          Vyvaruj sa týchto chýb a budeš na správnej ceste. Osobný diétny plán ti pomôže vyhnúť sa zbytočným omylom.
        </p>
      </>
    ),
  },
  {
    title: "Pravda o kalóriách a ich vplyve na chudnutie",
    image: "/images/blog3.png",
    imageAlt: "Kuchynská váha, ovocie a zápisník s kalóriami",
    content: (
      <>
        <p className="mb-2">
          Kalórie sú často démonizované, ale pravda je jednoduchá: nie je dôležité len koľko ich prijmeš, ale aj z akých zdrojov pochádzajú.
        </p>
        <h3 className="font-semibold mt-4 mb-1">1. Nie všetky kalórie sú rovnaké</h3>
        <p>
          100 kcal zo sladkostí nie je to isté ako 100 kcal z lososa alebo avokáda.
        </p>
        <h3 className="font-semibold mt-4 mb-1">2. Kalorický deficit je základ</h3>
        <p>
          Na chudnutie musíš prijímať menej energie, ako minieš. Ale extrémne reštrikcie sú neudržateľné.
        </p>
        <h3 className="font-semibold mt-4 mb-1">3. Počítanie kalórií nemusí byť stres</h3>
        <p>
          Ak máš plán, nemusíš nič zložito rátať – všetko máš pripravené.
        </p>
        <h3 className="font-semibold mt-4 mb-1">4. Kvalitné potraviny = viac sýtosti</h3>
        <p>
          Zdravé jedlá ťa zasýtia lepšie a dlhšie než polotovary.
        </p>
        <h3 className="font-semibold mt-4 mb-1">5. Zmena prístupu k jedlu</h3>
        <p>
          Nauč sa rozpoznať hlad, chuť a skutočnú potrebu tela.
        </p>
        <p className="mt-4 font-medium">
          Kalórie sú len číslo. Zameraj sa na kvalitu jedla a rovnováhu – výsledky sa dostavia.
        </p>
      </>
    ),
  },
  {
    title: "Reálne výsledky: Príbehy ľudí, ktorým osobný plán zmenil život",
    image: "/images/blog4.png",
    imageAlt: "Symbolické pred/po fotografie, ľudia s ovocím a zeleninou",
    content: (
      <>
        <p className="mb-2">
          Najlepšou inšpiráciou sú reálne skúsenosti tých, ktorí si osobným plánom prešli. Čo hovoria o svojej ceste?
        </p>
        <h3 className="font-semibold mt-4 mb-1">Katarína (29): „Prestala som bojovať s diétami.“</h3>
        <p>
          „S osobným plánom som konečne pochopila, čo moje telo potrebuje. Schudla som 7 kg a mám viac energie.“
        </p>
        <h3 className="font-semibold mt-4 mb-1">Ján (42): „Cítim sa zdravšie a fit“</h3>
        <p>
          „Nešlo len o váhu. Prestali ma bolieť kĺby a mám lepšiu náladu každý deň.“
        </p>
        <h3 className="font-semibold mt-4 mb-1">Michaela (35): „Varenie je konečne jednoduché“</h3>
        <p>
          „Plán mi ukázal, ako si zjednodušiť varenie, aj keď mám malé deti.“
        </p>
        <h3 className="font-semibold mt-4 mb-1">Tomáš (37): „Bez hladovania, bez stresu“</h3>
        <p>
          „Chudnutie nebolo o odriekaní. Jedol som normálne, len správne.“
        </p>
        <h3 className="font-semibold mt-4 mb-1">Zuzana (24): „Odporúčam každému“</h3>
        <p>
          „Nebojte sa urobiť prvý krok. Všetko je jednoduchšie s jasným plánom.“
        </p>
        <p className="mt-4 font-medium">
          Tvoj príbeh môže byť ďalší. Začni s osobným plánom a objav, čo všetko sa dá zmeniť.
        </p>
      </>
    ),
  },
  {
    title: "Ako si udržať zdravé stravovanie aj s rodinou alebo v práci",
    image: "/images/blog5.png",
    imageAlt: "Rodina pri stole s rozmanitými zdravými jedlami alebo kolegovia v kancelárii",
    content: (
      <>
        <p className="mb-2">
          Stravovať sa zdravo je jednoduchšie, keď máš plán a podporu okolia. Ako na to, aj keď nie všetci doma sú nadšení zmenami?
        </p>
        <h3 className="font-semibold mt-4 mb-1">1. Inšpiruj ostatných, nezačni zákazmi</h3>
        <p>
          Namiesto kritiky skús pozitívny príklad a nové recepty.
        </p>
        <h3 className="font-semibold mt-4 mb-1">2. Vari jednoducho, ale chutne</h3>
        <p>
          Praktické a chutné recepty z plánu si obľúbia aj ostatní.
        </p>
        <h3 className="font-semibold mt-4 mb-1">3. Pripravuj jedlo na viac dní</h3>
        <p>
          Šetrí to čas a eliminuje neplánované stravovanie v práci.
        </p>
        <h3 className="font-semibold mt-4 mb-1">4. Zdravé snacky do práce</h3>
        <p>
          Máš vždy po ruke lepšiu alternatívu ako automaty a fastfood.
        </p>
        <h3 className="font-semibold mt-4 mb-1">5. Buď flexibilný/á</h3>
        <p>
          Ak príde oslava, firemný obed alebo rodinné stretnutie, nič sa nedeje. Vráť sa k plánu ďalší deň.
        </p>
        <p className="mt-4 font-medium">
          Zdravý životný štýl je o rovnováhe, nie o extrémoch. S osobným plánom to zvládneš kdekoľvek.
        </p>
      </>
    ),
  },
  {
    title: "Mýty o diéte, ktorým stále ľudia veria",
    image: "/images/blog6.png",
    imageAlt: "Mladý muž a žena diskutujú nad miskou šalátu, okolo sú bubliny s rôznymi mýtmi o diéte",
    content: (
      <>
        <p className="mb-2">
          Svet zdravého stravovania je plný dezinformácií. Aj v 21. storočí sa medzi ľuďmi šíria rôzne mýty, ktoré bránia dosiahnutiu skutočných výsledkov.
        </p>
        <h3 className="font-semibold mt-4 mb-1">1. Sacharidy sú nepriateľ</h3>
        <p>
          Úplné vyradenie sacharidov nie je riešením. Správny výber a množstvo sacharidov je dôležitý pre energiu aj náladu.
        </p>
        <h3 className="font-semibold mt-4 mb-1">2. Light produkty = chudnutie</h3>
        <p>
          „Light“ neznamená automaticky zdravé alebo vhodné pre chudnutie. Často obsahujú viac cukru alebo umelých sladidiel.
        </p>
        <h3 className="font-semibold mt-4 mb-1">3. Jedno „cheat meal“ všetko pokazí</h3>
        <p>
          Jedno výnimočné jedlo ti výsledky nepokazí. Dôležitá je pravidelnosť, nie dokonalosť každý deň.
        </p>
        <h3 className="font-semibold mt-4 mb-1">4. Hladovanie = rýchlejší úbytok hmotnosti</h3>
        <p>
          Prílišné obmedzovanie vedie k jojo efektu. Trvalý progres sa dosahuje rozumne a postupne.
        </p>
        <p className="mt-4 font-medium">
          Never všetkému, čo sa šíri na internete. Stav na fakty a overené informácie – tvoja cesta bude jednoduchšia!
        </p>
      </>
    ),
  },
];

const ADSENSE_CLIENT = "ca-pub-8005465650143173";
const ADSENSE_SLOT = "XXXXXXXXXX"; // <-- Doplň svoj ad slot z AdSense!

const Blog: React.FC = () => {
  useEffect(() => {
    document.title = "Blog o diétach, zdraví a chudnutí | Dietnyplan.sk";
  }, []);

  useEffect(() => {
    // Inicializácia AdSense reklamy pri zobrazení stránky (SPA friendly)
    // @ts-ignore
    if (window.adsbygoogle && process.env.NODE_ENV !== "development") {
      // @ts-ignore
      window.adsbygoogle.push({});
    }
  }, []);

  return (
    <section className="py-8 bg-gradient-to-b from-white to-slate-100">
      {/* Google AdSense */}
      <div className="my-6 flex justify-center">
        <ins className="adsbygoogle"
          style={{ display: "block", width: "100%", height: 90 }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={ADSENSE_SLOT}
          data-ad-format="auto"
        ></ins>
      </div>
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Blog</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.title}
              className="rounded-2xl shadow-lg bg-white p-6 hover:shadow-xl transition-all duration-200 flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.imageAlt}
                className="rounded-xl mb-4 w-full h-56 object-cover"
                loading="lazy"
              />
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <div className="prose prose-slate max-w-none text-base">{blog.content}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

