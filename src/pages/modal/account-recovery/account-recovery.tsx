import { ErrorModal } from '@components/error-modal';
import './account-recovery.less';
import attention from '@public/attention.png';
import { Typography } from 'antd';
import VerificationInput from 'react-verification-input';

export const AccountRecovery: React.FC = () => {
    return (
        <ErrorModal
            className='error-modal_account-recovery'
            title='Введите код для восстановления аккауанта'
            text='Мы отправили вам на e-mail victorbyden@gmail.com шестизначный код. Введите его в поле ниже.'
            img={attention}
        >
            <VerificationInput
                placeholder={''}
                autoFocus={false}
                classNames={{
                    character: 'character',
                    characterSelected: 'character--selected',
                }}
            />
            <Typography.Text>Не пришло письмо? Проверьте папку Спам.</Typography.Text>
        </ErrorModal>
    );
};
