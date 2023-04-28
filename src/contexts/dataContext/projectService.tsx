import { IProjectModel} from '../../models/ui-models/IProjectModel';
import { getDummyProjectDataWithId, getDummyProjectsByClientId } from '../../common/data/dummyProjectsData';
import FeatureFlagsContext from './../../contexts/featureFlagsContext';
import { useContext } from 'react';
import PROJECT_STATUS, { IStatus } from '../../models/ui-models/enums/enumStatus';

export interface IProjectService {
	getProjectsByClientId(id?: string): Promise<IProjectModel[]>;
	getProjectById(id?: string): Promise<IProjectModel>;
}

class ProjectService implements IProjectService {
    apiEndpoint: string = '';
    useDummyData: boolean = false;

    constructor() {
        //this.apiEndpoint = GetAppSettings().ProjectsApiUrl;            Just using Dummy Data until endpoints available
        const { featureFlags } = useContext(FeatureFlagsContext);
        this.useDummyData = featureFlags.isFeatureActive("Projects","UseDummyData");
    }

    getProjectsByClientId(id?: string): Promise<IProjectModel[]> {

        if(this.useDummyData){
            return Promise.resolve( getDummyProjectsByClientId(id));
        }
        
        //  Real implementation not available yet
        return Promise.resolve([]);
    }

    getProjectById(id?: string): Promise<IProjectModel> {

        if(this.useDummyData){
            return Promise.resolve( getDummyProjectDataWithId(id));
        }
        
        //  Real implementation not available yet
        return Promise.resolve({id: -1,
            name: '',
            startedDate: '',
            endDate: '',
            teamMembers: [],
            status: PROJECT_STATUS.APPROVED,
            description: '',
            image: ''});
    }

}

export default ProjectService;