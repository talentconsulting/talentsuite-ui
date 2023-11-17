import moment, {Moment} from 'moment';
import REPORT_STATUS, { IStatus } from '../../models/ui-models/enums/enumStatus';
import { IReportDto } from '../../models/dtos/IReportDto';


const data: IReportDto[] = [
    {
        id: "1300db01-ac4e-4b0b-a3f1-c5b926adf12d",
        created: moment().add(-50, 'days').toDate(),
        plannedTasks: "User Research, UI Refresh Design",
        completedTasks: "Design DB Changes",
        weeknumber: 6,
        submissionDate: moment().add(-15, 'days').toDate(),
        projectId: "f4abb297-f5bb-4495-8ecf-f3732e4a4026",
        userId: "b8b675f9-f10b-4112-9027-84af190dbea4",
        risks: [
            {
                id: "1300db01-ac4e-4b0b-a3f1-c5b926adf12d",
                reportId: "4e3f5d14-20ad-4873-aebe-805b6a24fde2",
                riskDetails: "Refreshed web app may not be ready for go live",
                riskMitigation: "Update existing web app to handle new user journey",
                ragStatus: 'REPORT_STATUS.BEHIND'
            }
        ]
    },
    {
        id: "5b01ab64-5de5-4b3c-8e5a-413ce7661a94",
        created: moment().add(-20, 'days').toDate(),
        plannedTasks: "Build Api, Update UI",
        completedTasks: "Design DB",
        weeknumber: 3,
        submissionDate: moment().add(-10, 'days').toDate(),
        projectId: "dd9712fd-d4d0-4a56-9a83-4807139995c0",
        userId: "161ff923-0a91-450e-8051-dbf67302e456",
        risks: [
            {
                id: "0c1a867f-606a-40ca-bdd8-7364dba926db",
                reportId: "5b01ab64-5de5-4b3c-8e5a-413ce7661a94",
                riskDetails: "No devops resource allocated",
                riskMitigation: "allocate devops resource by end of sprint 5",
                ragStatus: 'REPORT_STATUS.AT_RISK'
            }
        ]
    }

];


export default data;

export function getDummyReportDataByProjectId(id?: string): IReportDto[] {
	if(id == "All"){
		return data;
	}
	// @ts-ignore
	return data.filter(x=>x.projectId.toString() == id);
}

export function getDummyReportDataByReportId(id?: string): IReportDto {
	// @ts-ignore
    return data.filter(x=>x.id.toString() == id)[0];
}

function formatDate(date:Moment ):string{
    return `${date.format('YYYY-MM-DD')}T${date.format('hh:mm:ss')}.0000000`;
}