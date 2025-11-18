import { FlaskConical, Leaf, ShieldCheck } from "lucide-react"

export default function OurCraft() {
  return (
    <section id="our-craft" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3133] mb-4">Our Craft</h2>
            <p className="text-[#4b4f52] leading-relaxed mb-8">
              Tworzymy ekstrakty w duchu rzemiosła: ręczne procesy, małe partie, starannie wyselekcjonowane surowce z kontrolowanych upraw.
              Każdy etap weryfikujemy laboratoryjnie, dbając o transparentny skład i powtarzalną jakość.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl border border-[#e7e9e8] bg-[#fafafa]">
                <Leaf className="h-6 w-6 text-[#0f5a3a]" />
                <h3 className="mt-3 font-semibold text-[#2F3133]">Rzemiosło</h3>
                <p className="text-sm text-[#6b7073]">Małe partie, uważny dobór surowców.</p>
              </div>
              <div className="p-5 rounded-xl border border-[#e7e9e8] bg-[#fafafa]">
                <ShieldCheck className="h-6 w-6 text-[#0f5a3a]" />
                <h3 className="mt-3 font-semibold text-[#2F3133]">Przejrzysty skład</h3>
                <p className="text-sm text-[#6b7073]">Prosty skład, bez zbędnych dodatków.</p>
              </div>
              <div className="p-5 rounded-xl border border-[#e7e9e8] bg-[#fafafa]">
                <FlaskConical className="h-6 w-6 text-[#0f5a3a]" />
                <h3 className="mt-3 font-semibold text-[#2F3133]">Badania lab</h3>
                <p className="text-sm text-[#6b7073]">Niezależne testy i standaryzacja.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-[#f4f3f0] border border-[#e7e9e8]" />
            <p className="mt-3 text-sm text-[#6b7073]">Zdjęcie pracowni / procesu (placeholder)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
