import { getTranslations, setRequestLocale } from 'next-intl/server';
import { AboutMe } from "@/components/AboutMe"
import { Experience } from "@/components/Experience"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Briefcase } from "@/components/icons/Briefcase"
import { Code } from "@/components/icons/Code"
import { ProfileCheck } from "@/components/icons/ProfileCheck"
import { Skills } from "@/components/Skills"
import { SectionContainer } from "@/components/SectionContainer"
import { TitleSection } from "@/components/TitleSection"
import { Footer } from "@/components/Footer"

export default async function Home({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  const tExperience = await getTranslations('Experience')
  const tSkills = await getTranslations('Skills')
  const tAbout = await getTranslations('AboutMe')

  return (
    <main className="px-4">
      <Header />
      <SectionContainer className="py-16 md:py-36">
        <Hero />
      </SectionContainer>
      <div className="space-y-24">
        <SectionContainer id="experience">
          <TitleSection>
            <Briefcase className="size-8" />
            {tExperience('title')}
          </TitleSection>
          <Experience />
        </SectionContainer>

        <SectionContainer id="skills">
          <TitleSection>
            <Code className="size-7" />
            {tSkills('title')}
          </TitleSection>
          <Skills />
        </SectionContainer>

        <SectionContainer id="about-me">
          <TitleSection>
            <ProfileCheck className="size-8" />
            {tAbout('title')}
          </TitleSection>
          <AboutMe />
        </SectionContainer>
      </div>
      <Footer />
    </main>
  )
}
