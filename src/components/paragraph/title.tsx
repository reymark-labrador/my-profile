export const Title: React.FC = (props:any) => {
    return (
        <p className="text-2xl md:text-3xl">
            {props.children}
        </p>
    );
};