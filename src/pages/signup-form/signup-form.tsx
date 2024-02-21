import { Button, Form, Input } from 'antd';
import { Auth } from '@components/auth';
import { GooglePlusOutlined } from '@ant-design/icons';
import './signup-form.less';

export const SignupForm: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Auth activeForm='signup'>
            <Form
                className='signup-form'
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
                size='large'
            >
                <Form.Item
                    className='signup-form__email'
                    name='email'
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input addonBefore={'e-mail:'} />
                </Form.Item>

                <Form.Item
                    className='signup-form__password'
                    extra='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder='Пароль' />
                </Form.Item>

                <Form.Item
                    className='signup-form__repeat-password'
                    name='repeatPassword'
                    rules={[
                        { required: true, message: 'Please input your password!' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Пароли не совпадают'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder='Повторите пароль' />
                </Form.Item>

                <Button className='signup-form__submit' type='primary'>
                    Войти
                </Button>

                <Button className='signup-form__google-auth' type='default'>
                    <GooglePlusOutlined /> Регистрация через Google
                </Button>
            </Form>
        </Auth>
    );
};
