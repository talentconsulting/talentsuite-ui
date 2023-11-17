import { IReportDto } from './IReportDto';
import { IClientProjectDto } from './IClientProjectDto';
import { IContactDto } from './IContactDto';
import { ISowDto } from './ISowDto';

export interface IProjectDto {
	id: string;
    contactNumber: string;
    name: string;
    reference: string;
    startDate: Date;
    endDate: Date;
	clientProjects: IClientProjectDto[];
	contacts: IContactDto[];
	reports: IReportDto[];
	sows: ISowDto[];
}