import { ErrorModal } from '@components/error-modal';
import './error-emsil.less';
import errorimg from '@public/errorimg.png';

export const ErrorEmail: React.FC = () => {
    return (
        <ErrorModal
            className='error-modal_error-email'
            title='Что-то пошло не так'
            text='Произошла ошибка, попробуйте отправить форму ещё раз..'
            buttonText='Назад'
            img={errorimg}
        />
    );
};
