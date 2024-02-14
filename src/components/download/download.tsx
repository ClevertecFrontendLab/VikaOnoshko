import './download.less';
import { Space, Typography } from 'antd';
import { MyButton } from '@ui/button';
import { Divider } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

export const Download = () => {
    return (
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
    );
};
