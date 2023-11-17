import IProjectService from './projectService';
import IReportService from './reportService';
import IUserService from './userService';
import { IReportModel, IReportRiskModel } from '../../models/ui-models/IReportModel';
import { IReportDto} from '../../models/dtos/IReportDto';
import  RAG_STATUS, {getStatusByValue} from '../../models/ui-models/enums/enumStatus';
import { IRiskDto } from '../../models/dtos/IRiskDto';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

export interface IReportAggregateService {
    getById(id?: string): Promise<IReportModel>;
	getByProjectId(id?: string): Promise<IReportModel[]>;
}

class ReportAggregateService implements IReportAggregateService{

    projectService: IProjectService;
	reportService:IReportService;
    userService:IUserService;

    constructor(reportService:IReportService, projectService:IProjectService, userService:IUserService){
        this.reportService = reportService;
        this.projectService = projectService;
        this.userService = userService;
    }

    async getById(id?: string): Promise<IReportModel> {
        var dto = await this.reportService.getById(id);
        var model = await this.mapDtoToModel(dto)
        return model;
    }

    getByProjectId(id?: string): Promise<IReportModel[]> {

        return this.reportService.getByProjectId(id).then(data =>{
            return this.map(data);
        })

    }

    async map(dtos: IReportDto[]) : Promise<IReportModel[]>{
        var models: IReportModel[] = [];

        dtos.forEach(async dto => {
            var model = await this.mapDtoToModel(dto);
            models.push(model);
        });

        return models;
    }

    async mapDtoToModel(dto: IReportDto) : Promise<IReportModel>{

        var project = await this.projectService.getProjectById(dto.projectId);
        var user = await this.userService.getUserById(dto.userId);
        var risks : IReportRiskModel[] = [];

        dto.risks.forEach(risk=>{
            risks.push({
                key: risk.id,
                id: risk.id,
                reportId: dto.id,
                riskDetails: risk.riskDetails,
                riskMitigation: risk.riskMitigation,
                ragStatus: getStatusByValue(risk.ragStatus)
            });
        });

        var reportStatus = risks.sort((a, b) => a.ragStatus.severity > b.ragStatus.severity ? -1 : 1 )[0].ragStatus;
        if(reportStatus == undefined)
        {
            reportStatus = RAG_STATUS.UNKNOWN;
        }

        var model: IReportModel = {
                id: dto.id,
                created: dto.created,
                plannedTasks: dto.plannedTasks,
                completedTasks: dto.completedTasks,
                weeknumber: dto.weeknumber,
                submissionDate: dto.submissionDate,
                projectId: dto.projectId,
                userId: dto.userId,
                risks: risks,
                //todo do we need to do this or will it be included on the api return?
                projectName: this.getValue(project, 'name'),
                client: '',
                userName: `${this.getValue(user, 'name')} ${this.getValue(user, 'surname')}`,
                description: 'no description',
                ragStatus: reportStatus
            };

        return model;
    }

    async mapNewModelToDto(model: IReportModel): Promise<IReportDto> {
        var newReportId = uuidv4();

        var risks : IRiskDto[] = [];

        model.risks.forEach(risk=>{
            risks.push({
                id : uuidv4(),
                ragStatus : risk.ragStatus.value,
                reportId : newReportId,
                riskDetails : risk.riskDetails,
                riskMitigation : risk.riskMitigation
            });
        });

        var dto : IReportDto = {
            id: newReportId,
            created: moment().toDate(),
            plannedTasks: model.plannedTasks,
            completedTasks: model.completedTasks,
            weeknumber: model.weeknumber,
            submissionDate: new Date(model.submissionDate),
            projectId: "86b610ee-e866-4749-9f10-4a5c59e96f2f", //todo remove hardcoded project id when projects service is wired up
            userId: model.userId,
            risks: risks
        }
        return dto;

    }

    async mapModelToDto(model: IReportModel): Promise<IReportDto> {

        var risks : IRiskDto[] = [];

        model.risks.forEach(risk=>{
            risks.push({
                id : risk.id,
                ragStatus : risk.ragStatus.value,
                reportId : risk.reportId,
                riskDetails : risk.riskDetails,
                riskMitigation : risk.riskMitigation
            });
        });

        var dto : IReportDto = {
            id: model.id,
            created: new Date(model.created),
            plannedTasks: model.plannedTasks,
            completedTasks: model.completedTasks,
            weeknumber: model.weeknumber,
            submissionDate: new Date(model.submissionDate),
            projectId: model.projectId,
            userId: model.userId,
            risks: risks
        }
        return dto;
    }

    async mapRiskModelToDto(riskModel : IReportRiskModel) : Promise<IRiskDto> {
        var dto : IRiskDto = {
            id : riskModel.id,
            ragStatus : riskModel.ragStatus.value,
            reportId : riskModel.reportId,
            riskDetails : riskModel.riskDetails,
            riskMitigation : riskModel.riskMitigation
        }
        return dto;
    }

    getValue(obj:any, key:string):string {
        var value = '';
        if(obj != undefined){
            value = obj[key];
        }

        return value;
    }
}

export default ReportAggregateService;