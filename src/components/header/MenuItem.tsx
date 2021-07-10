interface MenuItemProps {
    label: string;
    link: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({label, link}) => {
    return (
        <a href={link} className="text-6xl py-3 text-white">{label}</a>
    );
};