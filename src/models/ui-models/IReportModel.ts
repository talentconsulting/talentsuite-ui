import REPORT_STATUS, { IStatus } from './enums/enumStatus';

export interface IReportRiskModel {
    id: string;
    reportId: string;
    riskDetails: string;
    riskMitigation: string;
    ragStatus: IStatus["key"];
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
    risks: IReportRiskModel[];
    userName: string;
    description: string;
    ragStatus: IStatus["key"];
    projectName: string;
    client: string;
}

export interface IReportAddModel {
    plannedTasks: string;
    completedTasks: string;
    projectId: string;
    userId: string;
    clientId: string;
    description: string;
    ragStatus: IStatus["key"];
    risks: IReportRiskModel[];
}