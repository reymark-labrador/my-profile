import { useHistory } from "react-router-dom";
import { BurgerButton } from './BurgerButton';

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
                Reymark <br/>
                Labrador
            </div>
            <div className="py-10">
                <p className="text-2xl md:text-4xl text-green-800 font-semibold">
                    Software Developer
                </p>
                <p className="pt-5 text-white text-base md:text-lg tracking-wide">
                    C#, VB.Net, ASP.Net, MVVM, Repository Pattern, PHP, Laravel, Wordpress, Angular, React JS, Redux , Next JS, CSS, SASS, Bootstrap, Tailwind, MSSQL, MYSQL
                </p>
            </div>
            <button onClick={() => history.push("/about")} className="border border-green-800 text-green-500 hover:bg-green-800 hover:text-white py-2 px-0 md:px-24 w-full md:w-auto">
                More about me
            </button>
        </div>
    );
};