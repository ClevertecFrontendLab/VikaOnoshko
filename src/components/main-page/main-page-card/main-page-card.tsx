import { Divider, Space, Typography } from 'antd';
import { MyButton } from '@ui/button';
import './main-page-card.less';

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
            <MyButton className='main-page-card__link' type='link'>
                {icon}
                <Typography.Text>{linkText}</Typography.Text>
            </MyButton>
        </Space>
    );
};
