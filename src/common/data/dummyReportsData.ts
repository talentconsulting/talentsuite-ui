import moment from 'moment';
import REPORT_STATUS, { IStatus } from '../../models/ui-models/enums/enumStatus';
import { IReportModel } from '../../models/ui-models/IReportModel';


const data: IReportModel[] = [
    {
        id: "1300db01-ac4e-4b0b-a3f1-c5b926adf12d",
        created: moment().format('YYYY') + moment().format('MM') + moment().add(-50, 'days').format('DD'),
        plannedTasks: "User Research, UI Refresh Design",
        completedTasks: "Design DB Changes",
        weeknumber: 6,
        submissionDate: moment().format('YYYY') + moment().format('MM') + moment().add(-15, 'days').format('DD'),
        projectId: "f4abb297-f5bb-4495-8ecf-f3732e4a4026",
        userId: "b8b675f9-f10b-4112-9027-84af190dbea4",
        risks: [
            {
                id: "1300db01-ac4e-4b0b-a3f1-c5b926adf12d",
                reportId: "4e3f5d14-20ad-4873-aebe-805b6a24fde2",
                riskDetails: "Refreshed web app may not be ready for go live",
                riskMitigation: "Update existing web app to handle new user journey",
                ragStatus: REPORT_STATUS.BEHIND
            }
        ],
        userName: "Daniel",
        description: "UI refresh running behind, may need to implement changes in existing web app.",
        ragStatus: REPORT_STATUS.BEHIND
    },
    {
        id: "5b01ab64-5de5-4b3c-8e5a-413ce7661a94",
        created: moment().format('YYYY') + moment().format('MM') + moment().add(-20, 'days').format('DD'),
        plannedTasks: "Build Api, Update UI",
        completedTasks: "Design DB",
        weeknumber: 3,
        submissionDate: moment().format('YYYY') + moment().format('MM') + moment().add(-10, 'days').format('DD'),
        projectId: "dd9712fd-d4d0-4a56-9a83-4807139995c0",
        userId: "161ff923-0a91-450e-8051-dbf67302e456",
        risks: [
            {
                id: "0c1a867f-606a-40ca-bdd8-7364dba926db",
                reportId: "5b01ab64-5de5-4b3c-8e5a-413ce7661a94",
                riskDetails: "No devops resource allocated",
                riskMitigation: "allocate devops resource by end of sprint 5",
                ragStatus: REPORT_STATUS.AT_RISK
            }
        ],
        userName: "Luke",
        description: "Project is generally going well, we've been muddling along using our own azure credits for now but will need devops to set up a proper test environment soon.",
        ragStatus: REPORT_STATUS.AT_RISK
    }

];


export default data;

export function getDummyReportDataByProjectId(id?: string): IReportModel[] {
	if(id == "All"){
		return data;
	}
	// @ts-ignore
	return data.filter(x=>x.projectId.toString() == id);
}

export function getDummyReportDataByReportId(id?: string): IReportModel {
	// @ts-ignore
    return data.filter(x=>x.id.toString() == id)[0];
}