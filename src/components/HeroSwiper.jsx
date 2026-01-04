import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import HighlightModal from "./HighlightModal";
import { highlights } from "./highlightsData";
import "swiper/css";

export default function HeroSwiper() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [activeHighlight, setActiveHighlight] = useState(null);
    
    return (
        <section className="py-4 relative">
            <div className="absolute left-0 bottom-0 w-full h-[3px] bg-[#EA5550]"/>
            
            <Swiper
                modules={[Autoplay]}
                slidesPerView={2.6}
                spaceBetween={32}
                centeredSlides={true}
                loop={true}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
                {highlights.map((item, i) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className={`border border-white/10 rounded-lg p-3 md:p-4 h-25 md:h-35 flex flex-col transition ${i === activeIndex
                            ? "bg-white/5 border-[#EA5550]/40 ring-1 ring-[#EA5550]/30 shadow-[0_0_36px_rgba(234,85,80,0.45)] scale-[1.05]" : "bg-white/5 opacity-70"}`}
                            onClick={() => setActiveHighlight(item)}
                            onKeyDown={(event) => {
                                if (event.key === "Enter") {
                                    setActiveHighlight(item);
                                }
                            }}
                            tabIndex={0}
                            role="button"
                        >
                            <div className="flex items-center justify-between gap-2">
                                <div className="text-base md:text-lg lg:text-xl font-semibold">
                                    <span>{item.title}</span>
                                    {item.subtitle ? (
                                        <span className="ml-1 hidden sm:inline">({item.subtitle})</span>
                                    ) : null}
                                </div>
                                {item.featured ? (
                                    <span className="text-[10px] px-2 py-0.5 rounded-full border border-[#EA5550]/50 text-[#EA5550]">
                                        代表作
                                    </span>
                                ) : null}
                            </div>
                            <div className="text-xs md:text-sm lg:text-base text-white/70 mt-1 line-clamp-2">{item.summary}</div>
                            <div className="hidden md:flex gap-2 mt-3 flex-wrap">
                                {item.badges.map((badge) => (
                                    <span key={badge} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">{badge}</span>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <HighlightModal book={activeHighlight} onClose={() => setActiveHighlight(null)} />
        </section>
    );
}
