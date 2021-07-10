import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useStore } from '../../store';

export const CloseButton: React.FC = () => {
    const updateIsMenuOpen = useStore(state => state.updateIsMenuOpen);
    const isMenuOpen = useStore(state => state.isMenuOpen);
    
    return (
        <button onClick={() =>updateIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faTimes} className="text-white"/>
        </button>
    );
};