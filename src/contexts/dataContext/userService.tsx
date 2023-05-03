import { IUserModel} from '../../models/ui-models/IUserModel';
import { data } from '../../common/data/userDummyData';
import FeatureFlagsContext from './../../contexts/featureFlagsContext';
import { useContext } from 'react';

export interface IUserService {
	getUsers(id?: string): Promise<IUserModel[]>;
	getUserById(id?: string): Promise<IUserModel | undefined>;
}

class UserService implements IUserService {
    apiEndpoint: string = '';
    useDummyData: boolean = false;

    constructor() {
        //this.apiEndpoint = GetAppSettings().ProjectsApiUrl;            Just using Dummy Data until endpoints available
        const { featureFlags } = useContext(FeatureFlagsContext);
        this.useDummyData = featureFlags.isFeatureActive("Users","UseDummyData");
    }

    getUsers(): Promise<IUserModel[]> {

        if(this.useDummyData){
            return Promise.resolve( data );
        }
        
        //  Real implementation not available yet
        return Promise.resolve([]);
    }

    getUserById(id?: string): Promise<IUserModel | undefined> {
        if(this.useDummyData){
            return Promise.resolve( data.find(x=>x.id == id));
        }
        
        //  Real implementation not available yet
        return Promise.resolve({
            id: '-1',
            username: '',
            name: '',
            surname: '',
            position: '',
            email: '',
            src: '',
            srcSet: '',
            isOnline: false,
            color: 'danger',
            fullImage: '',
            password: '',
        });
    }

}

export default UserService;