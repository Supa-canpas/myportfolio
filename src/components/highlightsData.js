import uvmierno from "../assets/uvmierno.png";
import himap from "../assets/himap.png";
import tunagate from "../assets/tunagate.png";
import portfolio from "../assets/portfolio.png";
import ap from "../assets/ap.png";
import mcc from "../assets/mcc.png";

export const highlights = [
  {
    id: "himap",
    title: "ヒマップ",
    subtitle: "ハッカソン企業賞",
    summary: "行動の壁を壊すプロダクトで企業賞を受賞。",
    badges: ["React Native", "ハッカソン"],
    image: himap,
    ribbon: true,
    sideLabel: "企業賞",
    featured: false,
    details: {
      date: "2025/09",
      technologies: ["React Native", "Expo", "Supabase"],
      platform: "Mobile",
      links: [{ label: "Presentation", href: "#" }],
      description:
        "行動の壁を壊すことをテーマにしたプロダクト。UI設計と実装、体験設計を担当しました。",
    },
  },
  {
    id: "uvmierno",
    title: "UVミエルノ",
    subtitle: "ハッカソン優勝",
    summary: "日焼けを見える化するプロダクトで優勝。",
    badges: ["React Native", "ハッカソン"],
    image: uvmierno,
    ribbon: true,
    sideLabel: "優勝",
    featured: true,
    details: {
      date: "2025/09",
      technologies: ["React Native", "IoT", "Supabase"],
      platform: "Mobile",
      links: [{ label: "Presentation", href: "#" }],
      description:
        "日焼け量を可視化して体験につなげるプロダクト。フロントと連携部分を担当。",
    },
  },
  {
    id: "tunagate",
    title: "つなげーと",
    subtitle: "長期インターン",
    summary: "イベント×友達作りアプリの長期インターン。",
    badges: ["React Native", "Rails", "インターン"],
    image: tunagate,
    ribbon: true,
    sideLabel: "インターン",
    details: {
      date: "2025/10",
      technologies: ["React Native", "Rails"],
      platform: "Mobile",
      links: [{ label: "Product Page", href: "#" }],
      description:
        "イベント参加者同士をつなぐアプリ開発。画面実装とUX改善を担当しました。",
    },
  },
  {
    id: "portfolio",
    title: "ポートフォリオ",
    subtitle: "個人制作",
    summary: "このサイト自体も自作しています。",
    badges: ["React", "Vite", "TailwindCSS"],
    image: portfolio,
    ribbon: true,
    sideLabel: "代表作",
    featured: false,
    details: {
      date: "2026/01",
      technologies: ["React", "Vite", "TailwindCSS"],
      platform: "Web",
      links: [{ label: "Site", href: "#" }],
      description:
        "世界観と体験を意識して制作したポートフォリオサイト。デザインと実装を担当。",
    },
  },
  {
    id: "ap",
    title: "応用情報技術者",
    subtitle: "資格取得",
    summary: "応用情報技術者試験に合格。",
    badges: ["資格"],
    image: ap,
    ribbon: true,
    sideLabel: "資格",
    details: {
      date: "2025/07",
      technologies: ["情報処理", "基礎知識"],
      platform: "Exam",
      links: [],
      description:
        "アルゴリズムやネットワーク、セキュリティの基礎を体系的に学習。",
    },
  },
  {
    id: "mcc",
    title: "MCC広報",
    subtitle: "サークル活動",
    summary: "サークル広報を担当。",
    badges: ["広報", "デザイン"],
    image: mcc,
    ribbon: true,
    sideLabel: "サークル",
    details: {
      date: "2023/04",
      technologies: ["SNS運用"],
      platform: "Design",
      links: [],
      description:
        "イベント告知やSNS運用を担当。ビジュアル設計と情報発信に注力しました。",
    },
  },
];

export const formatHighlightTitle = (highlight) => {
  if (!highlight?.subtitle) {
    return highlight?.title || "";
  }

  return `${highlight.title}(${highlight.subtitle})`;
};
