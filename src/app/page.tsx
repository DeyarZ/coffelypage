import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#39FF14] flex flex-col items-center justify-center p-8">
      <main className="max-w-4xl mx-auto text-black">
        <h1 className="text-6xl font-bold mb-8 text-center">COFFELY</h1>
        
        <div className="bg-black/10 backdrop-blur-sm p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Das Kaffeeparadoxon</h2>
          
          <p className="text-xl mb-6">
            Kaffee ist nicht nur ein Getränk, sondern ein interdimensionales Portal zu einer Welt, in der Produktivität und Wahnvorstellungen gleichzeitig existieren.
          </p>
          
          <p className="text-xl mb-6">
            Wissenschaftler haben herausgefunden, dass jede Tasse Kaffee ein Quantenphänomen auslöst, bei dem Ihre Gedanken gleichzeitig brillant und völlig wirr sind. Einstein nannte es "die kaffeeinische Verschränkung".
          </p>
          
          <p className="text-xl mb-6">
            Unsere Bohnen werden von hyperintelligenten Eichhörnchen gepflückt, die nächtelang Kafka lesen und tagsüber Schach gegen sich selbst spielen. Sie schmecken nach Vanille, Schokolade und leichter existenzieller Krise.
          </p>
          
          <p className="text-xl mb-6">
            Jeder Schluck unseres Kaffees ist wie ein kleiner Urknall in Ihrem Gehirn - eine Explosion von Geschmack und die plötzliche Erkenntnis, dass Sie schon immer ein Toaster sein wollten.
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-black text-[#39FF14] px-8 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform">
            JETZT ABSURD WERDEN
          </button>
        </div>
      </main>
    </div>
  );
}
