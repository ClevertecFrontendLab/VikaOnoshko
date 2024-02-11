import React, { useState } from 'react';
import { blue } from '@ant-design/colors';
import Logo from '@public/logo.png';
import SmallLogo from '@public/fit.png';
import Exit from '@public/exit.svg';
import {
    CalendarOutlined,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
const { Sider } = Layout;
import { Layout, Menu, Space, Typography, Image, Button } from 'antd';
import './slider.less';

export const Slider: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme='light'
            className='slider'
            width={208}
            collapsedWidth={64}
        >
            <Space className='slider__header'>
                <Space className='slider__logo'>
                    <Image src={collapsed ? SmallLogo : Logo} preview={false} />
                </Space>
            </Space>
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
                        icon: (
                            <IdcardOutlined
                                className='icon icon-person'
                                style={{ color: blue[9] }}
                            />
                        ),
                        label: 'Профиль',
                        className: 'slider__item',
                    },
                ]}
            />

            <Space className='slider-footer'>
                <Button className='slider-footer__button'>
                    <Image src={Exit} preview={false} className='slider-footer__img' />
                    <Typography.Text className='slider-footer__text'>Выход</Typography.Text>
                </Button>
            </Space>

            <Space className='slider__trigger-wrapper'>
                <Space className='slider__trigger'>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })}
                </Space>
            </Space>
        </Sider>
    );
};
