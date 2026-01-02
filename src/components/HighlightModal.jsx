import { useEffect } from "react";

const fallbackDetails = {
  date: "2024/9",
  technologies: [
    "TypeScript",
    "React",
    "Remix",
    "Supabase",
    "AWS",
    "Python",
    "Flask",
  ],
  platform: "Web",
  links: [{ label: "Presentation", href: "#" }],
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/70 px-4 py-6 backdrop-blur md:items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-h-[90vh] max-w-4xl overflow-y-auto rounded-xl border border-white/10 bg-[#1a1a1a] text-white shadow-[0_20px_80px_rgba(0,0,0,0.55)]"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="grid md:grid-cols-[1.35fr_1fr]">
          <div className="relative h-56 bg-[#0f0f0f] sm:h-72 md:h-auto">
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
                <div className="text-xl font-semibold sm:text-2xl">
                  {book.title}
                </div>
                <div className="text-xs text-white/60 sm:text-sm">
                  {details.date}
                </div>
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
                <div>{details.technologies.join(", ")}</div>
              </div>
              <div className="flex flex-col border-t border-white/10 py-3 sm:flex-row sm:gap-4">
                <div className="mb-2 w-full text-white/60 sm:mb-0 sm:w-28">
                  Platform
                </div>
                <div>{details.platform}</div>
              </div>
              <div className="flex flex-col border-t border-white/10 py-3 sm:flex-row sm:gap-4">
                <div className="mb-2 w-full text-white/60 sm:mb-0 sm:w-28">
                  Links
                </div>
                <div className="flex flex-wrap gap-2">
                  {details.links.map((link) => (
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
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 p-4 text-sm text-white/80 leading-relaxed sm:p-6">
          {details.description}
        </div>
      </div>
    </div>
  );
}
