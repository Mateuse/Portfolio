import images from "./images";
const name = "Emanuel Mateus";
const description = "I'm a seasoned software engineer passionate about building scalable, efficient, and user-friendly applications. With expertise in full-stack development, continuous deployment, and system integration, I thrive on tackling complex challenges and learning new technologies. I am dedicated to writing clean, maintainable code and staying ahead of industry trends to consistently deliver high-quality solutions.";
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
            "Implemented a new MFA authentication system for the company's login, account management, and registration using React and Node.js.",
            "Designed and developed new registration and validation workflows for a new product using React, Node.js, .NET, and SQL.",
            "Developed a Node.js API middleware leveraging LDAP for seamless retrieval of user information from Active Directory, improving authentication and account management.",
            "Implemented feature flags across internal applications, enabling controlled feature rollouts and A/B testing, reducing deployment time by 10%.",
            "Mentor junior engineers, guiding them in solving problems efficiently following best practices.",
            "Updated and maintained legacy applications to meet current security standards using Spring Boot and .NET."
        ],
        image: images.manulife
    },
    {
        company: "Microsoft",
        title: "Software Engineer",
        start: "March 2022",
        end: "February 2023",
        responsibilities: [
            "Implemented a follow-topic system for MSN, increasing user engagement for selected topics by up to 27% using React and .NET.",
            "Developed a 'Topics for You' page for MSN, delivering a personalized feed based on user preferences, increasing topic-based ad revenue by 2.4%.",
            "Served on the Livesite Excellence Crew, delivering training, troubleshooting guides, and investigative queries to streamline live site issue resolution.",
            "Enhanced API responses to support new MSN features using .NET.",
            "Created news carousels for relevant categories on MSN using React.",

        ],
        image: images.microsoftLogo
    },
    {
        company: "CBC",
        title: "Software Engineer",
        start: "April 2019",
        end: "March 2022",
        responsibilities: [
            "Implemented microservices to process thousands of media files per day using Python, RabbitMQ, and Celery.",
            "Built and maintained an internal monitoring tool for media pipelines, allowing for real-time monitoring of media processing using Angular, Flask, and MongoDB.",
            "Integrated a continuous deployment system for audio and video broadcasting devices using Ansible, Python, and Jenkins.",
            "Created workflows that modify and transcode media files for different platforms using FFmpeg and Python."
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
        github: "https://github.com/Mateuse/yahoo-fantasy-analyzer"
    },
    {
        name: "Wheel Snipe Celly",
        description: "A Hockey related blog analyzing plays made in the sport",
        technologies: ["Hugo", "HTML", "JavaScript", "Scss"],
        github: "https://github.com/Mateuse/wheelSnipeCelly",
        website: "https://wheelsnipecelly.info/"
    },
    {
        name: "ShareMe",
        description: "Photo sharing application allowing users to add, comment, save, and view photos",
        technologies: ["React", "SanityCMS"],
        github: "https://github.com/Mateuse/share_me"
    },
    {
        name: "Workout",
        description: "A workout related application allowing users to create and modify a workout plan",
        technologies: ["React", "Firebase"],
        github: "https://github.com/Mateuse/workout",
        website: "https://mateuse.github.io/workout/"
    },
    {
        name: "Fantasy Hockey",
        description: "A fantasy hockey application allowing users to manage their fantasy hockey league",
        technologies: ["Angular", "NestJS", "MongoDB"],
        github: "https://github.com/Mateuse/hockey"
    },
    {
        name: "Quality Doc",
        description: "Version control and collaboration for documents within a team or project",
        technologies: [".Net", "Angular", "SQL"],
        github: "https://github.com/joeyfallu/QualityDoc"
    },
    {
        name: "Crypto Watch",
        description: "A crypto portfolio allowing users to monitor their crypto portfolio in real time",
        technologies: ["React", "Flask", "MongoDB"],
        github: "https://github.com/Mateuse/CryptoWatch"
    },
    {
        name: "Personal Website",
        description: "My Personal Portfolio built to showcase my work in a more interesting way than a resume :)",
        technologies: ["React", "SCSS"],
        github: "https://github.com/Mateuse/Portfolio/tree/code"
    }
]

const skills = [
    { name: "Python", img: images.python },
    { name: "React", img: images.react },
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