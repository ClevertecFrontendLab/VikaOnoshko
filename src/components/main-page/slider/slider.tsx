import React, { useState } from 'react';
import { blue } from '@ant-design/colors';
import Logo from '@public/logo.png';
import SmallLogo from '@public/fit.png';
import Exit from '@public/exit.svg';
import {
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { Layout, Menu, Space, Typography, Image, Button } from 'antd';

import './slider.less';

const { Sider } = Layout;

const SIZES = {
    small: { collapsedWidth: 0, width: 108 },
    normal: { collapsedWidth: 64, width: 208 },
};

export const Slider: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [size, setSize] = useState(SIZES.normal);
    const showIcon = size === SIZES.normal;

    return (
        <Sider
            {...size}
            trigger={null}
            collapsible
            collapsed={collapsed}
            theme='light'
            className='slider'
            breakpoint='xs'
            onBreakpoint={(broken) => {
                setSize(broken ? SIZES.small : SIZES.normal);
            }}
        >
            <Space className='slider__header'>
                <Space
                    className={`slider__logo ${
                        collapsed ? 'slider__logo_collapsed' : 'slider__logo_opened'
                    }`}
                >
                    <Image src={collapsed ? SmallLogo : Logo} preview={false} />
                </Space>
            </Space>
            <Menu
                className={`slider__nav ${
                    collapsed ? 'slider__nav_collapsed' : 'slider__nav_opened'
                }`}
                mode='inline'
                items={[
                    {
                        key: '1',
                        icon: showIcon && (
                            <CalendarTwoTone className='icon' twoToneColor={[blue[9], blue[9]]} />
                        ),
                        label: 'Календарь',
                        className: 'slider__item',
                    },
                    {
                        key: '2',
                        icon: showIcon && (
                            <HeartFilled className='icon' style={{ color: blue[9] }} />
                        ),
                        label: 'Тренировки',
                        className: 'slider__item',
                    },
                    {
                        key: '3',
                        icon: showIcon && (
                            <TrophyFilled className='icon' style={{ color: blue[9] }} />
                        ),
                        label: 'Достижения',
                        className: 'slider__item',
                    },
                    {
                        key: '4',
                        icon: showIcon && (
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
                    {!collapsed && (
                        <Typography.Text className='slider-footer__text'>Выход</Typography.Text>
                    )}
                </Button>
            </Space>

            <Space
                className='slider__trigger-wrapper'
                data-test-id={showIcon ? 'sider-switch' : 'sider-switch-mobile'}
            >
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
