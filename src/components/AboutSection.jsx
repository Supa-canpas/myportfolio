import profileImage from "../assets/icon.png";
import SidebarLinks from "./SidebarLinks";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-14 pt-12 pb-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid gap-4 md:gap-8 md:grid-cols-[150px_2fr_150px]">
          <div className="relative flex items-center justify-center md:flex-col md:items-start md:justify-start md:gap-4">
            <div className="absolute left-0 top-[15%] flex items-center gap-3 -translate-y-1/2 md:static md:top-1/2 md:translate-y-0 md:-mt-2">
              <div className="h-16 w-[3px] bg-[#EA5550]" />
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">About Me</h2>
            </div>
            <div className="h-32 w-32 -translate-y-2 md:translate-y-0 overflow-hidden rounded-full bg-[#EA5550]/10">
              <img
                src={profileImage}
                alt="Profile icon"
                className="h-full w-full object-cover scale-107"
              />
            </div>
          </div>

          <div>
            <div className="text-center text-xl md:text-2xl lg:text-2xl font-['Hiragino_Mincho_ProN','Yu_Mincho','MS_Mincho',serif] text-white md:mt-2 mb-3">
              Kota Noto / 能登康太
            </div>
            <p className="text-white/80 leading-relaxed text-center text-base md:text-lg lg:text-xl font-['Hiragino_Mincho_ProN','Yu_Mincho','MS_Mincho',serif]">
              ワクワクを原動力に行動する<br className="hidden md:block lg:hidden" />情報工学系の大学生。
              <br/>
              漫画や観光のような<br className="hidden md:block lg:hidden" />「新しい世界に出会う体験」に惹かれ、
              <br />
              サークルやハッカソンを通じて<br className="hidden max-sm:block md:block lg:hidden" />体験設計と実装を行ってきました。
              <br />
              データと技術でワクワクを<br className="hidden md:block lg:hidden" />設計していきたいです。
            </p>
          </div>

          {/* <div className="hidden md:block">
            <SidebarLinks />
          </div> */}
        </div>
      </div>
    </section>
  );
}
