import { Button, Checkbox, Form, Input, Space, Typography } from 'antd';
import { Auth } from '../../components/auth';
import './signin-form.less';
import { GooglePlusOutlined } from '@ant-design/icons';

export const SigninForm: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Auth activeForm='signin'>
            <Form
                className='signin-form'
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
                size='large'
            >
                <Form.Item
                    className='signin-form__email'
                    name='email'
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input addonBefore={'e-mail:'} />
                </Form.Item>

                <Form.Item
                    className='signin-form__password'
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder='Пароль' />
                </Form.Item>

                <Space className='signin-form__additional' direction='horizontal'>
                    <Form.Item
                        className='signin-form__check-area'
                        name='remember'
                        valuePropName='checked'
                    >
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>

                    <Typography.Link className='signin-form__forgot-password'>
                        Забыли пароль?
                    </Typography.Link>
                </Space>

                <Button type='primary' role='submit' className='signin-form__submit'>
                    Войти
                </Button>

                <Button type='default' className='signin-form__google-auth'>
                    <GooglePlusOutlined /> Войти через Google
                </Button>
            </Form>
        </Auth>
    );
};
