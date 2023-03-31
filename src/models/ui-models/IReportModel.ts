import REPORT_STATUS, { IStatus } from './enums/enumStatus';

export interface IReportRisk {
    id: string;
    reportId: string;
    riskDetails: string;
    riskMitigation: string;
    ragStatus: string;
}

export interface IReportModel {
    id: string;
    created: string;
    plannedTasks: string;
    completedTasks: string;
    weeknumber: number;
    submissionDate: string;
    projectId: string;
    userId: string;

    risks: IReportRisk[];

    userName: string;
    description: string;
    status: IStatus["key"];
}