import { Space, Typography } from 'antd';

import './main-page-tagline.less';

export const MainPageTagline = () => {
    return (
        <Space className='main-page__tagline'>
            <Typography.Title level={4}>
                CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                откладывай на завтра — начни тренироваться уже сегодня!
            </Typography.Title>
        </Space>
    );
};
