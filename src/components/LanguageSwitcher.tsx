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

  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-1.5 rounded-full p-1.5 transition-all duration-300",
        // Liquid glass container
        "bg-white/45 dark:bg-black/20 backdrop-blur-xl saturate-180",
        "border border-white/70 dark:border-white/20",
        "shadow-[inset_0_1px_1.5px_rgba(255,255,255,0.9),0_6px_20px_-2px_rgba(26,58,42,0.12),0_2px_6px_rgba(0,0,0,0.04)]",
        "hover:border-white/90 hover:bg-white/55 hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.95),0_8px_24px_-2px_rgba(26,58,42,0.16)]",
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
            onClick={() => i18n.changeLanguage(l.code)}
            aria-pressed={active}
            className={cn(
              "group relative z-10 flex cursor-pointer items-center justify-center gap-2 rounded-full px-4 py-2 text-xs sm:text-[13px] font-bold tracking-wider transition-all duration-300 select-none",
              active
                ? "text-white"
                : "text-[#4a554a] hover:text-[#1a3a2a] hover:bg-white/35 active:scale-95"
            )}
          >
            {active && (
              <motion.div
                layoutId="active-liquid-pill"
                className={cn(
                  "absolute inset-0 -z-10 rounded-full",
                  // Deep glossy liquid emerald pill with top specular reflection
                  "bg-gradient-to-b from-[#24523a] via-[#1a3a2a] to-[#12281d]",
                  "border border-white/25",
                  "shadow-[inset_0_1px_1px_rgba(255,255,255,0.45),0_4px_14px_rgba(18,40,29,0.35),0_1px_3px_rgba(0,0,0,0.15)]"
                )}
                transition={{
                  type: "spring",
                  stiffness: 420,
                  damping: 32,
                  mass: 0.8,
                }}
              />
            )}
            <span
              aria-hidden
              className="text-base leading-none drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)] transition-transform duration-200 group-hover:scale-110"
            >
              {l.flag}
            </span>
            <span
              className={cn(
                "relative z-10 font-bold uppercase transition-colors duration-200",
                active
                  ? "text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
                  : "text-[#3d4a3e]"
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
