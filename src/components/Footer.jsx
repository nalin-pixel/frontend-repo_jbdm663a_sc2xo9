export default function Footer() {
  return (
    <footer className="bg-[#2F3133] text-[#e8e9ea]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-extrabold tracking-wide">TOP HEMP CRAFT</div>
          <p className="text-sm text-[#b9bdbf] mt-2">© {new Date().getFullYear()} The Hemp Craft. Wszelkie prawa zastrzeżone.</p>
        </div>
        <nav className="text-sm space-y-2">
          <a href="#" className="block hover:text-white">Polityka prywatności</a>
          <a href="#" className="block hover:text-white">Regulamin</a>
          <a href="#contact" className="block hover:text-white">Kontakt</a>
        </nav>
        <div className="text-sm text-[#b9bdbf]">
          Elegantnie i naturalnie. Bez kompromisów.
        </div>
      </div>
    </footer>
  )
}
