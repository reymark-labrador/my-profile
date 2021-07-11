import { useStore } from '../../store';
import { Container, Project } from '../../components';
import wyeesImg from '../../assets/images/portfolio/wyees.png';
import ziroImg from '../../assets/images/portfolio/ziro.png';
import sodImg from '../../assets/images/portfolio/sod.png';

const projects = [
    {
        title: "WY & Esther Engineers",
        type: "WEB APP",
        imgSrc: wyeesImg,
        imgTitle: "wyees",
        readMoreLink: "",
        reverse: false
    },
    {
        title: "ZIRO",
        type: "WEB APP",
        imgSrc: ziroImg,
        imgTitle: "ziro",
        readMoreLink: "",
        reverse: true
    },
    {
        title: "School of Disruption",
        type: "WEB APP",
        imgSrc: sodImg,
        imgTitle: "sod",
        readMoreLink: "",
        reverse: false
    },
]

export const Portfolio: React.FC = () => {
    useStore.setState({headerType: "small"});

    return (
        <div className="bg-gray-900">
            <Container>
                <div className="text-white tracking-widest py-20">
                    PROJECTS
                </div>
                {projects.map((props) =>
                    <Project 
                        title={props.title}
                        type={props.type}
                        imgSrc={props.imgSrc}
                        imgTitle={props.imgTitle}
                        readMoreLink={props.readMoreLink}
                        reverse={props.reverse}/>
                )}
                
            </Container>
        </div>
    );
};