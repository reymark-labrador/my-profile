import { Link } from "react-router-dom";
import { useStore } from '../../store';

interface MenuItemProps {
    label: string;
    link: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({label, link}) => {
    const updateIsMenuOpen = useStore(state => state.updateIsMenuOpen);
    const isMenuOpen = useStore(state => state.isMenuOpen);

    return (
        <Link to={link} onClick={() =>updateIsMenuOpen(!isMenuOpen)} className="text-4xl md:text-6xl py-3 text-white">{label}</Link>
    );
};