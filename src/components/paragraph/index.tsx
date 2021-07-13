import { Title as ParagraphTitle } from './title'

export const Paragraph: React.FC = (props:any) => {
    return (
        <p className="py-5 tracking-wide text-base md:text-xl">
            {props.children}
        </p>
    );
};

export {
    ParagraphTitle
}