import { ErrorModal } from '@components/error-modal';
import error from '@public/error.png';
import './error-email-no-exist.less';

export const ErrorEmailNoExist: React.FC = () => {
    return (
        <ErrorModal
            className='error-modal_email-no-exist'
            title='Такой e-mail не зарегистрирован'
            text='Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.'
            img={error}
            buttonText='Попробовать снова'
        />
    );
};
