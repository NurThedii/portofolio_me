// import images
import Hero_person from "./assets/images/Hero/person.png";

import html from "./assets/images/Skills/html.png";
import css from "./assets/images/Skills/css.png";
import js from "./assets/images/Skills/js.png";
import laravel from "./assets/images/Skills/laravel.png";
import flutter from "./assets/images/Skills/flutter.png";
import figma from "./assets/images/Skills/figma.png";
import sketch from "./assets/images/Skills/sketch.png";
import ps from "./assets/images/Skills/ps.png";
import reactjs from "./assets/images/Skills/react.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3  from "./assets/images/Services/logo3.png";
import mobile  from "./assets/images/Services/mobile.png";

// import project1 from "./assets/images/projects/img1.png";
import project1 from "./assets/images/Projects/project1.png";
import kalkulatorgaji from "./assets/images/Projects/kalkulatorgaji.png";
import project2 from "./assets/images/projects/img2.png";
import project3 from "./assets/images/projects/img3.png";
import person_project from "./assets/images/projects/person.png";

import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Software Engginer",
    firstName: "MUHAMMAD",
    LastName: "NUR ARDI",
    btnText: "From Idea to Reality – Let’s Go!",
    image: Hero_person,
    hero_content: [
      {
        count: "3+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "5+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "MY TOP SKILLS",
    skills_content: [
      {
        name: "HTML",
        para: "HTML is the fundamental markup language used to structure web content.",
        logo: html,
      },
      {
        name: "CSS",
        para: "CSS is essential for styling and designing visually appealing web pages.",
        logo: css,
      },
      {
        name: "Javascript",
        para: "JavaScript powers interactive and dynamic features across modern websites.",
        logo: js,
      },
      {
        name: "React js",
        para: "React.js enables the development of fast, responsive, and reusable UI components.",
        logo: reactjs,
      },
      {
        name: "Laravel",
        para: "Laravel is a robust PHP framework that streamlines web application development.",
        logo: laravel,
      },
      {
        name: "Flutter",
        para: "Flutter facilitates building high-performance, cross-platform mobile applications with ease.",
        logo: flutter,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Our web development services leverage cutting-edge technologies to build responsive, robust, and user-friendly websites that drive business growth.",
        logo: services_logo1,
      },
      {
        title: "Mobile Development",
        para: "We excel in creating high-quality mobile applications with intuitive interfaces, seamless performance, and cross-platform compatibility to deliver an exceptional mobile experience.",
        logo: mobile,
      },
      
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    project_content: [
      {
        title: "Yuk Cari Makan",
        image: project1,
        description: "A dynamic food website featuring store reviews, food ratings, and user comments. Discover culinary delights!",
        lang:['Laravel 11','Bootstrap 5','Java Script'],
      },
      {
        title: "Employee Salary Calculator",
        image: kalkulatorgaji,
        description: "A user-friendly app that allows employees to view their current month's salary and track their total earnings for the year.",
        lang:['PHP','Bootstrap 5','Java Script']
      },
    ],
  },
  // Testimonials: {
  //   title: "Testimonials",
  //   subtitle: "MY CLIENT REVIEWS",
  //   testimonials_content: [
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar1,
  //       name: "JOHN DOE",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar2,
  //       name: "Tom Alex",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar3,
  //       name: "Johnny",
  //     },
  //     {
  //       review:
  //         "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
  //       img: avatar4,
  //       name: "ROBBIN",
  //     },
  //   ],
  // },
  Contact: {
    title: "Contect Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "nurardibussiness@gmail.com",
        icon: GrMail,
        link: "mailto:nurardibussiness@gmail.com",
      },
      {
        text: "+62 821-1402-0048",
        icon: MdCall,
        link: "https://wa.me/6282114020048",
      },
      {
        text: "nr.ardii",
        icon: BsInstagram,
        link: "https://www.instagram.com/nr.ardii/?hl=en",
      },
      {
        text: "muhammad nur ardi",
        icon: BsLinkedin,
        link: "https://www.linkedin.com/in/muhammad-nur-ardi-662461316/",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2025",
  },
};
