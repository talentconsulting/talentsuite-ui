import moment from 'moment';
import REPORT_STATUS, { IStatus } from './enumStatus';

const data: IReportProps[] = [
	{
		id: 1,
		projectId: 1,
		reportedDate:
			moment().format('YYYY') + moment().format('MM') + moment().add(-20, 'days').format('DD'),
		enteredBy: 'Luke',
		description: 'This week we acheived out sprint velocity, project look on target',
		status: REPORT_STATUS.APPROVED
	},
	{
		id: 2,
		projectId: 1,
		reportedDate:
			moment().format('YYYY') + moment().format('MM') + moment().add(-10, 'days').format('DD'),
		enteredBy: 'Han',
		description: 'We had a few bugs to resolve that have put us behind',
		status: REPORT_STATUS.AT_RISK
	},
	{
		id: 3,
		projectId: 2,
		reportedDate:
			moment().format('YYYY') + moment().format('MM') + moment().add(-19, 'days').format('DD'),
		enteredBy: 'Leia',
		description: 'This week we acheived out sprint velocity, project look on target',
		status: REPORT_STATUS.APPROVED
	},
	{
		id: 4,
		projectId: 2,
		reportedDate:
			moment().format('YYYY') + moment().format('MM') + moment().add(-19, 'days').format('DD'),
		enteredBy: 'Anakin',
		description: 'This week we acheived out sprint velocity, project look on target',
		status: REPORT_STATUS.AT_RISK
	},
	{
		id: 5,
		projectId: 3,
		reportedDate:
			moment().format('YYYY') + moment().format('MM') + moment().add(-19, 'days').format('DD'),
		enteredBy: 'Yoda',
		description: 'Did good this week, we did',
		status: REPORT_STATUS.APPROVED
	},
	{
		id: 6,
		projectId: 3,
		reportedDate:
			moment().format('YYYY') + moment().format('MM') + moment().add(-19, 'days').format('DD'),
		enteredBy: 'Ben',
		description: 'This was not the answer you were looking for',
		status: REPORT_STATUS.APPROVED
	},
	{
		id: 7,
		projectId: 3,
		reportedDate:
			moment().format('YYYY') + moment().format('MM') + moment().add(-19, 'days').format('DD'),
		enteredBy: 'Anakin',
		description: 'We underestimated this work',
		status: REPORT_STATUS.AT_RISK
	}
];

export default data;

export interface IReportProps {
	id: number;
	projectId: number;
	reportedDate: string;
	enteredBy: string;
	description: string;
	status: IStatus['key'];
}

export function getReportDataByProjectId(id?: string): IReportProps[] {
	// @ts-ignore
	return data.filter(x=>x.projectId.toString() == id);
	//return data[Object.keys(data).filter((f) => data[f].projectId.toString() === id.toString())];
}