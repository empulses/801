import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: '801',
  description:
    'I 🧡 YAOI',
  href: 'https://yaoi.nekoweb.org',
  author: 'empulses',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  // {
  //   href: '/authors',
  //   label: 'authors',
  // },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://archiveofourown.org/users/salaryman',
    label: 'AO3',
  },
  {
    href: 'https://twitter.com/geongaji',
    label: 'Twitter',
  },
  /*{
    href: 'https://seiunsky.tumblr.com',
    label: 'Tumblr',
  },*/
  {
    href: 'https://github.com/empulses',
    label: 'GitHub',
  },
  {
    href: 'mailto:empulses@pm.me',
    label: 'Email',
  },
  /*{
    href: '/rss.xml',
    label: 'RSS',
  },*/
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
  AO3: 'lucide:notebook-pen'
}
