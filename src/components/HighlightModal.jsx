import { useEffect } from "react";

const fallbackDetails = {
  date: "",
  technologies: [],
  platform: "",
  links: [],
  description: "Details are coming soon.",
};

export default function HighlightModal({ book, onClose }) {
  useEffect(() => {
    if (!book) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [book, onClose]);

  if (!book) {
    return null;
  }

  const details = book.details || fallbackDetails;
  const technologies =
    details.technologies?.length > 0
      ? details.technologies
      : book.badges || fallbackDetails.technologies;
  const links = details.links?.length > 0 ? details.links : fallbackDetails.links;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 py-6 backdrop-blur md:items-center"
      onClick={onClose}
    >
      <div
        className="w-[70%] max-h-[90vh] max-w-[92vw] overflow-y-auto rounded-lg border border-white/10 bg-[#1a1a1a] text-white shadow-[0_20px_80px_rgba(0,0,0,0.55)] sm:max-h-[85vh] sm:max-w-3xl sm:rounded-xl lg:max-w-4xl"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="grid md:grid-cols-[1.35fr_1fr]">
          <div className="relative mx-auto aspect-square w-full max-w-[240px] bg-[#0f0f0f] sm:max-w-[320px] md:mx-0 md:max-w-none">
            {book.image ? (
              <img
                src={book.image}
                alt={book.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center text-white/70">
                Image
              </div>
            )}
          </div>
          <div className="p-4 sm:p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xl font-semibold sm:text-2xl">
                  <span>{book.title}</span>
                  {book.subtitle ? (
                    <span className="inline">({book.subtitle})</span>
                  ) : null}
                  {book.featured ? (
                    <span className="rounded-full border border-[#EA5550]/50 px-2 py-0.5 text-[10px] font-semibold text-[#EA5550]">
                      代表作
                    </span>
                  ) : null}
                </div>
                {details.date ? (
                  <div className="text-xs text-white/60 sm:text-sm">
                    {details.date}
                  </div>
                ) : null}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-6 text-sm text-white/80">
              <div className="flex flex-col border-t border-white/10 py-3 sm:flex-row sm:gap-4">
                <div className="mb-2 w-full text-white/60 sm:mb-0 sm:w-28">
                  Technologies
                </div>
                <div>{technologies.join(", ")}</div>
              </div>
              {details.platform ? (
                <div className="flex flex-col border-t border-white/10 py-3 sm:flex-row sm:gap-4">
                  <div className="mb-2 w-full text-white/60 sm:mb-0 sm:w-28">
                    Platform
                  </div>
                  <div>{details.platform}</div>
                </div>
              ) : null}
              {links.length > 0 ? (
                <div className="flex flex-col border-t border-white/10 py-3 sm:flex-row sm:gap-4">
                  <div className="mb-2 w-full text-white/60 sm:mb-0 sm:w-28">
                    Links
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-white/80 underline decoration-white/30 hover:decoration-[#EA5550]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="border-t border-white/10 py-4 leading-relaxed">
                {details.description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
