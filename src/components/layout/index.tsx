import { Header, Footer } from '../index';
import { Routes } from '../../routes';
import { useStore } from '../../store';
import { Menu } from '../header/Menu';

export const Layout: React.FC = () => {
    const headerType = useStore(state => state.headerType);
    const isMenuOpen = useStore(state => state.isMenuOpen);

    return (
        <>
            { isMenuOpen ? <Menu/> : 
            <>
                <Header headerType={headerType}/>
                <Routes/>
                <Footer/>
            </> }
        </>
    );
};
