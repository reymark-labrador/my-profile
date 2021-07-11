import { Container } from './container';

export interface ProjectProps {
    title: string;
    type: string;
    imgSrc: string;
    imgTitle: string;
    readMoreLink: string;
    reverse?: boolean
}

export const Project: React.FC<ProjectProps> = ({title, type, imgSrc, imgTitle, readMoreLink, reverse}) => {
    return (
        <Container reverse={reverse}>
            <div className="w-full md:w-96">
                <div className="py-5 text-white text-5xl font-semibold">
                    {title} 
                </div>
                <div className="md:h-48 h-10 flex flex-col justify-between">
                    <div className="text-white tracking-wider">
                        {type}
                    </div>
                    <button className="md:block hidden bg-blue-900 text-white py-2 px-12">
                        read more
                    </button>
                </div>
            </div>
            <div className="flex flex-col">
                <img src={imgSrc} title={imgTitle}/>
                <button className="md:hidden bg-blue-900 text-white py-2 px-12 my-16">
                    read more
                </button>
            </div>
        </Container>
    );
};
