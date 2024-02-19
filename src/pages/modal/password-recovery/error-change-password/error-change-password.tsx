import { ErrorModal } from '@components/error-modal';
import error from '@public/error.png';
import './error-change-password.less';

export const ErrorChangePassword: React.FC = () => {
    return (
        <ErrorModal
            className='error-modal_error-change-password'
            title='Данные не сохранились'
            text='Что-то пошло не так. Попробуйте еще раз'
            img={error}
            buttonText='Повторить'
        />
    );
};
