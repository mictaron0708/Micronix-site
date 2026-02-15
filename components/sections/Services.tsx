import SectionWrapper from "@/components/SectionWrapper";

const cards = [
  { title: "Writing & Copy", desc: "Texte de vânzare, descrieri, pagini de prezentare." },
  { title: "Website-uri", desc: "Creare + administrare, modern, rapid, optimizat." },
  { title: "Social Media", desc: "Deschidere & administrare pagini, strategie, postări." },
  { title: "Design", desc: "Afișe, postere, bannere, materiale promoționale." },
];

export default function Services() {
  return (
    <SectionWrapper
      id="services"
      title="Ce oferim?"
      subtitle="Servicii orientate pe rezultate: claritate, prezență, conversie."
      from="right"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {cards.map((c) => (
<div
  key={c.title}
  className="premium-card p-4"
>
              <div className="font-bold text-lg">{c.title}</div>
            <div className="mt-1 opacity-80 text-sm leading-relaxed">{c.desc}</div>
          </div>
        ))}
      </div>

      {/* promo anchor */}
      <div id="promo" className="mt-10 rounded-2xl border border-white/10 bg-black/20 p-4">
        <div className="font-bold text-lg">Promoții</div>
        <div className="mt-1 opacity-80 text-sm">
          Secțiune PROMO (condițiile le setăm ulterior).
        </div>
      </div>
    </SectionWrapper>
  );
}