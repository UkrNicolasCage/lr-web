import * as React from 'react';
import { Navigate, Route } from 'react-router-dom';

import { SignIn, Group } from '../modules';
import { AuthContainer, MainContainer } from '../shared/components';
import { RouterKeys } from './keys';

export const publicRoutes = (
    <>
        <Route path={RouterKeys.ROOT} element={<Navigate to={`/${RouterKeys.SIGN_IN}`} />} />

        <Route path={RouterKeys.ROOT} element={<AuthContainer />}>
            <Route path={RouterKeys.SIGN_IN} element={<SignIn />} />
        </Route>

        <Route path={RouterKeys.ALL_MATCH} element={<Navigate to={`/${RouterKeys.SIGN_IN}`} />} />
    </>
);

export const privateRoutes = (
    <>
        <Route path={RouterKeys.ROOT} element={<Navigate to={`/${RouterKeys.GROUP}`} />} />

        <Route path={RouterKeys.ROOT} element={<MainContainer />}>
            <Route path={RouterKeys.GROUP} element={<Group />} />
        </Route>

        <Route path={RouterKeys.ALL_MATCH} element={<Navigate to={`/${RouterKeys.GROUP}`} />} />
    </>
);
