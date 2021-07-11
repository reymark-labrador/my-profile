import { Link } from "react-router-dom";
import { BurgerButton } from './BurgerButton';

export const SmallHeader: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center h-8">
                <div className="text-xl md:text-3xl text-green-700 font-medium">
                    <Link to="/">
                        Reymark Labrador
                    </Link>
                </div>
                <BurgerButton/>
            </div>
            <div className="text-base md:text-lg text-white font-light tracking-wide">
                Software Developer
            </div>
        </div>
    );
};