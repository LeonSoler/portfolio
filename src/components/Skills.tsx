
import { AWS } from "@/components/icons/AWS"
import { Code } from "@/components/icons/Code"
import { Docker } from "@/components/icons/Docker"
import { Expo } from "@/components/icons/Expo"
import { Express } from "@/components/icons/Express"
import { FastAPI } from "@/components/icons/FastAPI"
import { JavaScript } from "@/components/icons/JavaScript"
import { NextJS } from "@/components/icons/NextJS"
import { Node } from "@/components/icons/Node"
import { NoSQL } from "@/components/icons/NoSQL"
import { Python } from "@/components/icons/Python"
import { ReactIcon } from "@/components/icons/ReactIcon"
import { SQL } from "@/components/icons/SQL"
import { TypeScript } from "@/components/icons/TypeScript"
import { Vite } from "@/components/icons/Vite"
// ... imports
import { Users } from "@/components/icons/Users"
import { Globe } from "@/components/icons/Globe"
import { Smile } from "@/components/icons/Smile"
import { useTranslations } from 'next-intl'

const SKILLS_DATA = [
    {
        key: "frontend_mobile",
        skills: [
            { name: "React", icon: ReactIcon },
            { name: "React Native", icon: ReactIcon },
            { name: "Expo", icon: Expo },
            { name: "Next.js", icon: NextJS },
            { name: "Vite", icon: Vite },
            { name: "TypeScript", icon: TypeScript },
            { name: "JavaScript", icon: JavaScript },
        ],
    },
    {
        key: "backend",
        skills: [
            { name: "Node.js", icon: Node },
            { name: "Express", icon: Express },
            { name: "Python", icon: Python },
            { name: "FastAPI", icon: FastAPI },
        ],
    },
    {
        key: "database_cloud",
        skills: [
            { name: "SQL", icon: SQL },
            { name: "NoSQL", icon: NoSQL },
            { name: "AWS", icon: AWS },
            { name: "Docker", icon: Docker },
        ],
    },
    {
        key: "soft_skills",
        skills: [
            { name: "social", icon: Users },
            { name: "english", icon: Globe },
            { name: "humor", icon: Smile },
        ],
    },
]

export const Skills = () => {
    const t = useTranslations('Skills')

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SKILLS_DATA.map((section) => (
                <div
                    key={section.key}
                    className={`flex flex-col gap-4 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm ${section.key === 'soft_skills' ? 'md:col-span-3' : ''
                        }`}
                >
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                        {section.key.includes("frontend") && <Code className="size-5" />}
                        {t(section.key)}
                    </h3>
                    <ul className={`flex gap-3 ${section.key === 'soft_skills' ? 'flex-row flex-wrap justify-around' : 'flex-col'}`}>
                        {section.skills.map((skill) => (
                            <li key={skill.name} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                <skill.icon className="size-6" />
                                <span className="font-medium">
                                    {section.key === 'soft_skills' ? t(skill.name) : skill.name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}
