import { useHistory } from "react-router-dom";
import { BurgerButton } from './BurgerButton';

export const BigHeader: React.FC = () => {
    const history = useHistory();
    const abountLink = process.env.REACT_APP_ROOT_URL + "/about";
    
    return (
        <div className="pb-24">
            <div className="flex justify-between items-center h-8">
                <div className="text-xl md:text-3xl text-white font-medium">
                    Hello, i'm
                </div>
                <BurgerButton/>
            </div>
            <div className="text-5xl md:text-8xl text-green-700 font-bold">
                Reymark <br/>
                Labrador
            </div>
            <p className="py-10 text-2xl md:text-4xl text-green-800 font-semibold">
                Software Developer
            </p>
            <button onClick={() => history.push(abountLink)} className="border border-green-800 text-green-500 hover:bg-green-800 hover:text-white py-2 px-0 md:px-24 w-full md:w-auto">
                More about me
            </button>
        </div>
    );
};