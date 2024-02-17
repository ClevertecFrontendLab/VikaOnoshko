import { ErrorModal } from '@components/error-modal';
import Yelloy from '@public/yelloy.png';

export const ErrorLogin: React.FC = () => {
    return (
        <ErrorModal
            title='Вход не выполнен'
            text='Что-то пошло не так. Попробуйте еще раз'
            img={Yelloy}
            buttonText='Повторить'
        />
    );
};
