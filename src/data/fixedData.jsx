import react from "../images/react.png";
import js from "../images/javaScript.png";
import html from "../images/html.png";
import bootstrap from "../images/bootstrap.png";
import materialui from "../images/materialUi.png";
import css from "../images/css.png";
import tailwind from "../images/tailwind.png";
import node from "../images/node.png";
import mongoDB from "../images/mongoDB.png";
import mySql from "../images/mySql.png";
import vsCode from "../images/vsCode.png";
import github from "../images/github.png";
import git from "../images/git.png";
import ps from "../images/ps.png";
import figma from "../images/figma.png";
import PortfolioWebsite from "../images/PortfolioWebsite.jpg";
import inventoryImage from "../images/inventoryImage.png";
import budgetExpenseImage from "../images/budgetExpenseImage.png";
import weatherImage from "../images/weatherImage.png";



export const Bio = {
  name: "Junior Worku",
  roles: [
    "Front-end developer",
    "Web Developer",
    "Grahics Designer",
    "Programmer",
  ],
  description:
    "a passionate junior web developer with a keen eye for clean design and efficient functionality. With a strong foundation in Web development in creating seamless user experiences that not only meet but exceed expectations. Whether it's optimizing website performance, implementing intuitive UI/UX designs, or integrating cutting-edge technologies, I'm eager to bring creativity and innovation to every project I work on.",
  resume:
    "https://drive.google.com/file/d/1TeTlhlc57Y6dJcLqIJc8pmG4UslwRENY/view?usp=drive_link",
  github: "https://github.com/juniorworku",
  profile:"https://drive.google.com/file/d/1VrhX0iXlSDF3I-p7VbLCGb1658YM8XEs/view?usp=drive_link"
};

export const socialLinks = {
  github: "https://github.com/juniorworku",
  linkedin: "https://www.linkedin.com/in/junior-worku-9298b919b/",
  telegram: "https://t.me/junior_worku",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image: react,
      },
      {
        name: "Javascript",
        image: js,
      },
      {
        name: "HTML5",
        image: html,
      },
      {
        name: "Bootstrap",
        image: bootstrap,
      },
      {
        name: "Material UI",
        image: materialui,
      },
      {
        name: "CSS3",
        image: css,
      },
      {
        name: "Tailwind CSS",
        image: tailwind,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.Js",
        image: node,
      },
      {
        name: "MongoDB",
        image: mongoDB,
      },
      {
        name: "MySQL",
        image: mySql,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Vs Code",
        image: vsCode,
      },
      {
        name: "GitHub",
        image: github,
      },
      {
        name: "Git",
        image: git,
      },
      {
        name: "Adobe Photoshop",
        image: ps,
      },
      {
        name: "Figma",
        image: figma,
      },
    ],
  },
];

export const projects = [
  {
    id: 0,
    image: PortfolioWebsite,
    title: "portfolio website",
    description:
      " Welcome to the GitHub repository for the my personal portfolio website project! Explore the source code. Built with HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JS"],
    link: "https://github.com",
    repository: "https://github.com/juniorworku/web-projects/tree/main/Junior's%20website%20portfolio/Portfolio%20Project",
  },
  {
    id: 1,
    image: inventoryImage,
    title: "Inventory Management System",
    description:
      " Welcome to the GitHub repository for the my personal portfolio website project! Explore the source code. Built with HTML, CSS, and JavaScript.",
    tags: ["React", "BootStrap","RESTFul API"],
    link: "https://github.com",
    repository: "https://github.com/juniorworku/Inventory-Management-System",
  },
  {
    id: 2,
    image: budgetExpenseImage,
    title: "Budget Expense App",
    description:
      " Welcome to the GitHub repository for the my personal portfolio website project! Explore the source code. Built with HTML, CSS, and JavaScript.",
    tags: ["React + Vite", "BootStrap","RESTFul API"],
    link: "https://github.com",
    repository: "https://github.com/juniorworku/ReactJS-Projects/tree/main/A%20BUDGET%20APP/A%20Budget%20App",
  },
  {
    id: 3,
    image: weatherImage,
    title: "weather App",
    description:
      " This is a simple weather displaying application built with React + vite, using the OpenWeather API to fetch real-time weather data. By entering the city name, and the Application will display the weather information of the city.",
    tags: ["React + vite", "Material TailWind Css"],
    link: "https://github.com",
    repository: "https://github.com/juniorworku/ReactJS-Weather-App",
  },
]