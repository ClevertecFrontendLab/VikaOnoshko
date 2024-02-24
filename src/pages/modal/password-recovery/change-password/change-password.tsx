import { ErrorModal } from '@components/error-modal';
import './chande-password.less';
import { Button, Form, Input } from 'antd';
import { PASSWORD_PATTERN } from '@common/constants';
import { authApi } from '@api/auth.api';
import { useCallback } from 'react';
import { ChangePasswordBody } from '@common/types';
import { useAppNavigate } from '@hooks/navigate';

export const ChangePassword: React.FC = () => {
    const [changePassword] = authApi.useChangePasswordMutation();
    const [form] = Form.useForm();
    const { goToErrorChange, goToResultSuccess } = useAppNavigate();

    const onFinish = useCallback(() => {
        const body: ChangePasswordBody = {
            password: form.getFieldValue('password'),
            confirmPassword: form.getFieldValue('confirmPassword'),
        };

        changePassword(body).then((responce) => {
            if ('data' in responce) {
                goToResultSuccess();
            } else {
                goToErrorChange();
            }
        });
    }, []);

    return (
        <ErrorModal className='error-modal_change-password' title='Восстановление аккауанта'>
            <Form
                form={form}
                className='change-password'
                name='basic'
                initialValues={{ remember: true }}
                onFinish={onFinish}
                size='large'
                fields={[{ name: 'password' }, { name: 'confirmPassword' }]}
            >
                <Form.Item
                    className='change-password__password'
                    extra='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                    name='password'
                    rules={[{ required: true, pattern: PASSWORD_PATTERN, message: '' }]}
                >
                    <Input.Password placeholder='Новый пароль' />
                </Form.Item>

                <Form.Item
                    name='confirmPassword'
                    rules={[
                        { required: true, pattern: PASSWORD_PATTERN, message: '' },
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

                <Button className='change-password__button' type='primary' htmlType='submit'>
                    Сохранить
                </Button>
            </Form>
        </ErrorModal>
    );
};
