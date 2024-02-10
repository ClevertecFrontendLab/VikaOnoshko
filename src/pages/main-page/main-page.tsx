import './main-page.less';
import {
    AndroidFilled,
    AppleFilled,
    CalendarOutlined,
    HeartFilled,
    IdcardOutlined,
    SettingOutlined,
    TrophyFilled,
} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb, Space, Typography, Image, Button, Divider } from 'antd';
import React, { useState } from 'react';
import { blue } from '@ant-design/colors';
import Logo from '@public/logo.png';
import Exit from '@public/exit.svg';
import { MainPageCard } from '@components/main-page';
import { MyButton } from '@ui/button';

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
                <Space className='slider__header'>
                    <Space className='slider__logo'>
                        <Image src={Logo} preview={false} />
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

                    <Space className='header__title'>
                        <Title className='header__text' level={1}>
                            Приветствуем тебя в CleverFit — приложении, которое поможет тебе
                            добиться своей мечты!
                        </Title>
                        <Button className='header__settings'>
                            <SettingOutlined />
                            <Typography.Text>Настройки</Typography.Text>
                        </Button>
                    </Space>
                </Header>
                <Content className='main-layout__content'>
                    <Space className='main-page__possibilities'>
                        <Space className='main-page__preview'>
                            <Typography.Paragraph className='main-page__preview-description'>
                                С CleverFit ты сможешь:
                                <br /> — планировать свои тренировки на календаре, выбирая тип и
                                уровень нагрузки; <br />— отслеживать свои достижения в разделе
                                статистики, сравнивая свои результаты <br />с нормами и рекордами;
                                <br /> — создавать свой профиль, где ты можешь загружать свои фото,
                                видео и отзывы <br />о тренировках; <br />— выполнять расписанные
                                тренировки для разных частей тела, следуя подробным инструкциям и
                                советам профессиональных тренеров.
                            </Typography.Paragraph>
                        </Space>

                        <Space className='main-page__tagline'>
                            <Typography.Title level={4}>
                                CleverFit — это не просто приложение, а твой личный помощник
                                <br /> в мире фитнеса. Не откладывай на завтра — начни тренироваться
                                уже сегодня!
                            </Typography.Title>
                        </Space>

                        <Space className='main-page__cards' size={'middle'}>
                            <MainPageCard
                                title='Расписать тренировки'
                                icon={<HeartFilled />}
                                linkText='Тренировки'
                            />
                            <MainPageCard
                                title='Назначить календарь'
                                icon={<CalendarOutlined />}
                                linkText='Календарь'
                            />
                            <MainPageCard
                                title='Заполнить профиль'
                                icon={<IdcardOutlined />}
                                linkText='Профиль'
                            />
                        </Space>
                    </Space>
                    <Space className='main-page__reviews'>
                        <Typography.Text>Смотреть отзывы</Typography.Text>
                    </Space>

                    <Space className='main-page__download' direction='vertical'>
                        <Space className='main-page__download__header' direction='vertical'>
                            <MyButton className='main-page__download__link' type='link'>
                                Скачать на телефон
                            </MyButton>
                            <Typography.Paragraph className='main-page__download__text'>
                                Доступно в PRO-тарифе
                            </Typography.Paragraph>
                        </Space>
                        <Divider className='main-page__download__divider' />
                        <Space className='main-page__download__footer'>
                            <MyButton className='main-page__download__link' type='link'>
                                <AndroidFilled />
                                Android OS
                            </MyButton>
                            <MyButton className='main-page__download__link' type='link'>
                                <AppleFilled />
                                Apple iOS
                            </MyButton>
                        </Space>
                    </Space>
                </Content>
            </Layout>
        </Layout>
    );
};
