import { ErrorModal } from '@components/error-modal';
import './error-emsil.less';
import errorimg from '@public/errorimg.png';
import { useAppNavigate } from '@hooks/navigate';
import { useLocation } from 'react-router-dom';
import { CheckEmailBody } from '@common/types';

export const ErrorEmail: React.FC = () => {
    const state: CheckEmailBody = useLocation().state;
    const { goToSignIn } = useAppNavigate();

    return (
        <ErrorModal
            data-test-id='check-back-button'
            className='error-modal_error-email'
            title='Что-то пошло не так'
            text='Произошла ошибка, попробуйте отправить форму ещё раз..'
            buttonText='Назад'
            img={errorimg}
            onSubmit={() => goToSignIn(state)}
        />
    );
};
