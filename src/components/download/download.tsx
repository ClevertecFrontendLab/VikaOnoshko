import './download.less';
import { Button, Space, Typography } from 'antd';
import { Divider } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

export const Download = () => {
    return (
        <Space className='download' direction='vertical'>
            <Space className='download__header' direction='vertical' size={0}>
                <Button className='download__link' type='link'>
                    Скачать на телефон
                </Button>
                <Typography.Paragraph className='download__text'>
                    Доступно в PRO-тарифе
                </Typography.Paragraph>
            </Space>
            <Divider className='download__divider' />
            <Space className='download__footer' size={0}>
                <Button type='text'>
                    <AndroidFilled />
                    Android OS
                </Button>
                <Button type='text'>
                    <AppleFilled />
                    Apple iOS
                </Button>
            </Space>
        </Space>
    );
};
