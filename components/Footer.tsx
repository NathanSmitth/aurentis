import Logo from "@/components/Logo";
import { footer } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E24] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div style={{ transform: "translateY(-5mm)" }}>
          <Logo height={144} className="opacity-100" />
        </div>

        {/* Copyright */}
        <p className="text-[#8A8A96] text-sm">{footer.copyright}</p>

        {/* Instagram */}
        <a
          href={footer.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#8A8A96] hover:text-[#F0EEE8] text-sm transition-colors duration-200"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          {footer.instagram.handle}
        </a>
      </div>
    </footer>
  );
}
