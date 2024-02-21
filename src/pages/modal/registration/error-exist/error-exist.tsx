import { ErrorModal } from '@components/error-modal';
import error from '@public/error.png';

export const ErrorExist: React.FC = () => {
    return (
        <ErrorModal
            title='Данные не сохранились'
            text='Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.'
            img={error}
            buttonText='Назад к регистрации'
        />
    );
};
