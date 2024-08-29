import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mechanical Engineering Student",
    icon: mobile,
  },
  {
    title: "Data Manager",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: mobile,
  },
  {
    title: "Robotics",
    icon: mobile,
  },
];

const technologies = [

];

const experiences = [
  {
    title: "Data Manager",
    company_name: "Universitas Indonesia",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Aug, 2022 – Present",
    points: [
      "Oversaw all aspects of the Tracer Study project, including planning, execution, and evaluation, impacting over 5,000 graduates annually.",
      "Developed survey instruments and methodologies, resulting in a 30% increase in response rates from alumni through online surveys, interviews, and other relevant methods.",
      "Analyzed collected data from 4,500+ alumni to identify trends, patterns, and insights, contributing to a 15% improvement in program effectiveness and alumni career outcomes.",
    ],
  },
];

const testimonials = [ {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "First Personal Portfolio",
    description:
      "Using only HTML, CSS, and JavaScript, I created a responsive portfolio website that showcases my skills and projects.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "orange-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mtaalfarizi/personal-portfolio-1",
  },
  {
    name: "Robot Arm",
    description:
      "It is created using Arduino UNO, couple of joysticks, breadboards, and the model to the arm itself using acrylic. My take on this project is i want to create something that CAN be used by myself, that actually really useful.",
    tags: [
      {
        name: "physical",
        color: "blue-text-gradient",
      },
      {
        name: "microcontroller",
        color: "green-text-gradient",
      },
      {
        name: "robotics",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "3D Portfolio Website",
    description:
      "The upgrade of my previous take on UI/UX. It is created using three.js, tailwind, and other JavaScript frameworks. Interactivity is a small part of this design, yet I still want to learn more about it.",
    tags: [
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
