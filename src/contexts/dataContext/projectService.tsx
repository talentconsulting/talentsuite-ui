import { IProjectModel} from '../../models/ui-models/IProjectModel';
import data from '../../common/data/dummyProjectsData';
import FeatureFlagsContext from './../../contexts/featureFlagsContext';
import { useContext } from 'react';
import RAG_STATUS, { IStatus } from '../../models/ui-models/enums/enumStatus';
import { GetAppSettings } from '../../appsettings';
import { IProjectDto } from '../../models/dtos/IProjectDto';

export interface IProjectService {
	getProjectsByClientId(id?: string): Promise<IProjectDto[]>;
	getProjectById(id?: string): Promise<IProjectDto>;
}

class ProjectService implements IProjectService {
    apiEndpoint: string = '';
    useDummyData: boolean = false;

    constructor() {
        this.apiEndpoint = GetAppSettings().ProjectsApiUrl;
        const { featureFlags } = useContext(FeatureFlagsContext);
        this.useDummyData = featureFlags.isFeatureActive("Projects","UseDummyData");
    }

    getProjectsByClientId(id?: string): Promise<IProjectDto[]> {

        if(this.useDummyData){
            return Promise.resolve( data);
        }
        
        //  Real implementation not available yet
        var path = `${this.apiEndpoint}api/projects/${id}`;

        return fetch(path)
            // the JSON body is taken from the response
            .then(response => response.json())
            .then(json => {
                return json as IProjectDto[];
            });
    }

    getProjectById(id?: string): Promise<IProjectDto> {
        if(this.useDummyData){
            return Promise.resolve( data[0]);
        }
        
        //todo real implementation
        return Promise.resolve( data[0]);
    }

}

export default ProjectService;