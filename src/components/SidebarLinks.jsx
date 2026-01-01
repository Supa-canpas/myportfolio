const links = [
  { label: "ブログの定期便", href: "#" },
  { label: "各種SNS", href: "#" },
  { label: "各種SNS", href: "#" },
  { label: "各種SNS", href: "#" },
];

export default function SidebarLinks() {
  return (
    <aside className="flex flex-col gap-2 text-lg text-white/80">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="flex items-center gap-3 py-1 hover:text-[#EA5550] transition"
        >
          <span className="h-6 w-[3px] bg-[#EA5550]" />
          <span>{link.label}</span>
        </a>
      ))}
    </aside>
  );
}
