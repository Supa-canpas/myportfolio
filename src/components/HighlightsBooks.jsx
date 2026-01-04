import { useState } from "react";
import HighlightModal from "./HighlightModal";
import { highlights } from "./highlightsData";

export default function HighlightsBooks() {
  const [activeBook, setActiveBook] = useState(null);

  return (
    <section id="highlights" className="scroll-mt-16 pt-6 pb-20">
      <div className="max-w-2xl mx-auto px-2">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-[3px] bg-[#EA5550]" />
          <h2 className="text-xl md:text-2xl font-semibold">Highlights</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 h-full w-[2px] bg-[#EA5550]/70" />
          <div className="absolute right-0 top-0 h-full w-[2px] bg-[#EA5550]/70" />

          <div className="grid gap-3 px-2 grid-cols-2 md:grid-cols-3">
            {highlights.map((book, index) => {
              const titleText = book.subtitle
                ? `${book.title}(${book.subtitle})`
                : book.title;
              return (
              <article
                key={book.id || `${book.title}-${index}`}
                className={`group relative aspect-[2/3] scale-95 md:scale-100 cursor-pointer overflow-hidden bg-[#6a6a6a] shadow-[0_6px_18px_rgba(0,0,0,0.3)] ${
                  book.featured
                    ? "ring-1 ring-[#EA5550]/60 shadow-[0_0_18px_rgba(234,85,80,0.35)]"
                    : ""
                }`}
                onClick={() => setActiveBook(book)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    setActiveBook(book);
                  }
                }}
                tabIndex={0}
                aria-haspopup="dialog"
              >
                {book.featured ? (
                  <div className="absolute left-2 top-2 rounded-full border border-[#EA5550]/50 bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-[#EA5550]">
                    代表作
                  </div>
                ) : null}
                {book.image ? (
                  <img
                    src={book.image}
                    alt={titleText}
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
                    <span>{book.title}</span>
                    {book.subtitle ? (
                      <span className="ml-1 inline">({book.subtitle})</span>
                    ) : null}
                  </div>
                ) : null}
              </article>
              );
            })}
          </div>
        </div>
      </div>
      <HighlightModal book={activeBook} onClose={() => setActiveBook(null)} />
    </section>
  );
}
