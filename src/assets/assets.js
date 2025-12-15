import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaServer, FaMobileAlt, FaToolbox } from 'react-icons/fa';
import { SiTailwindcss, SiSass, SiTypescript, SiGithub} from 'react-icons/si';

import profileImg1 from '../assets/heena1.png';
import profileImg2 from '../assets/weather2.jpeg';
import profileImg3 from '../assets/quizpic.jpeg';
import profileImg4 from '../assets/expensepic.jpeg';
import profileImg5 from '../assets/todopic.jpeg';
import profileImg6 from '../assets/Dashboardpic.jpeg';
import profileImg7 from '../assets/heenapic.jpg';

export const assets = {
    profileImg1,
    profileImg7,
}



export const aboutInfo = [
    {
        icon: FaLightbulb,
        title: 'Innovative',
        description: 'I enjoy experimenting with new ideas and modern web practices to create interfaces that feel fresh, intuitive, and engaging.',
        color: 'text-purple'
    },
    {
        icon: FaPaintBrush,
        title: 'Design Oriented',
        description: 'My goal is to build interfaces that not only function well but also look polished, consistent, and user-friendly across all devices.',
        color: 'text-pink'

    },
    {
        icon: FaCode,
        title: 'Clean Code',
        description: 'I focus on writing readable, well-structured, and maintainable code. I believe clean code leads to better performance, easier collaboration, and long-term scalability',
        color: 'text-purple'
    }
];

export const skills = [
    {
        icon: FaHtml5,
        title: 'HTML',
        description: 'Semantic, accessible, and well-structured page layouts.'
    },
     {
        icon: FaCss3Alt,
        title: 'CSS',
        description: 'Responsive, visually balanced, and polished UI styling.'
    },
     {
        icon: FaJsSquare,
        title: 'JavaScript',
        description: 'Interactive, dynamic, and logic-driven web functionality.'
    },
     {
        icon: SiTailwindcss,
        title: 'Tailwind CSS',
        description: 'Fast, consistent, and modern UI design with utility classes.'
    },
     {
        icon: SiSass,
        title: 'SASS',
        description: 'Cleaner, modular, and maintainable styling architecture.'
    },
     {
        icon: FaReact,
        title: 'React',
        description: 'Reusable components and efficient, modern interface building.'
    },
     {
        icon: SiTypescript,
        title: 'TypeScript',
        description: 'Reliable, scalable code with clear type safety.'
    },
     {
        icon: SiGithub,
        title: 'Git and GitHub',
        description: 'Version control, collaboration, and structured workflow management.'
    },

];

export const projects = [
    {
        image:  profileImg2 ,
        title: 'Weather App',
        description: 'A simple React + TypeScript + Tailwind weather-app that allows user to search for real-time weather details of any city.',
        tech: ["React", "Typescript",  "HTML", "Tailwindcss"],
        demo: " https://sayeeda-heena.github.io/weather-app-ts/",
        code: "https://github.com/sayeeda-heena/weather-app-ts"


    },
    {
        image:  profileImg3,
        title: 'Quiz App',
        description: 'A simple React + TypeScript + Tailwind Quiz-App with timer, playagain button, exit button and message with score.',
        tech: ["React", "Typescript",  "HTML", "Tailwindcss"],
        demo: " https://sayeeda-heena.github.io/quiz-app/",
        code: "https://github.com/sayeeda-heena/quiz-app"
    },
    {
        image:  profileImg4,
        title: 'Expense Tracker',
        description: 'A simple React + TypeScript + Tailwind Expense-Tracker-App app with add, edit, delete, balance, income, expense and localStorage support.',
        tech: ["React", "Typescript",  "HTML", "Tailwindcss"],
        demo: "https://sayeeda-heena.github.io/expensetracker-app/",
        code: "https://github.com/sayeeda-heena/expensetracker-app"

    },
    {
        image: profileImg5 ,
        title: 'ToDo App',
        description: 'A simple React + TypeScript + Tailwind To-Do app with add, edit, delete, and localStorage support.',
        tech: ["React", "Typescript",  "HTML", "Tailwindcss"],
        demo: " https://sayeeda-heena.github.io/todo-app/",
        code: "https://github.com/sayeeda-heena/todo-app"

    },
    {
        image: profileImg6 ,
        title: 'Social Media Dashboard',
        description: 'A simple HTML + CSS + Javascript social media dashboard with charts using chart.js',
        tech: ["HTML", "CSS",  "Javascript"],
        demo: " https://sayeeda-heena.github.io/social-media-dashboard/",
        code: "https://github.com/sayeeda-heena/social-media-dashboard"

    }

];