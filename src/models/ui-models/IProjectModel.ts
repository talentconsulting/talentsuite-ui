import PROJECT_STATUS, { IStatus } from './enums/enumStatus';

export interface IProjectModel {
	id: string;
	name: string;
	startedDate: string;
	endDate: string;
	teamMembers: string[];
	status: IStatus['key'];
	description: string;
	image: string;
}