import { nanoid } from 'nanoid'

// Head
export const headData = {
  title: 'Sebastien Beaury | Developer',
  lang: 'en',
  description: 'Sebastien Beaury | Developer | Portfolio website'
}

// Hero
export const heroData = {
  title: "Hi, my name's ",
  name: 'Sébastien Beaury',
  subtitle: "I'm a Full Stack Javascript Developer.",
  cta: 'Know more'
}

// Sections

export const sectionsData = ['about', 'projects' /* ,'blog' */]

// About
export const aboutData = {
  img: '',
  paragraphOne:
    "I'm a Javascript Full Stack Web Developer currently working at ",
  company: 'Rezilio',
  companyUrl: 'https://www.rezilio.com/en/',
  paragraphTwo:
    'Coming from a non-traditional IT background, I love to learn new things on my own and find ways to improve my current skills.',
  paragraphThree: 'My current tech stack includes:',
  stack: ['HTML', 'CSS', 'Javascript', 'React', 'Node']
}

// Projects
export const projectsData = [
  {
    id: nanoid(),
    img: 'portfolio_1.png',
    title: 'Porfolio website 📁',
    stack: ['NextJS', 'React'],
    url: 'https://sbeaury.github.io/',
    repo: 'https://sbeaury.github.io/'
  },
  {
    id: nanoid(),
    img: 'portfolio_2.png',
    title: 'Dev Chapters 📚',
    info: 'Find the best web dev ebooks out there.',
    stack: ['Vue', 'Bulma'],
    url: 'https://dev-chapters.netlify.app/',
    repo: 'https://github.com/sbeaury/dev-chapters'
  },
  {
    id: nanoid(),
    img: 'portfolio_3.png',
    title: 'Youtube Resume ⏯️',
    info: "Chrome extension. Don't let your YouTube history fade away",
    stack: ['React'],
    url: 'https://chrome.google.com/webstore/detail/youtube-resume/fkpmbbdgedgcpolfhedngemgnenfokid',
    repo: 'https://github.com/sbeaury/youtube-resume'
  }
]

// Contact
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: "Let's talk",
  email: 'sbeaury@gmail.com'
}

// Footer
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      icon: 'fa fa-github',
      url: 'https://github.com/sbeaury'
    },
    {
      id: nanoid(),
      name: 'devto',
      icon: 'fab fa-dev',
      url: 'https://dev.to/sbeaury'
    },
    ,
    {
      id: nanoid(),
      name: 'linkedin',
      icon: 'fa fa-linkedin',
      url: 'https://www.linkedin.com/in/sbeaury'
    },
    {
      id: nanoid(),
      name: 'email',
      icon: 'fa fa-envelope',
      url: 'mailto:sbeaury@gmail.com'
    }
  ]
}
