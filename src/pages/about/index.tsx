import { Container, Paragraph, ParagraphTitle, WorkExperience } from '../../components';
import { useStore } from '../../store';

const workExperiences = [
    {
        position: "Web Developer",
        company: "PMG",
        location: "Dubai",
        dateFrom: "Feb 2020",
        dateTo: "Present",
        jobs: [
            { description: "Develop responsive admin dashboards and business tools using React and Vue." },
            { description: "Build and maintain high-performance microsites on AWS with SEO best practices." },
            { description: "Develop fullstack Laravel/Statamic applications and CMS-driven APIs." },
            { description: "Implement scalable front-end architecture with Tailwind, Vite, and reusable components." },
            { description: "Collaborate with clients to deliver clean, accessible, and user-friendly web apps." },
        ]
    },
    {
        position: "Software Developer",
        company: "Winsoft Solutions",
        location: "Dubai",
        dateFrom: "Feb 2020",
        dateTo: "Present",
        jobs: [
            { description: "Implemented feature updates and UI enhancements based on evolving client requirements." },
            { description: "Resolved bugs and performance issues to improve system reliability." },
            { description: "Collaborated with stakeholders to ensure timely delivery of functional updates." }
        ]
    },
    {
        position: "System Developer",
        company: "AMS",
        location: "Dubai",
        dateFrom: "Feb 2020",
        dateTo: "Jul 2021",
        jobs: [
            { description: "Develop robust APIs using ASP.NET and MS SQL Server" },
            { description: "Build modern web applications with React, Tailwind CSS, and Redux" },
            { description: "Create Windows desktop applications using WPF and C#" },
            { description: "Design and implement scalable domain architectures with the Repository Pattern" },
            { description: "Utilize Entity Framework Core with a Code-First approach for efficient data modeling" },
            { description: "Write and optimize SQL scripts to support and enhance legacy systems" },
        ]
    },
    {
        position: "Software Developer",
        company: "ZIRO",
        location: "Dubai",
        dateFrom: "Aug 2018 ",
        dateTo: "Dec 2019",
        jobs: [
            { description: "Developed the ZIRO landing page using React with a focus on responsiveness and performance." },
            { description: "Built dynamic web applications using React, Next.js, and SASS for modern, scalable front-end solutions." },
            { description: "Developed and maintained RESTful APIs using Laravel and MySQL for robust backend functionality." },
        ]
    },
    {
        position: "Web Developer",
        company: "3Digital",
        location: "Dubai",
        dateFrom: "Oct 2017",
        dateTo: "Aug 2018",
        jobs: [
            { description: "Customized and optimized WordPress themes for improved performance and user experience." },
            { description: "Performed WordPress optimization, including speed, SEO, and plugin management." },
            { description: "Developed cross-platform mobile applications using Ionic and Angular." },
            { description: "Built and maintained Laravel + MySQL APIs to support mobile app functionality." },
        ]
    },
    {
        position: "Software Developer",
        company: "LTPI",
        location: "Philippines",
        dateFrom: "Aug 2014",
        dateTo: "Aug 2017",
        jobs: [
            { description: "Developed and maintained Windows desktop applications using VB.NET, focusing on reliability and user-friendly interfaces." },
            { description: "Updated and enhanced legacy systems, including bug fixes, performance improvements, and feature extensions to meet evolving business needs." },
            { description: "Ensured compatibility with modern environments while preserving critical legacy functionalities." },
            { description: "Collaborated with stakeholders to gather requirements and deliver stable, long-term software solutions." },
        ]
    }
]


export const AboutMe: React.FC = () => {
    useStore.setState({headerType: "small"});

    return (
        <div className="bg-gray-900">
            <Container>
                <div className="py-10 text-white tracking-wide">
                    <Paragraph>
                    Hey! I’m a frontend developer who loves building clean, responsive, and fast websites. I mostly work with React, Vue.js, and Tailwind CSS to create everything from admin dashboards to slick little microsites. <br/><br/>

                    I also jump into fullstack work when needed—mainly using Laravel or Statamic—and I’ve set up and deployed projects on AWS. Whether it’s working with APIs, tweaking UI details, or making sure a page loads lightning fast, I enjoy the process from start to finish.<br/><br/>

                    I care about writing clean code, making interfaces easy to use, and delivering work that’s solid and maintainable. Always learning, always building.<br/><br/>
                    </Paragraph>
                    <Paragraph>
                        <ParagraphTitle>Technologies</ParagraphTitle><br/>
                        React, Vue, Tailwind, Laravel, AWS, WordPress, PHP, MySQL, HTML/CSS
                    </Paragraph>
                    <Paragraph>
                        <ParagraphTitle>Work Experience</ParagraphTitle><br/>
                        {workExperiences.map((props) =>
                            <WorkExperience 
                                position={props.position} 
                                company={props.company}
                                location={props.location}
                                dateFrom={props.dateFrom}
                                dateTo={props.dateTo}
                                jobs={props.jobs}/>
                        )}
                    </Paragraph>
                </div>
            </Container>
        </div>
    );
};