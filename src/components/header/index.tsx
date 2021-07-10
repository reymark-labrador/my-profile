
import { Container } from '../';
import { BigHeader } from './big-header';
import { SmallHeader } from './small-header';
import { HeaderProps } from '../../interfaces/header.interface';

export const Header: React.FC<HeaderProps> = ({headerType} : HeaderProps) => {
    return (
        <div className="bg-gray-900 pt-10">
            <Container>
                {headerType === "big" ? <BigHeader/> : <SmallHeader/>}
            </Container>
        </div>
    );
};