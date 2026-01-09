export default function Header() {
  const handleTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 w-full h-14 bg-[#101010]/80 backdrop-blur z-50">
        <div className="absolute left-0 bottom-0 w-full h-[3px] bg-[#EA5550]"/>
        <div className="max-w-5xl mx-auto h-full flex items-center justify-between px-4">
            <button
              type="button"
              onClick={handleTopClick}
              className="text-left hover:text-[#EA5550] transition"
              aria-label="ページトップへ"
            >
              KotaPage
            </button>

            <nav className="hidden md:flex gap-6 text-sm text-white/80">
            <a className="hover:text-[#EA5550] transition" href="#about">About</a>
            <a className="hover:text-[#EA5550] transition" href="#highlights">Highlights</a>
            <a className="hover:text-[#EA5550] transition" href="#timeline">Timeline</a>
            <a className="hover:text-[#EA5550] transition" href="#contact">Contact</a>
            </nav>

            <a className="text-sm px-3 py-1.5 rounded-full bg-white/5 hover:bg-[#EA5550]/10 hover:text-[#EA5550] border border-[#EA5550]/10 text-white/90 transition" href="#contact">定期便</a>
        </div>
    </header>
  );
}
