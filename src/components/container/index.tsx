export const Container: React.FC = (props: any) => {
    return (
        <div className="flex justify-center">
            <div className="container max-w-4xl">
                {props.children}
            </div>
        </div>
    );
};