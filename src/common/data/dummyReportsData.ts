import moment from 'moment';
import REPORT_STATUS, { IStatus } from '../../models/enums/enumStatus';
import { IReportProps } from '../../models/IReportProps';

const data: IReportProps[] = [
	{
		id: "5b01ab64-5de5-4b3c-8e5a-413ce7661a94",
        created: moment().format('YYYY') + moment().format('MM') + moment().add(-20, 'days').format('DD'),
		plannedTasks: "task1, task2",
		completedTasks: "task3",
		weeknumber: 3,
		submissionDate: moment().format('YYYY') + moment().format('MM') + moment().add(-10, 'days').format('DD'),
		projectId: "dd9712fd-d4d0-4a56-9a83-4807139995c0",
		userId: "161ff923-0a91-450e-8051-dbf67302e456",
		risks: [
            {
				id: "256317d8-9a01-4b12-a77d-9771f6680bed",
				reportId: "5b01ab64-5de5-4b3c-8e5a-413ce7661a94",
				riskDetails: "no devops resource allocated yet",
				riskMitigation: "allocate devops resource by end of next sprint",
				ragStatus: REPORT_STATUS.AT_RISK
            }
        ]
	},
    {
		id: "10c8b1ac-4500-46b3-96db-4a418b49f759",
        created: moment().format('YYYY') + moment().format('MM') + moment().add(-30, 'days').format('DD'),
        plannedTasks: "task4, task5",
        completedTasks: "task6",
        weeknumber: 7,
        submissionDate: moment().format('YYYY') + moment().format('MM') + moment().add(-15, 'days').format('DD'),
		projectId: "fee3a72d-a16d-4af9-a4a1-fdfc8de749ed",
		userId: "3bb19745-a3fb-4820-9c9b-ffe0849bbfbc",
        risks: [
            {
				id: "763ecba7-d4c5-4484-bf1c-57912da851cb",
				reportId: "10c8b1ac-4500-46b3-96db-4a418b49f759",
                riskDetails: "version 2 won't be ready for new academic year deadline",
                riskMitigation: "implement must have features into version 1",
				ragStatus: REPORT_STATUS.BEHIND
            }
        ]
    }
];

export default data;

export function getDummyReportDataByProjectId(id?: string): IReportProps[] {
	if(id == "All"){
		return data;
	}
	// @ts-ignore
	return data.filter(x=>x.projectId.toString() == id);
	//return data[Object.keys(data).filter((f) => data[f].projectId.toString() === id.toString())];
}

export function getDummyReportDataByReportId(id?: string): IReportProps {
	// @ts-ignore
	return data.filter(x=>x.id.toString() == id).indexOf(0);
	//return data[Object.keys(data).filter((f) => data[f].projectId.toString() === id.toString())];
}

//export function getReportDataById(id?: string): IReportProps {
//    // @ts-ignore
//    //return data.filter(x => x.id.toString() == id);
//    return data[Object.keys(data).filter((f) => data[f].id.toString() === id.toString())];
//}