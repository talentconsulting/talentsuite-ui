import moment from 'moment';
import { dateNow } from '../../helpers/dateHelper';
import RAG_STATUS, { IStatus } from './enums/enumStatus';

export interface IReportRiskModel {
    key: string;
    id: string;
    reportId: string;
    riskDetails: string;
    riskMitigation: string;
    ragStatus: IStatus["key"];
}

export class ReportRiskModel implements IReportRiskModel {
    key: string;
    id: string;
    reportId: string;
    riskDetails: string;
    riskMitigation: string;
    ragStatus: IStatus["key"];

    constructor(cloneModel:IReportRiskModel | undefined = undefined){
        this.key = (cloneModel == undefined) ? '' : cloneModel.key;
        this.id = (cloneModel == undefined) ? '' : cloneModel.id;
        this.reportId = (cloneModel == undefined) ? '' : cloneModel.reportId;
        this.riskDetails = (cloneModel == undefined) ? '' : cloneModel.riskDetails;
        this.riskMitigation = (cloneModel == undefined) ? '' : cloneModel.riskMitigation;
        this.ragStatus = (cloneModel == undefined) ? RAG_STATUS.UNKNOWN : cloneModel.ragStatus;
    }
}

export interface IReportModel {
    id: string;
    created: Date;
    plannedTasks: string;
    completedTasks: string;
    weeknumber: number;
    submissionDate: Date;
    projectId: string;
    userId: string;
    risks: IReportRiskModel[];
    userName: string;
    description: string;
    ragStatus: IStatus["key"];
    projectName: string;
    client: string;
}

export class ReportModel implements IReportModel {
    id: string;
    created: Date;
    plannedTasks: string;
    completedTasks: string;
    weeknumber: number;
    submissionDate: Date;
    projectId: string;
    userId: string;
    risks: IReportRiskModel[];
    userName: string;
    description: string;
    ragStatus: IStatus["key"];
    projectName: string;
    client: string;

    constructor(cloneModel:IReportModel | undefined = undefined){

        var risks:IReportRiskModel[] = [];
        if(cloneModel != undefined){
            cloneModel.risks.forEach(risk=>{
                risks.push(new ReportRiskModel(risk));
            });
        }

        this.id = (cloneModel == undefined) ? '' : cloneModel.id;
        this.created = (cloneModel == undefined) ? moment().toDate() : cloneModel.created;
        this.plannedTasks = (cloneModel == undefined) ? '' : cloneModel.plannedTasks;
        this.completedTasks = (cloneModel == undefined) ? '' : cloneModel.completedTasks;
        this.weeknumber = (cloneModel == undefined) ? 0 : cloneModel.weeknumber;
        this.submissionDate = (cloneModel == undefined) ? moment().toDate() : cloneModel.submissionDate;
        this.projectId = (cloneModel == undefined) ? '' : cloneModel.projectId;
        this.userId = (cloneModel == undefined) ? '' : cloneModel.userId;
        this.risks = risks;
        this.userName = (cloneModel == undefined) ? '' : cloneModel.userName;
        this.description = (cloneModel == undefined) ? '' : cloneModel.description;
        this.ragStatus = (cloneModel == undefined) ? RAG_STATUS.UNKNOWN : cloneModel.ragStatus;
        this.projectName = (cloneModel == undefined) ? '' : cloneModel.projectName;
        this.client = (cloneModel == undefined) ? '' : cloneModel.client;
    }
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

export class ReportAddModel implements IReportAddModel {
    plannedTasks: string;
    completedTasks: string;
    projectId: string;
    userId: string;
    clientId: string;
    description: string;
    ragStatus: IStatus["key"];
    risks: IReportRiskModel[];

    constructor(reportModel: IReportModel) {

        var risks: IReportRiskModel[] = [];
        reportModel.risks.forEach(risk => {
            risks.push(new ReportRiskModel(risk));
        });
        this.plannedTasks = reportModel.plannedTasks;
        this.completedTasks = reportModel.completedTasks;
        this.projectId = reportModel.projectId;
        this.userId = reportModel.userId;
        this.risks = risks;
        this.description = reportModel.description;
        this.ragStatus = reportModel.ragStatus;
        this.clientId = reportModel.client;
    }
}