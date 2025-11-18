import { ShieldCheck, FlaskConical, BadgeCheck } from "lucide-react"

export default function Quality() {
  return (
    <section className="py-20 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3133] mb-10">Jakość i badania</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border border-[#e7e9e8] bg-white">
            <div className="h-16 rounded bg-[#f4f3f0] border border-[#e7e9e8]" />
            <p className="text-sm text-[#6b7073] mt-2">Miejsce na logotypy/certyfikaty</p>
          </div>
          <div className="p-6 rounded-2xl border border-[#e7e9e8] bg-white">
            <div className="flex items-center gap-3">
              <FlaskConical className="h-6 w-6 text-[#0f5a3a]" />
              <h3 className="font-semibold text-[#2F3133]">Transparentność składu</h3>
            </div>
            <p className="text-sm text-[#4b4f52] mt-2">Publikujemy wyniki badań z niezależnych laboratoriów. Standaryzujemy stężenia i nie dodajemy sztucznych wypełniaczy.</p>
            <ul className="mt-3 text-sm text-[#2F3133] space-y-2">
              <li className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-[#0f5a3a]"/> Zero sztucznych dodatków</li>
              <li className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-[#0f5a3a]"/> Standaryzowane stężenia</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl border border-[#e7e9e8] bg-white">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-[#0f5a3a]" />
              <h3 className="font-semibold text-[#2F3133]">Bezpieczeństwo</h3>
            </div>
            <p className="text-sm text-[#4b4f52] mt-2">Każda partia przechodzi kontrolę jakości. Używamy ciemnego szkła i precyzyjnych dozowników.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
