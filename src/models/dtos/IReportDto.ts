import { IRiskDto } from './IRiskDto';

export interface IReportDto {
	id: string;
	created: Date;
	plannedTasks: string;
	completedTasks: string;
	weeknumber: number;
	submissionDate: Date;
	projectId: string;
	userId: string;
	risks: IRiskDto[];
}