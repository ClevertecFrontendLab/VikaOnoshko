import { Path } from '@common/enums';
import { RegistrationBody } from '@common/types';
import { useNavigate } from 'react-router-dom';

export const useAppNavigate = () => {
    const navigate = useNavigate();

    return {
        goToHome() {
            navigate(Path.HOME);
        },
        goToSignIn() {
            navigate(Path.SIGN_IN);
        },
        goToSignUp(state?: RegistrationBody) {
            navigate(Path.SIGN_UP, { state });
        },
        goToErrorLogin() {
            navigate(Path.ERROR_LOGIN);
        },
        goToResultSuccess() {
            navigate(Path.RESULT_SUCCESS);
        },
        goToUserExist() {
            navigate(Path.USER_EXIST);
        },
        goToError(state: RegistrationBody) {
            navigate(Path.ERROR, { state });
        },
        goToErrorCheckEmailNoExist() {
            navigate(Path.ERROR_CHECK_EMAIL_NO_EXIST);
        },
        goToErrorCheckEmail() {
            navigate(Path.ERROR_CHECK_EMAIL);
        },
        goToConfirmEmail(email: string) {
            navigate(Path.CONFIRM_EMAIL, { state: { email } });
        },
        goToConfirmPassword() {
            navigate(Path.CHANGE_PASSWORD);
        },
        goToErrorChange() {
            navigate(Path.ERROR_CHANGE_PASSWORD);
        },
        goToSucessChangePassword() {
            navigate(Path.SUCESS_CHANGE_PASSWORD);
        },
    };
};
