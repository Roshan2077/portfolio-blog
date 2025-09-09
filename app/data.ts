type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Aeolionics',
    title: 'Developer',
    start: 'Jan 2025',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Zimperium',
    title: 'SRE Web Developer',
    start: 'April 2024',
    end: 'August 2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Cognizant',
    title: 'Android Reverse Engineer',
    start: 'April 2022',
    end: 'July 2023',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Levenshtein distance for phishing',
    description: 'How hackers use the Levenshtein distance algorithm in phishing campaigns and what we can do about it',
    link: '/blog/Levenshtein-Distance-for-phishing',
    uid: 'blog-1',
  },

]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Roshan2077',
  },
  {
    label: 'Twitter',
    link: 'https://x.com/itsroshibro',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/vvroshan/',
  },
  {
    label: 'Youtube',
    link: '',
  },
]

export const EMAIL = 'vasudeva.rvj@gmail.com'
