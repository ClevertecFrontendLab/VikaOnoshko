import { ErrorModal } from '@components/error-modal';
import './error-emsil.less';
import errorimg from '@public/errorimg.png';
import { useAppNavigate } from '@hooks/navigate';

export const ErrorEmail: React.FC = () => {
    const { goToSignIn } = useAppNavigate();

    return (
        <ErrorModal
            className='error-modal_error-email'
            title='Что-то пошло не так'
            text='Произошла ошибка, попробуйте отправить форму ещё раз..'
            buttonText='Назад'
            img={errorimg}
            onSubmit={goToSignIn}
        />
    );
};
