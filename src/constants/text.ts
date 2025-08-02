import { finished } from "stream";
import images from "./images";
const name = "Emanuel Mateus";
const description = "I’m a software engineer with a strong focus on building scalable, maintainable systems that deliver real-world value. I specialize in full-stack development and enjoy designing solutions that are both technically sound and user-centric. My work has supported products used by millions of users, and I take pride in writing clean, reliable code that holds up at scale. I approach engineering with ownership and a commitment to continuous improvement, always aiming to solve hard problems and drive meaningful impact.";
const aboutOneLiner = "I am a <span>Passionate Developer</span><br/>creating <span>Innovative Solutions</span>";
const workOneLiner = "My <span>Experience</span>";
const projectsOneLiner = "My <span>Projects</span>";
const skillsOneLiner = "My <span>Skills</span>";

const work = [
    {
        company: "John Hancock",
        title: "Full Stack Software Engineer",
        start: "March 2023",
        end: "Present",
        responsibilities: [
            "Built a Time-based One-Time Password (TOTP) system using Node.js and React, enhancing authentication across login, registration, and account workflows and improving platform security.",
            "Developed scalable onboarding flows using React, .NET, Node.js, and SQL, enabling faster user registration for a new product line.",
            "Engineered a Node.js middleware integrating with LDAP/Active Directory to streamline user identity verification, improving reliability in enterprise authentication processes.",
            "Mentored junior engineers through code reviews and technical design feedback, increasing overall team velocity and technical depth.",
            "Rolled out a homegrown feature flag system using application settings in Node.js and React applications, reducing deployment risk and enabling controlled rollouts and A/B tests, decreasing time-to-release by 10%."
        ],
        image: images.manulife
    },
    {
        company: "Microsoft",
        title: "Software Engineer",
        start: "March 2022",
        end: "February 2023",
        responsibilities: [
            "Built a personalized Follow Topic feature using React and .NET, increasing user engagement on MSN by 27%.",
            "Developed and deployed the Topics for You page using .NET and React, delivering a tailored content experience and driving a 2.4% increase in topic-specific ad revenue.",
            "Extended .NET APIs to support new MSN content features, enabling faster delivery of editorial updates.",
            "Created interactive news carousels in React for category-specific content, enhancing content discoverability and visual appeal.",
            "Served on the Livesite Excellence Crew, producing training material and diagnostic queries that reduced incident resolution time and improved operational response."

        ],
        image: images.microsoftLogo
    },
    {
        company: "CBC",
        title: "Software Engineer",
        start: "April 2019",
        end: "March 2022",
        responsibilities: [
            "Built scalable microservices in Python using RabbitMQ and Celery to process thousands of media files daily, automating core media workflows.",
            "Developed an internal monitoring dashboard using Angular, Flask, and MongoDB to enable real-time tracking of media pipeline health, reducing response time to failures.",
            "Automated the deployment of broadcasting systems using Ansible, Jenkins, and Python, streamlining releases and reducing configuration errors.",
            "Implemented media transcoding pipelines using FFmpeg and Python, ensuring compatibility of video and audio content across multiple platforms."
        ],
        image: images.cbcLogo
    },
    {
        company: "CBC",
        title: "DevOps Intern",
        start: "April 2018",
        end: "September 2018",
        responsibilities: [
            "Deploy and configure embrionix devices automatically using Python, Jenkins, and Netbox",
            "Modify audio devices in batches using Jenkins, Ansible, and Python"
        ],
        image: images.cbcLogo
    },
    {
        company: "CBC",
        title: "Fullstack Developer Intern",
        start: "April 2017",
        end: "September 2017",
        responsibilities: [
            "Build an internal web application that monitors the status of internal workflows using Angular and Flask",
            "Refactor microservices to process media files using Python"
        ],
        image: images.cbcLogo
    },
    {
        company: "Rogers",
        title: "Software Developer Intern",
        start: "September 2016",
        end: "December 2016",
        responsibilities: [
            "Built an internal file sharing and rewards program app using PHP, JavaScript, and HTML",
            "Use Python to automate debugging tasks for technicians"
        ],
        image: images.rogersLogo
    }
]

const projects = [
    {
        name: "Yahoo Fantasy Analyzer",
        description: "Analyzes Yahoo Fantasy Hockey data to provide users with insights on their team's performance.",
        technologies: ["React", "Golang", "SQL", "Redis"],
        github: "https://github.com/Mateuse/yahoo-fantasy-analyzer",
        finished: true
    },
    {
        name: "Wheel Snipe Celly",
        description: "A Hockey related blog analyzing plays made in the sport",
        technologies: ["Hugo", "HTML", "JavaScript", "Scss"],
        github: "https://github.com/Mateuse/wheelSnipeCelly",
        website: "https://wheelsnipecelly.info/",
        finished: true
    },
    {
        name: "ShareMe",
        description: "Photo sharing application allowing users to add, comment, save, and view photos",
        technologies: ["React", "SanityCMS"],
        github: "https://github.com/Mateuse/share_me",
        finished: true
    },
    {
        name: "Workout",
        description: "A workout related application allowing users to create and modify a workout plan",
        technologies: ["React", "Firebase"],
        github: "https://github.com/Mateuse/workout",
        website: "https://mateuse.github.io/workout/",
        finished: false
    },
    {
        name: "Fantasy Hockey",
        description: "A fantasy hockey application allowing users to manage their fantasy hockey league",
        technologies: ["Angular", "NestJS", "MongoDB"],
        github: "https://github.com/Mateuse/hockey",
        finished: true
    },
    {
        name: "Quality Doc",
        description: "Version control and collaboration for documents within a team or project",
        technologies: [".Net", "Angular", "SQL"],
        github: "https://github.com/joeyfallu/QualityDoc",
        finished: true
    },
    {
        name: "Crypto Watch",
        description: "A crypto portfolio allowing users to monitor their crypto portfolio in real time",
        technologies: ["React", "Flask", "MongoDB"],
        github: "https://github.com/Mateuse/CryptoWatch",
        finished: true
    },
    {
        name: "Personal Website",
        description: "My Personal Portfolio built to showcase my work in a more interesting way than a resume :)",
        technologies: ["React", "SCSS"],
        github: "https://github.com/Mateuse/Portfolio/tree/code",
        finished: true
    }
]

const skills = [
    { name: "Python", img: images.python },
    { name: "React", img: images.react },
    { name: "Node.js", img: images.node },
    { name: "C#", img: images.csharp },
    { name: "Ansible", img: images.ansible },
    { name: "Angular", img: images.angular },
    { name: "Golang", img: images.go },
    { name: "HTML", img: images.html },
    { name: "CSS", img: images.css },
    { name: "Jenkins", img: images.jenkins },
    { name: "MongoDB", img: images.mongodb },
    { name: "SQL", img: images.sql },
    { name: "Celery", img: images.celery },
    { name: "RabbitMQ", img: images.rabbitmq },
    { name: "Git", img: images.git }
]

const newOpportunities = "I am currently open to new opportunities and am excited to bring my skills and experience to a new role. If you have an opportunity that you think would be a good fit, please don't hesitate to contact me. I would love to hear from you and discuss how I can contribute to your team.";
const notLooking = "Although I'm not currently looking for any new opportunities, I am always open to have a chat. Whether you have a question or just want to say hi, I'll try my best to get back to you!";

export default {
    name,
    description,
    aboutOneLiner,
    workOneLiner,
    work,
    skillsOneLiner,
    projectsOneLiner,
    projects,
    skills,
    newOpportunities,
    notLooking
}