import { ErrorExit } from '@pages/error-exit';
import { ErrorLogin } from '@pages/error-login';
import { MainPage } from '@pages/main-page';
import { SigninForm } from '@pages/signin-form';
import { SignupForm } from '@pages/signup-form';
import { SuccessRegistration } from '@pages/success-registration';
import { Route, Routes } from 'react-router-dom';

export const routes = (
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth/signin' element={<SigninForm />} />
        <Route path='/auth/signup' element={<SignupForm />} />
        <Route path='/result/error-login' element={<ErrorLogin />} />
        <Route path='/result/success' element={<SuccessRegistration />} />
        <Route path='/result/error-user-exist' element={<ErrorExit />} />
    </Routes>
);
