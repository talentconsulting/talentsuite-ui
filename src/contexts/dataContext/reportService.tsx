import { IReportModel, IReportAddModel } from '../../models/ui-models/IReportModel';
import { IReportDto} from '../../models/dtos/IReportDto';
import { IPaginatedResultDto} from '../../models/dtos/IPaginatedResultDto';
import { GetAppSettings } from '../../appsettings';
import { getDummyReportDataByProjectId, getDummyReportDataByReportId } from '../../common/data/dummyReportsData';
import FeatureFlagsContext from './../../contexts/featureFlagsContext';
import { useContext } from 'react';

export interface IReportService {
    getById(id?: string): Promise<IReportDto>;
	getByProjectId(id?: string): Promise<IReportDto[]>;
    addNewReport(report?: IReportDto): void;
    updateReport(report?: IReportDto): void;
}

class ReportService implements IReportService {

    apiEndpoint: string = ''; 
    useDummyData: boolean = false;

    constructor() {
        this.apiEndpoint = GetAppSettings().ReportsApiUrl; 
        const { featureFlags } = useContext(FeatureFlagsContext);
        this.useDummyData = featureFlags.isFeatureActive("Reports","UseDummyData");
    }

    getById(id?: string): Promise<IReportDto> {

        if(this.useDummyData){
            return Promise.resolve( getDummyReportDataByReportId(id));
        }
        var path = `${this.apiEndpoint}api/reports/${id}`;

        return fetch(path)
            // the JSON body is taken from the response
            .then(response => response.json())
            .then(json => {
                return json as IReportDto;
            });
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

    addNewReport(report?: IReportDto): void {
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

    updateReport(report: IReportDto): void {
        console.log(JSON.stringify(report));
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(report)
        };
        fetch(`${this.apiEndpoint}api/reports/${report.id}`, requestOptions)
            .then(response => response.json());
    }


}

export default ReportService;