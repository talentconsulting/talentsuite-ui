import { IReportModel} from '../models/ui-models/IReportModel';
import { IReportDto} from '../models/dtos/IReportDto';
import { IPaginatedResultDto} from '../models/dtos/IPaginatedResultDto';
import  PROJECT_STATUS from '../models/ui-models/enums/enumStatus';
import  { dateParse}  from '../helpers/dateHelper';

import { getDummyReportDataByProjectId, getDummyReportDataByReportId } from '../common/data/dummyReportsData';

export interface IReportService {
	getReportsDataByProjectId(id?: string): Promise<IReportModel[]>;
    getReportDataByReportId(id?: string): IReportModel;
}

class ReportService implements IReportService {
    apiEndpoint: string = ''; 
    useDummyData: boolean = true;

    constructor() {
        this.apiEndpoint = "https://localhost:7055/"; // Return from configuration  
    }

    getReportsDataByProjectId(id?: string): Promise<IReportModel[]> {

        if(this.useDummyData){
            return Promise.resolve( getDummyReportDataByProjectId(id));
        }
        var path = `${this.apiEndpoint}api/reports`;
    
        return fetch(path)
            // the JSON body is taken from the response
            .then(response => response.json())
            .then(json => {
                var paginatedResult = json as IPaginatedResultDto<IReportDto>;
                return this.map(paginatedResult.items);
            })
    
    }

    getReportDataByReportId(id?: string): IReportModel {
        return getDummyReportDataByReportId(id);
    }

    map(dtos: IReportDto[]) : IReportModel[]{
        var models: IReportModel[] = [];

        dtos.forEach(dto => {

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
                projectName: '',
                client: '',
                userName: dto.userId,
                
                description: 'no description',
                ragStatus: PROJECT_STATUS["APPROVED"]
            };

            console.log(model);
            models.push(model);
        });

        return models;
    }


}

export default ReportService;