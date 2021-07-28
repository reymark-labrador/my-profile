import { Container, Paragraph, ParagraphTitle, WorkExperience } from '../../components';
import { useStore } from '../../store';

const workExperiences = [
    {
        position: "System Developer",
        company: "AMS",
        location: "Dubai",
        dateFrom: "Feb 2020",
        dateTo: "Jul 2021",
        jobs: [
            { description: "API development(ASP.NET & MSSQL)" },
            { description: "Web application development(React JS, Tailwind, Redux)" },
            { description: "Windows application development(WPF C#)" },
            { description: "Implement domain architecture and repository pattern" },
            { description: "Using code first approach in Entity Framework core" },
            { description: "Create SQL scripts for legacy system adjustments" },
        ]
    },
    {
        position: "Software Developer",
        company: "ZIRO",
        location: "Dubai",
        dateFrom: "Aug 2018 ",
        dateTo: "Dec 2019",
        jobs: [
            { description: "Develop ZIRO(https://www.rideziro.com/) landing page(React JS, SASS)" },
            { description: "Web application development(React JS, Next JS, SASS)" },
            { description: "API development(Laravel & MYSQL)" },
        ]
    },
    {
        position: "Web Developer",
        company: "3Digital",
        location: "Dubai",
        dateFrom: "Oct 2017",
        dateTo: "Aug 2018",
        jobs: [
            { description: "Wordpress theme modification" },
            { description: "Wordpress optimization" },
            { description: "Mobile app development(Ionic, Angular)" },
            { description: "API development for mobile app(Laravel & MYSQL)" },
        ]
    },
    {
        position: "Software Developer",
        company: "LTPI",
        location: "Philippines",
        dateFrom: "Aug 2014",
        dateTo: "Aug 2017",
        jobs: [
            { description: "Windows application development(VB.NET)" },
            { description: "Update & maintain legacy systems" },
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
                        Hi, I'm Reymark, an awesome software developer with experience building web and windows applications.
                        I have professional experience working with C#, VB.Net and React JS.
                    </Paragraph>
                    <Paragraph>
                        <ParagraphTitle>Technologies</ParagraphTitle><br/>
                        React JS, C#, VB.Net, ASP.Net, Node JS, MVVM, Repository Pattern, PHP, Laravel, Wordpress, Angular, Redux , Next JS, CSS, SASS, Bootstrap, Tailwind, MSSQL, MYSQL
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