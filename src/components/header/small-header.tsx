import { Container } from '../';
import { BurgerButton } from './BurgerButton';

export const SmallHeader: React.FC = () => {
    return (
        <Container>
            <div className="flex justify-between h-16">
                <div className="flex flex-col">
                    <div className="text-3xl text-green-700 font-medium">
                        Reymark Labrador
                    </div>
                    <div className="text-base text-white">
                        Software Developer
                    </div>
                </div>
                <BurgerButton/>
            </div>
        </Container>
    );
};