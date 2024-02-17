import { ErrorExit } from '@pages/modal/error-exit';
import { ErrorLogin } from '@pages/modal/error-login';
import { ErrorRegistration } from '@pages/modal/error-registration';
import { MainPage } from '@pages/main-page';
import { SigninForm } from '@pages/signin-form';
import { SignupForm } from '@pages/signup-form';
import { SuccessRegistration } from '@pages/modal/success-registration';
import { Route, Routes } from 'react-router-dom';
import { ErrorEmailNoExist } from '@pages/modal/error-email-no-exist';

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
    </Routes>
);
