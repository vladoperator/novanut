import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const LANGS = [
  { code: "ro", flag: "🇷🇴" },
  { code: "en", flag: "🇬🇧" },
  { code: "ru", flag: "🇷🇺" },
] as const;

export function LanguageSwitcher({ className }: { className?: string }) {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "ro").slice(0, 2);

  return (
    <div
      className={cn(
        "relative inline-flex items-center gap-1 rounded-full border border-primary/10 bg-background/50 p-1.5 shadow-sm backdrop-blur-md transition-all hover:bg-background/80 hover:shadow-md",
        className
      )}
      role="group"
      aria-label="Language"
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
              "relative z-10 flex cursor-pointer items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest transition-colors duration-300",
              active
                ? "text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
            )}
          >
            {active && (
              <motion.div
                layoutId="active-lang-pill"
                className="absolute inset-0 -z-10 rounded-full bg-primary shadow-sm"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30,
                  mass: 0.8,
                }}
              />
            )}
            <span aria-hidden className="text-base leading-none">
              {l.flag}
            </span>
            <span className={cn(
              "relative z-10",
              active ? "text-primary-foreground" : ""
            )}>
              {l.code}
            </span>
          </button>
        );
      })}
    </div>
  );
}
