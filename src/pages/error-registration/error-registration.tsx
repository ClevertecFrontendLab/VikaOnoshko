import { ErrorModal } from '@components/error-modal';
import error from '@public/error.png';

export const ErrorRegistration: React.FC = () => {
    return (
        <ErrorModal
            title='Данные не сохранились'
            text='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
            img={error}
            buttonText='Повторить'
        />
    );
};
