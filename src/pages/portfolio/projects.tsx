import aspMvcImg from '../../assets/images/portfolio/asp-mvc.png';
import reactAuthImg from '../../assets/images/portfolio/react-auth.png';
import wyeesImg from '../../assets/images/portfolio/wyees.png';
import ziroImg from '../../assets/images/portfolio/ziro.png';
import sodImg from '../../assets/images/portfolio/sod.png';

export const Projects = [
    {
        title: "ASP.NET, MVC, MSSQL, Code First",
        titleSlug: "aspnet-mvc-mssql-codefirst",
        type: "WEB APP",
        imgSrc: aspMvcImg,
        imgTitle: "wyees",
        readMoreLink: "/portfolio/aspnet-mvc-mssql-codefirst",
        reverse: false,
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
        reverse: true,
        shortDescription: "Simple React jwt auth",
        description: "A simple React jwt auth using React, Node JS & MYSQL.",
        cta: "https://github.com/reymark-labrador/react-auth"
    },
    {
        title: "WY & Esther Engineers",
        titleSlug: "wy-esther-enginners",
        type: "WEB APP",
        imgSrc: wyeesImg,
        imgTitle: "wyees",
        readMoreLink: "/portfolio/wy-esther-enginners",
        reverse: false,
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
        reverse: true,
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
        reverse: false,
        shortDescription: "Wordpress webapp for School of Disruption",
        description: "They want to inspire & empower the workforce of the future and provide them with the tools and capabilities to future-proof their business in an Age of Disruption.",
        cta: "https://schoolofdisruption.com/"
    },
]