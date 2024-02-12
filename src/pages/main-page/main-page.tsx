import React from 'react';

import { Col, Layout, Row, Space, Typography } from 'antd';
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
                        {/* <Space className='main-page__cards' size={'middle'}> */}
                        <Row gutter={[16, 8]} className='main-page__cards'>
                            <Col md={8} xs={24}>
                                <MainPageCard
                                    title='Расписать тренировки'
                                    icon={<HeartFilled />}
                                    linkText='Тренировки'
                                />
                            </Col>
                            <Col md={8} xs={24}>
                                <MainPageCard
                                    title='Назначить календарь'
                                    icon={<CalendarOutlined />}
                                    linkText='Календарь'
                                />
                            </Col>
                            <Col md={8} xs={24}>
                                <MainPageCard
                                    title='Заполнить профиль'
                                    icon={<IdcardOutlined />}
                                    linkText='Профиль'
                                />
                            </Col>
                        </Row>
                        {/* </Space> */}
                    </Space>
                    <Download />
                    <Space className='main-page__reviews'>
                        <Typography.Link>Смотреть отзывы</Typography.Link>
                    </Space>
                </Content>
            </Layout>
        </Layout>
    );
};
