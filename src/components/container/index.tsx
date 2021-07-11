export const Container: React.FC = (props: any) => {
    return (
        <div className="flex justify-center">
            <div className="container px-10 lg:px-0 max-w-4xl">
                {props.children}
            </div>
        </div>
    );
};