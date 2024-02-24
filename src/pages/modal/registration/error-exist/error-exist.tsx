import { ErrorModal } from '@components/error-modal';
import { useAppNavigate } from '@hooks/navigate';
import error from '@public/error.png';

export const ErrorExist: React.FC = () => {
    const { goToSignUp } = useAppNavigate();

    return (
        <ErrorModal
            title='Данные не сохранились'
            text='Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.'
            img={error}
            buttonText='Назад к регистрации'
            onSubmit={goToSignUp}
        />
    );
};
