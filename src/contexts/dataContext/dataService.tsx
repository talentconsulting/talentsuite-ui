import ProjectService from './projectService';
import IProjectService from './projectService';
import ReportService from './reportService';
import IReportService from './reportService';

export interface IDataService {
	projectService:IProjectService;
	reportService:IReportService;
}

export class DataService implements IDataService{
	projectService: IProjectService;
	reportService:IReportService;

	constructor(){
		this.projectService = new ProjectService();
		this.reportService = new ReportService();
	}
}