import IProjectService from './projectService';
import IReportService from './reportService';
import { IReportModel } from '../../models/ui-models/IReportModel';
import { IReportDto} from '../../models/dtos/IReportDto';
import  { dateParse}  from '../../helpers/dateHelper';
import  PROJECT_STATUS from '../../models/ui-models/enums/enumStatus';

export interface IReportAggregateService {
    getById(id?: string): Promise<IReportModel>;
	getByProjectId(id?: string): Promise<IReportModel[]>;
}

class ReportAggregateService implements IReportAggregateService{

    projectService: IProjectService;
	reportService:IReportService;

    constructor(reportService:IReportService, projectService:IProjectService){
        this.reportService = reportService;
        this.projectService = projectService;
    }

    async getById(id?: string): Promise<IReportModel> {
        return await this.mapDtoToModel(this.reportService.getById(id));
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
        var projectName = '';
        if(project != undefined){
            projectName = project.name;
        }

        var model: IReportModel = {
                id: dto.id,
                created: dateParse(dto.created),
                plannedTasks: dto.plannedTasks,
                completedTasks: dto.completedTasks,
                weeknumber: dto.weeknumber,
                submissionDate: dateParse(dto.submissionDate),
                projectId: dto.projectId,
                userId: dto.userId,
                risks: [],
                projectName: projectName,
                client: '',
                userName: dto.userId,
                description: 'no description',
                ragStatus: PROJECT_STATUS["APPROVED"]
            };

        return model;
    }
}

export default ReportAggregateService;