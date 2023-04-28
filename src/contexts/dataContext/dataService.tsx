import ProjectService from './projectService';
import IProjectService from './projectService';

export interface IDataService {
	projectService:IProjectService;
}

export class DataService implements IDataService{
	projectService: IProjectService;

	constructor(){
		this.projectService = new ProjectService();
	}
}