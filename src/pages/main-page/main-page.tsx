import React from 'react';

import { Layout, Space, Typography } from 'antd';
import { CalendarOutlined, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { MainPageCard } from '@components/main-page';
import { Slider } from '@components/main-page/slider';
import { MainPageHeader } from '@components/main-page/main-page-header';
import { Download } from '@components/download';
import { MainPagePreview } from '@components/main-page/main-page-preview';
import { MainPageTagline } from '@components/main-page/main-page-tagline/main-page-tagline';

import './main-page.less';

const { Content } = Layout;

export const MainPage: React.FC = () => {
    return (
        <Layout className='main-layout'>
            <Slider />
            <Layout className='main-layout__body'>
                <MainPageHeader />
                <Content className='main-layout__content'>
                    <Space className='main-page__possibilities'>
                        <MainPagePreview />
                        <MainPageTagline />
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
                    <Download />
                </Content>
            </Layout>
        </Layout>
    );
};
