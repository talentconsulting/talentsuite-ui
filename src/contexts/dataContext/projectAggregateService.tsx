import { IProjectDto } from "../../models/dtos/IProjectDto";
import { IProjectModel } from "../../models/ui-models/IProjectModel";
import RAG_STATUS from "../../models/ui-models/enums/enumStatus";
import { IProjectService } from "./projectService";


export interface IProjectAggregateService {
	getProjectsByClientId(id?: string): Promise<IProjectModel[]>;
	getProjectById(id?: string): Promise<IProjectModel>;
}

class ProjectAggregateService implements IProjectAggregateService
{
    projectService: IProjectService;

    constructor(projectService:IProjectService)
    {
        this.projectService = projectService;
    }
    getProjectsByClientId(id?: string): Promise<IProjectModel[]> {
        throw new Error("Method not implemented."); //todo the api doesn't support this, need to decide how we are going to scope projects - logged in user?
    }
    async getProjectById(id?: string): Promise<IProjectModel> {
        var dto = await this.projectService.getProjectById(id);
        var model = await this.mapDtoToModel(dto);
        return model;
    }

    async mapDtoToModel(dto: IProjectDto) : Promise<IProjectModel>{
        //todo this project model still is in line with the template, so we will want to update this
        var model : IProjectModel = {
            id: dto.id,
            name: dto.name,
            startedDate: dto.startDate.toDateString(),
            endDate: dto.endDate.toDateString(),
            teamMembers: [],
            status: RAG_STATUS.APPROVED, //todo remove or populate
            description: "todo", //todo remove or populate
            image: "dodecagon.png" //todo remove or populate
        }
        return model;
    }
}

export default ProjectAggregateService;