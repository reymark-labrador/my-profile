import { Project } from '../../types/project';

import paddysImg from '../../assets/images/portfolio/paddys.png';
import aspMvcImg from '../../assets/images/portfolio/asp-mvc.png';
import reactAuthImg from '../../assets/images/portfolio/react-auth.png';
import wyeesImg from '../../assets/images/portfolio/wyees.png';
import ziroImg from '../../assets/images/portfolio/ziro.png';
import sodImg from '../../assets/images/portfolio/sod.png';
import qcommsImg from '../../assets/images/portfolio/qcomms.png';
import nachosImg from '../../assets/images/portfolio/nachos.png';

export const Projects: Project[] = [
    {
        title: "Paddys Markets",
        titleSlug: "paddys",
        type: "WEB APP",
        imgSrc: paddysImg,
        imgTitle: "paddys",
        readMoreLink: "/portfolio/paddys",
        shortDescription: "Paddy’s Markets Website",
        description: `
            Built with Statamic, Tailwind CSS, Alpine.js <br/><br/>

            Developed a fully responsive, CMS-driven website for one of Australia’s most iconic market brands. 
            Used Statamic for flexible content management, with custom templates, dynamic listings, and fast, 
            SEO-friendly performance.

        `,
        cta: "https://www.paddysmarkets.com.au/"
    },
    {
        title: "Nachos",
        titleSlug: "nachos",
        type: "WEB APP",
        imgSrc: nachosImg,
        imgTitle: "nachos",
        readMoreLink: "/portfolio/nachos",
        shortDescription: "Nachos Kitchen",
        description: `
            Built with Vue.js, Tailwind CSS, Node.js <br/><br/>

            A custom e-commerce platform that delivers freshly cooked dog food based on personalized pet profiles. 
            Users go through a guided journey—adding pets, setting their name, age, and weight—to generate a tailored meal plan. 
            The platform supports scheduled deliveries, secure payments, and includes a user dashboard for managing profiles and subscriptions. 
            The frontend is powered by Vue.js and Tailwind CSS, with a Node.js backend handling orders and logistics.
        `,
        cta: "https://nachoskitchen.me/"
    },
    {
        title: "Qcomms",
        titleSlug: "qcomms",
        type: "WEB APP",
        imgSrc: qcommsImg,
        imgTitle: "qcomms",
        readMoreLink: "/portfolio/qcomms",
        shortDescription: "Q Communications Website",
        description: `
            Built with WordPress<br/><br/>

            Developed a clean, modern website for Q Communications, a UAE-based PR and digital marketing agency. 
            Built with WordPress for easy content updates, the site features custom layouts, smooth animations, and 
            a fully responsive design optimized for performance and SEO.
        `,
        cta: "https://qcomms.ae/"
    },
    {
        title: "WY & Esther Engineers",
        titleSlug: "wy-esther-enginners",
        type: "WEB APP",
        imgSrc: wyeesImg,
        imgTitle: "wyees",
        readMoreLink: "/portfolio/wy-esther-enginners",
        shortDescription: "Wordpress webapp for structural engineering",
        description: "They are a built environment consulting firm and specialist structural engineering practice with offices established in Dubai in 2015. They have delivered projects in the commercial, hospitality, residential, retail, sport and leisure sectors throughout the UAE, Bahrain, Kuwait, Cyprus, Greece, Morocco, Seychelles and Sri Lanka.",
        cta: "https://www.wyees.com/"
    },
    {
        title: "ZIRO",
        titleSlug: "ziro",
        type: "WEB APP",
        imgSrc: ziroImg,
        imgTitle: "ziro",
        readMoreLink: "/portfolio/ziro",
        shortDescription: "React JS webapp for ride-hailing",
        description: "ZIRO is a ride-hailing app. This landing page is created with React JS and API integration.",
        cta: "https://www.rideziro.com/"
    },
    {
        title: "School of Disruption",
        titleSlug: "school-of-disruption",
        type: "WEB APP",
        imgSrc: sodImg,
        imgTitle: "sod",
        readMoreLink: "/portfolio/school-of-disruption",
        shortDescription: "Wordpress webapp for School of Disruption",
        description: "They want to inspire & empower the workforce of the future and provide them with the tools and capabilities to future-proof their business in an Age of Disruption.",
        cta: "https://schoolofdisruption.com/"
    },
    {
        title: "ASP.NET, MVC, MSSQL, Code First",
        titleSlug: "aspnet-mvc-mssql-codefirst",
        type: "WEB APP",
        imgSrc: aspMvcImg,
        imgTitle: "wyees",
        readMoreLink: "/portfolio/aspnet-mvc-mssql-codefirst",
        shortDescription: "Simple ASP.NET crud",
        description: "A simple ASP.NET crud using ASP.NET, MSSQL and code first approach.",
        cta: "https://github.com/reymark-labrador/asp-mvc-crud"
    },
    {
        title: "React jwt auth & Node JS",
        titleSlug: "react-jwt-nodejs",
        type: "WEB APP",
        imgSrc: reactAuthImg,
        imgTitle: "wyees",
        readMoreLink: "/portfolio/react-jwt-nodejs",
        shortDescription: "Simple React jwt auth",
        description: "A simple React jwt auth using React, Node JS & MYSQL.",
        cta: "https://github.com/reymark-labrador/react-auth"
    },
    
]