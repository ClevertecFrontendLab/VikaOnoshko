import { MainPage } from '@pages/main-page';
import { SigninForm } from '@pages/signin-form';
import { SignupForm } from '@pages/signup-form';
import { Route, Routes } from 'react-router-dom';

export const routes = (
    <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth/signin' element={<SigninForm />} />
        <Route path='/auth/signup' element={<SignupForm />} />
    </Routes>
);
