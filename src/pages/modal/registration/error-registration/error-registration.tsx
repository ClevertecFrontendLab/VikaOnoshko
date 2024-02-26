import { RegistrationBody } from '@common/types';
import { ErrorModal } from '@components/error-modal';
import { useAppNavigate } from '@hooks/navigate';
import error from '@public/error.png';
import { useLocation } from 'react-router-dom';

export const ErrorRegistration: React.FC = () => {
    const state: RegistrationBody = useLocation().state;
    const { goToSignUp } = useAppNavigate();

    return (
        <ErrorModal
            title='Данные не сохранились'
            text='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
            img={error}
            buttonText='Повторить'
            onSubmit={() => goToSignUp(state)}
            data-test-id='registration-retry-button'
        />
    );
};
