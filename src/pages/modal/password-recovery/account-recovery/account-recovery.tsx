import { ErrorModal } from '@components/error-modal';
import './account-recovery.less';
import attention from '@public/attention.png';
import error from '@public/error.png';
import { Typography } from 'antd';
import VerificationInput from 'react-verification-input';
import { useCallback, useState } from 'react';
import { authApi } from '@api/auth.api';
import { ConfirmEmailBody } from '@common/types';
import { useAppNavigate } from '@hooks/navigate';
import { useLocation } from 'react-router-dom';

export const AccountRecovery: React.FC = () => {
    const [modal, setModal] = useState(true);
    const { goToConfirmPassword } = useAppNavigate();
    const state: Pick<ConfirmEmailBody, 'email'> = useLocation().state;

    const [confirmEmail] = authApi.useConfirmEmailMutation();

    const onComplete = useCallback((code: string) => {
        const body: ConfirmEmailBody = {
            email: state.email,
            code,
        };
        confirmEmail(body).then((responce) => {
            if ('data' in responce) {
                goToConfirmPassword();
            } else {
                setModal(false);
            }
        });
    }, []);

    return (
        <ErrorModal
            className='error-modal_account-recovery'
            title={
                modal ? (
                    <>
                        Введите код <br />
                        для восстановления аккауанта
                    </>
                ) : (
                    'Неверный код. Введите код для восстановления аккауанта'
                )
            }
            text={
                <>
                    Мы отправили вам на e-mail <b>{state.email}</b> шестизначный код. Введите его в
                    поле ниже.
                </>
            }
            img={modal ? attention : error}
        >
            <VerificationInput
                placeholder={''}
                data-test-id='verification-input'
                autoFocus={true}
                onComplete={onComplete}
                classNames={{
                    character: 'character',
                    characterSelected: 'character--selected',
                    container: 'container',
                }}
            />
            <Typography.Text className='error-modal_account-recovery__text'>
                Не пришло письмо? Проверьте папку Спам.
            </Typography.Text>
        </ErrorModal>
    );
};
