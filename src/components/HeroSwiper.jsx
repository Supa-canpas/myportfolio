import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const slides = [
    { title: "つなげーと", desc: "イベント×友達作りアプリの長期インターン", badges: ["React Native","Rails","インターン"]},
    { title: "UVミエルノ", desc:"日焼けを見える化するプロダクトを実装して優勝", badges: ["React Native","ハッカソン"]},
    { title: "ヒマップ", desc:"行動の壁を破壊するプロダクトで企業賞", badges: ["React Native","ハッカソン"]},
    { title: "AP合格", desc:"応用情報技術者に合格", badges: ["資格"]},
    { title: "ポートフォリオサイト", desc:"このサイト自体も自作しています", badges: ["React","Vite","TailwindCSS"]},
];

export default function HeroSwiper() {
    const [active, setActive] = useState(0);
    
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
                onSlideChange={(swiper) => setActive(swiper.realIndex)}
            >
                {slides.map((s, i) => (
                    <SwiperSlide key={s.title}>
                        <div className={`border border-white/10 rounded-lg p-3 md:p-4 h-25 md:h-35 flex flex-col transition ${i === active
                        ? "bg-white/5 border-[#EA5550]/40 ring-1 ring-[#EA5550]/30 shadow-[0_0_36px_rgba(234,85,80,0.45)] scale-[1.05]" : "bg-white/5 opacity-70"}`}>
                            <div className="text-base md:text-lg lg:text-xl font-semibold">{s.title}</div>
                            <div className="text-xs md:text-sm lg:text-base text-white/70 mt-1 line-clamp-2">{s.desc}</div>
                            <div className="hidden md:flex gap-2 mt-3 flex-wrap">
                                {s.badges.map((b) => (
                                    <span key={b} className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">{b}</span>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
