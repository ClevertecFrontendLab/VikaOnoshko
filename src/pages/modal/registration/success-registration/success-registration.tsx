import { ErrorModal } from '@components/error-modal';
import succes from '@public/succses.png';
import './success-registrstion.less';
import { useAppNavigate } from '@hooks/navigate';

export const SuccessRegistration: React.FC = () => {
    const { goToSignIn } = useAppNavigate();

    return (
        <ErrorModal
            className='error-modal_success-registration'
            title='Регистрация успешна'
            text='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
            img={succes}
            buttonText='Войти'
            onSubmit={goToSignIn}
            data-test-id='registration-enter-button'
        />
    );
};
