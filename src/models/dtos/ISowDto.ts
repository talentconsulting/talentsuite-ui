import { IFileDto } from './IFileDto';

export interface ISowDto {
	id: string;
    file: string;
    isChangeRequest: boolean;
    startDate: Date;
    endDate: Date;
    projectId: string;
    files: IFileDto[];
}