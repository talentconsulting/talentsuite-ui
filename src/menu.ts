import { APP_PATHS } from './routes/contentRoutes';

export const dashboardPagesMenu = {
	dashboard: {
		id: 'dashboard',
		text: 'Dashboard',
		path: APP_PATHS.DASHBOARD,
		icon: 'Dashboard',
		subMenu: null,
	}
};

export const appPagesMenu = {
	listProjects: {
		id: 'listProjects',
		text: 'Projects',
		path: APP_PATHS.PROJECTS.LIST,
		icon: 'ViewDay',
	},	
	listPeople: {
		id: 'listPeople',
		text: 'People',
		path: APP_PATHS.PEOPLE.LIST,
		icon: 'PersonSearch',
	},
	personPage: {
		id: 'personPage',
		text: 'personPage',
		path: APP_PATHS.PEOPLE.PERSON,
		hide: true,
	},
	schedule: {
		id: 'schedule',
		text: 'Schedule',
		path: 'appointment',
		icon: 'Today',
		subMenu: {
			calendar: {
				id: 'calendar',
				text: 'Calendar',
				path: APP_PATHS.SCHEDULE.CALENDAR,
				icon: 'EditCalendar',
				notification: true,
			},
			appointmentList: {
				id: 'appointmentList',
				text: 'Upcoming Events',
				path: APP_PATHS.SCHEDULE.UPCOMING_EVENTS,
				icon: 'Event',
			},
		},
	},
	wiki: {
		id: 'wiki',
		text: 'Wiki',
		path: APP_PATHS.WIKI.GRID,
		icon: 'AutoStories',
	},
	wikiItemID: {
		id: 'wikiItemID',
		text: 'wikiItemID',
		path: APP_PATHS.WIKI.ITEM,
		hide: true,
	},
	auth: {
		id: 'auth',
		text: 'Auth Pages',
		icon: 'Extension',
	},
	login: {
		id: 'login',
		text: 'Login',
		path: APP_PATHS.AUTH.LOGIN,
		icon: 'Login',
	},
	signUp: {
		id: 'signUp',
		text: 'Sign Up',
		path: APP_PATHS.AUTH.SIGN_UP,
		icon: 'PersonAdd',
	}
};


export const productsExampleMenu = {
	companyA: { id: 'companyA', text: 'Company A', path: 'grid-pages/products', subMenu: null },
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
