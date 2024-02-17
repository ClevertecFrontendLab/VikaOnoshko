import { Error } from '@components/error';
import Yelloy from '@public/yelloy.png';

export const ErrorLogin: React.FC = () => {
    return (
        <Error
            title='Вход не выполнен'
            text='Что-то пошло не так. Попробуйте еще раз'
            img={Yelloy}
            buttonText='Повторить'
        />
    );
};
