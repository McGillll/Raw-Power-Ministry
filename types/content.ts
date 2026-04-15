export type ButtonVariant = 'primary' | 'secondary' | 'ghost'
export type ButtonSize = 'sm' | 'md' | 'lg'

export type NavItemId = 'home' | 'about' | 'times' | 'contact'

export type NavItem = {
    id: NavItemId
    label: string
    to: string
}

export type CtaAction = {
    label: string
    to: string
    variant?: ButtonVariant
    size?: ButtonSize
}

export type SectionHeadingContent = {
    eyebrow?: string
    title: string
    description?: string
}

export type HeroContent = {
    eyebrow: string
    title: string
    description: string
    subDescription?: string
    actions: CtaAction[]
}

export type ServiceTime = {
    name: string
    time: string
}

export type HomeMissionContent = SectionHeadingContent

export type ResourceCard = {
    eyebrow: string
    title: string
    description: string
}

export type HomeResourcesContent = SectionHeadingContent & {
    cards: ResourceCard[]
}

export type RelaunchContent = {
    eyebrow?: string
    headline: string
    subtext: string
}

export type RelaunchVideoContent = {
    eyebrow?: string
    title: string
    description: string
    placeholderLabel: string
}

export type HomeContent = {
    hero: HeroContent
    relaunch: RelaunchContent
    relaunchVideo: RelaunchVideoContent
    mission: HomeMissionContent
    serviceTimesHeading: SectionHeadingContent
    serviceTimes: ServiceTime[]
    resources: HomeResourcesContent
    primaryCta: {
        eyebrow: string
        title: string
        description: string
        action: CtaAction
    }
}

export type AboutValue = {
    eyebrow: string
    title: string
    description: string
}

export type AboutContent = {
    hero: HeroContent
    story: SectionHeadingContent & {
        paragraphs: string[]
    }
    values: AboutValue[]
    nextStep: {
        eyebrow: string
        title: string
        description: string
        action: CtaAction
    }
}

export type FooterContent = {
    churchName: string
    description: string
    quickLinks: NavItem[]
    visit: {
        address?: string
        phone: string
        email: string
    }
    serviceSummary: string
}

export type SiteIdentity = {
    churchName: string
    tagline: string
}

export type SiteContent = {
    identity: SiteIdentity
    navigation: NavItem[]
    home: HomeContent
    about: AboutContent
    footer: FooterContent
}
