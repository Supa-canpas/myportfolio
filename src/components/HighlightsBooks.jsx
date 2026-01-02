import { useState } from "react";
import HighlightModal from "./HighlightModal";
import uvmierno from "../assets/uvmierno.png";
import himap from "../assets/himap.png";
import tunagate from "../assets/tunagate.png";
import portfolio from "../assets/portfolio.png";
import ap from "../assets/ap.png";
import mcc from "../assets/mcc.png";

const books = [
  { title: "ヒマップ(ハッカソン企業賞)", image: himap, ribbon: "Hackathon Win" },
  { title: "UVミエルノ（ハッカソン優勝)", image: uvmierno, sideLabel: "Hackathon Win" },
  { title: "ツナゲート（長期インターン)", image:tunagate, sideLabel: "Hackathon Win" },
  { title: "ポートフォリオ", image:portfolio, sideLabel: "Hackathon Win" },
  { title: "応用情報技術者", image:ap, sideLabel: "Hackathon Win" },
  { title: "MCC広報(サークル)", image:mcc, sideLabel: "Hackathon Win" },
];

export default function HighlightsBooks() {
  const [activeBook, setActiveBook] = useState(null);

  return (
    <section id="highlights" className="pt-6 pb-20">
      <div className="max-w-2xl mx-auto px-2">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">Highlights</h2>

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-[2px] bg-[#EA5550]/70" />
          <div className="absolute right-0 top-0 h-full w-[2px] bg-[#EA5550]/70" />

          <div className="grid gap-3 px-2 grid-cols-2 md:grid-cols-3">
            {books.map((book, index) => (
              <article
                key={`${book.title}-${index}`}
                className="group relative aspect-[2/3] scale-95 md:scale-100 cursor-pointer overflow-hidden bg-[#6a6a6a] shadow-[0_6px_18px_rgba(0,0,0,0.3)]"
                onClick={() => setActiveBook(book)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setActiveBook(book);
                  }
                }}
                tabIndex={0}
                aria-haspopup="dialog"
              >
                {book.image ? (
                  <img
                    src={book.image}
                    alt={book.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-sm text-white/80 transition-transform duration-300 group-hover:scale-105">
                    Image
                  </div>
                )}

                {book.sideLabel ? (
                  <div
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[11px] text-white/70"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {book.sideLabel}
                  </div>
                ) : null}

                {book.ribbon ? (
                  <div className="absolute bottom-0 left-0 w-full bg-[#EA5550] py-1.5 text-center text-xs font-semibold text-white">
                    {book.ribbon}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </div>
      <HighlightModal book={activeBook} onClose={() => setActiveBook(null)} />
    </section>
  );
}
