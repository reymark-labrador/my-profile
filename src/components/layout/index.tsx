import {
    Header,
    Footer
} from '../index';
import {Routes} from '../../routes';

export const Layout: React.FC = () => {
    return (
        <>
            <Header/>
            <Routes/>
            <Footer/>
        </>
    );
};
