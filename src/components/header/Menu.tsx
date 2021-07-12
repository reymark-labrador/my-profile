import { MenuItem } from './MenuItem';
import { CloseButton } from './CloseButton';
import { Container } from '../container';

export const Menu: React.FC = () => {
    const rootUrl: any = process.env.REACT_APP_ROOT_URL;

    return (
        <div className="bg-blue-800 flex flex-col h-screen">
            <div className="pt-10 ">
                <Container>
                    <div className="flex justify-end h-8">
                        <CloseButton/>
                    </div>
                </Container>
            </div>
            <div className="flex justify-center m-auto">
                <div className="flex flex-col justify-center items-center">
                    <MenuItem label="Home" link={rootUrl}/>
                    <MenuItem label="About" link={rootUrl + "/about"}/>
                    <MenuItem label="Portfolio" link={rootUrl + "/portfolio"}/>
                </div>
            </div>
        </div>
    );
};