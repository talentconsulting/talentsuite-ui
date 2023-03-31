import { IReportModel} from '../models/ui-models/IReportModel';
import { getDummyReportDataByProjectId, getDummyReportDataByReportId } from '../common/data/dummyReportsData';

export interface IReportService {
	getReportsDataByProjectId(id?: string): IReportModel[];
    getReportDataByReportId(id?: string): IReportModel;
}

class ReportService implements IReportService {
    apiEndpoint: string = ''; 
    useDummyData: boolean = true;

    constructor() {
        this.apiEndpoint = "https://localhost:7055/"; // Return from configuration  
    }

    getReportsDataByProjectId(id?: string): IReportModel[] {

       // if(this.useDummyData){
            return getDummyReportDataByProjectId(id);
       // }
    }

    getReportDataByReportId(id?: string): IReportModel {
        return getDummyReportDataByReportId(id);
    }
}

export default ReportService;