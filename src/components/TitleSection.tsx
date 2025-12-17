
export const TitleSection = ({
    children,
    className = "",
}: {
    children: React.ReactNode
    className?: string
}) => (
    <h2
        className={`flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white ${className}`}
    >
        {children}
    </h2>
)
