import { useParams } from "react-router-dom";
import { useStore } from '../../store';
import { Container, ProjectDetail } from '../../components';
import { Projects } from './projects';
import { NotFound } from '../notFound';

interface PortfolioSingleProps {
    id: string;
}

export const PortfolioSingle: React.FC = () => {
    useStore.setState({headerType: "small"});
    const { id } = useParams<PortfolioSingleProps>();
    const filtered = Projects.filter(prop => prop.titleSlug === id);

    if(!filtered.length) return(<NotFound/>);

    return (
        <div className="bg-gray-900">
            <div className="py-20">
                <Container>
                    {filtered.map((props) =>
                        <ProjectDetail
                            title={props.title}
                            imgSrc={props.imgSrc}
                            shortDescription={props.shortDescription}
                            description={props.description}
                            cta={props.cta} 
                            titleSlug={""} 
                            type={""} 
                            imgTitle={""} 
                            readMoreLink={""} 
                            reverse={false}
                        />
                    )}
                </Container>
            </div>
        </div>
    );
};