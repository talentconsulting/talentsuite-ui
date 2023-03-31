import { IRiskProps } from './IRiskProps';

export interface IReportProps {
	id: string;
	created: Date;
	plannedTasks: string;
	completedTasks: string;
	weeknumber: number;
	submissionDate: Date;
	projectId: string;
	userId: string;
	risks: IRiskProps;

}