import { ChevronRight } from "lucide-react"

const DropletBG = () => (
  <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden="true">
    <defs>
      <pattern id="drop" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
        <path d="M60 10 C45 35 30 55 30 72 a30 30 0 0 0 60 0 c0-17-15-37-30-62z" fill="#2F3133"/>
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#drop)" />
  </svg>
)

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleLogoError = (e) => {
    e.currentTarget.style.display = 'none'
    const fallback = document.getElementById('text-logo')
    if (fallback) fallback.style.display = 'block'
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#faf8f4]" />
      <DropletBG />

      <div className="relative max-w-7xl mx-auto px-6 pt-10 pb-20 sm:pt-16 sm:pb-28 lg:pt-20 lg:pb-36">
        <header className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src="/top-hemp-craft-logo.svg" alt="TOP HEMP CRAFT" onError={handleLogoError} className="h-10 w-auto" />
            <div id="text-logo" className="hidden text-[#2F3133] font-extrabold tracking-wide text-xl">TOP HEMP CRAFT</div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-[#2F3133]">
            <button onClick={() => scrollTo('our-craft')} className="hover:text-[#0f5a3a] transition-colors">O marce</button>
            <button onClick={() => scrollTo('products')} className="hover:text-[#0f5a3a] transition-colors">Ekstrakty</button>
            <button onClick={() => scrollTo('process')} className="hover:text-[#0f5a3a] transition-colors">Proces</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-[#0f5a3a] transition-colors">Kontakt</button>
          </nav>
        </header>

        <div className="mt-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2F3133]">
              Craftowe ekstrakty z konopi
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-[#4b4f52] max-w-xl">
              Ręcznie tworzone, w małych partiach. Transparentny skład, standaryzowane stężenia i kontrola jakości na każdym etapie.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button onClick={() => scrollTo('products')} className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0f5a3a] text-white font-semibold shadow-sm hover:bg-[#0c4a31] transition-colors">
                Zobacz nasze ekstrakty
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button onClick={() => scrollTo('process')} className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-[#cfd2d1] text-[#2F3133] font-semibold hover:border-[#0f5a3a] hover:text-[#0f5a3a] transition-colors">
                Dowiedz się, jak powstają
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 bg-[#0f5a3a]/10 blur-2xl rounded-full" aria-hidden="true" />
            <div className="relative grid grid-cols-2 gap-6">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-[#2F3133] to-[#424548] shadow-xl" />
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-[#2F3133] to-[#424548] shadow-xl translate-y-8" />
            </div>
            <p className="mt-3 text-sm text-[#6b7073]">Mockup butelek jako placeholder (ciemne szkło z zielonym akcentem)</p>
          </div>
        </div>
      </div>
    </section>
  )
}
