import { IReportModel, IReportAddModel } from '../../models/ui-models/IReportModel';
import { IReportDto} from '../../models/dtos/IReportDto';
import { IPaginatedResultDto} from '../../models/dtos/IPaginatedResultDto';
import { GetAppSettings } from '../../appsettings';
import { getDummyReportDataByProjectId, getDummyReportDataByReportId } from '../../common/data/dummyReportsData';
import FeatureFlagsContext from './../../contexts/featureFlagsContext';
import { useContext } from 'react';

export interface IReportService {
    getById(id?: string): IReportDto;
	getByProjectId(id?: string): Promise<IReportDto[]>;
    addNewReport(report?: IReportAddModel): void;
    updateReport(report?: IReportModel): boolean;
}

class ReportService implements IReportService {

    apiEndpoint: string = ''; 
    useDummyData: boolean = false;

    constructor() {
        this.apiEndpoint = GetAppSettings().ReportsApiUrl; 
        const { featureFlags } = useContext(FeatureFlagsContext);
        this.useDummyData = featureFlags.isFeatureActive("Reports","UseDummyData");
    }

    getById(id?: string): IReportDto {
        return getDummyReportDataByReportId(id);
    }

    getByProjectId(id?: string): Promise<IReportDto[]> {

        if(this.useDummyData){
            return Promise.resolve( getDummyReportDataByProjectId(id));
        }
        var path = `${this.apiEndpoint}api/reports`;

        return fetch(path)
            // the JSON body is taken from the response
            .then(response => response.json())
            .then(json => {
                var paginatedResult = json as IPaginatedResultDto<IReportDto>;
                return paginatedResult.items;
            });

    }

    addNewReport(report?: IReportAddModel): void {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(report)
        };
        fetch(`${this.apiEndpoint}api/reports`, requestOptions)
            .then(response => response.json());
        //.then(data => this.setState({ postId: data.id }));
    }

    updateReport(report?: IReportModel): boolean {
        throw new Error("Not implemented");
    }


}

export default ReportService;