import React from 'react';
import { RouteProps } from 'react-router-dom';
import { APP_PATHS } from '../routes/contentRoutes';
import DefaultFooter from '../pages/_layout/_footers/DefaultFooter';

const footers: RouteProps[] = [
	{ path: APP_PATHS.AUTH.SIGN_UP, element: null },
	{ path: APP_PATHS.AUTH.NOT_FOUND_404, element: null },
	{ path: APP_PATHS.WIKI.GRID, element: null },
	{ path: '*', element: <DefaultFooter /> },
];

export default footers;
