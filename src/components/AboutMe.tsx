
import { useTranslations } from 'next-intl'

import Image from "next/image"
import meGlobes from "@/assets/images/me-globes.webp"

export const AboutMe = () => {
    const t = useTranslations('AboutMe')
    const personalImageAlt = "León Soler"

    return (
        <article className="flex flex-col items-center justify-center gap-8 text-gray-700 dark:text-gray-300 md:flex-row">
            <div className="[&>p]:mb-4 [&>p>strong]:text-emerald-500 dark:[&>p>strong]:text-emerald-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 md:order-1">
                <p>
                    {t.rich('p1', {
                        strong1: (chunks) => <strong>{chunks}</strong>,
                        strong2: (chunks) => <strong>{chunks}</strong>
                    })}
                </p>

                <p>
                    {t.rich('p2', {
                        strong3: (chunks) => <strong>{chunks}</strong>
                    })}
                </p>

                <p>
                    {t('p3')}
                </p>

                <p>
                    {t('education_title')}
                </p>
                <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>
                        <strong>{t('degree_1')}</strong> ({t('unicen')}, {t('years_1')})
                    </li>
                    <li>
                        <strong>{t('degree_2')}</strong> ({t('unicen')}, {t('years_2')})
                    </li>
                </ul>
            </div>

            <Image
                src={meGlobes}
                alt={personalImageAlt}
                width={256}
                height={256}
                className="order-1 object-cover w-64 h-auto p-1 md:order-2 lg:p-2 lg:w-64 rounded-2xl bg-black/20 dark:bg-emerald-500/5 ring-1 ring-black/70 dark:ring-white/20"
                style={{ objectPosition: "50% 50%" }}
            />
        </article>
    )
}
