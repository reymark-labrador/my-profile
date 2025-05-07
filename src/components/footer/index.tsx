import { Container } from '../../components';

export const Footer: React.FC = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    }

    return (
        <div className="bg-gray-900 text-white">
            <Container>
                <p className="py-14 flex justify-between flex-col md:flex-row">
                    <span>
                        ©Reymark Labrador {getCurrentYear()}
                    </span>
                    <span>
                        {"Find me on "}
                        <a href="https://www.linkedin.com/in/reymark-labrador-652370142/" target="_blank" rel="noreferrer" className="text-indigo-400">Linkedin</a>
                        {" | "}
                        <a href="https://github.com/mac69" target="_blank" rel="noreferrer" className="text-indigo-400">Github</a>
                    </span>
                    
                </p>
            </Container>
        </div>
    );
};