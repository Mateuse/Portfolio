import images from "./images";
const name = "Emanuel Mateus";
const description = "I am a software engineer with a passion for building scalable, efficient, and user-friendly applications. With experience in both fullstack development along with continuous deployment and integration, I enjoy working on projects that challenge me to learn new skills and technologies. I am dedicated to writing clean, maintainable code committed to staying up-to-date with the latest industry trends and best practices."
const aboutOneLiner = "I am a <span>Passionate Developer</span><br/>creating <span>Innovative Solutions</span>"
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
            "Implemented MFA migration away from email across several applications using React and NodeJs, improving security security standards.",
                "Designed and built new registration and validation workflows with React, NodeJS, .NET, and Spring.",
                "Improve the performance of several utility API's by up to 20% using NodeJS and .Net.",
                "Introduced feature flags across all internal applications, enabling A/B testing and lowering time to production by 10%.",
                "Engineered a new API middleware to facilitate the integration between LDAP and various in-house applications, bolstering data accessibliity and inter-connectivity.",
                "Mentor junior engineers, guiding them in solving problems efficiently using best practices."
        ],
        image: images.manulife
    },
    {
        company: "Microsoft",
        title: "Software Engineer",
        start: "March 2022",
        end: "February 2023",
        responsibilities: [
            "Implemented follow topic system increasing user engagement for selected topics by up to 27% using React and .NET.",
            "Create news carousels for relevant categories on MSN news using React, Web Components, and .Net",
            "Run experiments on features by analyzing user behavior, monetization, and performance metrics",
            "Created a 'Topics for You' page which displayed a custom feed based off of user preferences, increasing ad revenue for topics pages by 2.4%",
            "Member of the livesite excellence crew which provided trainings, troubleshooting guides, and investigative queries improving time to resolution of livesites by 60%",
            "Modified and built API responses to support new features in MSN with .NET.",

        ],
        image: images.microsoftLogo
    },
    {
        company: "CBC",
        title: "Software Engineer",
        start: "April 2019",
        end: "March 2022",
        responsibilities: [
            "Implement microservices that process thousands of media files per day using Python, RabbitMQ, and Celery",
            "Build and maintain internal media web applications using Flask, .Net, Angular, and MongoDB",
            "Integrated a continous deployment system for Montreal's broadcasting network of audio and video devices using Ansible, Python, and Jenkins",
            "Create a media pipeline to convert physically scanned media to the specified digital formats using Python, RabbitMQ, and Celery",
            "Use AWS to run microservices (EC2) and store media files (S3)"
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
    {name: "Python", img: images.python},
    {name: "React", img: images.react},
    {name: "C#", img: images.csharp},
    {name: "Ansible", img: images.ansible},
    {name: "Angular", img: images.angular},
    {name: "Golang", img: images.go},
    {name: "HTML", img: images.html},
    {name: "CSS", img: images.css},
    {name: "Jenkins", img: images.jenkins},
    {name: "MongoDB", img: images.mongodb},
    {name: "SQL", img: images.sql},
    {name: "Celery", img: images.celery},
    {name: "RabbitMQ", img: images.rabbitmq},
    {name: "Git", img: images.git}
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