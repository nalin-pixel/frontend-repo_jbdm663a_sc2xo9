import { useState } from "react"

const faqs = [
  { q: "Skąd pochodzą surowce?", a: "Z kontrolowanych upraw, wybieranych pod kątem profilu i czystości." },
  { q: "Jak używać ekstraktów?", a: "Zgodnie z instrukcją na opakowaniu; zaczynamy od małej dawki." },
  { q: "Legalność?", a: "Produkty zgodne z obowiązującymi przepisami, bez efektów psychoaktywnych." },
  { q: "Jak przechowywać?", a: "W chłodnym i ciemnym miejscu; butelka z ciemnego szkła chroni składniki." },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-[#e7e9e8] py-4">
      <button onClick={() => setOpen(!open)} className="w-full text-left flex items-center justify-between">
        <span className="font-medium text-[#2F3133]">{q}</span>
        <span className="text-[#0f5a3a]">{open ? '-' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-sm text-[#4b4f52]">{a}</p>}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-[#2F3133] mb-8">FAQ</h2>
        <div className="bg-[#fafafa] rounded-2xl border border-[#e7e9e8] p-6">
          {faqs.map((f) => <Item key={f.q} q={f.q} a={f.a} />)}
        </div>
      </div>
    </section>
  )
}
