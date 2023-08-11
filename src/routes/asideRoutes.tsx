import React from 'react';
import { RouteProps } from 'react-router-dom';
import { APP_PATHS } from '../routes/contentRoutes';
import DefaultAside from '../pages/_layout/_asides/DefaultAside';

const asides: RouteProps[] = [
	{ path: '*', element: <DefaultAside /> },
];

export default asides;
