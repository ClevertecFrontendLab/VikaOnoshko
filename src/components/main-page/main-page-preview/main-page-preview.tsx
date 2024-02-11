import { Space, Typography } from 'antd';
import './main-page-preview.less';

export const MainPagePreview = () => {
    return (
        <Space className='main-page__preview'>
            <Typography.Paragraph className='main-page__preview-description'>
                С CleverFit ты сможешь:
                <br /> — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                <br />— отслеживать свои достижения в разделе статистики, сравнивая свои результаты
                с нормами и рекордами;
                <br /> — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о
                тренировках;
                <br />— выполнять расписанные тренировки для разных частей тела, следуя подробным
                инструкциям и советам профессиональных тренеров.
            </Typography.Paragraph>
        </Space>
    );
};
