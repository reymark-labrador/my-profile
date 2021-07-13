import { useStore } from '../../store';
import { Container, Project } from '../../components';
import { Projects } from './projects';
import { PortfolioSingle } from './portfolioSingle';

export const Portfolio: React.FC = () => {
    useStore.setState({headerType: "small"});

    return (
        <div className="bg-gray-900">
            <Container>
                <div className="text-white tracking-widest py-20">
                    PROJECTS
                </div>
                {Projects.map((props) =>
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

export {
    PortfolioSingle
}