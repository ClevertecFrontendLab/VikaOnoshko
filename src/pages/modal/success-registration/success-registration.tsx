import { ErrorModal } from '@components/error-modal';
import succes from '@public/succses.png';
import './success-registrstion.less';

export const SuccessRegistration: React.FC = () => {
    return (
        <ErrorModal
            className='error-modal_success-registration'
            title='Регистрация успешна'
            text='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
            img={succes}
            buttonText='Войти'
        />
    );
};
