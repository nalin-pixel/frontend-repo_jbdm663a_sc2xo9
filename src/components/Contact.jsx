export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#faf8f4]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F3133] mb-4">Kontakt & B2B</h2>
            <p className="text-[#4b4f52] mb-6">Masz pytania, chcesz zamówić indywidualną partię lub nawiązać współpracę B2B? Napisz do nas.</p>
            <div className="space-y-2 text-[#2F3133]">
              <p><strong>E-mail:</strong> hello@thehempcraft.example</p>
              <p><strong>Instagram:</strong> @thehempcraft</p>
            </div>
          </div>
          <form className="bg-white rounded-2xl border border-[#e7e9e8] p-6 grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm text-[#6b7073] mb-1">Imię</label>
              <input type="text" placeholder="Twoje imię" className="w-full rounded-lg border border-[#cfd2d1] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0f5a3a]" />
            </div>
            <div>
              <label className="block text-sm text-[#6b7073] mb-1">E-mail</label>
              <input type="email" placeholder="adres@email.com" className="w-full rounded-lg border border-[#cfd2d1] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0f5a3a]" />
            </div>
            <div>
              <label className="block text-sm text-[#6b7073] mb-1">Wiadomość</label>
              <textarea rows="5" placeholder="Twoje zapytanie..." className="w-full rounded-lg border border-[#cfd2d1] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0f5a3a]"></textarea>
            </div>
            <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#0f5a3a] text-white font-semibold hover:bg-[#0c4a31] transition-colors">Porozmawiajmy o Twoich ekstraktach</button>
          </form>
        </div>
      </div>
    </section>
  )
}
