export type LogoProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type ImageProps = {
  url: string
  alternativeText: string
}

export type HeaderProps = {
  title: string
  description: string
  button: ButtonProps
  image: ImageProps
}

export type SectionAboutProjectProps = {
  title: string
  description: string
  image: ImageProps
}

export type TechIconsProps = {
  icon: ImageProps
  title: string
}

export type SectionTechProps = {
  title: string
  techIcons: TechIconsProps[]
}

export type SectionConceptsProps = {
  title: string
  concepts: Array<{ title: string }>
}

export type ModulesProps = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: ModulesProps[]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallments: number
  benefits: string
  button: ButtonProps
}

export type AuthorsProps = {
  photo: ImageProps
  name: string
  role: string
  socialLinks: Array<{
    title: string
    url: string
  }>
  description: string
}

export type SectionAboutUsProps = {
  title: string
  authors: AuthorsProps[]
}

export type ReviewsProps = {
  name: string
  text: string
  photo: ImageProps
}
export type SectionReviewsProps = {
  title: string
  reviews: ReviewsProps[]
}

export type SectionFaqProps = {
  title: string
  questions: Array<{
    question: string
    answer: string
  }>
}

export type LandingPageProps = {
  logo: LogoProps
  header: HeaderProps
  sectionAboutProject: SectionAboutProjectProps
  sectionTech: SectionTechProps
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
