import { useTranslations } from 'next-intl'
import { ExperienceItem } from "./ExperienceItem"

const EXPERIENCE_KEYS = ['exeo_lead', 'exeo_fullstack', 'medialab']

export const Experience = () => {
    const t = useTranslations('Experience')

    return (
        <ol className="relative mt-16">
            {EXPERIENCE_KEYS.map((key) => (
                <li key={key} className="">
                    <ExperienceItem
                        date={t(`${key}.date`)}
                        title={t(`${key}.title`)}
                        company={t(`${key}.company`)}
                        description={t(`${key}.description`)}
                        link={key === 'exeo_lead' ? "https://exeotechnology.com/" : undefined}
                    />
                </li>
            ))}
        </ol>
    )
}
