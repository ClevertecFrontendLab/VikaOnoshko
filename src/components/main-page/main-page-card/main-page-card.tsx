import { Card, Typography } from 'antd';
import './main-page-card.less';

type MainPageCardProps = {
    linkText: string;
    icon: React.ReactNode;
    title: string;
};

export const MainPageCard = ({ title, icon, linkText }: MainPageCardProps) => {
    return (
        <Card hoverable className='main-page-card' title={title}>
            <Typography.Link className='main-page-card__link'>
                {icon} {linkText}
            </Typography.Link>
        </Card>
    );
};
