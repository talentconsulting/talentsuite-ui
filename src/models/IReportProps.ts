import { IStatus } from './enums/enumStatus';

export interface IReportProps {
	id: number;
	projectId: number;
	reportedDate: string;
	enteredBy: string;
	description: string;
	status: IStatus['key'];
}