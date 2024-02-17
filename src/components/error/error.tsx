import { Button, Image, Space, Typography } from 'antd';
import './error.less';

interface ErrorProps {
    className?: string;
    img?: React.ReactNode;
    title: string;
    text: string;
    children?: React.ReactNode;
    buttonText: string;
}

export const Error = ({ img, title, text, buttonText }: ErrorProps) => {
    return (
        <Space className='error'>
            <Space className='error__container' size={0}>
                <Image src={img} preview={false} className='error__img' />
                <Typography.Title level={3} className='error__title'>
                    {title}
                </Typography.Title>
                <Typography.Text className='error__text'>{text}</Typography.Text>
                <Button className='error__button' type='primary' size='large'>
                    {buttonText}
                </Button>
            </Space>
        </Space>
    );
};
