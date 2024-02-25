import { ErrorExist } from '@pages/modal/registration/error-exist';
import { ErrorLogin } from '@pages/modal/error-login';
import { ErrorRegistration } from '@pages/modal/registration/error-registration';
import { MainPage } from '@pages/main-page';
import { SigninForm } from '@pages/signin-form';
import { SignupForm } from '@pages/signup-form';
import { SuccessRegistration } from '@pages/modal/registration/success-registration';
import { Route, Routes as NativeRoutes } from 'react-router-dom';
import { ErrorEmailNoExist } from '@pages/modal/password-recovery/error-email-no-exist';
import { ErrorEmail } from '@pages/modal/password-recovery/error-email';
import { AccountRecovery } from '@pages/modal/password-recovery/account-recovery';
import { ErrorChangePassword } from '@pages/modal/password-recovery/error-change-password';
import { SuccesesChangePassword } from '@pages/modal/password-recovery/succeses-change-password/succeses-change-password';
import { ChangePassword } from '@pages/modal/password-recovery/change-password/change-password';
import { Path } from '@common/enums';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';

export const Routes = () => {
    const { isAuth } = useAppSelector((state) => state.auth);

    if (isAuth) {
        <NativeRoutes>
            <Route path={Path.HOME} element={<MainPage />} />
        </NativeRoutes>;
    }

    return (
        <NativeRoutes>
            <Route path={Path.SIGN_IN} element={<SigninForm />} />
            <Route path={Path.SIGN_UP} element={<SignupForm />} />
            <Route path={Path.ERROR_LOGIN} element={<ErrorLogin />} />
            <Route path={Path.RESULT_SUCCESS} element={<SuccessRegistration />} />
            <Route path={Path.USER_EXIST} element={<ErrorExist />} />
            <Route path={Path.ERROR} element={<ErrorRegistration />} />
            <Route path={Path.ERROR_CHECK_EMAIL_NO_EXIST} element={<ErrorEmailNoExist />} />
            <Route path={Path.ERROR_CHECK_EMAIL} element={<ErrorEmail />} />
            <Route path={Path.CONFIRM_EMAIL} element={<AccountRecovery />} />
            <Route path={Path.CHANGE_PASSWORD} element={<ChangePassword />} />
            <Route path={Path.ERROR_CHANGE_PASSWORD} element={<ErrorChangePassword />} />
            <Route path={Path.SUCESS_CHANGE_PASSWORD} element={<SuccesesChangePassword />} />
        </NativeRoutes>
    );
};
