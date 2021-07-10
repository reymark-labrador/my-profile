import create from 'zustand';
import { HeaderProps } from '../interfaces/header.interface';

interface AppState extends HeaderProps {
    isMenuOpen: boolean;
    updateHeaderType: (prop: HeaderProps) => void;
    updateIsMenuOpen: (isMenuOpen: boolean) => void;
}

export const useStore = create<AppState>(set => ({
    headerType: 'big',
    isMenuOpen: false,
    updateHeaderType: (prop: HeaderProps) => set({ headerType: prop.headerType }),
    updateIsMenuOpen: (isMenuOpen: boolean) => set({ isMenuOpen: isMenuOpen }),
}));