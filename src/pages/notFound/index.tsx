import { useStore } from '../../store';
import { Container } from '../../components';

export const NotFound: React.FC = () => {
    useStore.setState({headerType: "small"});

    return (
        <div className="bg-white">
            <Container>
                <div className="text-8xl font-bold">
                    Error 404 page not found.
                </div>
            </Container>
        </div>
    );
};