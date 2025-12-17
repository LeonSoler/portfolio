"use client"

import { useEffect, useState } from "react"
import { ThemeToggle } from "./ThemeToggle"
import LanguageSelector from "./LanguageSelector"
import { useTranslations } from 'next-intl'

const navItems = [
    {
        titleKey: "experience",
        label: "experience",
        url: "#experience",
    },
    {
        titleKey: "skills",
        label: "skills",
        url: "#skills",
    },
    {
        titleKey: "about",
        label: "about-me",
        url: "#about-me",
    },
    {
        titleKey: "contact",
        label: "contact",
        url: "mailto:solerleon2@gmail.com",
    },
]

export const Header = () => {
    const t = useTranslations('Header')
    const [activeSection, setActiveSection] = useState("")
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const sections = document.querySelectorAll("section")
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.3,
            }
        )

        sections.forEach((section) => observer.observe(section))

        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            observer.disconnect()
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <header className="fixed top-0 z-10 flex items-center justify-center w-full mx-auto mt-2">
            <nav className={`flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center transition-all duration-300 ${isScrolled
                ? "bg-white/50 dark:bg-gray-800/90 ring-1 ring-white/10 shadow-lg backdrop-blur-[20px]"
                : "bg-transparent border-transparent"
                }`}>
                {navItems.map((link) => (
                    <a
                        key={link.label}
                        className={`relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-blue-500 ${activeSection === link.label ? "text-blue-500" : ""
                            }`}
                        aria-label={link.label}
                        href={link.url}
                    >
                        {t(link.titleKey)}
                    </a>
                ))}
                <ThemeToggle />
                <LanguageSelector />
            </nav>
        </header>
    )
}
