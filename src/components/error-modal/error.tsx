import { Button, Image, Space, Typography } from 'antd';
import './error.less';

interface ErrorModalProps {
    className?: string;
    img?: React.ReactNode;
    title: React.ReactNode;
    text?: React.ReactNode;
    children?: React.ReactNode;
    buttonText?: string;
}

export const ErrorModal = ({
    img,
    title,
    text,
    buttonText,
    className,
    children,
}: ErrorModalProps) => {
    return (
        <Space className={`error-modal ${className}`}>
            <Space className='error-modal__container' size={0}>
                {img && <Image src={img as string} preview={false} className='error-modal__img' />}
                <Typography.Title level={3} className='error-modal__title'>
                    {title}
                </Typography.Title>
                {text && <Typography.Text className='error-modal__text'>{text}</Typography.Text>}
                {buttonText && (
                    <Button className='error-modal__button' type='primary' size='large'>
                        {buttonText}
                    </Button>
                )}
                {children}
            </Space>
        </Space>
    );
};
