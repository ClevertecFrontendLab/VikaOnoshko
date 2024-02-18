import { ErrorModal } from '@components/error-modal';
import error from '@public/error.png';
import { Typography } from 'antd';
import VerificationInput from 'react-verification-input';
import './incorrect-code.less';

export const IncorrectCode: React.FC = () => {
    return (
        <ErrorModal
            className='error-modal_incorrect-code'
            title='Неверный код. Введите код для восстановления аккауанта'
            text={
                <>
                    Мы отправили вам на e-mail <b>victorbyden@gmail.com</b> шестизначный код.
                    Введите его в поле ниже.
                </>
            }
            img={error}
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
            <Typography.Text className='error-modal_incorrect-code__text'>
                Не пришло письмо? Проверьте папку Спам.
            </Typography.Text>
        </ErrorModal>
    );
};
