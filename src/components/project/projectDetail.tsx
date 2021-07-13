import { Paragraph } from '../../components';

interface ProjectDetailProps {
    title?: string;
    imgSrc?: string;
    imgTitle?: string;
    shortDescription?: string;
    description?: string;
    cta?: string;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({title, imgSrc, imgTitle, shortDescription, description, cta=""}) => {
    return (
        <div>
            <h1 className="text-3xl md:text-6xl font-bold text-white">{title}</h1>
            <img src={imgSrc} title={imgTitle} alt=""/>
            <h2 className="py-9 text-3xl md:text-6xl font-bold text-blue-700">{shortDescription}</h2>
            <Paragraph>
                <span className="text-white">{description}</span>
            </Paragraph>
            <Paragraph>
                <span className="text-white">Visit </span>
                <a href={cta} target="_blank" rel="noreferrer" className="text-indigo-400">{title}</a>
            </Paragraph> 
        </div>
    );
};