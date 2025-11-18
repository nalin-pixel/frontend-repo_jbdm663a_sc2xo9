import { Sun, Brain, HeartHandshake } from "lucide-react"

const items = [
  { icon: Sun, title: "Wellness", desc: "Codzienny balans i wyciszenie." },
  { icon: Brain, title: "Koncentracja", desc: "Skupienie bez nadmiernej stymulacji." },
  { icon: HeartHandshake, title: "Regeneracja", desc: "Wieczorny relaks i odpoczynek." },
]

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3133] mb-10">Korzyści / Zastosowania</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="p-6 rounded-2xl border border-[#e7e9e8] bg-[#fafafa]">
              <i.icon className="h-6 w-6 text-[#0f5a3a]" />
              <h3 className="mt-3 font-semibold text-[#2F3133]">{i.title}</h3>
              <p className="text-sm text-[#6b7073] mt-1">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
