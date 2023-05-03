import ProjectService from './projectService';
import IProjectService from './projectService';
import ReportService from './reportService';
import IReportService from './reportService';
import ReportAggregateService from './reportAggregateService';
import IReportAggregateService from './reportAggregateService';

export interface IDataServiceProvider{
	dataService:IDataService;
}

export interface IDataService {
	projectService:IProjectService;
	reportService:IReportService;
	reportAggregateService:IReportAggregateService;
}

export class DataService implements IDataService{
	projectService: IProjectService;
	reportService:IReportService;
	reportAggregateService:IReportAggregateService;

	constructor(){
		this.projectService = new ProjectService();
		this.reportService = new ReportService();
		this.reportAggregateService = new ReportAggregateService(this.reportService, this.projectService);
	}
}