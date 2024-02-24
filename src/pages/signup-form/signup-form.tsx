import { Button, Form, Input } from 'antd';
import { Auth } from '@components/auth';
import { GooglePlusOutlined } from '@ant-design/icons';
import './signup-form.less';

import { PASSWORD_PATTERN } from '@common/constants';
import { useCallback, useState } from 'react';
import { authApi } from '@api/auth.api';
import { ApiError, RegistrationBody } from '@common/types';
import { useAppNavigate } from '@hooks/navigate';

export const SignupForm: React.FC = () => {
    const [hasErrors, setHasErrors] = useState(false);

    const [form] = Form.useForm();
    const { getFieldsError } = form;

    const { goToResultSuccess, goToError, goToUserExist } = useAppNavigate();

    const onFieldsChange = useCallback(() => {
        const errors = getFieldsError();
        const hasErrorsOnField = errors.some((item) => item.errors.length > 0);
        setHasErrors(hasErrorsOnField);
    }, []);

    const [registration] = authApi.useRegistrationMutation();

    const onFinish = useCallback(() => {
        const body: RegistrationBody = {
            email: form.getFieldValue('email'),
            password: form.getFieldValue('password'),
        };
        registration(body).then((responce) => {
            if ('data' in responce) {
                goToResultSuccess();
            } else if ((responce.error as ApiError).data.statusCode === 409) {
                goToUserExist();
            } else {
                goToError();
            }
        });
    }, []);

    return (
        <Auth activeForm='signup'>
            <Form
                form={form}
                className='signup-form'
                fields={[{ name: 'email' }, { name: 'password' }, { name: 'repeatPassword' }]}
                size='large'
                onFieldsChange={onFieldsChange}
                onFinish={onFinish}
            >
                <Form.Item
                    className='signup-form__email'
                    data-test-id='registration-email'
                    name='email'
                    rules={[{ type: 'email', required: true, message: '' }]}
                >
                    <Input addonBefore={'e-mail:'} />
                </Form.Item>

                <Form.Item
                    className='signup-form__password'
                    data-test-id='registration-password'
                    name='password'
                    rules={[
                        { required: true, message: '' },
                        {
                            pattern: PASSWORD_PATTERN,
                            message: 'Пароль не менее 8 символов,c заглавной буквой и цифрой',
                        },
                    ]}
                >
                    <Input.Password placeholder='Пароль' />
                </Form.Item>

                <Form.Item
                    className='signup-form__repeat-password'
                    data-test-id='registration-confirm-password'
                    name='repeatPassword'
                    rules={[
                        { required: true, message: '' },
                        {
                            pattern: PASSWORD_PATTERN,
                            message: '',
                        },
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

                <Button
                    className='signup-form__submit'
                    data-test-id='registration-submit-button'
                    type='primary'
                    disabled={hasErrors}
                    htmlType='submit'
                >
                    Войти
                </Button>

                <Button className='signup-form__google-auth' type='default'>
                    <GooglePlusOutlined /> Регистрация через Google
                </Button>
            </Form>
        </Auth>
    );
};
