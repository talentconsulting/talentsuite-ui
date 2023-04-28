import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';

export const APP_PATHS = {
	DASHBOARD : '/' ,
	PROJECTS: {
		LIST: 'projects/List' ,
		ITEM: 'project',
		REPORTS: {
			LIST : 'projects/:id/reports/List',
			DETAILS : 'projects/reports/:id',
		}
	},	
	PEOPLE: {
		LIST: 'people/people-list' ,
		PERSON: 'people/person' ,
	},
	SCHEDULE: {
		CALENDAR: 'appointment/calendar' ,
		UPCOMING_EVENTS: 'appointment/appointment-list' ,
	},
	WIKI: {
		GRID: 'wiki/grid' ,
		ITEM: 'wiki/item' ,
	},
	AUTH: {
		LOGIN: 'auth-pages/login' ,
		SIGN_UP: 'auth-pages/sign-up' ,
		NOT_FOUND_404: 'auth-pages/404',
	},
    REPORTS: {
		LIST: 'projects/All/reports/List',
    },
};

const APP_ELEMENTS = {
	DASHBOARD : lazy(() => import('../pages/presentation/dashboard/DashboardPage')),
	PROJECTS: {
		LIST: lazy(() => import('../pages/presentation/project-management/ListProjectsPage')),
		ITEM: lazy(() => import('../pages/presentation/project-management/ProjectPage')),
		REPORTS: {
			LIST : lazy(() => import('../pages/presentation/project-management/reports/ReportsPage')),
			DETAILS : lazy(() => import('../pages/presentation/project-management/reports/ReportDetailsPage')),
		}
	},	
	PEOPLE: {
		LIST: lazy(() => import('../pages/presentation/people/PeopleList')),
		PERSON: lazy(() => import('../pages/presentation/people/PersonPage')), 
	},
	SCHEDULE: {
		CALENDAR: lazy(() => import('../pages/presentation/appointment/CalendarPage')), 
		UPCOMING_EVENTS: lazy(() => import('../pages/presentation/appointment/AppointmentList')), 
	},
	WIKI: {
		GRID: lazy(() => import('../pages/presentation/wiki/KnowledgeGridPage')), 
		ITEM: lazy(() => import('../pages/presentation/wiki/KnowledgeViewPage')), 
	},
	AUTH: {
		LOGIN: lazy(() => import('../pages/presentation/auth/Login')), 
		SIGN_UP: lazy(() => import('../pages/presentation/auth/Login')),
		NOT_FOUND_404: lazy(() => import('../pages/presentation/auth/Page404')), 
	}
};

const presentation: RouteProps[] = [
	{
		path: APP_PATHS.DASHBOARD,
		element: <APP_ELEMENTS.DASHBOARD />,
	},
	{
		path: APP_PATHS.PROJECTS.LIST,
		element: <APP_ELEMENTS.PROJECTS.LIST />,
	},	
	{
		path: `${APP_PATHS.PROJECTS.ITEM}/:id`,
		element: <APP_ELEMENTS.PROJECTS.ITEM />,
	},
	{
		path: APP_PATHS.PROJECTS.REPORTS.LIST,
		element: <APP_ELEMENTS.PROJECTS.REPORTS.LIST />,
	},
	{
		path: APP_PATHS.PROJECTS.REPORTS.DETAILS,
		element: <APP_ELEMENTS.PROJECTS.REPORTS.DETAILS />,
	},
	{
		path: APP_PATHS.PEOPLE.LIST,
		element: <APP_ELEMENTS.PEOPLE.LIST />,
	},
	{
		path: `${APP_PATHS.PEOPLE.PERSON}/:id`,
		element: <APP_ELEMENTS.PEOPLE.PERSON />,
	},
	{
		path: APP_PATHS.AUTH.NOT_FOUND_404,
		element: <APP_ELEMENTS.AUTH.NOT_FOUND_404 />,
	},
	{
		path: APP_PATHS.AUTH.LOGIN,
		element: <APP_ELEMENTS.AUTH.LOGIN />,
	},
	{
		path: APP_PATHS.AUTH.SIGN_UP,
		element: <APP_ELEMENTS.AUTH.LOGIN isSignUp />,
	},
	{
		path: APP_PATHS.WIKI.GRID,
		element: <APP_ELEMENTS.WIKI.GRID />,
	},
	{
		path: `${APP_PATHS.WIKI.ITEM}/:id`,
		element: <APP_ELEMENTS.WIKI.ITEM />,
	},
	{
		path: APP_PATHS.SCHEDULE.CALENDAR,
		element: <APP_ELEMENTS.SCHEDULE.CALENDAR />,
	},
	{
		path: APP_PATHS.SCHEDULE.UPCOMING_EVENTS,
		element: <APP_ELEMENTS.SCHEDULE.UPCOMING_EVENTS />,
	},
];

const contents = [...presentation];

export default contents;
