import { IRiskProps } from './IRiskProps';

export interface IReportProps {
	id: string;
	created: string;
	plannedTasks: string;
	completedTasks: string;
	weeknumber: number;
	submissionDate: string;
	projectId: string;
	userId: string;
	risks: IRiskProps[];
}