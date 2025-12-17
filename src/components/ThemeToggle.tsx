
"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Moon } from "./icons/Moon"
import { Sun } from "./icons/Sun"
import { System } from "./icons/System"

export const ThemeToggle = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-5 h-5" />
    }

    const themes = [
        { name: "Light", value: "light" },
        { name: "Dark", value: "dark" },
        { name: "System", value: "system" },
    ]

    return (
        <div className="relative ml-1 mr-1">
            <button
                onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(!isOpen)
                }}
                className="appearance-none border-none flex hover:scale-125 transition"
            >
                <span className="sr-only">Elige el tema</span>
                {theme === "light" && (
                    <Sun className="theme-toggle-icon size-5 transition-all" />
                )}
                {theme === "dark" && (
                    <Moon className="theme-toggle-icon size-5 transition-all" />
                )}
                {theme === "system" && (
                    <System className="theme-toggle-icon size-5 transition-all" />
                )}
            </button>

            {isOpen && (
                <div className="absolute top-8 right-0 text-sm p-1 min-w-[8rem] rounded-md border border-gray-100 bg-white/90 dark:bg-gray-900/90 dark:border-gray-500/20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-md">
                    <ul>
                        {themes.map((t) => (
                            <li
                                key={t.value}
                                onClick={() => {
                                    setTheme(t.value)
                                    setIsOpen(false)
                                }}
                                className="themes-menu-option px-2 py-1.5 cursor-pointer hover:bg-neutral-400/40 dark:hover:bg-gray-500/50 rounded-sm"
                            >
                                {t.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Close menu when clicking outside - simple implementation */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[-1]"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    )
}
