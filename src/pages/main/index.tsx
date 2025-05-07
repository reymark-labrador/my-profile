import { useStore } from '../../store';
import { Container, ProjectCard } from '../../components';
import { Projects } from '../portfolio/projects';

export const Main: React.FC = () => {
    useStore.setState({headerType: "big"});

    return (
        <div className="bg-blue-800">
            <Container>
                <div className="text-white tracking-widest py-20">
                    PROJECTS
                </div>
                {Projects.map((project, index) =>
                    <ProjectCard 
                        title={project.title}
                        type={project.type}
                        imgSrc={project.imgSrc}
                        imgTitle={project.imgTitle}
                        readMoreLink={project.readMoreLink}
                        reverse={index % 2 !== 0} 
                        titleSlug={''} 
                        shortDescription={''} 
                        description={''} 
                        cta={''}
                    />
                )}
            </Container>
        </div>
    );
};