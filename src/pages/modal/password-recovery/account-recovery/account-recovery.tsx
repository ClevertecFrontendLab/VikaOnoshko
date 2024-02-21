import { ErrorModal } from '@components/error-modal';
import './account-recovery.less';
import attention from '@public/attention.png';
import { Typography } from 'antd';
import VerificationInput from 'react-verification-input';
import { useState } from 'react';
import { IncorrectCode } from '../incorrect-code';

export const AccountRecovery: React.FC = () => {
    const [modal] = useState(true);

    return (
        <>
            {!modal ? (
                <ErrorModal
                    className='error-modal_account-recovery'
                    title={
                        <>
                            Введите код <br />
                            для восстановления аккауанта
                        </>
                    }
                    text={
                        <>
                            Мы отправили вам на e-mail <b>victorbyden@gmail.com</b> шестизначный
                            код. Введите его в поле ниже.
                        </>
                    }
                    img={attention}
                >
                    <VerificationInput
                        placeholder={''}
                        autoFocus={true}
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
            ) : (
                <div>
                    <IncorrectCode />
                </div>
            )}
        </>
    );
};
