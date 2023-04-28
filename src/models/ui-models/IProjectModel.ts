import PROJECT_STATUS, { IStatus } from './enums/enumStatus';

export interface IProjectModel {
	id: number;
	name: string;
	startedDate: string;
	endDate: string;
	teamMembers: string[];
	status: IStatus['key'];
	description: string;
	image: string;
}