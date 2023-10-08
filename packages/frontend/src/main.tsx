import React from 'react';
import ReactDOM from 'react-dom/client';
import { Portal } from '@blueprintjs/core';
import { ToastContainer } from 'react-toastify';
import 'normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import 'react-toastify/dist/ReactToastify.css';

import Router from './router/router';
import ErrorBoundary from './modules/errorBoundary/errorBoundary';

import './shared/styles/font-faces.css';
import './main.styles';

import { mainStyle } from './main.styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
			<ErrorBoundary>
				<Portal className={mainStyle}>
					<Router />
					<ToastContainer position='top-right' />
				</Portal>
			</ErrorBoundary>
	</React.StrictMode>
);
