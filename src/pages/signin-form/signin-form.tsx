import { Button, Checkbox, Form, Input, Space } from 'antd';
import { Auth } from '../../components/auth';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useCallback, useState } from 'react';

import './signin-form.less';
import { PASSWORD_PATTERN } from '@common/constants';
import { authApi } from '@api/auth.api';
import { ApiError, CheckEmailBody, LoginBody } from '@common/types';
import { useAppNavigate } from '@hooks/navigate';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';
import { authSlice } from '@redux/auth.reducer';

export const SigninForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const [hasErrors, setHasErrors] = useState(false);
    const [canForgotPassword, setCanForgotPassword] = useState(true);
    const [form] = Form.useForm();
    const { getFieldsError, getFieldValue, getFieldError } = form;

    const { goToErrorLogin, goToErrorCheckEmailNoExist, goToErrorCheckEmail, goToConfirmEmail } =
        useAppNavigate();

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
                dispatch(authSlice.actions.setAccessToken(responce.data.accessToken));

                if (form.getFieldValue('rememberMe')) {
                    localStorage.setItem('accessToken', responce.data.accessToken);
                }
            } else {
                goToErrorLogin();
            }
        });
    }, []);

    const [checkEmail] = authApi.useCheckEmailMutation();

    const onClickForgotPassword = useCallback(() => {
        const emailValue = getFieldValue('email');
        const emailError = getFieldError('email');
        const valide = !!emailValue && !emailError.length;

        setCanForgotPassword(valide);

        if (!valide) {
            return;
        }

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
                    data-test-id='login-email'
                    name='email'
                    rules={[{ type: 'email', required: true, message: '' }]}
                >
                    <Input addonBefore={'e-mail:'} />
                </Form.Item>

                <Form.Item
                    className='signin-form__password'
                    data-test-id='login-password'
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
                        <Checkbox data-test-id='login-remember'>Запомнить меня</Checkbox>
                    </Form.Item>
                    <Button
                        onClick={onClickForgotPassword}
                        className='signin-form__forgot-password'
                        type='link'
                        disabled={!canForgotPassword}
                        data-test-id='login-forgot-button'
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
                    data-test-id='login-submit-button'
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
