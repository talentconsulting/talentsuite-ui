import ProjectService from './projectService';
import IProjectService from './projectService';
import ReportService from './reportService';
import IReportService from './reportService';
import UserService from './userService';
import IUserService from './userService';
import ReportAggregateService from './reportAggregateService';
import IReportAggregateService from './reportAggregateService';

export interface IDataServiceProvider{
	dataService:IDataService;
}

export interface IDataService {
	projectService:IProjectService;
	reportService:IReportService;
	userService:IUserService;
	reportAggregateService:IReportAggregateService;
}

export class DataService implements IDataService{
	projectService: IProjectService;
	reportService:IReportService;
	userService:IUserService;
	reportAggregateService:IReportAggregateService;

	constructor(){
		this.projectService = new ProjectService();
		this.reportService = new ReportService();
		this.userService = new UserService();
		this.reportAggregateService = new ReportAggregateService(this.reportService, this.projectService, this.userService);
	}
}