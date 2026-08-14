import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const LANGS = [
  { code: "ro", flag: "🇷🇴", label: "RO" },
  { code: "en", flag: "🇬🇧", label: "EN" },
  { code: "ru", flag: "🇷🇺", label: "RU" },
] as const;

export function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "ro").slice(0, 2);

  const handleSelectLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    if (typeof window !== "undefined") {
      localStorage.setItem("novanut_lang", langCode);
    }
  };

  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-1.5 sm:gap-2 rounded-[4px] p-1.5 sm:p-2 transition-all duration-300",
        // Sleek frosted glass container with crisp edges
        "bg-white/65 dark:bg-black/30 backdrop-blur-xl saturate-180",
        "border border-[#1a3a2a]/15 dark:border-white/20",
        "shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.95),0_6px_20px_-2px_rgba(26,58,42,0.12),0_2px_6px_rgba(0,0,0,0.04)]",
        "hover:border-[#1a3a2a]/25 hover:bg-white/75 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),0_8px_24px_-2px_rgba(26,58,42,0.16)]",
        className
      )}
      role="group"
      aria-label="Language selector"
    >
      {LANGS.map((l) => {
        const active = current === l.code;
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => handleSelectLanguage(l.code)}
            aria-pressed={active}
            className={cn(
              "group relative z-10 flex cursor-pointer items-center justify-center gap-2 rounded-[3px] px-4.5 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 select-none",
              active
                ? "text-white"
                : "text-[#3c4a3e] hover:text-[#1a3a2a] hover:bg-black/[0.05] active:scale-95"
            )}
          >
            {active && (
              <motion.div
                layoutId="active-language-indicator"
                className={cn(
                  "absolute inset-0 -z-10 rounded-[3px]",
                  // Deep glossy emerald tab with top specular edge
                  "bg-gradient-to-b from-[#24543c] via-[#1a3a2a] to-[#12281d]",
                  "border border-white/25",
                  "shadow-[inset_0_1px_1px_rgba(255,255,255,0.5),0_4px_14px_rgba(18,40,29,0.35),0_1px_3px_rgba(0,0,0,0.15)]"
                )}
                transition={{
                  type: "spring",
                  stiffness: 440,
                  damping: 32,
                  mass: 0.75,
                }}
              />
            )}
            <span
              aria-hidden
              className="text-base sm:text-lg leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)] transition-transform duration-200 group-hover:scale-110"
            >
              {l.flag}
            </span>
            <span
              className={cn(
                "relative z-10 font-bold uppercase tracking-wider transition-colors duration-200",
                active
                  ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]"
                  : "text-[#2e3d30]"
              )}
            >
              {l.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
