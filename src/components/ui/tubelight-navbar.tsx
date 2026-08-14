"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

export interface NavBarProps {
  items: NavItem[]
  className?: string
  activeTab?: string
  onTabChange?: (name: string) => void
  children?: React.ReactNode
}

export function NavBar({ items, className, activeTab: controlledActiveTab, onTabChange, children }: NavBarProps) {
  const [internalActiveTab, setInternalActiveTab] = useState(items[0]?.name || "")
  const [, setIsMobile] = useState(false)

  const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleClick = (item: NavItem, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onTabChange) {
      onTabChange(item.name)
    } else {
      setInternalActiveTab(item.name)
    }

    if (item.url.startsWith("#")) {
      e.preventDefault()
      const targetId = item.url.replace("#", "")
      const el = document.getElementById(targetId)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
      }
    }
  }

  return (
    <div
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 pointer-events-auto",
        className,
      )}
    >
      <div className="flex items-center gap-1.5 sm:gap-2 bg-white/70 dark:bg-stone-900/70 border border-emerald-900/15 backdrop-blur-xl py-1.5 px-2 rounded-full shadow-lg shadow-emerald-950/5">
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={(e) => handleClick(item, e)}
              className={cn(
                "relative cursor-pointer text-xs sm:text-sm font-semibold px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full transition-colors duration-200 flex items-center gap-1.5",
                "text-[#1a3a2a]/80 hover:text-[#1a3a2a]",
                isActive && "bg-emerald-900/10 text-[#1a3a2a] font-bold",
              )}
            >
              <span className="inline-block sm:inline">
                <Icon size={16} strokeWidth={2.2} className="inline mr-1 sm:mr-1.5" />
              </span>
              <span className="text-xs sm:text-sm">{item.name}</span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-[#1a3a2a]/5 rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#c8a960] rounded-t-full">
                    <div className="absolute w-10 h-4 bg-[#c8a960]/30 rounded-full blur-md -top-2 -left-1" />
                    <div className="absolute w-6 h-3 bg-[#c8a960]/40 rounded-full blur-sm -top-1 left-1" />
                    <div className="absolute w-3 h-3 bg-[#c8a960]/50 rounded-full blur-xs top-0 left-2.5" />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}

        {children}
      </div>
    </div>
  )
}
