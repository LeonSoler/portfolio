
export const SectionContainer = ({
    children,
    className = "",
    id,
}: {
    children: React.ReactNode
    className?: string
    id?: string
}) => (
    <section
        id={id}
        data-section={id}
        className={`section ${className} scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl`}
    >
        {children}
    </section>
)
