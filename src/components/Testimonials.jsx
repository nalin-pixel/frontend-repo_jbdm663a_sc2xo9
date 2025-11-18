export default function Testimonials() {
  return (
    <section className="py-20 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3133] mb-10">Opinie klientów</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((n) => (
            <div key={n} className="p-6 rounded-2xl border border-[#e7e9e8] bg-white">
              <p className="text-[#2F3133] italic">„Świetna jakość i wyczuwalna dbałość o detale.”</p>
              <p className="mt-3 text-sm text-[#6b7073]">Anna K.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
