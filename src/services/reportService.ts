import { IReportProps } from '../models/IReportProps';
import { getDummyReportDataByProjectId, getDummyReportDataByReportId } from '../common/data/dummyReportsData';

export interface IReportService {
	getReportsDataByProjectId(id?: string): IReportProps[]
    getReportDataByReportId(id?: string): IReportProps
}

class ReportService implements IReportService {
    apiEndpoint: string = ''; 
    useDummyData: boolean = true;

    constructor() {
        this.apiEndpoint = "https://localhost:7055/"; // Return from configuration  
    }

    getReportsDataByProjectId(id?: string): IReportProps[] {

       // if(this.useDummyData){
            return getDummyReportDataByProjectId(id);
       // }
    }

    getReportDataByReportId(id?: string): IReportProps {
        return getDummyReportDataByReportId(id);
    }
}

export default ReportService;