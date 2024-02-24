import { Button, Checkbox, Form, Input, Space } from 'antd';
import { Auth } from '../../components/auth';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useCallback, useState } from 'react';

import './signin-form.less';
import { PASSWORD_PATTERN } from '@common/constants';
import { authApi } from '@api/auth.api';
import { ApiError, CheckEmailBody, LoginBody } from '@common/types';
import { useAppNavigate } from '@hooks/navigate';

export const SigninForm: React.FC = () => {
    const [hasErrors, setHasErrors] = useState(false);
    const [canForgotPassword, setCanForgotPassword] = useState(false);
    const [form] = Form.useForm();
    const { getFieldsError, getFieldValue, getFieldError } = form;

    const {
        goToHome,
        goToErrorLogin,
        goToErrorCheckEmailNoExist,
        goToErrorCheckEmail,
        goToConfirmEmail,
    } = useAppNavigate();

    const onFieldsChange = useCallback(() => {
        const errors = getFieldsError();
        const hasErrorsOnField = errors.some((item) => item.errors.length > 0);
        setHasErrors(hasErrorsOnField);

        const emailValue = getFieldValue('email');
        const emailError = getFieldError('email');

        setCanForgotPassword(!!emailValue && !emailError.length);
    }, []);

    const [login] = authApi.useLoginMutation();

    const onFinish = useCallback(() => {
        const body: LoginBody = {
            email: form.getFieldValue('email'),
            password: form.getFieldValue('password'),
        };
        login(body).then((responce) => {
            if ('data' in responce) {
                goToHome();
            } else {
                goToErrorLogin();
            }
        });
    }, []);

    const [checkEmail] = authApi.useCheckEmailMutation();

    const oncheckEmail = useCallback(() => {
        const body: CheckEmailBody = {
            email: form.getFieldValue('email'),
        };
        checkEmail(body).then((responce) => {
            if ('data' in responce) {
                goToConfirmEmail(body.email);
            } else if (
                (responce.error as ApiError).data?.statusCode === 404 &&
                (responce.error as ApiError).data?.message === 'Email не найден'
            ) {
                goToErrorCheckEmailNoExist();
            } else {
                goToErrorCheckEmail();
            }
        });
    }, []);

    return (
        <Auth activeForm='signin'>
            <Form
                form={form}
                className='signin-form'
                autoComplete='off'
                size='large'
                fields={[{ name: 'email' }, { name: 'password' }, { name: 'remember' }]}
                onFieldsChange={onFieldsChange}
                onFinish={onFinish}
            >
                <Form.Item
                    className='signin-form__email'
                    name='email'
                    rules={[{ type: 'email', required: true, message: '' }]}
                >
                    <Input addonBefore={'e-mail:'} />
                </Form.Item>

                <Form.Item
                    className='signin-form__password'
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

                <Space className='signin-form__additional' direction='horizontal'>
                    <Form.Item
                        className='signin-form__check-area'
                        name='remember'
                        valuePropName='checked'
                    >
                        <Checkbox>Запомнить меня</Checkbox>
                    </Form.Item>
                    <Button
                        onClick={oncheckEmail}
                        className='signin-form__forgot-password'
                        type='link'
                        disabled={!canForgotPassword}
                    >
                        Забыли пароль?
                    </Button>
                </Space>

                <Button
                    type='primary'
                    role='submit'
                    htmlType='submit'
                    className='signin-form__submit'
                    disabled={hasErrors}
                >
                    Войти
                </Button>

                <Button type='default' className='signin-form__google-auth'>
                    <GooglePlusOutlined /> Войти через Google
                </Button>
            </Form>
        </Auth>
    );
};
