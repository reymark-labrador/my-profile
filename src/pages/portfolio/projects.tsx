import { Project } from '../../types/project';

import propertyManagementImg from '../../assets/images/portfolio/property-management.png';
import paddysImg from '../../assets/images/portfolio/paddys.png';
import aspMvcImg from '../../assets/images/portfolio/asp-mvc.png';
import reactAuthImg from '../../assets/images/portfolio/react-auth.png';
import wyeesImg from '../../assets/images/portfolio/wyees.png';
import ziroImg from '../../assets/images/portfolio/ziro.png';
import sodImg from '../../assets/images/portfolio/sod.png';
import qcommsImg from '../../assets/images/portfolio/qcomms.png';
import nachosImg from '../../assets/images/portfolio/nachos.png';
import coronaLandingImg from '../../assets/images/portfolio/corona-landing.png';
import beerMarketImg from '../../assets/images/portfolio/beer-market.png';
import dashboardImg from '../../assets/images/portfolio/dashboard.png';
import jamesonTapGameImg from '../../assets/images/portfolio/jameson-tap-game.png';
import robotechImg from '../../assets/images/portfolio/robotech.png';
import guinnessFlintImg from '../../assets/images/portfolio/guiness-flint.png';
import blendsBeatsImg from '../../assets/images/portfolio/blends-&-beats.png';

export const Projects: Project[] = [
    {
        title: "Property Management and Listing",
        titleSlug: "property-management-and-listing",
        type: "WEB APP",
        imgSrc: propertyManagementImg,
        imgTitle: "property management",
        readMoreLink: "/portfolio/property-management-and-listing",
        shortDescription: "Property Management and Listing",
        description: `
            Built with React, Node JS, Express JS, Tailwind CSS, Shadcn <br/><br/>

            A modern React-based property management and listing application built with TypeScript, 
            featuring a public property browsing interface and an admin dashboard for property management.
        `,
        cta: "https://github.com/reymark-labrador/poptrack-frontend"
    },
    {
        title: "Paddys Markets",
        titleSlug: "paddys",
        type: "WEB APP",
        imgSrc: paddysImg,
        imgTitle: "paddys",
        readMoreLink: "/portfolio/paddys",
        shortDescription: "Paddy’s Markets Website",
        description: `
            Built with Laravel, Statamic, Tailwind CSS, Alpine.js <br/><br/>

            Developed a fully responsive, CMS-driven website for one of Australia’s most iconic market brands. 
            Used Statamic for flexible content management, with custom templates, dynamic listings, and fast, 
            SEO-friendly performance.

        `,
        cta: "https://www.paddysmarkets.com.au/"
    },
    {
        title: "Blends & Beats Website",
        titleSlug: "blends-&-beats",
        type: "WEB APP",
        imgSrc: blendsBeatsImg,
        imgTitle: "paddys",
        readMoreLink: "/portfolio/blends-&-beats",
        shortDescription: "Blends & Beats Website",
        description: `
            Built with React & Tailwind CSS<br/><br/>

            The Blends & Beats website features a dynamic mix of content and interactivity, including a brand introduction 
            that highlights its mission to unite communities through music, a collaborations section showcasing partnerships 
            with artists and brands, and a dedicated events page promoting past and upcoming cultural gatherings. 
            It also includes a podcast hub with original episodes covering topics like empowerment and youth culture, a 
            visual gallery capturing the energy of events, and interactive game experiences to boost engagement. Additionally, 
            the site supports promotional campaigns such as luxury brand activations—like the Chivas Regal Yacht Party—creating 
            unique branded moments that blend entertainment and lifestyle.

        `,
        cta: "https://master.d15fvmndmxorts.amplifyapp.com/"
    },
    {
        title: "Beer Market",
        titleSlug: "beer-market",
        type: "WEB APP",
        imgSrc: beerMarketImg,
        imgTitle: "beer-market",
        readMoreLink: "/portfolio/beer-market",
        shortDescription: "The Beer Market",
        description: `
            Built with Vue and Tailwind<br/><br/>

            Developed a mobile-first Beer Market webpage focused on showcasing beers from around the world. 
            The page features interactive tiles for each beer category, revealing a list of beers when clicked. 
            It also includes an interactive map where users can view and click venue locations to find nearby beer stands, 
            providing an engaging and intuitive experience optimized for mobile users.
        `,
        cta: "https://master.d2wulvurtco9do.amplifyapp.com/"
    },
    {
        title: "Guinness Flint",
        titleSlug: "guinness-flint",
        type: "WEB APP",
        imgSrc: guinnessFlintImg,
        imgTitle: "guinness-flint",
        readMoreLink: "/portfolio/guinness-flint",
        shortDescription: "Guinness Flint",
        description: `
            Built with Nuxt and Three js<br/><br/>

            A gamified microsite where users swipe to trigger 3D hand animations (built with Three.js) striking flint. 
            If they’re winners, the wood lights up with fire and a prize is revealed. If not, the wood stays unlit—building suspense through immersive interaction.
        `,
        cta: "https://guinness-game.d1fpr9wix8r8if.amplifyapp.com/game"
    },
    {
        title: "Microsite Dashboard",
        titleSlug: "microsite-dashboard",
        type: "WEB APP",
        imgSrc: dashboardImg,
        imgTitle: "microsite-dashboard",
        readMoreLink: "/portfolio/microsite-dashboard",
        shortDescription: "Microsite Dashboard",
        description: `
            Built with React, Node js, Zustand, TanStack, Shadcn, Tailwind <br/><br/>

            Developed a dashboard for setting up microsite promotions, allowing admins to 
            configure form fields, define mechanic types, manage prizes, and view detailed entry reports. 
            The interface streamlines campaign creation and provides full control over promotion setup and tracking.
        `,
        cta: ""
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
        cta: ""
    },
    {
        title: "Jameson Tap Game",
        titleSlug: "jameson-tap-game",
        type: "WEB APP",
        imgSrc: jamesonTapGameImg,
        imgTitle: "jameson-tap-game",
        readMoreLink: "/portfolio/jameson-tap-game",
        shortDescription: "The Beer Market",
        description: `
            Built with Vue, Phaser and Tailwind<br/><br/>

            Created an interactive game where users first fill out a form, which on submission calls an API 
            to determine if they’re a winner. If selected, the game begins with a tap-to-catch mechanic where 
            players tap falling clovers, combining form-based participation with engaging gameplay.
        `,
        cta: ""
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
        title: "ROBOTECH Automation",
        titleSlug: "robotech",
        type: "WEB APP",
        imgSrc: robotechImg,
        imgTitle: "robotech",
        readMoreLink: "/portfolio/robotech",
        shortDescription: "ROBOTECH Automation Website",
        description: `
            Built with WordPress<br/><br/>

            ROBOTECH Automation company is specializes in developing innovative solutions for a variety of industries. 
            Our goal is to improve efficiency and productivity while reducing costs and increasing safety. 
            We value innovation, collaboration, and sustainability in all aspects of our work.`,
        cta: "https://robotechautomation.net/"
    },
    {
        title: "WY & Esther Engineers",
        titleSlug: "wy-esther-enginners",
        type: "WEB APP",
        imgSrc: wyeesImg,
        imgTitle: "wyees",
        readMoreLink: "/portfolio/wy-esther-enginners",
        shortDescription: "Wordpress webapp for structural engineering",
        description: `
            Built with WordPress<br/><br/>

            They are a built environment consulting firm and specialist structural engineering practice with offices established in Dubai in 2015. 
            They have delivered projects in the commercial, hospitality, residential, retail, sport and leisure sectors throughout the UAE, Bahrain, Kuwait, 
            Cyprus, Greece, Morocco, Seychelles and Sri Lanka.`,
        cta: "https://www.wyees.com/"
    },
    {
        title: "School of Disruption",
        titleSlug: "school-of-disruption",
        type: "WEB APP",
        imgSrc: sodImg,
        imgTitle: "sod",
        readMoreLink: "/portfolio/school-of-disruption",
        shortDescription: "Wordpress webapp for School of Disruption",
        description: `
            Built with WordPress<br/><br/>

            They want to inspire & empower the workforce of the future and provide them with the tools and 
            capabilities to future-proof their business in an Age of Disruption.`,
        cta: "https://schoolofdisruption.com/"
    },
    {
        title: "ZIRO",
        titleSlug: "ziro",
        type: "WEB APP",
        imgSrc: ziroImg,
        imgTitle: "ziro",
        readMoreLink: "/portfolio/ziro",
        shortDescription: "React JS webapp for ride-hailing",
        description: `
            Built with React<br/><br/>

            ZIRO is a ride-hailing app. This landing page is created with React JS and API integration.`,
        cta: "https://www.rideziro.com/"
    },
    {
        title: "Corona Landing",
        titleSlug: "corona-landing",
        type: "WEB APP",
        imgSrc: coronaLandingImg,
        imgTitle: "corona-landing",
        readMoreLink: "/portfolio/corona-landing",
        shortDescription: "Corona Landing",
        description: `
            Built with jQuery and Bootstrap<br/><br/>

            Developed a responsive promotional landing page for Corona using jQuery and Bootstrap. 
            The page highlighted a travel giveaway campaign, featuring smooth scrolling, interactive modals, 
            and image galleries to showcase island destinations. It provided clear promotional details, entry 
            instructions, and a strong call-to-action, all within a mobile-friendly, brand-aligned design focused 
            on user engagement and conversion.
        `,
        cta: ""
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