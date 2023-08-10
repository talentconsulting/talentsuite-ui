import React from 'react';
import { RouteProps } from 'react-router-dom';
import { APP_PATHS } from '../routes/contentRoutes';
import DefaultHeader from '../pages/_layout/_headers/DefaultHeader';

const headers: RouteProps[] = [
	{ path: APP_PATHS.AUTH.NOT_FOUND_404, element: null },
	{ path: APP_PATHS.WIKI.GRID, element: null },

	{
		path: `*`,
		element: <DefaultHeader />,
	},
];

export default headers;
