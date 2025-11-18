import { Leaf, Filter, TestTube2, Package } from "lucide-react"

const steps = [
  { title: "Selekcja surowca", icon: Leaf, desc: "Starannie wybrane rośliny z kontrolowanych upraw." },
  { title: "Proces ekstrakcji", icon: TestTube2, desc: "Powtarzalny, kontrolowany proces bez agresywnych rozpuszczalników." },
  { title: "Filtracja i standaryzacja", icon: Filter, desc: "Usuwamy zanieczyszczenia, standaryzujemy stężenia." },
  { title: "Kontrola jakości i pakowanie", icon: Package, desc: "Niezależne badania i bezpieczne, ciemne szkło." },
]

export default function Process() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3133] mb-10">Jak powstają nasze ekstrakty</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.title} className="p-6 rounded-2xl border border-[#e7e9e8] bg-[#fafafa]">
              <s.icon className="h-6 w-6 text-[#0f5a3a]" />
              <h3 className="mt-3 font-semibold text-[#2F3133]">{s.title}</h3>
              <p className="text-sm text-[#6b7073] mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
