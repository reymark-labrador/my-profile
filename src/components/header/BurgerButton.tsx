import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../../store';

export const BurgerButton: React.FC = () => {
    const updateIsMenuOpen = useStore(state => state.updateIsMenuOpen);
    const isMenuOpen = useStore(state => state.isMenuOpen);

    return (
        <button onClick={() =>updateIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faBars} className="text-green-800"/>
        </button>
    );
};