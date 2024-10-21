import { Icons } from "@/components/icons";
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from "lucide-react";

export const DATA = {
  name: "Azeem Rafique",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "React.JS || React Native Developer. I love building Websites and Mobile Apps. Very active on LinkedIn.",
  summary:
    "Highly motivated and skilled software developer graduated with a Bachelor's degree in Computer Science and a strong foundation in JavaScript | React.JS | React Native. Eager to contribute my technical expertise and collaborative mindset to drive impactful projects in a dynamic team environment.",
  avatarUrl: "/me.jpg",
  skills: [
    "React.Js",
    "React Native",
    "Next.Js",
    "Angular.Js",
    "JavaScript",
    "TypeScript",
    "Node.Js",
    "Express.Js",
    "Unit Testing With Jest",
    "REST APIS",
    "MongoDB",
    "FireBase",
    "Android Studio",
    "Git",
    "Tailwind CSS",
    "BootStrap",
    "Material UI",
    "Postman",
    "HTML & CSS",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
    { href: "#", icon: CodeIcon, label: "Projects" },
    { href: "#", icon: PencilLine, label: "Notes" },
  ],
  contact: {
    email: "azeemrafique47@gmail.com",
    tel: "+923338737779",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/AzeemRafique10",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/azeem-rafique-856970194/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/azeemrafique471",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://www.youtube.com/@urbancrime9212",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SIEMENS ENERGY",
      href: "https://www.siemens-energy.com/global/en/home.html",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/siemens.svg",
      start: "Jun 2024",
      end: "Sep 30 2024 Contract",
      description: `I was a Junior Frontend Developer with experience in modifying code, fixing bugs, and updating user interfaces to enhance functionality and design. I am skilled in optimizing front-end performance and ensuring smooth, user-friendly experiences. My role involves writing clear and concise documentation to support development and maintenance processes. I have a keen eye for detail and a passion for improving web applications. I am eager to contribute to innovative projects and continuously expand my skills.`,
    },
    {
      company: "Trade Tracker Company",
      href: "https://tradetracker.com.pk/",
      badges: [],
      location: "On-Site",
      title: "Frontend Engineer",
      logoUrl: "/tt.png",
      start: "March 2024",
      end: "Jun 2024",
      description: `Currently working at Trade Tracker. My responsibilities include fixing bugs, updating UI, and implementing new logic across three websites, including Nestle, Intradoors.com, and Trade Tracker's own site. Additionally, monitor and resolve issues in database service requests.`,
    },
    {
      company: "Upwork",
      badges: [],
      href: "https://www.upwork.com/freelancers/~01d8226107255ea3fe?mp_source=share",
      location: "Remote",
      title: "Mobile Apps & Web Developer",
      logoUrl: "/upwork.svg",
      start: "August 2022",
      end: "Present",
      description:
        "React Native Developer & MERN stack developer. Work as junior Developer build components and fix bugs with team members. Works on Authentication",
    },
    {
      company: "CodSoft",
      href: "https://www.codsoft.in/",
      badges: [],
      location: "Remote",
      title: "Internship",
      logoUrl: "/codsoft.jpg",
      start: "Feb 2024",
      end: "Mar 2024",
      description:
        "React Developer Implemented features using React, React Bootstrap and versal hosting HTML/CSS Work on main projects Portfolio Landing Page Calculator ",
    },
    {
      company: "Final Year Project",
      href: "https://splunk.com",
      badges: [],
      location: "University",
      title: "Mobile App developement",
      logoUrl: "/rn.png",
      start: "Dec 2022",
      end: "Aug 2023",
      description:
        "Mobile Version (React Native) Social Media App: University Project Mobile Version (React Native)",
    },
    {
      company: "FreeCodeCamp",
      href: "https://www.freecodecamp.org/fccbbc007f0-2d3c-4b1f-8dbb-ba7cc7a2e27a",
      badges: [],
      location: "Learning",
      title: "Certificate",
      logoUrl: "/fcc.png",
      start: "600 hours work",
      end: "Aug 2023 - 2024",
      description:
        "Certificate in JavaScript Algorithms and Data Structures & \nCertificate in Responsive Web Design ",
    },
    
  ],
  education: [
    {
      school: "Lahore Garrison University",
      href: "https://lgu.edu.pk/",
      degree: "Bachelor's in ( Computer Science )",
      logoUrl: "/lgu.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "Govt.College of Technology",
      href: "https://tevta.gop.pk/",
      degree: "DAE ( Electrical )",
      logoUrl: "/gct.jpg",
      start: "2015",
      end: "2019",
    },
    {
      school: "The International School System",
      href: "https://wlu.ca",
      degree: "Matriculation ( Science )",
      logoUrl: "/waterloo.png",
      start: "2013",
      end: "2015",
    },
  ],
  projects: [
    {
      title: "E-commerce Mobile Application",
      href: "N/A",
      dates: "Oct 2024",
      active: true,
      description:
        "I developed a fully functional **React Native E-commerce Android app** that allows users to browse products, add items to their cart, and make purchases seamlessly. The app integrates real-time data through APIs, supports secure payment gateways, and provides an intuitive, user-friendly interface optimized for mobile devices. Features include product search, filters, wishlists, and order tracking, ensuring a smooth shopping experience for users.",
      technologies: [
        "React Native",
        "Javascript",
        "Node.JS",
        "Firebase",
        "HTML & CSS",
        "FontAwesome",
        "Mertial UI",
      ],
      links: [
        {
          type: "Code",
          href: "https://github.com/AzeemRafique10",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AzeemRafique10",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/mobileApp.mp4",
    },{
      title: "PPP Planer",
      href: "N/A",
      dates: "August 2024",
      active: true,
      description:
        "I worked on the **PPP Planner website**, adding new features using React, Vite, TypeScript, and TailwindCSS. I implemented Clerk Authentication to enhance security and streamlined the user experience. Additionally, I improved the UI and redesigned the navigation bar for better accessibility and performance. These updates significantly enhanced the functionality and usability of the web application.",
      technologies: [
        "React.JS",
        "Typescript",
        "Node.JS",
        "Clerk Authentication",
        "Mertial UI",
        "TailWindCSS",
        "HTML & CSS",
        "FontAwesome",
        "BootStrap",
      ],
      links: [
        {
          type: "",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        
      ],
      image: "",
      video: "/pppplaner.mp4",
    },
    {
      title: "Alkazi Traders",
      href: "https://intradoors.com/",
      dates: "March 2024",
      active: true,
      description:
        "I developed the **Intradoors website using Angular**, focusing on creating a robust and dynamic user interface. The project utilized a range of technologies, including AngularJS, TypeScript, and Node.js for seamless functionality. The design was enhanced with Material UI, Sass, and Bootstrap, ensuring a responsive and visually appealing layout. Additionally, I integrated FontAwesome icons and structured the content with HTML to provide a comprehensive and user-friendly experience.",
      technologies: [
        "Angular.JS",
        "Typescript",
        "Node.JS",
        "Mertial UI",
        "Sass",
        "HTML",
        "FontAwesome",
        "BootStrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://intradoors.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/video1.mp4",
    },
    {
      title: "Nestle Merchandiser",
      href: "http://mmaplus.concavetech.com/dist/#/dashboard/tableau",
      dates: "June 2024",
      active: true,
      description: "Fix Bugs, design 3 components, Update, make more Secure",
      technologies: [
        "Angular.JS",
        "Typescript",
        "Node.JS",
        "Mertial UI",
        "Sass",
        "HTML",
        "FontAwesome",
        "BootStrap",
      ],
      links: [
        {
          type: "Website",
          href: "http://mmaplus.concavetech.com/dist/#/dashboard/tableau",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AzeemRafique10",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/mmaplus.mp4",
    },
    {
      title: "Comforty Website",
      href: "https://ecommerce-ngvmbghjg-AzeemRafique10s-projects.vercel.app/#",
      dates: "Aug 2024",
      active: true,
      description:
        "I built the Comforty website from scratch using HTML, CSS, Bootstrap, and JavaScript, ensuring a responsive and engaging user experience. Designed with Figma templates and deployed on Vercel, the site combines sleek design with robust functionality.",
      technologies: [
        "HTML",
        "JavaScript",
        "Sass",
        "CSS",
        "FontAwesome",
        "BootStrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://mye-commerce-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AzeemRafique10",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/comforty.mp4",
    },
    {
      title: "project Landing-page",
      href: "https://circle-home.vercel.app/",
      dates: "Aug 2024",
      active: true,
      description:
        "I built the Landing website from scratch using HTML, CSS, Bootstrap, and JavaScript, ensuring a responsive and engaging user experience. Designed with Figma templates and deployed on Vercel, the site combines sleek design with robust functionality.",
      technologies: [
        "HTML",
        "JavaScript",
        "Sass",
        "CSS",
        "FontAwesome",
        "BootStrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://circle-home.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AzeemRafique10",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/circle.mp4",
    },
    {
      title: "Landing Page",
      href: "https://landing-page-alpha-five-88.vercel.app/",
      dates: "February 2024",
      active: true,
      description: "Make landing page With React during Internship",
      technologies: [
        "React.JS",
        "JavaScript",
        "Node.JS",
        "TailwindCSS",
        "FontAwesome Icon",
        "HTML & CSS",
        "JSX",
        "React BootStrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://landing-page-alpha-five-88.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/AzeemRafique10/Landing-page",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/video2.mp4",
    },
    {
      title: "React Calculator",
      href: "https://calculator-react-raqt1di2d-AzeemRafique10s-projects.vercel.app/",
      dates: "February 2024",
      active: true,
      description: "Make Calculator With React.JS during Internship",
      technologies: [
        "React.JS",
        "JavaScript",
        "Node.JS",
        "TailwindCSS",
        "FontAwesome Icon",
        "HTML & CSS",
        "JSX",
        "React BootStrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://calculator-react-raqt1di2d-AzeemRafique10s-projects.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/video3.mp4",
    },
    {
      title: "Final Year Project University Social Application",
      href: "",
      dates: "February 2024",
      active: true,
      description: "This Social Applicaion I develope and Submit on FYP",
      technologies: [
        "React Native",
        "JavaScript",
        "Node.JS",
        "TailwindCSS",
        "FontAwesome Icon",
        "HTML & CSS",
        "JSX",
        "React BootStrap",
        "FireBase",
        "Navigation",
        "React BootStrap",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/AzeemRafique10",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/phone.mp4",
    },
  ],
  hackathons: [
    {
      title: "Lego Robot",
      dates: "November 2020",
      location: "University Project",
      description:
        "Developed a Lego Robot and Program it in Python that do the Lane Following",
      image:
        "https://pybricks.com/ev3-micropython/_images/robot_educator_line.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Street Light Sensors",
      dates: "December 2021",
      location: "University Project",
      description:
        "Develope project in Python at in dark automatically Turn-on lights and Turn-off when there will be at Day time",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/ky3b0y80/outdoor-lamp/t/c/s/10-5-36-watt-automatic-sensor-system-led-street-light-grey-body-original-imagae8ygey6ffzx.jpeg?q=90&crop=false",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Freelance project Fix Authentication",
      dates: "March 2022",
      location: "Remote",
      description:
        "React Native Project there was some issues i have resolve it. Login & SignUp issues",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
  
  ],
} as const;
