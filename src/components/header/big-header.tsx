import { useHistory } from "react-router-dom";
import { BurgerButton } from './BurgerButton';
import { profile } from "../../data/profile";

export const BigHeader: React.FC = () => {
    const history = useHistory();
    
    return (
        <div className="pb-24">
            <div className="flex justify-between items-center h-8">
                <div className="text-xl md:text-3xl text-white font-medium">
                    Hello, i'm
                </div>
                <BurgerButton/>
            </div>
            <div className="text-5xl md:text-8xl text-green-700 font-bold">
                {profile.firstName} <br/>
                {profile.lastName}
            </div>
            <div className="py-10">
                <p className="text-2xl md:text-4xl text-green-800 font-semibold">
                    {profile.position}
                </p>
                <p className="pt-5 text-white text-base md:text-lg tracking-wide">
                    {profile.skills}
                </p>
            </div>
            <button onClick={() => history.push("/about")} className="border border-green-800 text-green-500 hover:bg-green-800 hover:text-white py-2 px-0 md:px-24 w-full md:w-auto">
                More about me
            </button>
        </div>
    );
};