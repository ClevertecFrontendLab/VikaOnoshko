import { ErrorModal } from '@components/error-modal';
import './chande-password.less';
import { Button, Form, Input } from 'antd';

export const ChangePassword: React.FC = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <ErrorModal className='error-modal_change-password' title='Восстановление аккауанта'>
            <Form
                className='change-password'
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
                size='large'
            >
                <Form.Item
                    className='change-password__password'
                    extra='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder='Новый пароль' />
                </Form.Item>

                <Form.Item
                    name='password'
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password placeholder='Повторите пароль' />
                </Form.Item>

                <Button className='change-password__button' type='primary'>
                    Сохранить
                </Button>
            </Form>
        </ErrorModal>
    );
};
