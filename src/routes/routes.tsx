import { ErrorExit } from '@pages/modal/registration/error-exit';
import { ErrorLogin } from '@pages/modal/error-login';
import { ErrorRegistration } from '@pages/modal/registration/error-registration';
import { MainPage } from '@pages/main-page';
import { SigninForm } from '@pages/signin-form';
import { SignupForm } from '@pages/signup-form';
import { SuccessRegistration } from '@pages/modal/registration/success-registration';
import { Route, Routes } from 'react-router-dom';
import { ErrorEmailNoExist } from '@pages/modal/password-recovery/error-email-no-exist';
import { ErrorEmail } from '@pages/modal/password-recovery/error-email';
import { AccountRecovery } from '@pages/modal/password-recovery/account-recovery';
import { ErrorChangePassword } from '@pages/modal/password-recovery/error-change-password';
import { SuccesesChangePassword } from '@pages/modal/password-recovery/succeses-change-password/succeses-change-password';

export const routes = (
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth/signin' element={<SigninForm />} />
        <Route path='/auth/signup' element={<SignupForm />} />
        <Route path='/result/error-login' element={<ErrorLogin />} />
        <Route path='/result/success' element={<SuccessRegistration />} />
        <Route path='/result/error-user-exist' element={<ErrorExit />} />
        <Route path='/result/error' element={<ErrorRegistration />} />
        <Route path='/result/error-check-email-no-exist' element={<ErrorEmailNoExist />} />
        <Route path='/result/error-check-email' element={<ErrorEmail />} />
        <Route path='/auth/confirm-email' element={<AccountRecovery />} />
        <Route path='/auth/change-password' element={<></>} />
        <Route path='/result/error-change-password' element={<ErrorChangePassword />} />
        <Route path='/result/success-change-password' element={<SuccesesChangePassword />} />
    </Routes>
);
