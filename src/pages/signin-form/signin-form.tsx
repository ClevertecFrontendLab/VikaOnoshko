import { Checkbox, Form, Input, Space, Typography } from 'antd';
import { Auth } from '../../components/auth';
import './signin-form.less';
import { MyButton } from '@ui/button';
import { GooglePlusOutlined } from '@ant-design/icons';

export const SigninForm: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Auth>
            <Form
                className='form'
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
            >
                <Space className='form__input' direction='vertical' size={32}>
                    <Form.Item
                        name='email'
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input addonBefore={'e-mail:'} />
                    </Form.Item>

                    <Form.Item
                        name='password'
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder='Пароль' />
                    </Form.Item>
                </Space>

                <Space className='form__additional' direction='horizontal'>
                    <Form.Item className='form__check-area' name='remember' valuePropName='checked'>
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Typography.Link className='forgot-password'>Забыли пароль?</Typography.Link>
                </Space>

                <Form.Item className='form__footer'>
                    <MyButton type='primary' role='submit' size='large'>
                        Войти
                    </MyButton>

                    <MyButton type='secondary' size='large' className='google-auth'>
                        <GooglePlusOutlined /> Войти через Google
                    </MyButton>
                </Form.Item>
            </Form>
        </Auth>
    );
};
