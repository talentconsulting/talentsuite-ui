import moment from 'moment';
import PROJECT_STATUS, { IStatus } from '../../models/ui-models/enums/enumStatus';
import Company1 from '../../assets/logos/company1.png';
import Company2 from '../../assets/logos/company2.png';
import Company3 from '../../assets/logos/company3.png';
import { IProjectModel } from '../../models/ui-models/IProjectModel';

const data: IProjectModel[] = [
	{
		id: "f4abb297-f5bb-4495-8ecf-f3732e4a4026",
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
		id: "dd9712fd-d4d0-4a56-9a83-4807139995c0",
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
		id: "86b610ee-e866-4749-9f10-4a5c59e96f2f",
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