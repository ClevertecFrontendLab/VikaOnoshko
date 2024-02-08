import './main-page.less';
import {
    CalendarOutlined,
    HeartFilled,
    IdcardOutlined,
    SettingOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Space, Typography, Image, Button } from 'antd';
import React, { useState } from 'react';
import { blue } from '@ant-design/colors';
import Logo from '@public/logo.png';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

export const MainPage: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout className='main-layout'>
            <Sider
                trigger={null}
                collapsible
                collapsed={collapsed}
                theme='light'
                className='slider'
                width={208}
            >
                <div className='slider__header'>
                    <div className='slider__logo'>
                        <Image src={Logo} />
                    </div>
                </div>
                <Menu
                    className='slider__nav'
                    mode='inline'
                    inlineIndent={17}
                    items={[
                        {
                            key: '1',
                            icon: <CalendarOutlined className='icon' style={{ color: blue[9] }} />,
                            label: 'Календарь',
                            className: 'slider__item',
                        },
                        {
                            key: '2',
                            icon: <HeartFilled className='icon' style={{ color: blue[9] }} />,
                            label: 'Тренировки',
                            className: 'slider__item',
                        },
                        {
                            key: '3',
                            icon: <TrophyFilled className='icon' style={{ color: blue[9] }} />,
                            label: 'Достижения',
                            className: 'slider__item',
                        },
                        {
                            key: '4',
                            icon: <IdcardOutlined className='icon' style={{ color: blue[9] }} />,
                            label: 'Профиль',
                            className: 'slider__item',
                        },
                    ]}
                />

                <div className='slider-footer'>vff</div>
            </Sider>
            <Layout className='main-layout__body'>
                <Header className='main-layout__header'>
                    <Breadcrumb>
                        <Breadcrumb.Item>Главная</Breadcrumb.Item>
                    </Breadcrumb>

                    {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })} */}

                    <Space className='main-header__title'>
                        <Title className='main-header__text' level={1}>
                            Приветствуем тебя в CleverFit — приложении, которое поможет тебе
                            добиться своей мечты!
                        </Title>
                        <Button className='main-header__settings'>
                            <SettingOutlined />
                            <Typography.Text>Настройки</Typography.Text>
                        </Button>
                    </Space>
                </Header>

                <Content
                    className='site-layout-background'
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <span style={{ color: blue.primary }}>Content</span>
                </Content>
            </Layout>
        </Layout>
    );
};
