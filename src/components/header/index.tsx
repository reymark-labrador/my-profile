import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Container } from '../';

export const Header: React.FC = () => {
    return (
        <div className="bg-gray">
            <Container>
                <div className="flex justify-between pt-5">
                    <div className="text-3xl font-medium">
                        Hello, i'm
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                </div>
            </Container>
        </div>
    );
};