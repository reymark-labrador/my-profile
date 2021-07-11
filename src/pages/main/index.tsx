import { useStore } from '../../store';
import { Container, Project } from '../../components';
import wyeesImg from '../../assets/images/portfolio/wyees.png';

const projects = [
    {
        title: "WY & Esther Engineers",
        type: "WEB APP",
        imgSrc: wyeesImg,
        imgTitle: "wyees",
        readMoreLink: "",
        reverse: false
    }
]

export const Main: React.FC = () => {
    useStore.setState({headerType: "big"});

    return (
        <div className="bg-blue-800">
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