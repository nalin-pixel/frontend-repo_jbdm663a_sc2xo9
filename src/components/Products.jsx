import { ChevronRight } from "lucide-react"

const products = [
  { id: 1, name: "Olejek Full Spectrum 10%", benefits: ["Pełne spektrum", "Delikatny profil" ] },
  { id: 2, name: "Macerat Premium 20%", benefits: ["Tłoczony na zimno", "Zbalansowany" ] },
  { id: 3, name: "Koncentrat Craft 40%", benefits: ["Wysoka czystość", "Standaryzacja" ] },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3133]">Ekstrakty</h2>
            <p className="text-[#4b4f52] mt-2">Wybór najczęściej zamawianych pozycji</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group bg-white border border-[#e7e9e8] rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-b from-[#2F3133] to-[#424548]" />
              <h3 className="mt-4 font-semibold text-[#2F3133]">{p.name}</h3>
              <ul className="mt-2 text-sm text-[#6b7073] list-disc list-inside space-y-1">
                {p.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
              <button className="mt-4 inline-flex items-center px-4 py-2 rounded-lg border border-[#cfd2d1] text-[#2F3133] hover:text-white hover:bg-[#0f5a3a] hover:border-[#0f5a3a] transition-colors">
                Poznaj produkt
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
