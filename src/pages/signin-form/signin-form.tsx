import { Button, Checkbox, Form, Input, Space, Typography } from 'antd';
import { Auth } from '../../components/auth';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useCallback, useState } from 'react';

import './signin-form.less';
import { PASSWORD_PATTERN } from '@common/constants';

export const SigninForm: React.FC = () => {
    const [hasErrors, setHasErrors] = useState(false);
    const [form] = Form.useForm();
    const { getFieldsError } = form;

    const onFieldsChange = useCallback(() => {
        const errors = getFieldsError();
        const hasErrorsOnField = errors.some((item) => item.errors.length > 0);
        setHasErrors(hasErrorsOnField);
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

                    <Typography.Link className='signin-form__forgot-password'>
                        Забыли пароль?
                    </Typography.Link>
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
