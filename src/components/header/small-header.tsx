import { Link } from "react-router-dom";
import { BurgerButton } from './BurgerButton';
import { getFullName, profile } from "../../data/profile";
export const SmallHeader: React.FC = () => {
    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center h-8">
                <div className="text-xl md:text-3xl text-green-700 font-medium">
                    <Link to={"/"}>
                       {getFullName}
                    </Link>
                </div>
                <BurgerButton/>
            </div>
            <div className="text-base md:text-lg text-white font-light tracking-wide">
                {profile.position}
            </div>
        </div>
    );
};