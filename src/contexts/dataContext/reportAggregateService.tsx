import IProjectService from './projectService';
import IReportService from './reportService';
import IUserService from './userService';
import { IReportModel, IReportRiskModel } from '../../models/ui-models/IReportModel';
import { IReportDto} from '../../models/dtos/IReportDto';
import  { dateParse}  from '../../helpers/dateHelper';
import  RAG_STATUS, {parseStatus} from '../../models/ui-models/enums/enumStatus';
import { IRiskDto } from '../../models/dtos/IRiskDto';

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
                ragStatus: parseStatus(risk.ragStatus)
            });
        });

        var model: IReportModel = {
                id: dto.id,
                created: dateParse(dto.created),
                plannedTasks: dto.plannedTasks,
                completedTasks: dto.completedTasks,
                weeknumber: dto.weeknumber,
                submissionDate: dateParse(dto.submissionDate),
                projectId: dto.projectId,
                userId: dto.userId,
                risks: risks,
                projectName: this.getValue(project, 'name'),
                client: '',
                userName: `${this.getValue(user, 'name')} ${this.getValue(user, 'surname')}`,
                description: 'no description',
                ragStatus: RAG_STATUS.UNKNOWN
            };

        return model;
    }

    async mapModelToDto(model: IReportModel): Promise<IReportDto> {

        var risks : IRiskDto[] = [];

        var dto : IReportDto = {
            id: model.id,
            created: model.created,
            plannedTasks: model.plannedTasks,
            completedTasks: model.completedTasks,
            weeknumber: model.weeknumber,
            submissionDate: model.submissionDate,
            projectId: model.projectId,
            userId: model.userId,
            risks: risks
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