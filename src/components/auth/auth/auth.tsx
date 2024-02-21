import { Image, Space } from 'antd';
import './auth.less';
import Logo from '@public/logo.png';
import { Tabs } from 'antd';
import { Path } from '@common/enums';
import { useLocation, useNavigate } from 'react-router-dom';

interface AuthProps {
    activeForm: 'signin' | 'signup';
    children: React.ReactNode;
}

const items = [
    { label: 'Вход', key: Path.SIGN_IN },
    { label: 'Регистрация', key: Path.SIGN_UP },
];

export const Auth = ({ children, activeForm }: AuthProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Space className={`auth-form auth-form_${activeForm}`}>
            <Space className='auth-form__container' size={0} direction='vertical'>
                <Space className='auth-form__img'>
                    <Image src={Logo} preview={false} />
                </Space>
                <Tabs
                    className='auth-form__tabs'
                    items={items}
                    activeKey={location.pathname}
                    onChange={navigate}
                />
                {children}
            </Space>
        </Space>
    );
};
