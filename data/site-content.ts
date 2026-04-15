import type { SiteContent } from '~/types/content'

export const siteContent: SiteContent = {
    identity: {
        churchName: 'Raw Power Ministry',
        tagline: 'Apostle GE Jackson'
    },
    navigation: [
        { id: 'home', label: 'Home', to: '/' },
        { id: 'about', label: 'About', to: '/about' },
        { id: 'times', label: 'Media', to: '/media' },
        { id: 'contact', label: 'Contact', to: '/#contact' }
    ],
    home: {
        hero: {
            eyebrow: 'A P O S T L E',
            title: 'G.E JACKSON',
            description: 'Global Minister |  Lead Pastor',
            subDescription:
                'Apostle G.E. Jackson has dedicated his life to proclaiming the Kingdom of God through Raw Power Ministry, leading miracle crusades, healing services, and revival gatherings across America.',
            actions: [
                { label: 'Plan Your Visit', to: '/#contact', size: 'lg' },
                { label: 'Learn More', to: '/about', variant: 'ghost', size: 'lg' }
            ]
        },
        relaunch: {
            eyebrow: 'Relaunch Announcement',
            headline: 'Apostolic Ministry | 33 Years of Service',
            subtext: 'Now relaunching for International Impact'
        },
        relaunchVideo: {
            eyebrow: 'Relaunch Video',
            title: 'Relaunch Vision Broadcast',
            description:
                'A dedicated relaunch video section is ready. Final video will be published after outline alignment with Ms Cherry.',
            placeholderLabel: 'Video Coming Soon'
        },
        mission: {
            eyebrow: 'Our Mission',
            title: 'Sharing the Kingdom message and uniting people across denominations.',
            description:
                'We gather people from every background to encounter Jesus Christ and witness the power of the Holy Spirit through salvation, healing, breakthrough, and deliverance.'
        },
        serviceTimesHeading: {
            eyebrow: 'Media',
            title: 'Latest Media & Broadcasts',
            description:
                'Watch recent messages, miracle testimonies, and featured broadcasts from Apostle G.E. Jackson.'
        },
        serviceTimes: [
            { name: 'Miracle Crusade Highlights', time: 'Watch now' },
            { name: 'Weekly Sermon Replay', time: 'New every week' },
            { name: 'Healing Testimonies', time: 'Featured collection' }
        ],
        resources: {
            eyebrow: 'Ministry Focus',
            title: 'Kingdom ministry that transforms lives.',
            description:
                'Discover how Raw Power Ministry serves people through crusades, healing prayer, and Bible teaching across nations.',
            cards: [
                {
                    eyebrow: 'Crusades',
                    title: 'Miracle Crusade Outreach',
                    description:
                        'City-to-city crusades proclaim Jesus Christ and invite people into salvation, freedom, and renewed faith.'
                },
                {
                    eyebrow: 'Healing',
                    title: 'Healing & Deliverance Ministry',
                    description:
                        'We pray boldly for healing, restoration, and breakthrough as lives are transformed by the power of the Holy Spirit.'
                },
                {
                    eyebrow: 'Teaching',
                    title: 'Kingdom Teaching & Discipleship',
                    description:
                        'Apostle Jackson equips believers with practical, Bible-based teaching to walk in spiritual authority and purpose.'
                }
            ]
        },
        primaryCta: {
            eyebrow: 'Connect',
            title: 'Partner with the mission and stay connected.',
            description:
                'Reach out for prayer, ministry invitations, partnership opportunities, and updates on upcoming crusades.',
            action: {
                label: 'Send A Prayer Request',
                to: '/#contact',
                variant: 'secondary',
                size: 'lg'
            }
        }
    },
    about: {
        hero: {
            eyebrow: 'About Raw Power Ministry',
            title: 'A Kingdom ministry committed to revival, healing, and transformation.',
            description:
                'Raw Power Ministry exists to proclaim Jesus Christ with bold faith and practical discipleship, equipping believers and reaching communities through miracle crusades and Spirit-led ministry.',
            actions: [
                { label: 'Plan Your Visit', to: '/#contact', size: 'lg' },
                { label: 'See Media', to: '/media', variant: 'ghost', size: 'lg' }
            ]
        },
        story: {
            eyebrow: 'Our Story',
            title: 'How the ministry began',
            description:
                'This ministry was built on a clear calling to preach the Kingdom of God with power, compassion, and unwavering obedience to Scripture.',
            paragraphs: [
                'Through crusades, revival services, and ongoing teaching, Apostle Jackson has witnessed lives restored through salvation, healing, and deliverance.',
                'Raw Power Ministry serves as a place of spiritual renewal where people are equipped to live boldly for Christ and carry His power into their communities.'
            ]
        },
        values: [
            {
                eyebrow: 'Message',
                title: 'Kingdom-Centered Gospel',
                description: 'We preach Jesus Christ boldly, calling people to salvation, holiness, and spiritual authority.'
            },
            {
                eyebrow: 'Power',
                title: 'Healing & Deliverance',
                description:
                    'We expect the Holy Spirit to move through healing, breakthrough, and freedom in every gathering.'
            },
            {
                eyebrow: 'Unity',
                title: 'Across Denominations',
                description:
                    'We welcome believers from all backgrounds and unite around the truth and transforming power of God.'
            }
        ],
        nextStep: {
            eyebrow: 'Invitation',
            title: 'Invite Apostle Jackson to your city.',
            description: 'Contact the ministry team for crusade invitations, speaking requests, or partnership inquiries.',
            action: { label: 'Contact Ministry Team', to: '/#contact', variant: 'secondary', size: 'lg' }
        }
    },
    footer: {
        churchName: 'Raw Power Ministry',
        description:
            'A Kingdom ministry proclaiming Jesus Christ through miracle crusades, healing prayer, and Spirit-led teaching.',
        quickLinks: [
            { id: 'about', label: 'About', to: '/about' },
            { id: 'times', label: 'Media', to: '/media' },
            { id: 'contact', label: 'Contact', to: '/#contact' }
        ],
        visit: {
            // address: 'Serving cities across America through crusades and revival gatherings.',
            phone: 'Phone support available through ministry request.',
            email: 'sample@sample.com'
        },
        serviceSummary: 'Miracle crusades, healing prayer, and Kingdom teaching.'
    }
}
