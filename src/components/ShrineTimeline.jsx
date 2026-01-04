import { useEffect, useMemo, useRef, useState } from "react";

export default function ShrineTimeline({ items }) {
  // 現在アクティブ（画面中央に近い）なタイムライン項目のインデックス
  const [activeIndex, setActiveIndex] = useState(0);
  // OSの「動きを減らす」設定を尊重するためのフラグ
  const [reduceMotion, setReduceMotion] = useState(false);
  // IntersectionObserverで監視する各アイテムのDOM参照
  const itemRefs = useRef([]);
  // 表示順は新しいものを先頭に（元の配列は破壊しない）
  const orderedItems = useMemo(() => [...items].reverse(), [items]);

  // prefers-reduced-motion の監視（動きを減らす設定ならアニメを無効化）
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // スクロール位置に応じて「今見ている項目」を決定する
  useEffect(() => {
    // DOM参照があるものだけ取り出す
    const elements = itemRefs.current.filter(Boolean);
    if (elements.length === 0) {
      return undefined;
    }

    const io = new IntersectionObserver(
      (entries) => {
        // 画面中央付近に入っている要素だけを抽出
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target);

        if (visible.length === 0) {
          return;
        }

        // 画面中央に最も近い要素を「現在」として採用
        const center = window.innerHeight / 2;
        let best = visible[0];
        let bestDist = Math.abs(best.getBoundingClientRect().top - center);

        for (const el of visible) {
          const dist = Math.abs(el.getBoundingClientRect().top - center);
          if (dist < bestDist) {
            best = el;
            bestDist = dist;
          }
        }

        // data-index に埋めた順番をアクティブとしてセット
        const idx = Number(best.dataset.index);
        if (!Number.isNaN(idx)) {
          setActiveIndex(idx);
        }
      },
      { root: null, rootMargin: "-45% 0px -45% 0px", threshold: 0.01 }
    );

    // 各項目を監視対象に登録
    elements.forEach((el) => io.observe(el));
    // 解除
    return () => io.disconnect();
  }, []);

  return (
    <section id="timeline" className="scroll-mt-16 pt-6 pb-24">
      <div className="max-w-2xl mx-auto px-2">
        {/* タイトル行 */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-[3px] bg-[#EA5550]" />
          <h2 className="text-xl md:text-2xl font-semibold">Timeline</h2>
        </div>

        <div className="relative">
          {/* 参道のベース線（常に薄い白） */}
          <div
            className="absolute left-6 top-0 w-px h-full"
            style={{ background: "rgba(255,255,255,0.10)" }}
          />

          <div className="space-y-8 md:space-y-10">
            {orderedItems.map((item, i) => {
              // 位置関係で色・明るさを切り替える
              const isPast = i < activeIndex;
              const isActive = i === activeIndex;
              const nodeBg = isActive
                ? "#EA5550"
                : isPast
                ? "rgba(234,85,80,0.35)"
                : "rgba(255,255,255,0.18)";
              const nodeShadow = isActive
                ? "0 0 24px rgba(234,85,80,0.55)"
                : "none";
              const titleOpacity = isActive ? "1" : isPast ? "0.9" : "0.75";

              return (
                <div
                  key={`${item.date}-${item.title}-${i}`}
                  // IntersectionObserver用の参照を保存
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  data-index={i}
                  className="relative pl-20 md:pl-24"
                >
                  <div className="relative flex items-center gap-2">
                    {/* 灯篭のノード */}
                    <div className="absolute -left-[3.5rem] md:-left-[4.5rem] top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div
                        className="rounded-full"
                        style={{
                          // 現在だけ少し大きく見せる
                          width: isActive ? 16 : 12,
                          height: isActive ? 16 : 12,
                          background: nodeBg,
                          boxShadow: nodeShadow,
                          transform: isActive ? "scale(1.15)" : "scale(1)",
                          transition: reduceMotion
                            ? "none"
                            : "transform 200ms ease, box-shadow 200ms ease, background-color 200ms ease",
                        }}
                      />
                      {/* 現在ノードの下に控えめな光 */}
                      {isActive ? (
                        <div
                          className="absolute left-1/2 top-5 -translate-x-1/2"
                          style={{
                            width: 32,
                            height: 12,
                            borderRadius: 999,
                            background: "rgba(234,85,80,0.25)",
                            filter: "blur(6px)",
                          }}
                        />
                      ) : null}
                    </div>

                    {/* 左側の日付 */}
                    <div className="text-white/55 text-base w-16 shrink-0 leading-none -ml-2">
                      {item.date}
                    </div>
                    <div className="min-w-0">
                      {/* タイトル（現在だけ明るめ） */}
                      <div
                        className="text-xl md:text-2xl font-semibold tracking-wide text-white/90 text-left"
                        style={{
                          opacity: titleOpacity,
                          transition: reduceMotion ? "none" : "opacity 200ms ease",
                        }}
                      >
                        {item.title}
                        {item.subtitle ? (
                          <span className="ml-2 text-white/60 font-normal text-base">
                            {item.subtitle}
                          </span>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  {/* 短い説明文（2行まで） */}
                  {item.description ? (
                    <p className="mt-2 text-base text-white/65 leading-relaxed line-clamp-2 text-left ml-[4.5rem]">
                      {item.description}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
