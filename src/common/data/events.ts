import moment from 'moment';
import USERS, { IUserProps } from './userDummyData';
import SERVICES, { IServiceProps } from './serviceDummyData';

export interface IEvents extends Partial<IServiceProps> {
	id?: number;
	start?: Date;
	end?: Date;
	user?: IUserProps;
	[key: string]: any;
}
const events: IEvents[] = [
	{
		id: 0,
		start: moment().startOf('month').add(4, 'day').startOf('day').add(9, 'hour').toDate(),
		end: moment().startOf('month').add(4, 'day').startOf('day').add(10.5, 'hour').toDate(),
		user: USERS.JOHN,
		...SERVICES.KAYAKING,
	},
	{
		id: 1,
		start: moment().startOf('day').add(9.75, 'hour').toDate(),
		end: moment().startOf('day').add(11.25, 'hour').toDate(),
		user: USERS.JOHN,
		...SERVICES.TENNIS,
	},
	{
		id: 2,
		start: moment().startOf('month').add(14, 'day').startOf('day').add(9.75, 'hour').toDate(),
		end: moment().startOf('month').add(14, 'day').startOf('day').add(10.5, 'hour').toDate(),
		user: USERS.JOHN,
		...SERVICES.SURFING,
	},
	{
		id: 3,

		start: moment().startOf('month').add(14, 'day').startOf('day').add(11, 'hour').toDate(),
		end: moment().startOf('month').add(14, 'day').startOf('day').add(12, 'hour').toDate(),
		user: USERS.JOHN,
		...SERVICES.HANDBALL,
	},
	{
		id: 4,
		start: moment().startOf('month').add(9, 'day').startOf('day').add(11, 'hour').toDate(),
		end: moment().startOf('month').add(9, 'day').startOf('day').add(12, 'hour').toDate(),
		user: USERS.JOHN,
		...SERVICES.KITE_SURFING,
	},
	{
		id: 4,
		start: moment().startOf('month').add(11, 'day').startOf('day').add(11, 'hour').toDate(),
		end: moment().startOf('month').add(11, 'day').startOf('day').add(12, 'hour').toDate(),
		user: USERS.GRACE,
		...SERVICES.SNOWBOARDING,
	},
	{
		id: 5,
		start: moment().startOf('month').add(13, 'day').startOf('day').add(11, 'hour').toDate(),
		end: moment().startOf('month').add(13, 'day').startOf('day').add(12, 'hour').toDate(),
		user: USERS.GRACE,
		...SERVICES.SNOWBOARDING,
	},
	{
		id: 6,
		start: moment().startOf('hour').toDate(),
		end: moment().startOf('hour').add(1.5, 'hour').toDate(),
		user: USERS.GRACE,
		...SERVICES.SNOWBOARDING,
	},
	{
		id: 7,
		start: moment().startOf('month').add(15, 'day').startOf('day').add(11, 'hour').toDate(),
		end: moment().startOf('month').add(15, 'day').startOf('day').add(12, 'hour').toDate(),
		user: USERS.JANE,
		...SERVICES.YOGA,
	},
	{
		id: 8,
		start: moment().startOf('month').add(18, 'day').startOf('day').add(10, 'hour').toDate(),
		end: moment().startOf('month').add(18, 'day').startOf('day').add(11, 'hour').toDate(),
		user: USERS.JANE,
		...SERVICES.YOGA,
	},
	{
		id: 9,
		start: moment().startOf('month').add(22, 'day').startOf('day').add(9, 'hour').toDate(),
		end: moment().startOf('month').add(24, 'day').startOf('day').add(17, 'hour').toDate(),
		user: USERS.RYAN,
		...SERVICES.HIKING,
	},
	{
		id: 10,
		start: moment().startOf('month').add(19, 'day').startOf('day').add(13, 'hour').toDate(),
		end: moment().startOf('month').add(19, 'day').startOf('day').add(15, 'hour').toDate(),
		user: USERS.ELLA,
		...SERVICES.ICE_SKATING,
	},
	{
		id: 11,
		start: moment().startOf('month').add(21, 'day').startOf('day').add(13, 'hour').toDate(),
		end: moment().startOf('month').add(21, 'day').startOf('day').add(15, 'hour').toDate(),
		user: USERS.ELLA,
		...SERVICES.ICE_SKATING,
	},
	{
		id: 12,
		start: moment().startOf('month').add(1, 'day').startOf('day').add(13, 'hour').toDate(),
		end: moment().startOf('month').add(1, 'day').startOf('day').add(15, 'hour').toDate(),
		user: USERS.ELLA,
		...SERVICES.ICE_SKATING,
	},
	{
		id: 13,
		start: moment().startOf('month').add(5, 'day').startOf('day').add(12.5, 'hour').toDate(),
		end: moment().startOf('month').add(5, 'day').startOf('day').add(14.5, 'hour').toDate(),
		user: USERS.CHLOE,
		...SERVICES.CRICKET,
	},
	{
		id: 14,
		start: moment().startOf('month').add(2, 'day').startOf('day').add(13, 'hour').toDate(),
		end: moment().startOf('month').add(2, 'day').startOf('day').add(15, 'hour').toDate(),
		user: USERS.CHLOE,
		...SERVICES.VOLLEYBALL,
	},
	{
		id: 16,
		start: moment().startOf('month').add(20, 'day').startOf('day').add(13, 'hour').toDate(),
		end: moment().startOf('month').add(20, 'day').startOf('day').add(15, 'hour').toDate(),
		user: USERS.CHLOE,
		...SERVICES.VOLLEYBALL,
	},
	{
		id: 17,
		start: moment().startOf('month').add(26, 'day').startOf('day').add(11, 'hour').toDate(),
		end: moment().startOf('month').add(26, 'day').startOf('day').add(12, 'hour').toDate(),
		user: USERS.GRACE,
		...SERVICES.SNOWBOARDING,
	},
	{
		id: 9,
		start: moment().startOf('month').add(28, 'day').startOf('day').add(11, 'hour').toDate(),
		end: moment().startOf('month').add(28, 'day').startOf('day').add(12, 'hour').toDate(),
		user: USERS.RYAN,
		...SERVICES.FOOTBALL,
	},
	{
		id: 15,
		start: moment().startOf('month').add(5, 'day').startOf('day').add(9, 'hour').toDate(),
		end: moment().startOf('month').add(5, 'day').startOf('day').add(10.5, 'hour').toDate(),
		user: USERS.JANE,
		...SERVICES.KAYAKING,
	},
	{
		id: 16,
		start: moment().startOf('month').add(5, 'day').startOf('day').add(10, 'hour').toDate(),
		end: moment().startOf('month').add(5, 'day').startOf('day').add(12, 'hour').toDate(),
		user: USERS.GRACE,
		...SERVICES.KAYAKING,
	},
];

export default events;
