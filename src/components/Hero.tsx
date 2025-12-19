
import { Badge } from "@/components/Badge"
import { LinkedIn } from "@/components/icons/LinkedIn"
import { Mail } from "@/components/icons/Mail"
import { SocialPill } from "@/components/SocialPill"

import { useTranslations } from 'next-intl'

import Image from "next/image"
import meSquare from "@/assets/images/me-square.webp"

import { calculateAge } from "@/utils/years"

export const Hero = () => {
    const t = useTranslations('Hero')
    const personalImageAlt = "León Soler"
    const age = calculateAge(new Date(1999, 11, 17))

    return (
        <div className="max-w-xl">
            <div className="flex gap-4 mb-4">
                <Image
                    className="rounded-full shadow-lg"
                    src={meSquare}
                    alt={personalImageAlt}
                    width={64}
                    height={64}
                />
                <a
                    href="https://linkedin.com/in/leonsoler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center transition md:justify-center md:hover:scale-105"
                >
                    <Badge>{t('badge')}</Badge>
                </a>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
                {t('title')}
            </h1>
            <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-emerald-200 [&>strong]:text-emerald-500 [&>strong]:font-semibold dark:text-gray-300">
                {t.rich('description', {
                    highlight: (chunks) => <strong>{chunks}</strong>,
                    age
                })}
            </p>
            <nav className="flex flex-wrap gap-4 mt-8">
                <SocialPill href="mailto:solerleon2@gmail.com">
                    <Mail className="size-4" />
                    {t('contact')}
                </SocialPill>
                <SocialPill href="https://linkedin.com/in/leonsoler">
                    <LinkedIn className="size-4" />
                    {t('linkedin')}
                </SocialPill>
            </nav>
        </div>
    )
}
