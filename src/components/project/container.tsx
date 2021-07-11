interface ContainerProps {
    reverse?: boolean;
}

export const Container: React.FC<ContainerProps> = ({reverse, children}) => {
    return (
        <>
            {reverse ? 
                <div className="flex md:flex-row-reverse flex-col lg:-mx-16 md:m-0">
                    {children}
                </div>:
                <div className="flex md:flex-row flex-col lg:-mx-16 md:m-0">
                    {children}
                </div>}
        </>
    );
};