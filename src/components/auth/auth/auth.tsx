import { Image, Space } from 'antd';
import './auth.less';
import Logo from '@public/logo.png';
import { Tabs } from 'antd';

interface AuthProps {
    activeForm: 'signin' | 'signup';
    children: React.ReactNode;
}

const items = [
    { label: 'Вход', key: 'signin' },
    { label: 'Регистрация', key: 'signup' },
];

export const Auth = ({ children, activeForm }: AuthProps) => {
    return (
        <Space className={`auth-form auth-form_${activeForm}`}>
            <Space className='auth-form__container' size={0} direction='vertical'>
                <Space className='auth-form__img'>
                    <Image src={Logo} preview={false} />
                </Space>
                <Tabs className='auth-form__tabs' items={items} activeKey={activeForm} />
                {children}
            </Space>
        </Space>
    );
};
