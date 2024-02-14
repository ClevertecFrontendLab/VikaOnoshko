import { SettingOutlined } from '@ant-design/icons';
import { Layout, Breadcrumb, Space, Typography, Button } from 'antd';

import './main-page-header.less';

const { Header } = Layout;
const { Title } = Typography;

export const MainPageHeader = () => {
    return (
        <Header className='main-layout__header'>
            <Breadcrumb>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <Space className='header__title'>
                <Title className='header__text' level={1}>
                    Приветствуем тебя в CleverFit — приложении,
                    <br /> которое поможет тебе добиться своей мечты!
                </Title>
                <Button className='header__settings'>
                    <SettingOutlined />
                    <Typography.Text>Настройки</Typography.Text>
                </Button>
            </Space>
        </Header>
    );
};
