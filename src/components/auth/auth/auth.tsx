import { Image, Space } from 'antd';
import './auth.less';
import Logo from '@public/logo.png';
import { Tabs } from 'antd';

interface AuthProps {
    children: React.ReactNode;
}

const items = [
    { label: 'Вход', key: 'item-1' },
    { label: 'Регистрация', key: 'item-2' },
];

export const Auth = ({ children }: AuthProps) => {
    return (
        <Space className='auth-form__container'>
            <Space className='auth-form' size={0}>
                <Space className='auth-form__header'>
                    <Image className='auth-form__img' src={Logo} preview={false} />
                </Space>
                <Space className='auth-form__body'>
                    <Tabs items={items} />
                </Space>
                {children}
            </Space>
        </Space>
    );
};
