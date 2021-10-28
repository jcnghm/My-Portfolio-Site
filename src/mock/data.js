import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'self2.jpg',
  paragraphOne: "My name is Josh and I am a developer with hands on experience working with several technologies. I've built applications using Python, Flask, React, Node.js, HTML5, CSS3, Javascript, Typescript, and Ruby on Rails. I've integrated databases using PostgreSQL, ElephantSQL, and DBeaver. I'm an adaptive, quick thinking professional with a broad, flexible skillset and management and leadership experience across a wide range of fields. ",
  paragraphTwo: "I also have development experience using Python data management packages such as NumPy, Pandas, and MatPlotLib. Using these skills I build tools and applications to analyze complex datasets.",
  paragraphThree: "I'm an avid hiker🌄 and spend way too much time watching baseball⚾️. I love to be outdoors and travel✈️ when I'm not making cool stuff with code💻. Currently I live in Kennewick, WA with my lovely fiancée and our two dogs Duke🐺 and Pancake🐶.",
  resume: 'https://docs.google.com/document/d/1ZzxtS5FlmcGEw7-f7Lhn7ZZR_k5XZ-ouOup6WNI1cAE/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'capstone1.png',
    title: 'The Dugout',
    info: 'The Dugout is a full stack interactive application for baseball reference and statistics.  Search for players and view their stats, manage your fantasy team.',
    info2: 'Designed using React, Typescript, Redux, Python, Flask, and Google Firebase.',
    url: 'https://github.com/jcnghm/The-Dugout-App',
    repo: 'https://github.com/jcnghm/The-Dugout-App', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'example8.PNG',
    title: 'Random Character Generator',
    info: 'RPG text based game with a random character generator.',
    info2: "Built using Python, Flask, HTML, CSS, and JavaScript with a PostgreSQL database.",
    url: 'https://github.com/jcnghm/Text-RPG',
    repo: 'https://github.com/jcnghm/Text-RPG', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'example4.png',
    title: 'Hero Inventory',
    info: 'Inventory application engineered using React, Typescript, Redux, Flask, PostgreSQL.',
    info2: 'Deployed using Google Firebase with full CRUD functionality.',
    url: 'https://github.com/jcnghm/DC-Comics-React-Template',
    repo: 'https://github.com/jcnghm/DC-Comics-React-Template', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'example5.PNG',
    title: 'ROI Calculator',
    info: 'An ROI calculator for rental properties built with Python.',
    info2: 'Program accepts all types of input including: income payments, expenses, and capital expenditures.',
    url: 'https://github.com/jcnghm/ROI-Calculator-Python',
    repo: 'https://github.com/jcnghm/ROI-Calculator-Python', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'example7.PNG',
    title: 'Spotify Player',
    info: 'A Spotify player using the Spotify developer API.',
    info2: 'Built using HTML, CSS, JavaScript to play movie soundtracks from Spotify.',
    url: 'https://github.com/jcnghm/Spotify-API-JavaScript',
    repo: 'https://github.com/jcnghm/Spotify-API-JavaScript', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'example.png',
    title: 'Weather App',
    info: 'Weather application/desktop widget using OpenWeather API.',
    info2: "Built using HTML, CSS, and JavaScript with a minimalist design.  Easily access any city's weather information from your desktop.",
    url: 'https://github.com/jcnghm/weather_app',
    repo: 'https://github.com/jcnghm/weather_app', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jcnghmps@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: 'https://codepen.io/jcnghm',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/joshua-cunningham-wa',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jcnghm',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
