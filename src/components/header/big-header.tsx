import { Container } from '../';
import { BurgerButton } from './BurgerButton';

export const BigHeader: React.FC = () => {
    return (
        <div className="pb-28">
            <Container>
                <div className="flex justify-between h-16">
                    <div className="text-3xl text-white font-medium">
                        Hello, i'm
                    </div>
                    <BurgerButton/>
                </div>
                <div className="text-8xl text-green-700 font-bold">
                    Reymark <br/>
                    Labrador
                </div>
                <p className="py-10 text-4xl text-green-800 font-semibold">
                    Software Developer
                </p>
                <button className="border border-green-800 text-green-500 hover:bg-green-800 hover:text-white px-24 py-2">
                    More about me
                </button>
            </Container>
        </div>
        
    );
};