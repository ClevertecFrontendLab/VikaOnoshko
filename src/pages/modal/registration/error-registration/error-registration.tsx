import { ErrorModal } from '@components/error-modal';
import { useAppNavigate } from '@hooks/navigate';
import error from '@public/error.png';

export const ErrorRegistration: React.FC = () => {
    const { goToSignUp } = useAppNavigate();

    return (
        <ErrorModal
            title='Данные не сохранились'
            text='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
            img={error}
            buttonText='Повторить'
            onSubmit={goToSignUp}
            data-test-id='registration-retry-button'
        />
    );
};
