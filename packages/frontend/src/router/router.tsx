import * as React from 'react';
import { BrowserRouter, Routes } from 'react-router-dom';

import { privateRoutes, publicRoutes } from './routes';
import { useAuthCheck } from '../shared/hooks';
import { useAuth } from '../store/auth';

const Router: React.FunctionComponent = () => {
    const { isAuth } = useAuth();

    useAuthCheck();

    if (isAuth === null) {
        return null;
    }

    return (
        <BrowserRouter>
            <React.Suspense>
                <Routes>{Boolean(isAuth) ? privateRoutes : publicRoutes}</Routes>
            </React.Suspense>
        </BrowserRouter>
    );
};
export default Router;
