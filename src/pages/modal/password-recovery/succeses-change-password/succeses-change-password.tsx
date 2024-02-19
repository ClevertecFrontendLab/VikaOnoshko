import { ErrorModal } from '@components/error-modal';
import succses from '@public/succses.png';
import './succeses-change-password.less';

export const SuccesesChangePassword: React.FC = () => {
    return (
        <ErrorModal
            className='error-modal_success-change-password'
            title='Пароль успешно изменен'
            text='Теперь можно войти в аккаунт, используя свой логин и новый пароль'
            img={succses}
            buttonText='Вход'
        />
    );
};
