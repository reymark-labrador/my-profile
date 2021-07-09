import { Container } from '../../components';

export const Main: React.FC = () => {
    return (
        <div className="bg-red">
            <Container>
                <div className="text-8xl font-bold">
                    Reymark <br/>
                    Labrador
                </div>
                <p className="py-10 text-4xl font-semibold">
                    Software Developer
                </p>
            </Container>
        </div>
    );
};