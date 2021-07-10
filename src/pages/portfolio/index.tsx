import { useStore } from '../../store';
import { Container } from '../../components';

export const Portfolio: React.FC = () => {
    useStore.setState({headerType: "small"});

    return (
        <div className="bg-gray-900">
            projects
            {/* <Container>
                <div className="text-8xl font-bold">
                    Reymark <br/>
                    Labrador
                </div>
                <p className="py-10 text-4xl font-semibold">
                    Software Developer
                </p>
                <button className="border-2 px-20 py-2">
                    More about me
                </button>
            </Container> */}
        </div>
    );
};