import { MenuItem } from './MenuItem';
import { CloseButton } from './CloseButton';
import { Container } from '../container';

export const Menu: React.FC = () => {
    return (
        <div className="bg-blue-800 flex flex-col h-screen">
            <div className="pt-10 ">
                <Container>
                    <div className="flex justify-end h-16">
                        <CloseButton/>
                    </div>
                </Container>
            </div>
            <div className="flex justify-center m-auto">
                <div className="flex flex-col justify-center items-center">
                    <MenuItem label="Home" link="/"/>
                    <MenuItem label="About" link="#"/>
                    <MenuItem label="Portfolio" link="/portfolio"/>
                </div>
            </div>
            
        </div>
    );
};