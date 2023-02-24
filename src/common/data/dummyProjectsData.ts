import moment from 'moment';
import PROJECT_STATUS, { IProjectStatus } from './enumProjectStatus';
import Company1 from '../../assets/logos/company1.png';
import Company2 from '../../assets/logos/company2.png';
import Company3 from '../../assets/logos/company3.png';

const data: IProjectProps[] = [
	{
		id: 1,
		name: 'Project A',
		startedDate:
			moment().format('YYYY') + moment().format('MM') + moment().add(-100, 'days').format('DD'),
		endDate:
			moment().format('YYYY') + moment().format('MM') + moment().add(100, 'days').format('DD'),
		teamMembers: [],
		status: PROJECT_STATUS.APPROVED,
		description: 'Build a data store',
		image: Company1
	},
	{
		id: 2,
		name: 'Project B',
		startedDate:
			moment().format('YYYY') + moment().format('MM') + moment().add(-80, 'days').format('DD'),
		endDate:
			moment().format('YYYY') + moment().format('MM') + moment().add(200, 'days').format('DD'),
		teamMembers: [],
		status: PROJECT_STATUS.AT_RISK,
		description: 'Develope mobile app',
		image: Company2
	},
	{
		id: 3,
		name: 'Project C',
		startedDate:
			moment().format('YYYY') + moment().format('MM') + moment().add(-150, 'days').format('DD'),
		endDate:
			moment().format('YYYY') + moment().format('MM') + moment().add(30, 'days').format('DD'),
		teamMembers: [],
		status: PROJECT_STATUS.BEHIND,
		description: 'Develope Web app',
		image: Company3
	}
];

export default data;

export interface IProjectProps {
	id: number;
	name: string;
	startedDate: string;
	endDate: string;
	teamMembers: string[];
	status: IProjectStatus['key'];
	description: string;
	image: string;
}

export function getProjectDataWithId(id?: string): IProjectProps {
	// @ts-ignore
	return data[Object.keys(data).filter((f) => data[f].id.toString() === id.toString())];
}