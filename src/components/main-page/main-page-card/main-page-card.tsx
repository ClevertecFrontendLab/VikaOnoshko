import './main-page-card.less';
import { Divider, Space, Typography } from 'antd';

type MainPageCardProps = {
    linkText: string;
    icon: React.ReactNode;
    title: string;
};

export const MainPageCard = ({ title, icon, linkText }: MainPageCardProps) => {
    return (
        <Space className='main-page-card'>
            <Typography.Title level={5} className='main-page-card__title'>
                {title}
            </Typography.Title>
            <Divider className='main-page-card__divider' />
            <Typography.Link className='main-page-card__link'>
                {icon}
                <Typography.Text>{linkText}</Typography.Text>
            </Typography.Link>
        </Space>
    );
};
