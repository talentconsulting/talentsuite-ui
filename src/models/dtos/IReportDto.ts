import { IRiskDto } from './IRiskDto';

export interface IReportDto {
	id: string;
	created: string;
	plannedTasks: string;
	completedTasks: string;
	weeknumber: number;
	submissionDate: string;
	projectId: string;
	userId: string;
	risks: IRiskDto[];
}